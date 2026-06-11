'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './Contact.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);



  return (
    <section ref={sectionRef} className={styles.contact} id="contact">
      <div className={styles.imageCol}>
        <div className={styles.imageContainer}>
          <Image
            src="/neee1_nobg.png"
            alt="Build together"
            width={450}
            height={600}
            style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInner}>
            <h2 ref={headingRef} className={styles.heading}>
              Let&apos;s build something <br />
              <span className={styles.headingAccent}>extraordinary</span> together.
            </h2>

            <div ref={contentRef} className={styles.content}>
              <p className={styles.subtitle}>
                Need a team that delivers? We&apos;re ready to bring your vision to life.
              </p>
              <div className={styles.buttons}>
                <a href="mailto:hello@meridian.agency" className={styles.primaryBtn} data-cursor-hover>
                  Contact Us Now ➜
                </a>
                <a href="https://wa.me/+910000000000" className={styles.secondaryBtn} data-cursor-hover target="_blank" rel="noreferrer">
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.transitionSpacer} />
    </section>
  );
}
