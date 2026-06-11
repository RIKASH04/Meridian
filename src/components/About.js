'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.topSection}>
          <span className={styles.label}>About Us</span>
          <h2 ref={headingRef} className={styles.heading}>
            Where vision meets <br />
            <span className={styles.headingAccent}>innovation.</span>
          </h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.contentLeft}>
            <p ref={paraRef} className={styles.description}>
              What started as a spark of creative energy quickly evolved into something
              extraordinary. Meridian was born from the belief that technology should feel
              alive — intuitive, beautiful, and purposeful. We don&apos;t just build digital
              products; we architect experiences that leave lasting impressions and drive
              measurable growth.
            </p>
            <p className={styles.descriptionSecondary}>
              From the first pixel to the final deployment, every decision we make is rooted
              in strategy, crafted with care, and executed with precision. That&apos;s the
              Meridian standard.
            </p>
          </div>
          <div className={styles.contentRight} ref={imageRef}>
            <div className={styles.floatingWrapper}>
              <div className={styles.floatingDesk}>
                <Image
                  src="/floating-desk-final-transparent.png"
                  alt="3D floating desk and laptop setup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <div className={styles.floatingGlow} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.transitionSpacer} />
    </section>
  );
}
