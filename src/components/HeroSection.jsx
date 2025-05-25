import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
    return (
        <section id="home" className="bg-black h-screen flex justify-center items-center text-white py-28">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    Crafting Digital Experiences That Matter
                </motion.h1>

                <motion.p
                    className="text-gray-400 text-lg md:text-xl mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Currently delivering high-quality solutions on Web & App platforms for startups and enterprises.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-medium transition"
                    >
                        Explore Services <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
