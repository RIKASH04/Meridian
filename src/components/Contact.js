'use client';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.contact} id="contact">
      {/* Row wrapper for side-by-side content on mobile / desktop layout */}
      <div className={styles.contactRow}>
        {/* Left column: image */}
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

        {/* Right column: text content */}
        <div className={styles.container}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInner}>
              {/* Desktop Headline (English) */}
              <h2 className={`${styles.heading} ${styles.desktopHeading}`}>
                Let&apos;s build <br />
                something <br />
                <span className={styles.headingAccent}>extraordinary</span> <br />
                together.
              </h2>
              {/* Mobile Headline (Japanese Vertical) */}
              <h2 className={`${styles.heading} ${styles.mobileHeading}`}>
                共に、<span className={styles.headingAccent}>非凡</span>を創り出そう。
              </h2>
              
              {/* Desktop Content with Subtitle and Buttons */}
              <div className={styles.content}>
                <p className={styles.subtitle}>
                  Need a team that delivers? We&apos;re ready to bring your vision to life.
                </p>
                {/* Desktop-only buttons */}
                <div className={styles.buttons}>
                  <a href="mailto:hello@merdian.com" className={styles.primaryBtn} data-cursor-hover>
                    Contact Us Now ➜
                  </a>
                  <a href="https://wa.me/919686541863" className={styles.secondaryBtn} data-cursor-hover target="_blank" rel="noreferrer">
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons below the row — visible on mobile only and centered */}
      <div className={styles.mobileButtons}>
        <a href="mailto:hello@merdian.com" className={styles.primaryBtn} data-cursor-hover>
          Contact Us Now ➜
        </a>
        <a href="https://wa.me/919686541863" className={styles.secondaryBtn} data-cursor-hover target="_blank" rel="noreferrer">
          Chat with us
        </a>
      </div>

      <div className={styles.transitionSpacer} />
    </section>
  );
}
