export type ThemeColors = {
  // Brand
  primary: string;
  secondary: string;
  accent: string;

  // Text
  text: string;
  textMuted: string;
  textOnPrimary: string;

  // Links
  link: string;
  linkHover: string;

  // Buttons
  buttonText: string;
  buttonBg: string;
  buttonBgHover: string;

  // Surfaces & borders
  headerBorder: string;
  footerBorder: string;
  surfaceGlassTop: string;
  surfaceGlassBottom: string;

  // Effects
  glow: string;
};

export const colors: ThemeColors = {
  // Brand palette (cooling blue)
  primary: "#143CFF",     // header gradient top-ish
  secondary: "#1050FF",   // main theme
  accent: "#5DF",         // cyan-ish nav text

  // Text
  text: "#0B1220",
  textMuted: "rgba(11, 18, 32, 0.70)",
  textOnPrimary: "#FFFFFF",

  // Links
  link: "#5DF",
  linkHover: "#FFFFFF",

  // Buttons
  buttonText: "#FFFFFF",
  buttonBg: "linear-gradient(135deg, #1050FF 0%, #2C7BFF 55%, #72C8FF 100%)",
  buttonBgHover: "linear-gradient(135deg, #0A3BFF 0%, #2C7BFF 55%, #8BE3FF 100%)",

  // Surfaces & borders
  headerBorder: "rgba(16, 80, 255, 0.12)",
  footerBorder: "rgba(16, 80, 255, 0.18)",
  surfaceGlassTop: "rgba(20, 60, 255, 1)",
  surfaceGlassBottom: "rgba(20, 60, 255, 0.6)",

  // Effects
  glow: "rgba(16, 80, 255, 0.28)",
};
