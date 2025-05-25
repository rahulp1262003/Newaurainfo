import { motion } from "framer-motion";
import { Code, Smartphone, Brush, Cloud, ShieldCheck, Users } from "lucide-react";

const services = [
    {
        icon: <Code className="w-10 h-10 text-blue-400 group-hover:scale-110 transition" />,
        title: "Web Development",
        description: "Fast, scalable websites using React, Next.js and modern frameworks."
    },
    {
        icon: <Smartphone className="w-10 h-10 text-green-400 group-hover:scale-110 transition" />,
        title: "Mobile App Development",
        description: "Cross-platform mobile apps with Flutter and React Native."
    },
    {
        icon: <Brush className="w-10 h-10 text-pink-400 group-hover:scale-110 transition" />,
        title: "UI/UX Design",
        description: "Intuitive and modern designs that improve user engagement."
    },
    {
        icon: <Cloud className="w-10 h-10 text-purple-400 group-hover:scale-110 transition" />,
        title: "Cloud Integration",
        description: "Deploy, scale, and manage on AWS, Firebase, and GCP."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-red-400 group-hover:scale-110 transition" />,
        title: "QA & Testing",
        description: "Manual and automated testing for flawless experience."
    },
    {
        icon: <Users className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition" />,
        title: "IT Consulting",
        description: "Get expert tech strategy and architecture planning."
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-5xl font-bold mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h2>

                <motion.p
                    className="text-gray-400 mb-12"
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
                        <motion.div
                            key={index}
                            className="group border-2 bg-gray-900 border-gray-700 hover:border-blue-400 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                            {/* <button className="mt-auto text-sm text-blue-400 hover:text-blue-300 transition">
                                Learn More →
                            </button> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
