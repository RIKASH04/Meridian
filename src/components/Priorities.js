'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './Priorities.module.css';

export default function Priorities() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Only load the heavy iframe when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.priorities} id="priorities">
      {/* Main Grid */}
      <div className={styles.mainGrid}>
        {/* Left Column — Text */}
        <div className={styles.leftCol}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>Now Accepting Projects</span>
          </div>

          {/* Heading */}
          <h2 className={styles.heading}>
            Design in{' '}
            <span className={styles.headingGradient}>3D</span>.
            <br />
            Ship to web.
          </h2>

          {/* Description */}
          <p className={styles.description}>
            We craft immersive 3D experiences, interactive scenes, and
            production-ready components that bring your brand to life on the web.
          </p>

          {/* CTA Row */}
          <div className={styles.ctaRow}>
            {/* Animated Beam Button */}
            <a href="/services" className={styles.beamButton}>
              {/* Border Beam */}
              <div className={styles.beamBorderWrap}>
                <div className={styles.beamSpinner}></div>
                <div className={styles.beamBorderInner}></div>
              </div>

              {/* Inner Background */}
              <div className={styles.beamBg}>
                <div className={styles.beamBgGradient}></div>
                <div className={styles.beamBgDots}></div>
                <div className={styles.beamBgGlow}></div>
              </div>

              {/* Button Text */}
              <span className={styles.beamText}>Our Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.beamArrow}>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* Social Proof */}
            <div className={styles.socialProof}>
              <div className={styles.avatarStack}>
                <div className={`${styles.avatar} ${styles.avatarPurple}`}></div>
                <div className={`${styles.avatar} ${styles.avatarOrange}`}></div>
                <div className={`${styles.avatar} ${styles.avatarGreen}`}></div>
              </div>
              <span className={styles.socialText}>Trusted by clients</span>
            </div>
          </div>

          {/* Terminal Command */}
          <div className={styles.terminal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19h8" />
              <path d="m4 17 6-6-6-6" />
            </svg>
            <span>npx create-meridian-app@latest</span>
          </div>
        </div>

        {/* Right Column — 3D Preview */}
        <div className={styles.rightCol}>
          {/* Main Panel */}
          <div className={styles.mainPanel}>
            {/* Tab Bar */}
            <div className={styles.tabBar}>
              <div className={styles.tabDots}>
                <div className={styles.tabDotRed}></div>
                <div className={styles.tabDotYellow}></div>
                <div className={styles.tabDotGreen}></div>
              </div>
              <div className={styles.tabTitle}>scene.meridian — Live Preview</div>
            </div>

            {/* 3D Content Area */}
            <div className={styles.contentArea}>
              {isVisible && (
                <iframe
                  src="https://my.spline.design/genkubgreetingrobot-ojzcjWInavuKpZSt2luvgvjl/"
                  frameBorder="0"
                  loading="lazy"
                  className={styles.splineFrame}
                  title="3D Scene Preview"
                />
              )}

              {/* Subtle grid overlay — pure CSS, no 3D transforms */}
              <div className={styles.gridOverlay}></div>

              {/* Simplified decorative cube — NO backdrop-blur, just colored faces */}
              <div className={styles.cubeWrap}>
                <div className={`${styles.cubeFace} ${styles.cubeFront}`}></div>
                <div className={`${styles.cubeFace} ${styles.cubeBack}`}></div>
                <div className={`${styles.cubeFace} ${styles.cubeLeft}`}></div>
                <div className={`${styles.cubeFace} ${styles.cubeRight}`}></div>
                <div className={`${styles.cubeFace} ${styles.cubeTop}`}></div>
                <div className={`${styles.cubeFace} ${styles.cubeBottom}`}></div>
                <div className={styles.cubeGlow}></div>
              </div>

              {/* Axis Lines */}
              <div className={styles.axisOrigin}>
                <div className={styles.axisY}></div>
                <div className={styles.axisX}></div>
                <div className={styles.axisZ}></div>
              </div>

              {/* Bottom Toolbar */}
              <div className={styles.toolbar}>
                <button className={`${styles.toolBtn} ${styles.toolBtnActive}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                  Rotate
                </button>
                <button className={styles.toolBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20" />
                    <path d="m15 19-3 3-3-3" />
                    <path d="m19 9 3 3-3 3" />
                    <path d="M2 12h20" />
                    <path d="m5 9-3 3 3 3" />
                    <path d="m9 5 3-3 3 3" />
                  </svg>
                  Move
                </button>
              </div>
            </div>
          </div>

          {/* Floating Toolbar (Left) */}
          <div className={`${styles.floatPanel} ${styles.sideToolbar}`}>
            <button className={styles.sideBtn} style={{ color: '#a78bfa' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
              </svg>
            </button>
            <button className={styles.sideBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </button>
            <button className={styles.sideBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20" />
                <path d="m15 19-3 3-3-3" />
                <path d="m19 9 3 3-3 3" />
                <path d="M2 12h20" />
                <path d="m5 9-3 3 3 3" />
                <path d="m9 5 3-3 3 3" />
              </svg>
            </button>
            <button className={styles.sideBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M14 15H9v-5" />
                <path d="M16 3h5v5" />
                <path d="M21 3 9 15" />
              </svg>
            </button>
            <div className={styles.sideDivider}></div>
            <button className={styles.sideBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </button>
          </div>

          {/* Floating Material Panel (Bottom Right) */}
          <div className={`${styles.floatPanel} ${styles.materialPanel}`}>
            <div className={styles.materialHeader}>
              <span className={styles.materialTitle}>Material</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#737373' }}>
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
              </svg>
            </div>
            <div className={styles.materialSliders}>
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span>Roughness</span>
                  <span>0.4</span>
                </div>
                <div className={styles.sliderTrack}>
                  <div className={styles.sliderFillPurple} style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span>Metalness</span>
                  <span>0.8</span>
                </div>
                <div className={styles.sliderTrack}>
                  <div className={styles.sliderFillOrange} style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className={styles.colorSwatches}>
                <div className={styles.swatchPurple}></div>
                <div className={styles.swatchOrange}></div>
                <div className={styles.swatchAdd}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.transitionSpacer} />
    </section>
  );
}
