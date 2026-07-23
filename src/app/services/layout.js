const SITE_URL = "https://www.meridianlabss.com";

export const metadata = {
  title: "Our Services — Web Development, AI Solutions, ERP & Digital Marketing",
  description:
    "Explore Meridian's full-spectrum digital services: custom web & mobile app development, AI solutions & integrations, ERP business systems, cloud & DevOps, e-commerce, cybersecurity, automation, and custom software. Get a free quote today.",
  keywords: [
    "web development services",
    "mobile app development",
    "AI chatbot development",
    "custom ERP software",
    "ERM systems",
    "e-commerce development",
    "cloud DevOps services",
    "cybersecurity services",
    "workflow automation",
    "custom software development",
    "digital agency services",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Digital Services — Web, AI, ERP & More | Meridian Agency",
    description:
      "From stunning websites to enterprise AI solutions — discover the full range of digital services that Meridian builds for businesses worldwide.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meridian Digital Agency Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services — Web, AI, ERP & More | Meridian Agency",
    description:
      "Custom web development, AI solutions, ERP systems, and digital marketing from Meridian — your tech partner for growth.",
    images: ["/og-image.png"],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
