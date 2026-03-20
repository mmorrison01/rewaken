import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rewaken — GLP-1 Knowledge & Side Effects",
  description: "Your comprehensive guide to GLP-1 therapy — understanding medications, managing side effects, and building lasting wellness habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
