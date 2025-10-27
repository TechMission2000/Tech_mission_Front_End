import { ReactNode } from "react";

import Footer from "@/components/ui/landing/footer";

import Chatbot from "@/components/chat/Chatbot";

import { Header } from "@/components/ui/landing/header";
import TopHeader from "@/components/ui/landing/TopHeader";

export default function MainLayoutContent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="sticky top-0 z-100 -mt-30 -mb-30">
        {" "}
        <TopHeader></TopHeader>
      </div>
      <div className="sticky top-10 z-50 -mt-30">
        <Header></Header>
      </div>

      <div className="min-h-screen">{children}</div>

      <Chatbot />

      <Footer />
    </>
  );
}
