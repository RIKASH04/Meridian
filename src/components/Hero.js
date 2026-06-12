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

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Large Background Titles */}
      <div className={styles.titlesRow}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            {[...servicesList, ...servicesList, ...servicesList].map((service, i) => (
              <React.Fragment key={i}>
                <span className={styles.bigTitle}>{service}</span>
                <span className={styles.dot}>·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Character Image */}
      <div ref={characterRef} className={styles.characterWrapper}>
        <div className={styles.characterCropContainer}>
          <div className={styles.characterMask}></div>
          <Image
            src="/hello-removebg-preview.png"
            alt="Lead Designer Portrait"
            width={700}
            height={900}
            priority
            unoptimized
            className={styles.characterImg}
            style={{ width: 'auto', height: '115vh' }}
          />
        </div>
      </div>

      {/* Bottom Left Info */}
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
      <div className={styles.infoRight}>
        <div className={styles.labelRow} style={{ alignSelf: 'flex-end' }}>
          <span className={styles.labelText}>専門分野</span>
          <span className={styles.labelLine}></span>
        </div>
        <p className={styles.infoDescription} style={{ textAlign: 'right' }}>
          エンドツーエンドのカスタムソフトウェア開発、拡張性の高いクラウド設計、そしてAI駆動のインテリジェントな自動ワークフローを実現します。
        </p>
      </div>

      {/* Scroll Hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>

      {/* Bottom Gradient Transition to About section */}
      <div className={styles.bottomGradient} />
    </section>
  );
}
