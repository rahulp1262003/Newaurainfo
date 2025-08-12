import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Services";
import ContactSection from "../components/ContactUS";
import AboutSection from "../components/About";
import ProductSection from "../components/Products";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function Home() {

    return (
        <>
            <Helmet>

                <meta
                    name="description"
                    content="Nexora Info Solution offers expert web, mobile, and software development services tailored to your business needs."
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Nexora Info Solution",
                        "url": "https://nexorainfosolution.com/",
                        "logo": "https://nexorainfosolution.com/assets/Nexora-dCyo8ZZu.png",
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91 82005 02449",
                                "contactType": "Customer Support"
                            },
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91 79905 49414",
                                "contactType": "Sales"
                            },
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91 90337 21291",
                                "contactType": "General Inquiry"
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection />
            <ServicesSection />
            <ProductSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}
