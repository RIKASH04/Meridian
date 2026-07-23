import { ImageResponse } from "next/og";

export const alt =
  "Meridian Digital Agency — Web Development, AI Solutions, App Development & Digital Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0A0118 0%, #1A0A3E 30%, #5E17EB 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(94,23,235,0.3)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="35 220 100 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFFFFF" fillRule="evenodd">
                  <path d="M46.04 278.81 c-3.22 -1.66 -6.98 -7.52 -6.98 -10.94 0 -1.95 2.10 -6.88 4.64 -10.79 l1.71 -2.73 2.78 0.15 c2.54 0.15 2.88 0.29 3.91 1.76 0.59 0.88 1.51 2.98 2.05 4.64 0.59 1.66 1.56 3.71 2.20 4.49 1.03 1.27 1.46 1.46 3.42 1.37 l2.20 -0.05 -1.17 2.69 c-1.56 3.52 -4.54 7.91 -6.20 9.08 -2 1.46 -6.01 1.61 -8.54 0.34z" />
                  <path d="M84.33 278.81 c-2.69 -1.46 -4.20 -4.15 -13.82 -24.27 -4.74 -9.86 -9.03 -18.55 -9.52 -19.29 -1.17 -1.66 -2.98 -2.20 -4.69 -1.42 -0.68 0.34 -1.37 0.49 -1.46 0.34 -0.29 -0.29 3.13 -6.93 4.83 -9.47 2.10 -3.08 3.91 -4 7.62 -4 5.42 0 6.69 1.42 12.40 13.43 9.23 19.43 14.70 30.37 15.63 31.35 0.59 0.63 1.90 1.27 2.93 1.42 1.03 0.20 1.86 0.59 1.86 0.88 0 1.27 -4.83 8.89 -6.49 10.25 -2.39 1.95 -6.49 2.29 -9.28 0.78z" />
                  <path d="M119.38 279 c-0.78 -0.39 -1.86 -1.12 -2.34 -1.56 -0.93 -0.83 -9.96 -18.75 -16.89 -33.40 -2.25 -4.74 -4.49 -9.08 -5.03 -9.62 -1.07 -1.22 -3.17 -1.32 -4.69 -0.24 -0.59 0.39 -1.07 0.63 -1.07 0.44 0 -0.54 4.59 -8.84 5.76 -10.40 1.86 -2.54 3.81 -3.52 7.08 -3.52 5.08 0 6.49 1.37 10.79 10.25 1.46 3.08 5.66 11.87 9.33 19.53 3.66 7.67 7.13 14.40 7.67 15.04 0.73 0.73 1.61 1.07 2.93 1.07 1.03 0 1.86 0.10 1.86 0.24 0 0.54 -4.35 9.33 -4.98 10.06 -2.20 2.69 -7.28 3.71 -10.40 2.10z" />
                </g>
              </svg>
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Meridian Digital Agency
            </span>
          </div>

          {/* Main title */}
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            We Build Digital
            <br />
            <span style={{ color: "#B794F4" }}>Experiences</span> That
            <br />
            Drive Growth
          </h1>

          {/* Service tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            {["Web Development", "AI Solutions", "App Development", "ERM Systems", "Digital Marketing"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "100px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #5E17EB, #B794F4, #5E17EB)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
