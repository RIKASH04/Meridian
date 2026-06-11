'use client';
import styles from './Marquee.module.css';

const words = [
  'Web & Mobile Apps', '·', 'AI Solutions', '·', 'Automation & Workflows', '·',
  'ERP & Business Systems', '·', 'Cloud & DevOps', '·', 'E-Commerce Solutions', '·',
  'Cybersecurity', '·', 'Custom Software Systems', '·',
];

export default function Marquee() {
  return (
    <section className={styles.marquee}>
      <div className={styles.track}>
        <div className={styles.content}>
          {[...words, ...words, ...words].map((word, i) => (
            <span
              key={i}
              className={word === '·' ? styles.dot : styles.word}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.transitionSpacer} />
    </section>
  );
}
