import HeroSection from "@/components/ui/HeroSection";
import QuoteForm from "@/components/ui/landing/QuoteForm";
import React from "react";

export default function Quotepage() {
  return (
    <div>
      <HeroSection
        title="Request A Quote"
        subtitle="Home / Quote"
        backgroundImage="/about.png"
      />
      <QuoteForm />
    </div>
  );
}
