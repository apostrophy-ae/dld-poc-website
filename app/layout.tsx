import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { AccessibilityBar } from "@/components/accessibility-bar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dubai = localFont({
  src: [
    {
      path: "../assets/fonts/Dubai-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Dubai-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Dubai-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Dubai-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dubai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dubai Land Department",
  description: "Dubai Land Department - Where Land Comes to Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dubai.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-dubai antialiased`}
      >
        <div className="pb-[44px]">
          {children}
          <Footer />
        </div>
        <AccessibilityBar />
      </body>
    </html>
  );
}
