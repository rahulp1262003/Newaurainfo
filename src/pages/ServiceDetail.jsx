import { useState } from 'react'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { services } from "../components/Service";
import HeroBanner from "../components/HeroBanner";
import DiffQues from '../components/DiffQues';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    const [openFAQIndex, setOpenFAQIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "Organization",
            "name": "Nexora Info Solution",
            "url": "https://nexorainfosolution.com/",
            "logo": "https://nexorainfosolution.com/assets/Nexora-dCyo8ZZu.png",
            "contactPoint": [
                { "@type": "ContactPoint", "telephone": "+91 82005 02449", "contactType": "customer support" },
                { "@type": "ContactPoint", "telephone": "+91 79905 49414", "contactType": "customer support" },
                { "@type": "ContactPoint", "telephone": "+91 90337 21291", "contactType": "customer support" }
            ]
        },
        "description": service.description,
        "areaServed": "IN"
    };

    return (
        <div className="min-h-screen max-md:pt-30 flex flex-col justify-center items-center bg-black text-white py-16 px-6 max-xl:p-0">
            <Helmet>
                <title>{service.title} | Nexora</title>
                <meta name="description" content={service.description} />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <HeroBanner
                title={service.title}
                icon={service.icon}
                desc={service.description}
                bgColor={service.bgColor}
            />

            <div className="max-w-4xl mx-auto px-6 max-md:p-0 py-12 space-y-10">
                <section>
                    <h2 className="text-5xl max-md:text-3xl font-semibold mb-10 text-zinc-300 max-md:pl-10">Overview</h2>
                    <div className="bg-neutral-900 px-10 py-12 rounded-4xl max-md:rounded-none">
                        <p className="text-zinc-300 text-lg max-md:text-[1rem] italic">{service.longDescription}</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-5xl max-md:text-3xl font-semibold mb-10 text-zinc-300 max-md:pl-10">What We Offer</h2>
                    <div className="bg-neutral-900 px-10 py-12 rounded-4xl max-md:rounded-none">
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 text-lg max-md:text-[1rem]">
                            {service.features.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-5xl max-md:text-3xl font-semibold mb-10 text-zinc-300 max-md:pl-10">Why Choose Us</h2>
                    <div className="bg-neutral-900 px-10 py-12 rounded-4xl max-md:rounded-none">
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 text-lg max-md:text-[1rem] ">
                            {service.benefits.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className='bg-white px-8 py-10 rounded-4xl max-md:rounded-none'>
                    <h2 className="text-5xl max-md:text-3xl font-semibold mb-5 text-black ">FAQs</h2>
                    <div className="space-y-4">
                        {service.faqs.map((faq, idx) => {
                            const isOpen = openFAQIndex === idx;
                            return (
                                <div key={idx} className={`border-b p-3 max-md:p-1 ${isOpen ? 'bg-[#1D56E7] rounded-2xl text-white' : 'border-black text-black'}  cursor-pointer transition-all duration-200 ease-in-out`}>
                                    <button
                                        onClick={() => toggleFAQ(idx)}
                                        className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
                                    >
                                        <span className="font-semibold text-lg ">{faq.q}</span>
                                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial="collapsed"
                                                animate="open"
                                                exit="collapsed"
                                                variants={{
                                                    open: { opacity: 1, height: "auto" },
                                                    collapsed: { opacity: 0, height: 0 }
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="px-4 overflow-hidden"
                                            >
                                                <p className="pb-4">{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                    <div className=' pt-10'>
                        <DiffQues />
                    </div>
                </section>

                <div className="text-center my-10 ">
                    <a
                        href="/"
                        className="text-blue-400 hover:underline text-lg flex justify-center items-center"
                    >
                        <ChevronLeft className="mr-3" /> Back to All Services
                    </a>
                </div>
            </div>
        </div>
    );
}
