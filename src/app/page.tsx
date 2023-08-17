import StaticCarousel from "./components/carousel";
import DefaultCard from "./components/card";
import Contact from "./components/contact";
import HeroSection from "./components/hero-section";
import Faq from "./components/faq";
import About from "./components/about";
import Gallery from "./components/gallery";
import "./styles/gallery.css";
import Company from "./components/company-section";
import ThanksSection from "./components/specialThanks";
import WorkWith from "./components/workWith";
import SocialProof from "./components/socialProof";
import Testimonials from "./components/testimonials";

export default function Home() {
    return (
        <>
            <div style={{ height: "30%" }}>
                <HeroSection />
            </div>
            <div className="flex justify-center mt-8">
                <h1 className="mb-2 text-2xl font-bold">
                    <span className="inline-block pb-3 border-b-2 border-gray-800 ">
                        Does Your Garden Need Some Shape?
                    </span>
                </h1>
            </div>
            <div className="mt-8">
                <DefaultCard />
            </div>
            <div className="mt-8">
                <Company />
            </div>
            <div className="mt-8">
                <ThanksSection />
            </div>
            <div className="Gallery mt-8">
                <Gallery />
            </div>
            <div className="mt-8">
                <About />
            </div>
            <div className="mt-8">
                <WorkWith />
            </div>
            <div className="mt-8">
                <SocialProof />
            </div>
            <div className="mt-8">
                <Testimonials />
            </div>
            <div className="mt-8">
                <Faq />
            </div>
            <div className="mt-8">
                <Contact />
            </div>
        </>
    );
}
