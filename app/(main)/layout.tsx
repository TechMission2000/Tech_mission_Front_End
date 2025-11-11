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
      <TopHeader></TopHeader>

      <Header></Header>

      <div className="min-h-screen">{children}</div>

      <Chatbot />

      <Footer />
    </>
  );
}
