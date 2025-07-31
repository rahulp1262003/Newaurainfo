import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "../assets/video/hero.mp4";

const taglines = [
    "Crafting Digital Experiences That Matter",
    "Empowering Businesses with Smart Solutions.",
    "Your Vision, Our Technology.",
    "Innovate, Accelerate, Dominate.",
    "Turning Ideas into Impact."
];

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 }
};

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative bg-black min-h-screen flex justify-center items-center text-white py-28 "
        >

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75"
            >
                <source src={Hero} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 "></div>


            {/* Blurred red spread effect */}
            {/* <div className="absolute max-md:top-[25%] max-md:w-[90vw] max-md:h-[100vw] max-md:left-[-40%] top-[-20%] left-[-20%]  w-[60vw] h-[60vw] bg-blue-600 rounded-full filter blur-[20vw] opacity-50 z-0"></div> */}

            {/* Content */}
            <div className="relative z-30 max-w-6xl mx-auto px-4 text-center ">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={index}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {taglines[index]}
                    </motion.h1>
                </AnimatePresence>

                <motion.p
                    className="text-white text-base sm:text-lg md:text-xl mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Currently delivering high-quality solutions on Web & App platforms for startups and enterprises.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-base sm:text-lg font-medium transition"
                    >
                        Explore Services <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
