import Image from "next/image";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import FAQs from "@/components/FAQs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FreeTicker from "@/components/FreeTicker";
export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <div className="py-5 bg-black text-white/60 border-t border-b border-white/20">
        <p className="text-center">
          ⭐️
          This project is Open Source, please consider {" "}
          <a
            className="underline-offset-2 underline"
            target="_blank"
            href="https://github.com/fres-sudo/pomo">
            giving a star
          </a>{" "}
          to help it. ⭐️

        </p>
      </div>
      <ProductShowcase />
      <FreeTicker />
      <Features />
      <FreeTicker />
      <section id="faq"><FAQs /></section>


      <CallToAction />
      <Footer />
    </>
  );
}
