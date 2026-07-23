import "./globals.css";
import Script from "next/script";

const SITE_URL = "https://www.meridianlabss.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  // ─── Title & Description ────────────────────────────────────────
  title: {
    default: "Meridian Labs (MeridianLabss) — Digital Agency | Web, AI & App Development",
    template: "%s | Meridian Labs",
  },
  description:
    "Meridian Labs (meridianlabss.com) is a leading digital agency specializing in custom web development, mobile apps, AI solutions, ERM systems, and digital marketing. Transform your business with Meridian Labs.",
  keywords: [
    "meridianlabss",
    "meridian labs",
    "meridianlabss.com",
    "meridian digital agency",
    "meridian labs agency",
    "meridian agency",
    "meridian web development",
    "meridian labs software",
    "web development agency",
    "app development company",
    "AI solutions agency",
    "digital marketing agency",
    "ERM software development",
    "custom software development",
    "e-commerce solutions",
    "cloud & DevOps",
  ],

  // ─── Canonical & Alternates ─────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ─── Open Graph ─────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Meridian Labs (MeridianLabss)",
    title: "Meridian Labs (MeridianLabss) — Digital Agency | Web, AI & App Development",
    description:
      "Meridian Labs crafts high-performance websites, mobile apps, AI solutions, ERM systems, and digital marketing strategies that drive measurable business growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meridian Labs — MeridianLabss Digital Agency Logo & Banner",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter Card ───────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Meridian Labs (MeridianLabss) — Digital Agency",
    description:
      "Leading digital agency creating custom websites, mobile apps, AI solutions, and digital marketing strategies.",
    images: ["/og-image.png"],
    creator: "@MeridianAgency",
  },

  // ─── Robots ─────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Verification Placeholders ─────────────────────────────────
  verification: {
    google: "0pHDgxy69mtFTlkffvk6WPAhg1H5vyh27APMPe80MiQ",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },

  // ─── Icons ──────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/images/logos/log2.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/logos/log2.svg",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // ─── Other ──────────────────────────────────────────────────────
  category: "technology",
  creator: "Meridian Labs",
  publisher: "Meridian Labs",
  applicationName: "Meridian Labs",
};

// ─── Structured Data (JSON-LD) ──────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Meridian Labs",
  legalName: "Meridian Digital Agency",
  alternateName: [
    "MeridianLabss",
    "meridianlabss.com",
    "Meridian Labs Agency",
    "Meridian Digital Agency",
    "Meridian Solutions",
    "Meridian",
  ],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logos/log2.svg`,
    width: 512,
    height: 512,
    caption: "Meridian Labs Official Logo",
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Meridian Labs (meridianlabss.com) is a full-service digital agency specializing in custom web development, mobile app development, artificial intelligence solutions, ERM systems, and performance digital marketing.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puttur",
    addressRegion: "Karnataka",
    postalCode: "574201",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-96865-41863",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-81974-24986",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
  ],
  email: "hello@merdian.com",
  sameAs: [
    "https://www.instagram.com/meridian._.solutions",
    "https://linkedin.com",
    "https://twitter.com",
    "https://facebook.com",
  ],
  knowsAbout: [
    "Meridian Labs",
    "MeridianLabss",
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Digital Marketing",
    "ERP Systems",
    "ERM Software",
    "Cloud Computing",
    "DevOps",
    "Cybersecurity",
    "E-commerce",
    "Custom Software Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Meridian Labs (MeridianLabss)",
  alternateName: ["MeridianLabss", "Meridian Digital Agency"],
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Meridian Labs Digital Services",
  description: "Full-spectrum digital services offered by Meridian Labs",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Web & Mobile App Development",
        description:
          "Custom website and mobile application development — from business websites and e-commerce stores to cross-platform mobile apps built with modern frameworks.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "Web Development",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI Solutions & Integrations",
        description:
          "Enterprise-grade AI solutions powered by machine learning, natural language processing, and custom-trained models — AI chatbots, RAG systems, predictive modeling.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "Artificial Intelligence",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "ERP & Business Systems",
        description:
          "Custom ERP solutions tailored to streamline your entire business — inventory management, HR & payroll, accounting, supply chain, and reporting dashboards.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "Enterprise Resource Planning",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Cloud & DevOps",
        description:
          "Scalable cloud-native infrastructure with modern DevOps practices — AWS, Azure, GCP, CI/CD pipelines, Docker, Kubernetes, and real-time monitoring.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "Cloud Computing",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "E-Commerce Solutions",
        description:
          "High-converting online stores with Shopify, WooCommerce, headless commerce, payment integration, and conversion optimization.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "E-Commerce Development",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Cybersecurity Services",
        description:
          "Enterprise-grade security — vulnerability assessments, penetration testing, data encryption, GDPR/SOC2 compliance, and incident response.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "Cybersecurity",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Automation & Workflows",
        description:
          "Intelligent workflow automations that eliminate manual work — process automation, API integrations, CRM workflows, and custom pipelines.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "Business Process Automation",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        name: "Custom Software Systems",
        description:
          "Bespoke software solutions — SaaS platforms, internal tools, API development, legacy modernization, and scalable architecture design.",
        provider: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/services`,
        serviceType: "Custom Software Development",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Meridian Labs (meridianlabss.com)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meridian Labs (meridianlabss.com) is a modern digital agency offering custom web development, mobile app development, AI solutions, ERM systems, and digital marketing services.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Meridian Labs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meridian Labs offers web & mobile app development, AI solutions & integrations, ERP & business systems, cloud & DevOps, e-commerce solutions, cybersecurity, automation & workflows, and custom software systems.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Meridian Labs located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meridian Labs is based in Karnataka, India (Puttur & Moodbidre) and works with clients globally.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Meridian Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Meridian Labs via WhatsApp at +91 96865 41863, email hello@merdian.com, or visit meridianlabss.com.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Bing Webmaster verification */}
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#5E17EB" />

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Structured Data: Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        {/* Structured Data: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
