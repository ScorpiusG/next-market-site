"use client";

import Link from "next/link";
import { colors } from "@/theme/colors";

function WaveBackground() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 220"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.9,
      }}
    >
      <defs>
        <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={colors.primary} stopOpacity="0.9" />
          <stop offset="55%" stopColor={colors.secondary} stopOpacity="0.78" />
          <stop offset="100%" stopColor="#00F" stopOpacity="0.62" />
        </linearGradient>

        <linearGradient id="foamGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.30" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <rect width="1200" height="220" fill="url(#waveGrad)" />

      <path
        d="M0,130 C160,95 300,165 470,135 C650,104 750,40 915,60 C1040,76 1120,128 1200,110 L1200,220 L0,220 Z"
        fill="rgba(255,255,255,0.10)"
      />

      <path
        d="M0,110 C200,60 330,145 500,115 C665,85 770,28 940,48 C1060,62 1140,120 1200,95"
        fill="none"
        stroke="url(#foamGrad)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M0,160 C160,128 320,185 485,160 C650,136 760,98 915,112 C1040,124 1120,160 1200,148 L1200,220 L0,220 Z"
        fill="rgba(0,0,0,0.06)"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        color: colors.textOnPrimary,
        borderTop: `1px solid ${colors.footerBorder}`,
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <WaveBackground />
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 1120,
          margin: "0 auto",
          padding: "44px 20px 28px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
          {/* Column 1 */}
          <div style={{ flex: "1 1 360px", minWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.55) 100%)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.20)",
                  display: "inline-block",
                }}
              />
              <span style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                BlueWave Services
              </span>
            </div>

            <p style={{ margin: 0, maxWidth: 420, opacity: 0.92, lineHeight: 1.6 }}>
              Go with the flow as you use our services without friction.
            </p>

            <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: colors.text,
                  background: "rgba(255,255,255,0.92)",
                  padding: "10px 14px",
                  borderRadius: 999,
                  fontWeight: 800,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.20)",
                }}
              >
                Contact Sales
              </Link>

              <Link
                href="/services"
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.92)",
                  background: "rgba(255,255,255,0.12)",
                  padding: "10px 14px",
                  borderRadius: 999,
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ flex: "1 1 220px", minWidth: 200 }}>
            <div style={{ fontWeight: 800, marginBottom: 10 }}>Company</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
              {[
                { label: "About", href: "/about" },
                { label: "Jobs", href: "/jobs" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(255,255,255,0.92)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.linkHover;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.92)";
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div style={{ flex: "1 1 260px", minWidth: 220 }}>
            <div style={{ fontWeight: 800, marginBottom: 10 }}>Get in touch</div>
            <div style={{ display: "grid", gap: 8, opacity: 0.92 }}>
              <div>
                <span style={{ fontWeight: 700 }}>Email:</span>{" "}
                <a href="mailto:hello@bluepeak.example" style={{ color: "rgba(255,255,255,0.92)" }}>
                  cs@bluewave.example
                </a>
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Phone:</span>{" "}
                <a href="tel:+10000000000" style={{ color: "rgba(255,255,255,0.92)" }}>
                  +1 (234) 567-8901
                </a>
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Hours:</span> Mon-Fri, 9am-6pm
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 26,
            paddingTop: 18,
            borderTop: "1px solid rgba(255,255,255,0.20)",
            display: "flex",
            gap: 12,
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            opacity: 0.95,
          }}
        >
          <div style={{ fontSize: 13 }}>© {year} BlueWave Studio. All rights reserved.</div>
          <div style={{ display: "flex", gap: 14, fontSize: 13 }}>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.92)", textDecoration: "none" }}>
              Privacy
            </Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.92)", textDecoration: "none" }}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
