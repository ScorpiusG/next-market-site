import Link from "next/link";
import { colors } from "@/theme/colors";

const SectionTitle = ({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) => (
  <div style={{ marginBottom: 18 }}>
    <div
      style={{
        fontSize: 13,
        fontWeight: 900,
        color: colors.secondary,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
      }}
    >
      {eyebrow}
    </div>
    <h2
      style={{
        margin: "10px 0 0",
        fontSize: 30,
        letterSpacing: "-0.02em",
        color: colors.text,
      }}
    >
      {title}
    </h2>
    <p style={{ margin: "10px 0 0", color: colors.textMuted, lineHeight: 1.7, maxWidth: 860 }}>
      {desc}
    </p>
  </div>
);

const InfoCard = ({
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
      background: "rgba(255,255,255,0.86)",
      border: "1px solid rgba(16, 80, 255, 0.10)",
      boxShadow: "0 18px 50px rgba(16, 80, 255, 0.10)",
      overflow: "hidden",
    }}
  >
    <div style={{ padding: 22 }}>
      <div style={{ fontSize: 16, fontWeight: 950, color: colors.text }}>{title}</div>
      <div style={{ marginTop: 8, color: colors.textMuted, lineHeight: 1.7, fontSize: 14 }}>
        {description}
      </div>

      <ul
        style={{
          marginTop: 14,
          marginBottom: 0,
          paddingLeft: 18,
          color: "rgba(11, 18, 32, 0.82)",
          lineHeight: 1.85,
          fontSize: 14,
        }}
      >
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  </div>
);

const QuotePanel = ({
  title,
  body,
  author,
}: {
  title: string;
  body: string;
  author: string;
}) => (
  <div
    style={{
      borderRadius: 26,
      padding: 24,
      background: "rgba(255,255,255,0.86)",
      border: "1px solid rgba(16, 80, 255, 0.10)",
      boxShadow: "0 22px 60px rgba(16, 80, 255, 0.10)",
    }}
  >
    <div style={{ fontWeight: 950, color: colors.text }}>{title}</div>
    <p style={{ margin: "10px 0 0", color: colors.textMuted, lineHeight: 1.75 }}>
      {body}
    </p>
    <div style={{ marginTop: 12, fontSize: 13, fontWeight: 900, color: "rgba(11, 18, 32, 0.78)" }}>
      — {author}
    </div>
  </div>
);

