'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollVideo.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.load();

    let targetTime = 0;
    let isSeeking = false;
    let rafId = null;

    const onSeeking = () => { isSeeking = true; };
    const onSeeked = () => { isSeeking = false; };

    video.addEventListener('seeking', onSeeking);
    video.addEventListener('seeked', onSeeked);

    // High performance render loop: only updates currentTime when not seeking to prevent decode lockup
    const updatePlayhead = () => {
      if (video && isFinite(video.duration) && video.readyState >= 2) {
        if (!isSeeking && Math.abs(video.currentTime - targetTime) > 0.04) {
          video.currentTime = targetTime;
        }
      }
      rafId = requestAnimationFrame(updatePlayhead);
    };

    rafId = requestAnimationFrame(updatePlayhead);

    const ctx = gsap.context(() => {
      video.currentTime = 0;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        anticipatePin: 1,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1
          const duration = Math.min(video.duration || 7, 7);
          targetTime = progress * duration;

          // Phase 1 text: 0 to 0.20 visible, 0.20 to 0.30 fade out
          const t1 = text1Ref.current;
          if (t1) {
            if (progress < 0.20) {
              t1.style.opacity = '1';
              t1.style.transform = 'translate3d(0, 0, 0)';
            } else if (progress < 0.30) {
              const p = (progress - 0.20) / 0.10;
              t1.style.opacity = String(1 - p);
              t1.style.transform = `translate3d(0, ${-40 * p}px, 0)`;
            } else {
              t1.style.opacity = '0';
            }
          }

          // Phase 2 text: 0.28 to 0.38 fade in, 0.38 to 0.58 visible, 0.58 to 0.68 fade out
          const t2 = text2Ref.current;
          if (t2) {
            if (progress < 0.28) {
              t2.style.opacity = '0';
            } else if (progress < 0.38) {
              const p = (progress - 0.28) / 0.10;
              t2.style.opacity = String(p);
              t2.style.transform = `translate3d(0, ${40 * (1 - p)}px, 0)`;
            } else if (progress < 0.58) {
              t2.style.opacity = '1';
              t2.style.transform = 'translate3d(0, 0, 0)';
            } else if (progress < 0.68) {
              const p = (progress - 0.58) / 0.10;
              t2.style.opacity = String(1 - p);
              t2.style.transform = `translate3d(0, ${-40 * p}px, 0)`;
            } else {
              t2.style.opacity = '0';
            }
          }

          // Phase 3 text: 0.65 to 0.75 fade in, stays visible
          const t3 = text3Ref.current;
          if (t3) {
            if (progress < 0.65) {
              t3.style.opacity = '0';
            } else if (progress < 0.75) {
              const p = (progress - 0.65) / 0.10;
              t3.style.opacity = String(p);
              t3.style.transform = `translate3d(0, ${40 * (1 - p)}px, 0)`;
            } else {
              t3.style.opacity = '1';
              t3.style.transform = 'translate3d(0, 0, 0)';
            }
          }
        },
      });
    }, section);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      video.removeEventListener('seeking', onSeeking);
      video.removeEventListener('seeked', onSeeked);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="scroll-video">
      <video
        ref={videoRef}
        src="/images/create_a_d_video_of_showcasin.mp4"
        playsInline
        muted
        preload="auto"
        disableRemotePlayback
        className={styles.video}
      />

      {/* Darkening overlay */}
      <div className={styles.overlay} />

      {/* Text phases */}
      <div className={styles.contentOverlay}>
        <div ref={text1Ref} className={styles.textBlock}>
          <span className={styles.label}>Web & Systems</span>
          <h2 className={styles.title}>Frosted UI & Glassmorphic Grids</h2>
          <p className={styles.desc}>
            Mapping out layout grids and UI containers with laser-focused accuracy.
          </p>
        </div>

        <div ref={text2Ref} className={styles.textBlock} style={{ opacity: 0 }}>
          <span className={styles.label}>App Development</span>
          <h2 className={styles.title}>Custom Applications & Platforms</h2>
          <p className={styles.desc}>
            Designing and engineering seamless web and mobile solutions tailored to your needs.
          </p>
        </div>

        <div ref={text3Ref} className={styles.textBlock} style={{ opacity: 0 }}>
          <span className={styles.label}>The Meridian Standard</span>
          <h2 className={styles.title}>Digital Convergence</h2>
          <p className={styles.desc}>
            Where concepts culminate and vision aligns with execution.
          </p>
        </div>
      </div>

      {/* Edge fades */}
      <div className={styles.topFade} />
    </section>
  );
}
