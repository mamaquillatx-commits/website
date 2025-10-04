import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import AboutSection from "@/components/about-section";
import CompanyHistory from "@/components/company-history";
import ProductCatalog from "@/components/product-catalog";
import Testimonials from "@/components/testimonials";
import Reviews from "@/components/reviews";
import ContactForm from "@/components/contact-form";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import SponsorsSlider from "@/components/sponsors-slider";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />

        <FeaturedProducts />

        <SponsorsSlider />

        <img
          className="w-full"
          src="/divider-large.png"
          alt="Divider"
          width={1000}
        />
        <AboutSection />
        <CompanyHistory />
        <img
          className="w-full"
          src="/divider-large.png"
          alt="Divider"
          width={1000}
        />

        <ProductCatalog />
        <Testimonials />

        <ContactForm />
        <img
          className="w-full"
          src="/divider-large.png"
          alt="Divider"
          width={1000}
        />
        <FinalCTA />
      </main>
      <WhatsAppFloat />
    </>
  );
}
