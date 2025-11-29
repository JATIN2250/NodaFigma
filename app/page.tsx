import React from "react";
import Header from "@/components/Header"; 
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Meeting from "@/components/Meeting";
import Plan from "@/components/Plan";
import UseCase from "@/components/UseCase";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Noda | HomePage",
  description: "Noda helps product teams improve meeting quality by encouraging productive behaviors and adding structure.",
  openGraph: {
    title: 'Noda | Efficient Meetings',
    description: 'Noda helps product teams improve meeting quality.',
    url: 'https://noda-figma-jmjhikhg5-jitendra-tulswanis-projects.vercel.app/', 
    siteName: 'Noda',
    locale: 'en_US',
    type: 'website',
  },
};
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