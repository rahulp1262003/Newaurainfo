import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Services";
import ContactSection from "../components/ContactUS";
import AboutSection from "../components/About";
import ProductSection from "../components/Products";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <ProductSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}
