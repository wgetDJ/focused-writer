import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focused Writer",
  description: "A distraction-free, privacy-first markdown writing application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
