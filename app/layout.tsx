import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TopHeader from "@/components/ui/landing/topHeader";
import { Header } from "@/components/ui/landing/header";
import Footer from "@/components/ui/landing/footer";
import ReduxProvider from "./redux/ReduxProvider";
// ✅ Import provider

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-lato antialiased",
          raleway.variable,
          lato.variable
        )}
      >
        <ReduxProvider>
          <TopHeader />
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
