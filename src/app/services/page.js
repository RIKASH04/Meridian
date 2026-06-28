'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import styles from './services.module.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    index: '01',
    title: 'Web & Mobile\nApplications',
    subcategories: [
      'Business Website',
      'E-commerce Website',
      'Landing Pages',
      'Mobile App Development',
      'Maintenance & Support',
      'SEO Optimization'
    ],
    boldDesc: 'Your website is often the first impression someone gets of your business and we make sure it\'s a great one.',
    description: 'From beautifully designed landing pages to fully functional ecommerce stores, we build websites that are fast, secure, mobile-friendly, and easy to manage.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '02',
    title: 'AI Solutions\n& Integrations',
    subcategories: [
      'AI Chatbots',
      'Machine Learning',
      'NLP & LLMs',
      'RAG Systems',
      'Data Analytics',
      'Predictive Modeling'
    ],
    boldDesc: 'Intelligent systems that learn, adapt, and deliver real business value.',
    description: 'We build enterprise-grade AI solutions powered by advanced machine learning, natural language processing, and custom-trained models that transform how your business operates.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '03',
    title: 'Automation\n& Workflows',
    subcategories: [
      'Process Automation',
      'API Integrations',
      'CRM Workflows',
      'Email Automation',
      'Task Scheduling',
      'Custom Pipelines'
    ],
    boldDesc: 'Stop wasting time on repetitive tasks. Let smart automation handle the heavy lifting.',
    description: 'We design and deploy intelligent workflow automations that eliminate manual work, reduce errors, and free your team to focus on what matters most — growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '04',
    title: 'ERP & Business\nSystems',
    subcategories: [
      'Custom ERP',
      'Inventory Management',
      'HR & Payroll',
      'Accounting Systems',
      'Supply Chain',
      'Reporting Dashboards'
    ],
    boldDesc: 'Your business deserves systems built for exactly how you operate.',
    description: 'We design and develop custom ERP solutions tailored to streamline your entire business — from inventory and HR to accounting and supply chain — all in one unified platform.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '05',
    title: 'Cloud &\nDevOps',
    subcategories: [
      'AWS / Azure / GCP',
      'CI/CD Pipelines',
      'Docker & Kubernetes',
      'Server Management',
      'Auto Scaling',
      'Monitoring & Alerts'
    ],
    boldDesc: 'Scalable, resilient infrastructure that grows with your business.',
    description: 'We architect cloud-native solutions with modern DevOps practices — automated deployments, container orchestration, and real-time monitoring to keep your systems running at peak performance.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '06',
    title: 'E-Commerce\nSolutions',
    subcategories: [
      'Shopify / WooCommerce',
      'Headless Commerce',
      'Payment Integration',
      'Product Catalogs',
      'Order Management',
      'Conversion Optimization'
    ],
    boldDesc: 'High-converting online stores that turn browsers into buyers.',
    description: 'We build feature-rich, secure e-commerce platforms with seamless checkout experiences, smart product recommendations, and mobile-optimized designs that maximize revenue.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '07',
    title: 'Cybersecurity',
    subcategories: [
      'Security Audits',
      'Penetration Testing',
      'Data Encryption',
      'Compliance (GDPR/SOC2)',
      'Firewall & WAF',
      'Incident Response'
    ],
    boldDesc: 'Enterprise-grade security to protect your data, users, and reputation.',
    description: 'From vulnerability assessments to real-time threat monitoring, we implement comprehensive security frameworks that safeguard your digital assets against evolving cyber threats.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '08',
    title: 'Custom Software\nSystems',
    subcategories: [
      'SaaS Platforms',
      'Internal Tools',
      'API Development',
      'Legacy Modernization',
      'Database Design',
      'Scalable Architecture'
    ],
    boldDesc: 'Bespoke solutions for complex challenges. Built to scale, designed to last.',
    description: 'When off-the-shelf tools don\'t cut it, we build custom software systems from the ground up — tailored precisely to your workflows, integrated with your existing stack, and engineered for long-term growth.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
  }
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Stacking from bottom
      mm.add('(min-width: 769px)', () => {
        cards.forEach((card, i) => {
          gsap.set(card, {
            y: i === 0 ? 0 : '100vh',
            zIndex: 10 + i,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${(cards.length - 1) * 100}%`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < cards.length; i++) {
          tl.to(cards[i], {
            y: 0,
            ease: 'power1.inOut',
          });
          tl.to(cards[i - 1], {
            opacity: 0.6,
            scale: 0.96,
            duration: 0.5,
          }, '<');
        }
      });

      // Mobile: Stacking from bottom (same logic)
      mm.add('(max-width: 768px)', () => {
        cards.forEach((card, i) => {
          gsap.set(card, {
            y: i === 0 ? 0 : window.innerHeight,
            zIndex: 10 + i,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${(cards.length - 1) * 100}%`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < cards.length; i++) {
          tl.to(cards[i], {
            y: 0,
            ease: 'none',
          });
          tl.set(cards[i - 1], { opacity: 0 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <CustomCursor />
      <Navbar />

      {/* Pinning Stacking Container */}
      <div ref={containerRef} className={styles.servicesContainer}>
        {SERVICES_DATA.map((service, i) => (
          <div
            key={service.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className={styles.serviceCard}
          >
            <div className={styles.cardContentWrapper}>
              <div className={styles.grid}>
                {/* Left details pane */}
                <div className={styles.detailsPane}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.indexLabel}>{service.index} / SERVICES</span>
                    <div className={styles.titleWithDot}>
                      <h1 className={styles.serviceTitle}>
                        {service.title.split('\n').map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < service.title.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </h1>
                      <span className={styles.decorDot} />
                    </div>
                  </div>

                  {/* Subcategories grid */}
                  <div className={styles.subcatsGrid}>
                    {service.subcategories.map((sub, idx) => (
                      <span key={idx} className={styles.subcatPill}>
                        {sub.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  {/* Description text */}
                  <p className={styles.serviceDescription}>
                    <strong>{service.boldDesc}</strong>{' '}
                    {service.description}
                  </p>

                  {/* CTA button */}
                  <Link href="/#contact" className={styles.learnMoreBtn} data-cursor-hover>
                    LEARN MORE <span className={styles.btnArrow}>→</span>
                  </Link>
                </div>

                {/* Right mockup image pane */}
                <div className={styles.imagePane}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={service.image}
                      alt={service.title.replace('\n', ' ')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className={styles.mockupImage}
                      priority={i < 2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
