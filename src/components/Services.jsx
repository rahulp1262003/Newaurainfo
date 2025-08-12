import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { services } from "../components/Service";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        provider: {
            "@type": "Organization",
            name: "Nexora Info Solution",
            url: "https://nexorainfosolution.com",
            logo: "https://nexorainfosolution.com/assets/Nexora-dCyo8ZZu.png",
            contactPoint: [
                { "@type": "ContactPoint", telephone: "+91 82005 02449", contactType: "customer service" },
                { "@type": "ContactPoint", telephone: "+91 79905 49414", contactType: "customer service" },
                { "@type": "ContactPoint", telephone: "+91 90337 21291", contactType: "customer service" }
            ]
        },
        serviceType: "Web Development, Mobile App Development, UI/UX Design, Cloud Integration, QA & Testing, IT Consulting",
        areaServed: {
            "@type": "Country",
            name: "India"
        }
    };

    return (
        <section id="services" className="bg-black py-20">
            <Helmet>
                <meta
                    name="description"
                    content="Explore Nexora's professional services: Web Development, Mobile Apps, UI/UX, Cloud, QA & IT Consulting. Boost your business with expert tech solutions."
                />
                <meta
                    name="keywords"
                    content="Nexora Info Solution, Web Development, Mobile App Development, UI UX Design, Cloud Integration, QA Testing, IT Consulting"
                />
                <link rel="canonical" href="https://nexorainfosolution.com/services" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <div className="py-16 mx-[5%] max-md:mx-0 rounded-[5rem] max-md:rounded-none bg-zinc-900 text-black border-zinc-600 max-md:border-b-1 max-md:border-t-1 max-md:border-r-0 max-md:border-l-0 border-1">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        className="text-5xl max-md:text-4xl font-bold mb-4 text-white"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                    >
                        Our Services
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 mb-12 max-w-2xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We provide complete end-to-end solutions for web and mobile development.
                    </motion.p>

                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                to={`/services/${service.slug}`}
                                aria-label={`Learn more about ${service.title}`}
                            >
                                <motion.div
                                    className="group border-2 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 bg-zinc-800 text-white border-zinc-700 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="mb-4 flex justify-center" aria-hidden="true">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl max-md:text-lg font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm mb-4 text-gray-300">{service.description}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
