import ProjectDetail from '@/components/ProjectDetail';

const SITE_URL = "https://www.meridianlabss.com";

// ─── Project Metadata ─────────────────────────────────────────────
const PROJECT_SEO = {
  neighbourfriendly: {
    title: "NeighborFriendlyRentals — Peer-to-Peer Rental Marketplace",
    description:
      "Case study: A trust-first peer-to-peer neighborhood rental marketplace with verified users, digital agreements, and geo-fenced local discovery. Built with Next.js.",
    keywords: ["peer-to-peer marketplace", "rental platform", "neighborhood app", "web platform"],
  },
  krishimitra: {
    title: "KrishiMitra — AI-Powered Farming Assistant App",
    description:
      "Case study: Kannada-first voice assistant AI app empowering farmers with crop disease detection, price predictions, and soil analytics using computer vision and ML.",
    keywords: ["farming app", "AI agriculture", "crop disease detection", "voice assistant app"],
  },
  clensifilters: {
    title: "Clensifilters — Premium Shower Filter E-Commerce UAE",
    description:
      "Case study: Premium filtered shower head e-commerce platform for UAE — built with Next.js, Stripe payments, and high-conversion checkout for activated carbon shower filters.",
    keywords: ["e-commerce UAE", "shower filter", "Stripe integration", "B2C platform"],
  },
  wagyuprimeuae: {
    title: "Wagyu Prime UAE — Luxury Beef Delivery E-Commerce",
    description:
      "Case study: Direct-to-consumer luxury culinary delivery platform showcasing premium Japanese A5, Australian, and American beef cuts across the UAE.",
    keywords: ["luxury e-commerce", "wagyu delivery", "food delivery platform", "Shopify headless"],
  },
  alfredai: {
    title: "Alfred AI — Adaptive Learning AI Assistant",
    description:
      "Case study: An intelligent AI assistant with customizable difficulty levels for deep concept understanding — featuring real-time stream replies and complexity controls.",
    keywords: ["AI chatbot", "adaptive learning", "LLM application", "SaaS product"],
  },
  "q-pro": {
    title: "Q-Pro — Enterprise Queue Management SaaS",
    description:
      "Case study: Enterprise-grade queue management SaaS preventing overcrowding with QR-based virtual queues, real-time WebSocket updates, and multi-tier admin panels.",
    keywords: ["queue management", "SaaS platform", "enterprise software", "WebSocket real-time"],
  },
};

// Static generation parameters for high performance and SEO
export async function generateStaticParams() {
  return [
    { id: 'neighbourfriendly' },
    { id: 'krishimitra' },
    { id: 'clensifilters' },
    { id: 'wagyuprimeuae' },
    { id: 'alfredai' },
    { id: 'q-pro' },
  ];
}

// Dynamic metadata generation per project page
export async function generateMetadata({ params }) {
  const { id } = await params;
  const seo = PROJECT_SEO[id];

  if (!seo) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `${SITE_URL}/${id}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${id}`,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.png"],
    },
  };
}

export default function Page() {
  return <ProjectDetail />;
}
