'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Hero.module.css';

const servicesList = [
  'Web & Mobile Apps',
  'AI Solutions',
  'Automation & Workflows',
  'ERP & Business Systems',
  'Cloud & DevOps',
  'E-Commerce Solutions',
  'Cybersecurity',
  'Custom Software Systems'
];

export default function Hero({ visible }) {
  const sectionRef = useRef(null);
  const characterRef = useRef(null);
  const infoLeftRef = useRef(null);
  const infoRightRef = useRef(null);
  const titlesRef = useRef(null);

  useEffect(() => {
    // Smooth entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        characterRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, delay: 0.1 }
      )
        .fromTo(
          titlesRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1.0 },
          '-=0.8'
        )
        .fromTo(
          [infoLeftRef.current, infoRightRef.current],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          '-=0.6'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [visible]);

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Large Background Titles (Marquee) - Behind Character */}
      <div ref={titlesRef} className={styles.titlesRow}>
        <div className={`${styles.marqueeTrack} ${styles.desktopTitles}`}>
          <div className={styles.marqueeContent}>
            {[...servicesList, ...servicesList, ...servicesList].map((service, i) => (
              <React.Fragment key={i}>
                <span className={styles.bigTitle}>{service}</span>
                <span className={styles.dot}>·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={`${styles.marqueeTrack} ${styles.mobileTitles}`} aria-label="Meridian services">
          <div className={styles.marqueeContent}>
            {[...servicesList, ...servicesList].map((service, i) => (
              <React.Fragment key={i}>
                <span className={styles.mobileTitle}>{service}</span>
                <span className={styles.mobileDot}>·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Character Cutout - Idle in Center */}
      <div className={styles.characterWrapper}>
        <div ref={characterRef} className={styles.characterCropContainer}>
          <Image
            src="/images/hero/hero-character-cutout.png"
            alt="Meridian Lead Designer"
            width={504}
            height={839}
            priority
            unoptimized
            className={styles.characterImg}
          />
        </div>
      </div>

      {/* Bottom Left Info & Buttons */}
      <div ref={infoLeftRef} className={styles.infoLeft}>
        <div className={styles.labelRow}>
          <span className={styles.labelLine}></span>
          <span className={styles.labelText}>LEAD DESIGNER</span>
        </div>
        <p className={styles.infoDescription}>
          Crafting intuitive digital ecosystems and AI-driven interfaces for the next generation of fintech scaling.
        </p>
        <a href="#works" className={styles.viewProjects} data-cursor-hover>
          <span className={styles.arrowCircle}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
          <span className={styles.viewText}>VIEW PROJECTS</span>
        </a>
      </div>

      {/* Bottom Right Info */}
      <div ref={infoRightRef} className={styles.infoRight}>
        <div className={styles.labelRow} style={{ alignSelf: 'flex-end' }}>
          <span className={styles.labelText}>専門分野</span>
          <span className={styles.labelLine}></span>
        </div>
        <p className={styles.infoDescription} style={{ textAlign: 'right' }}>
          エンドツーエンドのカスタムソフトウェア開発、拡張性の高いクラウド設計、そしてAI駆動のインテリジェントな自動ワークフローを実現します。
        </p>
      </div>

      {/* Scroll Hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>

      {/* Bottom Gradient Transition to About section */}
      <div className={styles.bottomGradient} />
    </section>
  );
}
