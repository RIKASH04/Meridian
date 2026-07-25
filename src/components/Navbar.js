'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/projects' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar({ visible }) {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linksRef = useRef([]);
  const pathname = usePathname();
  const router = useRouter();
  const isSubpage = pathname !== '/';
  // Pages with white/light backgrounds need dark logo & nav text always
  const whiteBgPages = ['/services', '/projects'];
  const isLightBg = whiteBgPages.includes(pathname);

  // Track scroll position to reveal frosted glass bg
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        clipPath: 'circle(150% at 95% 5%)',
        duration: 0.8,
        ease: 'expo.out',
      });
      // Staggered reveal for links
      gsap.killTweensOf(linksRef.current);
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.25,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'circle(0% at 95% 5%)',
        duration: 0.6,
        ease: 'expo.in',
      });
      // Reset links
      gsap.killTweensOf(linksRef.current);
      gsap.to(linksRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'power2.in',
      });
    }
  }, [menuOpen]);

  const handleLinkClick = (e, label, href) => {
    e.preventDefault();
    setMenuOpen(false);

    if (label === 'Home') {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
    } else if (label === 'Services') {
      if (pathname === '/services') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/services');
      }
    } else if (label === 'Works') {
      if (pathname === '/projects') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/projects');
      }
    } else if (label === 'Contact') {
      if (pathname === '/') {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/#contact');
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <nav ref={navRef} className={`${styles.navbar} ${isSubpage ? styles.navbarSubpage : ''} ${isSubpage && scrolled ? styles.navbarScrolled : ''} ${isLightBg ? styles.navbarLightBg : ''}`}>
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="/" className={styles.logo} onClick={handleLogoClick}>
            <Image src={isLightBg || (isSubpage && scrolled) ? '/images/logos/mylogo.svg' : '/images/logos/log3.svg'} alt="Meridian" width={170} height={28} priority style={{ objectFit: 'contain' }} />
          </a>

          {/* Desktop Links */}
          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, link.label, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className={styles.navRight}>
            <a href="/#contact" className={styles.ctaBtn} onClick={(e) => handleLinkClick(e, 'Contact', '/#contact')}>
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
        {/* Close button inside overlay */}
        <button
          className={styles.overlayCloseBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span />
          <span />
        </button>
        <div className={styles.menuContent}>
          <div className={styles.menuLinksSection}>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                ref={(el) => (linksRef.current[i] = el)}
                className={styles.menuLink}
                onClick={(e) => handleLinkClick(e, link.label, link.href)}
              >
                <span className={styles.menuLinkNumber}>0{i + 1}</span>
                <span className={styles.menuLinkText}>{link.label}</span>
              </a>
            ))}
          </div>
          <div className={styles.menuFooter}>
            <div className={styles.menuSocial}>
              <a href="https://www.instagram.com/meridian._.solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="https://www.linkedin.com/company/meridian-labs26/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://x.com/lumaax_global?s=11" target="_blank" rel="noreferrer">X ↗</a>
            </div>
            <p className={styles.menuEmail}>hello@meridianlabss.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
