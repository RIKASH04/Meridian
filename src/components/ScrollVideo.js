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

    // Forces browser to preload/load video segments
    video.load();

    const ctx = gsap.context(() => {
      // Set initial video time
      video.currentTime = 0;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        anticipatePin: 1,
        scrub: 1, // Smooth scrub setting for scroll inertia
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1

          // Scrub video progress smoothly with GSAP interpolation
          if (video.readyState >= 2) {
            const duration = Math.min(video.duration || 7, 7);
            const targetTime = progress * duration;
            gsap.to(video, {
              currentTime: targetTime,
              overwrite: 'auto',
              duration: 0.3,
              ease: 'power1.out',
            });
          }

          // Phase 1 text: visible at start (0 to 0.20), then fades out (0.20 to 0.30)
          const t1 = text1Ref.current;
          if (t1) {
            if (progress < 0.20) {
              t1.style.opacity = '1';
              t1.style.transform = 'translateY(0)';
            } else if (progress < 0.30) {
              const p = (progress - 0.20) / 0.10;
              t1.style.opacity = String(1 - p);
              t1.style.transform = `translateY(${-40 * p}px)`;
            } else {
              t1.style.opacity = '0';
            }
          }

          // Phase 2 text: fades in (0.28 to 0.38), visible (0.38 to 0.58), then fades out (0.58 to 0.68)
          const t2 = text2Ref.current;
          if (t2) {
            if (progress < 0.28) {
              t2.style.opacity = '0';
            } else if (progress < 0.38) {
              const p = (progress - 0.28) / 0.10;
              t2.style.opacity = String(p);
              t2.style.transform = `translateY(${40 * (1 - p)}px)`;
            } else if (progress < 0.58) {
              t2.style.opacity = '1';
              t2.style.transform = 'translateY(0)';
            } else if (progress < 0.68) {
              const p = (progress - 0.58) / 0.10;
              t2.style.opacity = String(1 - p);
              t2.style.transform = `translateY(${-40 * p}px)`;
            } else {
              t2.style.opacity = '0';
            }
          }

          // Phase 3 text: fades in (0.65 to 0.75), stays visible to the end
          const t3 = text3Ref.current;
          if (t3) {
            if (progress < 0.65) {
              t3.style.opacity = '0';
            } else if (progress < 0.75) {
              const p = (progress - 0.65) / 0.10;
              t3.style.opacity = String(p);
              t3.style.transform = `translateY(${40 * (1 - p)}px)`;
            } else {
              t3.style.opacity = '1';
              t3.style.transform = 'translateY(0)';
            }
          }
        },
      });
    }, section);

    return () => {
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
          <span className={styles.label}>AI Integration</span>
          <h2 className={styles.title}>Neural Networks & Data Fibers</h2>
          <p className={styles.desc}>
            Intelligent automation weaving nodes into pulsing, shimmering data flows.
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
