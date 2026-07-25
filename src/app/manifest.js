export default function manifest() {
  return {
    name: "Meridian — Digital Agency",
    short_name: "Meridian",
    description:
      "Leading digital agency specializing in web development, app development, AI solutions, ERM systems, and digital marketing.",
    start_url: "/",
    display: "standalone",
    background_color: "#5E17EB",
    theme_color: "#5E17EB",
    orientation: "portrait-primary",
    categories: ["business", "technology"],
    icons: [
      {
        src: "/images/logos/log2.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
