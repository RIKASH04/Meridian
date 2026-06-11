'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ visible }) {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef([]);
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        clipPath: 'circle(150% at 95% 5%)',
        duration: 0.8,
        ease: 'expo.out',
      });
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'circle(0% at 95% 5%)',
        duration: 0.6,
        ease: 'expo.in',
      });
    }
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav ref={navRef} className={styles.navbar}>
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="#hero" className={styles.logo} onClick={(e) => handleLinkClick(e, '#hero')}>
            <Image src="/log3.svg" alt="Meridian" width={170} height={28} priority style={{ objectFit: 'contain', height: 'auto' }} />
          </a>

          {/* Desktop Links */}
          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className={styles.navRight}>
            <a href="#contact" className={styles.ctaBtn} onClick={(e) => handleLinkClick(e, '#contact')}>
              Let&apos;s talk
            </a>
            <button
              className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div ref={menuRef} className={styles.menuOverlay}>
        <div className={styles.menuContent}>
          <div className={styles.menuLinksSection}>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                ref={(el) => (linksRef.current[i] = el)}
                className={styles.menuLink}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span className={styles.menuLinkNumber}>0{i + 1}</span>
                <span className={styles.menuLinkText}>{link.label}</span>
              </a>
            ))}
          </div>
          <div className={styles.menuFooter}>
            <div className={styles.menuSocial}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">X ↗</a>
            </div>
            <p className={styles.menuEmail}>hello@meridian.agency</p>
          </div>
        </div>
      </div>
    </>
  );
}
