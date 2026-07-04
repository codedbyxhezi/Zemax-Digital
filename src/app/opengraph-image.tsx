import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, #182235 0%, #111827 54%, #0d131f 100%)",
          color: "#fffaf1",
          padding: "64px"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-140px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(228, 202, 141, 0.26)",
            filter: "blur(28px)"
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "-120px",
            bottom: "-140px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(189, 150, 81, 0.18)",
            filter: "blur(28px)"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "34px",
            border: "1px solid rgba(228, 202, 141, 0.22)",
            borderRadius: "34px"
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
            zIndex: 1
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}
          >
            <div
              style={{
                width: "74px",
                height: "74px",
                borderRadius: "999px",
                background: "#050505",
                border: "1px solid rgba(228, 202, 141, 0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e4ca8d",
                fontSize: "30px",
                fontWeight: 900
              }}
            >
              Z
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <span
                style={{
                  color: "#e4ca8d",
                  fontSize: "18px",
                  fontWeight: 900,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase"
                }}
              >
                Zemax Digital
              </span>

              <span
                style={{
                  color: "rgba(255, 250, 241, 0.62)",
                  fontSize: "18px",
                  marginTop: "6px"
                }}
              >
                Luxury Digital Studio
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "920px"
            }}
          >
            <h1
              style={{
                margin: 0,
                color: "#fffaf1",
                fontSize: "92px",
                lineHeight: 0.92,
                letterSpacing: "-0.075em",
                fontWeight: 900
              }}
            >
              Premium Websites für starke Marken.
            </h1>

            <p
              style={{
                maxWidth: "760px",
                margin: "30px 0 0",
                color: "rgba(255, 250, 241, 0.7)",
                fontSize: "28px",
                lineHeight: 1.35
              }}
            >
              Branding · Web Design · Next.js Development
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#e4ca8d",
              fontSize: "18px",
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase"
            }}
          >
            <span>zemax.digital</span>
            <span>Luxury Web Development</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}