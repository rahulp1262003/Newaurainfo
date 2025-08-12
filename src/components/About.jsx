import React from "react";
import aboutImg from "../assets/about.png"; // Ensure this file exists
import { Helmet } from "react-helmet-async";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="scroll-mt-[50px] py-16 bg-black text-white"
            aria-labelledby="about-heading"
        >
            <Helmet>
                <meta name="description" content="Learn about Nexora Info Solution – our mission to deliver high-quality digital solutions, our vision of global innovation, and the values we stand for." />
                <meta name="keywords" content="About Nexora, Nexora Info Solution, Mission, Vision, Values, IT Company" />
                <meta property="og:title" content="Nexora Info Solution | About - Who We Are" />
                <meta property="og:description" content="We are dedicated to delivering high-quality software solutions and becoming a global leader in digital transformation." />
                <meta property="og:image" content="https://nexorainfosolution.com/assets/Nexora-dCyo8ZZu.png" />
                <meta property="og:url" content="https://nexorainfosolution.com/#about" />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Nexora Info Solution",
                        "url": "https://nexorainfosolution.com/",
                        "logo": "https://nexorainfosolution.com/assets/Nexora-dCyo8ZZu.png",
                        "description": "Nexora Info Solution is an IT company offering web development, mobile app development, UI/UX design, cloud integration, QA & testing, and IT consulting services.",
                        "contactPoint": [
                            { "@type": "ContactPoint", "telephone": "+91 82005 02449", "contactType": "customer service" },
                            { "@type": "ContactPoint", "telephone": "+91 79905 49414", "contactType": "customer service" },
                            { "@type": "ContactPoint", "telephone": "+91 90337 21291", "contactType": "customer service" }
                        ]
                    })}
                </script>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative">
                <h2 id="about-heading" className="text-5xl max-md:text-4xl font-bold">About Us</h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 relative">
                    <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
                    <div className="grid gap-6">
                        <article className="bg-zinc-800 p-4 rounded-xl shadow border border-gray-700" aria-label="Our Mission">
                            <h4 className="text-xl font-semibold text-white mb-2">Our Mission</h4>
                            <p className="text-zinc-400 text-sm">
                                To deliver high-quality, reliable, and scalable software solutions.
                            </p>
                        </article>
                        <article className="bg-zinc-800 p-4 rounded-xl shadow border border-gray-700" aria-label="Our Vision">
                            <h4 className="text-xl font-semibold text-white mb-2">Our Vision</h4>
                            <p className="text-zinc-400 text-sm">
                                To become a global leader in digital transformation and innovation.
                            </p>
                        </article>
                        <article className="bg-zinc-800 p-4 rounded-xl shadow border border-gray-700" aria-label="Our Values">
                            <h4 className="text-xl font-semibold text-white mb-2">Our Values</h4>
                            <p className="text-zinc-400 text-sm">
                                Integrity, excellence, and customer satisfaction drive everything we do.
                            </p>
                        </article>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={aboutImg}
                        alt="Illustration representing Nexora Info Solution and its values"
                        loading="lazy"
                        width="400"
                        height="400"
                        className="rounded-2xl shadow-lg border border-gray-800 w-full max-w-md h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
