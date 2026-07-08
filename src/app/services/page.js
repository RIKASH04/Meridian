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

    // Force GPU compositing on every card for buttery smooth transforms
    cards.forEach((card) => {
      card.style.willChange = 'transform, opacity';
      card.style.backfaceVisibility = 'hidden';
    });

    const ctx = gsap.context(() => {
      // Set initial states: first card visible, rest stacked below viewport
      cards.forEach((card, i) => {
        gsap.set(card, {
          yPercent: i === 0 ? 0 : 100,
          zIndex: 10 + i,
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          // Use a fixed pixel value per card instead of percentage to prevent
          // mobile address-bar resize issues with 100vh/100%
          end: () => `+=${cards.length * window.innerHeight * 0.75}`,
          pin: true,
          scrub: 0.5, // Low scrub value for responsive feel without jank
          invalidateOnRefresh: true,
          anticipatePin: 1, // Prevents the "jump" when pin starts
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: 'power1.inOut',
          },
        },
      });

      const isMobile = window.innerWidth <= 768;

      for (let i = 1; i < cards.length; i++) {
        // Pause/delay before starting the transition
        tl.to({}, { duration: 0.5 });

        // Slide the next card up over the current one
        tl.to(cards[i], {
          yPercent: 0,
          duration: 1,
          ease: 'none',
          force3D: true,
        });

        // Scale down & fade the card being covered only on desktop
        // On mobile, keep it full size so there are no background gaps ("sheet space")
        if (!isMobile) {
          tl.to(cards[i - 1], {
            scale: 0.92,
            opacity: 0.4,
            duration: 1,
            force3D: true,
          }, '<');
        }
      }
    }, containerRef);

    return () => {
      // Clean up will-change to free GPU memory
      cards.forEach((card) => {
        if (card) card.style.willChange = 'auto';
      });
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <CustomCursor />
      <Navbar />

      {/* Pinning Stacking Container */}
      <div ref={containerRef} className={styles.servicesContainer}>
        {SERVICES_DATA.map((service, i) => (
          <div
            key={service.index}
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

                  {/* CTA buttons */}
                  <div className={styles.ctaRow}>
                    <a href="https://wa.me/919686541863" target="_blank" rel="noreferrer" className={styles.quoteBtn} data-cursor-hover>
                      GET A FREE QUOTE <span className={styles.btnArrow}>→</span>
                    </a>
                    <Link href="/projects" className={styles.workLink} data-cursor-hover>
                      VIEW OUR WORK
                    </Link>
                  </div>
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
