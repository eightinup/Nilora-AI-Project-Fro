import { CTA } from "@/components/landing/CTA";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { UseCases } from "@/components/landing/UseCases";

export default function Home() {
  return (
    <main className="electric-page min-h-screen text-zinc-50">
      <Header />
      <Hero />
      <ProductPreview />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