export default function AboutPage() {
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
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-180px",
            top: "-180px",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(93,221,255,0.55), rgba(16,80,255,0.25), rgba(16,80,255,0))",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-240px",
            top: "120px",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(16,80,255,0.35), rgba(93,221,255,0.18), rgba(16,80,255,0))",
          }}
        />

        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "54px 20px 34px" }}>
          <div
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
              fontWeight: 800,
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
            About BlueWave Services
          </div>

          <h1
            style={{
              margin: "14px 0 0",
              color: colors.textOnPrimary,
              fontSize: 42,
              lineHeight: 1.10,
              letterSpacing: "-0.03em",
              fontWeight: 950,
              maxWidth: 860,
            }}
          >
            Professional logistics built on structure, visibility, and operational discipline.
          </h1>

          <p
            style={{
              margin: "14px 0 0",
              color: "rgba(255,255,255,0.92)",
              maxWidth: 860,
              lineHeight: 1.75,
              fontSize: 15,
            }}
          >
            BlueWave Services provides logistics and transport solutions for organizations that require
            consistent performance, formal handover standards, and clear accountability. We support
            domestic delivery operations, private transportation needs, and international shipping coordination.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                color: colors.buttonText,
                fontWeight: 900,
                fontSize: 14,
                padding: "12px 16px",
                borderRadius: 999,
                background: colors.buttonBg,
                boxShadow: "0 14px 34px rgba(16, 80, 255, 0.30)",
                border: "1px solid rgba(255,255,255,0.22)",
                zIndex: 10,
              }}
            >
              Request a Quote
            </Link>

            <Link
              href="/services"
              style={{
                textDecoration: "none",
                color: "rgba(255,255,255,0.92)",
                fontWeight: 900,
                fontSize: 14,
                padding: "12px 16px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                zIndex: 10,
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ padding: "44px 20px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Who we are"
            title="A delivery partner aligned with enterprise expectations."
            desc="We operate with a formal approach: structured communication, documented handovers, and clear escalation paths. This model supports reliability across daily volume and time-sensitive transport requirements."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 16,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                borderRadius: 26,
                padding: 24,
                background: "rgba(255,255,255,0.86)",
                border: "1px solid rgba(16, 80, 255, 0.10)",
                boxShadow: "0 22px 60px rgba(16, 80, 255, 0.10)",
              }}
            >
              <div style={{ fontWeight: 950, color: colors.text }}>Our Operating Principles</div>

              <div style={{ marginTop: 14, display: "grid", gap: 12 }}>
                {[
                  {
                    title: "Consistency over claims",
                    desc: "We prioritize repeatable procedures and service-level clarity over marketing promises.",
                  },
                  {
                    title: "Visibility and traceability",
                    desc: "Where applicable, we support tracking checkpoints, proof-of-delivery, and structured reporting.",
                  },
                  {
                    title: "Accountability with escalation",
                    desc: "Exceptions happen. We manage them with defined ownership, escalation pathways, and timely communication.",
                  },
                  {
                    title: "Professional handling standards",
                    desc: "We maintain formal handover expectations for business deliveries and sensitive transport requirements.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      borderRadius: 18,
                      padding: 16,
                      background: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(16, 80, 255, 0.10)",
                    }}
                  >
                    <div style={{ fontWeight: 900, color: colors.text }}>{item.title}</div>
                    <div style={{ marginTop: 8, color: colors.textMuted, lineHeight: 1.7, fontSize: 14 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <QuotePanel
              title="Formal service mindset"
              body="In logistics, reliability is created through discipline: documented processes, clear responsibility, and consistent execution. Our clients engage us because they value structure, visibility, and predictable outcomes."
              author="Operations Team"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: "0 20px 54px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="What we do"
            title="Coverage across logistics, private transport, and international shipping."
            desc="We support operational needs across multiple service lines with the same priority: professionalism, accountability, and clarity."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            <InfoCard
              title="Domestic Delivery & Fulfillment"
              description="Daily delivery operations for businesses that require consistent handling and repeatable standards."
              bullets={[
                "Scheduled pickups and route planning support",
                "Proof-of-delivery practices where applicable",
                "Exception handling and structured communication",
              ]}
            />
            <InfoCard
              title="Private Transportation"
              description="Professional transportation for personnel or time-sensitive items where punctuality and discretion matter."
              bullets={[
                "Pre-arranged scheduling and dispatch coordination",
                "Priority transport workflows for sensitive deliveries",
                "Driver coordination with formal handover expectations",
              ]}
            />
            <InfoCard
              title="International Shipping Coordination"
              description="Coordination support for international shipments with documentation guidance and status oversight."
              bullets={[
                "Multi-carrier coordination and booking support",
                "Documentation guidance and checklists (where applicable)",
                "Status updates and exception management support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* COMPLIANCE / PROCESS */}
      <section style={{ padding: "0 20px 54px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            borderRadius: 26,
            background: "rgba(255,255,255,0.86)",
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
            <div style={{ fontSize: 13, fontWeight: 900, color: colors.secondary, letterSpacing: "0.10em" }}>
              PROCESS & GOVERNANCE
            </div>
            <h3 style={{ margin: "10px 0 0", fontSize: 24, letterSpacing: "-0.02em", color: colors.text }}>
              How we ensure predictable service outcomes.
            </h3>
            <p style={{ margin: "10px 0 0", color: colors.textMuted, lineHeight: 1.7, maxWidth: 900 }}>
              Our approach is intentionally formal. We align expectations, document requirements, and maintain a clear operational cadence.
            </p>
          </div>

          <div style={{ padding: 26, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 14 }}>
            {[
              {
                step: "01",
                title: "Scope definition",
                desc: "Confirm lanes, volume, timelines, and service requirements.",
              },
              {
                step: "02",
                title: "Operating standards",
                desc: "Set handling notes, escalation contacts, and reporting cadence.",
              },
              {
                step: "03",
                title: "Execution & tracking",
                desc: "Deliver with structured updates and exception handling.",
              },
              {
                step: "04",
                title: "Review & optimization",
                desc: "Refine routes, timing, and service terms where needed.",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  borderRadius: 18,
                  padding: 16,
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(16, 80, 255, 0.10)",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontWeight: 950, color: colors.text }}>{s.title}</div>
                  <div
                    style={{
                      fontWeight: 950,
                      color: colors.secondary,
                      opacity: 0.85,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.step}
                  </div>
                </div>
                <div style={{ marginTop: 8, color: colors.textMuted, lineHeight: 1.7, fontSize: 14 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 20px 70px" }}>
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
            position: "relative",
            overflow: "hidden",
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

          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.25fr 0.75fr",
              gap: 16,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.10em", opacity: 0.92 }}>
                ENGAGE WITH BLUEWAVE
              </div>
              <h3 style={{ margin: "10px 0 0", fontSize: 28, letterSpacing: "-0.02em" }}>
                Request a formal quotation and operational scope.
              </h3>
              <p style={{ margin: "10px 0 0", lineHeight: 1.75, opacity: 0.92, maxWidth: 820 }}>
                Share your lanes, delivery volume, and timelines. We will respond with a structured scope, service-level options, and pricing.
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
                  fontWeight: 950,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                }}
              >
                Request a Quote
              </Link>

              <Link
                href="/services"
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.92)",
                  background: "rgba(255,255,255,0.12)",
                  padding: "12px 16px",
                  borderRadius: 999,
                  fontWeight: 950,
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                Review Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive: plain CSS (not styled-jsx) */}
      <section aria-hidden="true" style={{ padding: 0 }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 980px) {
                main section div[style*="grid-template-columns: 1.2fr 0.8fr"] { grid-template-columns: 1fr !important; }
                main section div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
                main section div[style*="repeat(4"] { grid-template-columns: 1fr !important; }
                main section div[style*="1.25fr 0.75fr"] { grid-template-columns: 1fr !important; }
              }
            `,
          }}
        />
      </section>
    </main>
  );
}
