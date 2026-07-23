const SITE_URL = "https://www.meridianlabss.com";

export const metadata = {
  title: "Our Projects — Portfolio & Case Studies",
  description:
    "Explore Meridian's portfolio of custom digital solutions: peer-to-peer marketplaces, AI-powered farming apps, luxury e-commerce platforms, SaaS products, and enterprise queue management systems. See what we've built.",
  keywords: [
    "web development portfolio",
    "app development case studies",
    "AI project examples",
    "e-commerce website portfolio",
    "SaaS development projects",
    "custom software portfolio",
    "digital agency work",
  ],
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Our Work — Portfolio & Case Studies | Meridian Agency",
    description:
      "Discover the digital products, platforms, and experiences we've engineered for clients across industries.",
    url: `${SITE_URL}/projects`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meridian Digital Agency Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Portfolio & Case Studies | Meridian Agency",
    description:
      "Custom web platforms, AI apps, e-commerce stores, and SaaS products — explore what Meridian has built.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
