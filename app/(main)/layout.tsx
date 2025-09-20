import { ReactNode } from "react";

import TopHeader from "@/components/ui/landing/topHeader";
import Footer from "@/components/ui/landing/footer";
import { Header } from "@/components/ui/landing/header";

export default function MainLayoutContent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
