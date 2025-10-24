// app/layout.tsx
import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReduxProvider from "@/redux/ReduxProvider";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Tech Mission",
  description: "Make your Digital presence matter",
  icons: {
    icon: [
      {
        url: "/logos/blue_logo.svg",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)", // Light theme → blue
      },
      {
        url: "/logos/white-logo-svg.svg",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)", // Dark theme → white
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-lato antialiased",
          raleway.variable,
          lato.variable
        )}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
