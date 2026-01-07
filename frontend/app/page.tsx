import Link from "next/link";
import { colors } from "@/theme/colors";

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div
    style={{
      padding: 18,
      borderRadius: 18,
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.18)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    }}
  >
    <div style={{ fontSize: 22, fontWeight: 900, color: colors.textOnPrimary }}>
      {value}
    </div>
    <div style={{ marginTop: 6, fontSize: 13, opacity: 0.9, color: "rgba(255,255,255,0.92)" }}>
      {label}
    </div>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.22)",
      background: "rgba(255,255,255,0.10)",
      color: "rgba(255,255,255,0.92)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.01em",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    }}
  >
    <span
      aria-hidden="true"
      style={{
        width: 8,
        height: 8,
        borderRadius: 999,
        background: colors.link,
        boxShadow: `0 0 0 4px rgba(93, 221, 255, 0.15)`,
      }}
    />
    {children}
  </span>
);

const ServiceCard = ({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) => (
  <div
    style={{
      borderRadius: 22,
      background: "rgba(255,255,255,0.85)",
      border: "1px solid rgba(16, 80, 255, 0.10)",
      boxShadow: "0 22px 55px rgba(16, 80, 255, 0.10)",
      overflow: "hidden",
    }}
  >
    <div style={{ padding: 22 }}>
      <div style={{ fontSize: 16, fontWeight: 900, color: colors.text }}>{title}</div>
      <div style={{ marginTop: 8, color: colors.textMuted, lineHeight: 1.65, fontSize: 14 }}>
        {description}
      </div>

      <ul
        style={{
          marginTop: 14,
          marginBottom: 0,
          paddingLeft: 18,
          color: "rgba(11, 18, 32, 0.82)",
          lineHeight: 1.8,
          fontSize: 14,
        }}
      >
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>

    <div
      style={{
        padding: 18,
        borderTop: "1px solid rgba(16, 80, 255, 0.10)",
        background: "linear-gradient(90deg, rgba(16,80,255,0.06), rgba(93,221,255,0.06))",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 800, color: "rgba(11, 18, 32, 0.72)" }}>
        Enterprise-ready • SLA options available
      </span>
      <Link
        href="/services"
        style={{
          textDecoration: "none",
          color: colors.secondary,
          fontWeight: 900,
          fontSize: 13,
          padding: "10px 12px",
          borderRadius: 999,
          border: `1px solid rgba(16, 80, 255, 0.22)`,
          background: "rgba(255,255,255,0.7)",
        }}
      >
        Learn more →
      </Link>
    </div>
  </div>
);

export default function Page() {
  return (
    <main style={{ background: "#F6F9FF", color: colors.text }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${colors.surfaceGlassTop} 0%, ${colors.surfaceGlassBottom} 55%, rgba(246,249,255,1) 100%)`,
          // borderBottom: "1px solid rgba(16, 80, 255, 0.12)",
        }}
      >
        {/* Decorative orb */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-180px",
            top: "-200px",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(93,221,255,0.55), rgba(16,80,255,0.25), rgba(16,80,255,0))",
            filter: "blur(0px)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-220px",
            top: "120px",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(16,80,255,0.35), rgba(93,221,255,0.18), rgba(16,80,255,0))",
          }}
        />

        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "56px 20px 34px",
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
              <Pill>Domestic Delivery</Pill>
              <Pill>Private Transportation</Pill>
              <Pill>International Shipping</Pill>
            </div>

            <h1
              style={{
                margin: 0,
                color: colors.textOnPrimary,
                fontSize: 44,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 950,
                maxWidth: 720,
              }}
            >
              Logistics you can trust — delivered with precision and accountability.
            </h1>

            <p
              style={{
                marginTop: 14,
                marginBottom: 0,
                color: "rgba(255,255,255,0.92)",
                maxWidth: 680,
                lineHeight: 1.7,
                fontSize: 15,
              }}
            >
              BlueWave Services provides end-to-end logistics, private transport solutions, and
              international shipping coordination for businesses that require consistent service,
              transparent tracking, and formal operational standards.
            </p>

            <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: colors.buttonText,
                  fontWeight: 800,
                  fontSize: 14,
                  padding: "12px 16px",
                  borderRadius: 999,
                  background: colors.buttonBg,
                  boxShadow: "0 14px 34px rgba(16, 80, 255, 0.30)",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                Request a Quote
              </Link>

              <Link
                href="/services"
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.92)",
                  fontWeight: 800,
                  fontSize: 14,
                  padding: "12px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                View Services
              </Link>
            </div>

            <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{ color: "rgba(255,255,255,0.86)", fontSize: 13, fontWeight: 700 }}>
                Formal operations:
              </span>
              <span style={{ color: "rgba(255,255,255,0.86)", fontSize: 13 }}>
                service-level commitments • documented handling • escalation pathways
              </span>
            </div>
          </div>

          {/* Right: Stats panel */}
          <div
            style={{
              borderRadius: 26,
              padding: 22,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.92)", fontWeight: 900, fontSize: 14 }}>
              Operational Overview
            </div>
            <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              <Stat label="Tracked deliveries with formal handover" value="99.9% documented" />
              <Stat label="Priority transport scheduling" value="Same-day options" />
              <Stat label="International shipping coordination" value="Multi-carrier support" />
            </div>

            <div
              style={{
                marginTop: 16,
                paddingTop: 14,
                borderTop: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.88)",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              We prioritize consistency over promises. Where required, we provide written
              service-level terms, escalation procedures, and structured reporting.
            </div>
          </div>
        </div>

        {/* Responsive tweak (no styled-jsx) */}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 20px 22px" }}>
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, rgba(255,255,255,0.00), rgba(255,255,255,0.35), rgba(255,255,255,0.00))",
              opacity: 0.9,
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "44px 20px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 900, color: colors.secondary, letterSpacing: "0.08em" }}>
                SERVICES
              </div>
              <h2 style={{ margin: "10px 0 0", fontSize: 30, letterSpacing: "-0.02em" }}>
                Built for reliability in day-to-day operations.
              </h2>
              <p style={{ margin: "10px 0 0", color: colors.textMuted, maxWidth: 720, lineHeight: 1.7 }}>
                Structured coverage across last-mile delivery, private transportation, and
                international shipping coordination — with clear documentation and professional handling.
              </p>
            </div>

            <Link
              href="/services"
              style={{
                textDecoration: "none",
                color: colors.secondary,
                fontWeight: 900,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(16, 80, 255, 0.22)",
                background: "rgba(255,255,255,0.7)",
              }}
            >
              View all services →
            </Link>
          </div>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            <ServiceCard
              title="Domestic Delivery & Fulfillment"
              description="Reliable door-to-door delivery with structured scanning, handover procedures, and escalation pathways."
              bullets={[
                "Scheduled pickups and route planning",
                "Tracking and proof of delivery support",
                "Business delivery standards for consistency",
              ]}
            />

            <ServiceCard
              title="Private Transportation"
              description="Professional transport services for personnel or time-sensitive items where punctuality and discretion matter."
              bullets={[
                "Pre-arranged scheduling and dispatch",
                "Priority handling for sensitive deliveries",
                "Formal driver coordination and support",
              ]}
            />

            <ServiceCard
              title="International Shipping Coordination"
              description="International shipping support across common lanes with documentation guidance and coordination support."
              bullets={[
                "Multi-carrier coordination and booking",
                "Documentation guidance and checklists",
                "Status updates and exception handling",
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "0 20px 54px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            borderRadius: 26,
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(16, 80, 255, 0.10)",
            boxShadow: "0 22px 60px rgba(16, 80, 255, 0.10)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: 26,
              background: "linear-gradient(90deg, rgba(16,80,255,0.08), rgba(93,221,255,0.08))",
              borderBottom: "1px solid rgba(16, 80, 255, 0.10)",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 900, color: colors.secondary, letterSpacing: "0.08em" }}>
              GOVERNANCE & QUALITY
            </div>
            <h3 style={{ margin: "10px 0 0", fontSize: 24, letterSpacing: "-0.02em" }}>
              Professional standards, not informal promises.
            </h3>
            <p style={{ margin: "10px 0 0", color: colors.textMuted, lineHeight: 1.7, maxWidth: 860 }}>
              Our model is designed for business environments that require structured processes:
              documented handovers, clear escalation routes, and consistent communication.
            </p>
          </div>

          <div style={{ padding: 26, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
            {[
              {
                title: "Traceability",
                desc: "Clear tracking checkpoints and proof-of-delivery support where applicable.",
              },
              {
                title: "Accountability",
                desc: "Defined ownership, escalation paths, and structured updates for exceptions.",
              },
              {
                title: "Consistency",
                desc: "Repeatable procedures that support stable service across daily operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: 20,
                  padding: 18,
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(16, 80, 255, 0.10)",
                }}
              >
                <div style={{ fontWeight: 900, color: colors.text }}>{item.title}</div>
                <div style={{ marginTop: 8, color: colors.textMuted, lineHeight: 1.65, fontSize: 14 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 20px 68px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            borderRadius: 26,
            padding: 28,
            background: `linear-gradient(135deg, ${colors.secondary} 0%, #2C7BFF 55%, #8BE3FF 100%)`,
            color: colors.textOnPrimary,
            boxShadow: "0 30px 80px rgba(16, 80, 255, 0.25)",
            border: "1px solid rgba(255,255,255,0.22)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -120,
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.0) 60%)",
              transform: "rotate(8deg)",
            }}
          />

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 16, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.08em", opacity: 0.92 }}>
                NEXT STEPS
              </div>
              <h3 style={{ margin: "10px 0 0", fontSize: 28, letterSpacing: "-0.02em" }}>
                Request a formal quotation and service scope.
              </h3>
              <p style={{ margin: "10px 0 0", lineHeight: 1.7, opacity: 0.92, maxWidth: 760 }}>
                Share your delivery volume, locations, and service requirements. We will respond with
                a structured scope, timelines, and pricing options.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: colors.text,
                  background: "rgba(255,255,255,0.92)",
                  padding: "12px 16px",
                  borderRadius: 999,
                  fontWeight: 900,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                }}
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.92)",
                  background: "rgba(255,255,255,0.12)",
                  padding: "12px 16px",
                  borderRadius: 999,
                  fontWeight: 900,
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                Speak to Operations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple responsive fallback: stack grids naturally when narrow */}
      <section aria-hidden="true" style={{ padding: 0 }}>
        <style
          // This is NOT styled-jsx; it's a plain <style> tag, so it won’t trigger client-only.
          // But since this page is a Server Component by default, keep it minimal.
          dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 980px) {
                main section > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
              }
              @media (max-width: 980px) {
                main section div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
              }
            `,
          }}
        />
      </section>
    </main>
  );
}
