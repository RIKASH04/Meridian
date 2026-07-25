'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import styles from './projects.module.css';

const PROJECTS = [
  {
    slug: 'neighbourfriendly',
    title: 'NeighborFriendlyRentals',
    category: 'Web Platform',
    filterTag: 'Web Platform',
    image: '/images/projects/neighbourfriendly/krish1.png',
    subtitle: 'A trust-first peer-to-peer neighborhood rental marketplace with verified users and digital agreements.'
  },
  {
    slug: 'krishimitra',
    title: 'KrishiMitra',
    category: 'Mobile Application',
    filterTag: 'Mobile Application',
    image: '/images/projects/krishimitra/krishi5.png',
    subtitle: 'Kannada-first voice assistant AI app empowering farmers with crop disease detection, price predictions, and soil analytics.'
  },
  {
    slug: 'clensifilters',
    title: 'Clensifilters',
    category: 'Shower Filter UAE',
    filterTag: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Premium filtered shower heads engineered with activated carbon technology for UAE water conditions.'
  },
  {
    slug: 'wagyuprimeuae',
    title: 'Wagyu Prime UAE',
    category: 'Luxury E-commerce',
    filterTag: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Direct-to-consumer luxury culinary delivery showcasing premium Japanese A5, Australian, and American beef cuts.'
  },
  {
    slug: 'alfredai',
    title: 'Alfred AI',
    category: 'AI SaaS Product',
    filterTag: 'AI & SaaS',
    image: '/images/projects/alfredai/alf1.png',
    subtitle: 'An intelligent assistant helping users understand concepts deeply with customizable difficulty levels.'
  },
  {
    slug: 'q-pro',
    title: 'Q-Pro',
    category: 'Smart Queue SaaS',
    filterTag: 'AI & SaaS',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Enterprise-grade queue management SaaS to prevent overcrowding with admin and super-admin panels.'
  }
];

const CATEGORIES = ['All', 'Web Platform', 'Mobile Application', 'E-commerce', 'AI & SaaS'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid', 'list', 'stack'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Entrance header animations
    gsap.fromTo(
      `.${styles.headerLabel}`,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    gsap.fromTo(
      `.${styles.headerTitle}`,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
    );
    gsap.fromTo(
      `.${styles.headerDesc}`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  // Stagger animation whenever category filter or layout mode toggles
  useEffect(() => {
    const targets = `.${styles.projectCard}, .${styles.listCard}, .${styles.stackCard}`;
    gsap.killTweensOf(targets);
    gsap.fromTo(
      targets,
      { opacity: 0, y: 30 },
      { opacity: 0.95, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', clearProps: 'opacity,y' }
    );
  }, [selectedCategory, layoutMode]);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.filterTag === selectedCategory);

  return (
    <div className={styles.pageWrapper}>
      <CustomCursor />
      <Navbar />

      {/* Hero Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <span className={styles.headerLabel}>/ Our Works</span>
          <h1 className={styles.headerTitle}>
            Creative <span className={styles.titleAccent}>Portfolio</span>
          </h1>
          <p className={styles.headerDesc}>
            A showcase of custom digital experiences, engineered platforms, and strategic design systems crafted for industry innovators.
          </p>
        </div>
      </header>

      {/* Sorting & Layout Switcher Area */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterRow}>
            {/* Filter Pills */}
            <div className={styles.filterPills}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterPill} ${selectedCategory === cat ? styles.filterPillActive : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  data-cursor-hover
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Layout Toggles */}
            <div className={styles.layoutCapsule}>
              {/* Grid Toggle */}
              <button
                className={`${styles.layoutBtn} ${layoutMode === 'grid' ? styles.layoutBtnActive : ''}`}
                onClick={() => setLayoutMode('grid')}
                title="Grid View"
                data-cursor-hover
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="1" width="6" height="6" rx="1.5" />
                  <rect x="9" y="1" width="6" height="6" rx="1.5" />
                  <rect x="1" y="9" width="6" height="6" rx="1.5" />
                  <rect x="9" y="9" width="6" height="6" rx="1.5" />
                </svg>
              </button>

              {/* List Toggle */}
              <button
                className={`${styles.layoutBtn} ${layoutMode === 'list' ? styles.layoutBtnActive : ''}`}
                onClick={() => setLayoutMode('list')}
                title="List View"
                data-cursor-hover
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="2" y1="3.5" x2="14" y2="3.5" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                  <line x1="2" y1="12.5" x2="14" y2="12.5" />
                </svg>
              </button>

              {/* Stack Toggle */}
              <button
                className={`${styles.layoutBtn} ${layoutMode === 'stack' ? styles.layoutBtnActive : ''}`}
                onClick={() => setLayoutMode('stack')}
                title="Stack View"
                data-cursor-hover
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="8 1 15 4.5 8 8 1 4.5" />
                  <polygon points="15 7.5 8 11 1 7.5" />
                  <polygon points="15 10.5 8 14 1 10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Display */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          {filteredProjects.length === 0 ? (
            <div className={styles.emptyState}>No projects found matching this category.</div>
          ) : layoutMode === 'grid' ? (
            /* --- GRID MODE --- */
            <div className={styles.grid}>
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className={styles.projectCard}
                  data-cursor-hover
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 680px"
                      className={styles.projectImage}
                      priority
                    />
                    <div className={styles.overlay}>
                      <span className={styles.viewLabel}>View Case Study →</span>
                    </div>
                  </div>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : layoutMode === 'list' ? (
            /* --- LIST MODE --- */
            <div className={styles.listGrid}>
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className={styles.listCard}
                  data-cursor-hover
                >
                  <div className={styles.listImageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className={styles.projectImage}
                    />
                  </div>
                  <div className={styles.listMeta}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* --- STACK MODE --- */
            <div className={styles.stackGrid}>
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className={styles.stackCard}
                  data-cursor-hover
                >
                  <div className={styles.stackImageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="100vw"
                      className={styles.projectImage}
                    />
                  </div>
                  <div className={styles.stackOverlay} />
                  <div className={styles.stackMeta}>
                    <span className={styles.stackCategory}>{project.category}</span>
                    <h3 className={styles.stackTitle}>{project.title}</h3>
                    <p className={styles.stackSubtitle}>{project.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
