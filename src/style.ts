import type {CSSProperties} from "react";

export const palette = {
  ink: "#101418",
  paper: "#F7F4EF",
  muted: "#5B6570",
  line: "rgba(16, 20, 24, 0.16)",
  panel: "rgba(255, 255, 255, 0.72)"
};

export const fullFrame: CSSProperties = {
  width: "100%",
  height: "100%",
  backgroundColor: palette.paper,
  color: palette.ink,
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
};

