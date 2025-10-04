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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <FeaturedProducts />
        <AboutSection />
        <CompanyHistory />
        <ProductCatalog />
        <Testimonials />

        <ContactForm />
        <FinalCTA />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
