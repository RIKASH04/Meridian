'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const contentRef = useRef(null);



  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={contentRef} className={styles.container}>
        
        {/* Main Grid: Left (Pages) and Right (Social & Contact) */}
        <div className={styles.mainGrid}>
          
          {/* Pages Column */}
          <div className={styles.pagesCol}>
            <span className={styles.sectionLabel}>/ PAGES</span>
            <div className={styles.pagesLinks}>
              <div className={styles.linkWrapper}>
                <a href="#about" className={styles.hugeLink}>ABOUT US</a>
                <span className={styles.decorDot} style={{ left: '60%', top: '20%' }}></span>
              </div>
              <div className={styles.linkWrapper}>
                <a href="#works" className={styles.hugeLink}>WORKS</a>
                <span className={styles.decorDot} style={{ left: '40%', top: '60%' }}></span>
              </div>
              <div className={styles.linkWrapper}>
                <a href="#services" className={styles.hugeLink}>SERVICES</a>
                <span className={styles.decorDot} style={{ left: '55%', top: '90%' }}></span>
              </div>
              <div className={styles.linkWrapper}>
                <a href="#" className={styles.hugeLink}>BLOG</a>
              </div>
              <div className={styles.linkWrapper}>
                <a href="#contact" className={styles.hugeLink}>CONTACT US</a>
              </div>
            </div>
          </div>

          {/* Socials & Quick Contact Column */}
          <div className={styles.socialCol}>
            <span className={styles.sectionLabel}>/ SOCIAL</span>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.boldSocialLink}>X</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.boldSocialLink}>LINKEDIN</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.boldSocialLink}>FACEBOOK</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.boldSocialLink}>INSTAGRAM</a>
            </div>

            <div className={styles.contactDirect}>
              <a href="mailto:hello@merdian.com" className={styles.contactInfo}>HELLO@MERDIAN.COM</a>
              <a href="tel:+919686541863" className={styles.contactInfo}>+91 96865 41863</a>
            </div>
          </div>

        </div>

        {/* Office Details Row */}
        <div className={styles.officeRow}>
          
          {/* Left: Office Address */}
          <div className={styles.officeLeft}>
            <div className={styles.addressBlock}>
              <span className={styles.subLabel}>/ OFFICE</span>
              <p className={styles.addressText}>
                PUTTUR - 574201,<br />
                KARNATAKA, INDIA
              </p>
            </div>
          </div>

          {/* Right: Second Office Address */}
          <div className={styles.officeRight}>
            <div className={styles.addressBlock}>
              <span className={styles.subLabel}>/ OFFICE</span>
              <p className={styles.addressText}>
                MOODBIDRE,<br />
                KARNATAKA, INDIA
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal footer */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} THE MERIDIAN AGENCY
          </div>
          
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>PRIVACY POLICY</a>
            <a href="#" className={styles.legalLink}>TERMS & CONDITIONS</a>
          </div>
        </div>

        {/* Floating WhatsApp chat button */}
        <a 
          href="https://wa.me/919686541863" 
          target="_blank" 
          rel="noreferrer" 
          className={styles.whatsappBtn}
          data-cursor-hover
        >
          <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.475 1.33 4.985l-1.413 5.163 5.285-1.386a9.92 9.92 0 0 0 4.786 1.226h.004c5.502 0 9.986-4.484 9.986-9.99 0-2.67-1.039-5.178-2.926-7.067C17.186 3.039 14.68 2 12.012 2zm0 1.637c2.23 0 4.327.87 5.903 2.449a8.31 8.31 0 0 1 2.446 5.912c0 4.605-3.74 8.347-8.347 8.347a8.27 8.27 0 0 1-4.225-1.157l-.303-.18-3.14.823.839-3.064-.197-.315a8.293 8.293 0 0 1-1.272-4.46a8.332 8.332 0 0 1 8.305-8.357zm-3.626 5.093c-.198 0-.43.076-.607.272-.178.196-.684.67-.684 1.635 0 .966.702 1.902.8 2.033.098.133 1.348 2.152 3.298 2.933.464.186.826.297 1.109.387.467.149.892.128 1.229.078.375-.056 1.15-.47 1.312-.924.162-.454.162-.84.113-.924-.049-.083-.178-.133-.375-.232-.198-.099-1.15-.568-1.328-.633-.178-.066-.308-.099-.438.099-.13.197-.505.633-.619.765-.113.133-.227.149-.425.05a5.352 5.352 0 0 1-1.579-.976 5.892 5.892 0 0 1-1.092-1.36c-.114-.197-.012-.303.087-.402.09-.089.198-.232.297-.347.099-.115.132-.197.198-.33.066-.132.033-.247-.017-.346-.05-.099-.438-1.056-.6-.145z"/>
          </svg>
          <span className={styles.whatsappText}>Chat with us</span>
        </a>

      </div>
    </footer>
  );
}
