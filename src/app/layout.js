import "./globals.css";

export const metadata = {
  title: "Meridian — Digital Agency | Web, Apps, AI & Digital Marketing",
  description:
    "Meridian is a world-class tech agency creating stunning websites, mobile apps, AI solutions, ERM systems, and digital marketing strategies that drive results.",
  keywords: "tech agency, web development, app development, AI, digital marketing, Meridian",
  openGraph: {
    title: "Meridian — Digital Agency",
    description: "We craft digital experiences that transcend boundaries.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
