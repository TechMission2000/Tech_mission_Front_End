import { ReactNode } from "react";

import TopHeader from "@/components/ui/landing/topHeader";
import Footer from "@/components/ui/landing/footer";
import { Header } from "@/components/ui/landing/header";
import Chatbot from "@/components/chat/Chatbot";

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
      <div className="bg-black w-full">
        <Chatbot />
      </div>
      <Footer />
    </>
  );
}
