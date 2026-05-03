import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victoria Emife | Marketing Strategist & Brand Growth Designer",
  description:
    "Portfolio website for Victoria Emife, a marketing strategist focused on brand growth, storytelling, campaigns, and measurable customer engagement.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Victoria Emife | Portfolio",
    description:
      "Brand strategy, campaign planning, content systems, and growth-focused marketing execution.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
