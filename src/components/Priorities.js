'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './Priorities.module.css';

gsap.registerPlugin(ScrollTrigger);

const priorities = [
  {
    title: 'Quality',
    description: 'Every pixel, every line of code — obsessively refined.',
    image: '/quality.jpg',
    icon: '◆',
  },
  {
    title: 'Innovation',
    description: 'We push boundaries, never settling for ordinary.',
    image: '/brain.png',
    icon: '◇',
  },
  {
    title: 'Impact',
    description: 'Measurable results that transform businesses.',
    image: '/impact.jpg',
    icon: '○',
  },
];

export default function Priorities() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);



  return (
    <section ref={sectionRef} className={styles.priorities} id="priorities">
      <div className={styles.container}>
        <div className={styles.topSection}>
          <span className={styles.label}>Our Priorities</span>
          <h2 ref={headingRef} className={styles.heading}>
            What drives <span className={styles.headingAccent}>everything</span> we do.
          </h2>
        </div>

        <div className={styles.grid}>
          {priorities.map((priority, i) => (
            <div
              key={priority.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className={styles.card}
            >
              <div className={styles.cardBgImage}>
                <Image
                  src={priority.image}
                  alt={priority.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.cardImageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{priority.icon}</div>
                <h3 className={styles.cardTitle}>{priority.title}</h3>
                <p className={styles.cardDesc}>{priority.description}</p>
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Ready to build something extraordinary?</p>
          <a href="#contact" className={styles.ctaBtn} data-cursor-hover>
            Contact Us Now
            <span className={styles.ctaBtnArrow}>➜</span>
          </a>
        </div>
      </div>
      <div className={styles.transitionSpacer} />
    </section>
  );
}
