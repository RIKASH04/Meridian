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
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
