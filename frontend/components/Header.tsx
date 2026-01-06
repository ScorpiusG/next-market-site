"use client";

import Link from "next/link";
import { colors } from "@/theme/colors";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Jobs", href: "/jobs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: `linear-gradient(180deg, ${colors.surfaceGlassTop} 0%, ${colors.surfaceGlassBottom} 100%)`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.headerBorder}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: colors.textOnPrimary,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
          aria-label="Go to homepage"
        >
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #1050FF 0%, #5AA2FF 55%, #B9E6FF 100%)",
              boxShadow: `0 10px 30px ${colors.glow}`,
              display: "inline-block",
            }}
          />
          <span style={{ fontSize: 18 }}>BlueWave Services</span>
        </Link>

        {/* Nav */}
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                color: colors.link,
                fontWeight: 600,
                fontSize: 14,
                padding: "10px 10px",
                borderRadius: 10,
                transition: "background 160ms ease, color 160ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(16, 80, 255, 0.12)";
                e.currentTarget.style.color = colors.linkHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = colors.link;
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            style={{
              marginLeft: 6,
              textDecoration: "none",
              color: colors.buttonText,
              fontWeight: 700,
              fontSize: 14,
              padding: "10px 14px",
              borderRadius: 999,
              background: colors.buttonBg,
              boxShadow: `0 12px 30px ${colors.glow}`,
              border: "1px solid rgba(255,255,255,0.25)",
              transition: "transform 160ms ease, box-shadow 160ms ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.background = colors.buttonBgHover;
              e.currentTarget.style.boxShadow = "0 16px 36px rgba(16, 80, 255, 0.34)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = colors.buttonBg;
              e.currentTarget.style.boxShadow = `0 12px 30px ${colors.glow}`;
            }}
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
