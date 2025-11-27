// app/page.tsx (or pages/index.tsx, depending on your Next.js setup)
import React from "react";

// Assuming components are imported from the components directory
import Header from "@/components/Header"; 
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Meeting from "@/components/Meeting";
import Plan from "@/components/Plan";
import UseCase from "@/components/UseCase";
import Footer from "@/components/Footer";

export default function Feature() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Work />
      <Meeting />
      <Plan />
      <UseCase />
      <Footer />
    </main>
  );
}