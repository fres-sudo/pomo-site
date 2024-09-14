import Image from "next/image";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import FAQs from "@/components/FAQs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
			<Banner />
			<Navbar />
			<Hero />
			<Features />
			<div className="py-5 bg-black text-white/60 border-t border-b border-white/20">
				<p className="text-center">
					FREE FOREVER, checkout{" "}
					<a
						className="underline-offset-2 underline"
						href="https://github.com/fres-sudo/pomo">
						Github Repository{" "}
					</a>{" "}
					for more info.
				</p>
			</div>
			<FAQs />
			<CallToAction />
			<Footer />
		</>
	);
}
