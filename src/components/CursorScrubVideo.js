'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * CursorScrubVideo — A video component whose playhead is driven by cursor position.
 *
 * For buttery smooth scrubbing, the uploaded video MUST be encoded with every frame
 * as a keyframe. Recommended ffmpeg command:
 *
 *   ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 18 -g 1 -keyint_min 1 \
 *     -x264-params "scenecut=0" -profile:v high -pix_fmt yuv420p \
 *     -movflags +faststart -an out.mp4
 *
 * Props:
 *   videoSrc        — string path to the video file. Required.
 *   axis            — "horizontal" | "vertical". Default "horizontal".
 *   reverse         — boolean. Default false.
 *   trackingArea    — "component" | "window". Default "component".
 *   smoothing       — number 0.02–1. Default 0.22.
 *   objectFit       — "cover" | "contain" | "fill". Default "contain".
 *   showPoster      — boolean. Default true.
 *   borderRadius    — number (px). Default 0.
 *   className       — optional additional class name.
 *   style           — optional additional inline styles.
 */
export default function CursorScrubVideo({
  videoSrc,
  axis = 'horizontal',
  reverse = false,
  trackingArea = 'component',
  smoothing = 0.22,
  objectFit = 'contain',
  showPoster = true,
  borderRadius = 0,
  className = '',
  style = {},
}) {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const seekingRef = useRef(false);
  const readyRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  // Clamp helper
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  // Handle pointer move
  const handlePointerMove = useCallback(
    (e) => {
      const video = videoRef.current;
      if (!video || !readyRef.current || !isFinite(video.duration)) return;

      let pos;

      if (trackingArea === 'window') {
        const nx = e.clientX / window.innerWidth;
        const ny = e.clientY / window.innerHeight;
        pos = axis === 'horizontal' ? nx : ny;
      } else {
        // component-relative
        const root = rootRef.current;
        if (!root) return;
        const rect = root.getBoundingClientRect();
        const ox = e.clientX - rect.left;
        const oy = e.clientY - rect.top;
        const nx = ox / rect.width;
        const ny = oy / rect.height;
        pos = axis === 'horizontal' ? nx : ny;
      }

      pos = clamp(pos, 0, 1);
      if (reverse) pos = 1 - pos;

      targetTimeRef.current = pos * video.duration;
    },
    [axis, reverse, trackingArea]
  );

  // RAF loop for smooth lerp
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      if (video && isFinite(video.duration) && readyRef.current) {
        const target = targetTimeRef.current;
        const current = currentTimeRef.current;
        const next = current + (target - current) * smoothing;
        currentTimeRef.current = next;

        if (!seekingRef.current && Math.abs(video.currentTime - next) > 0.008) {
          video.currentTime = next;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [smoothing]);

  // Setup video + event listeners
  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!video || !videoSrc) return;

    // Seeking flag tracking
    const onSeeking = () => {
      seekingRef.current = true;
    };
    const onSeeked = () => {
      seekingRef.current = false;
    };

    // Ready handler
    const onCanPlayThrough = () => {
      readyRef.current = true;
      setIsReady(true);
    };

    video.addEventListener('seeking', onSeeking);
    video.addEventListener('seeked', onSeeked);
    video.addEventListener('canplaythrough', onCanPlayThrough);

    // Load and force buffer
    video.load();
    video.play().then(() => video.pause()).catch(() => {});
    video.currentTime = 0;

    // Attach pointer listener
    const target = trackingArea === 'window' ? window : root;
    if (target) {
      target.addEventListener('pointermove', handlePointerMove);
    }

    return () => {
      video.removeEventListener('seeking', onSeeking);
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('canplaythrough', onCanPlayThrough);
      if (target) {
        target.removeEventListener('pointermove', handlePointerMove);
      }
    };
  }, [videoSrc, trackingArea, handlePointerMove]);

  if (!videoSrc) {
    return (
      <div
        ref={rootRef}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.2)',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '1rem',
          letterSpacing: '0.1em',
          borderRadius: `${borderRadius}px`,
          ...style,
        }}
      >
        Add a video file
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: `${borderRadius}px`,
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        disableRemotePlayback
        style={{
          width: '100%',
          height: '100%',
          objectFit,
          display: 'block',
          mixBlendMode: 'multiply',
        }}
      />
      {showPoster && !isReady && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
          }}
        />
      )}
    </div>
  );
}
