import { motion } from "framer-motion";
import Quotely from '../assets/Quotely.png'
import HBP from '../assets/HBP1.png'
const projects = [
    {
        title: "Quotely",
        image: Quotely,
        description: "🌟 Share & Download your favorite Suvichar, Quotes, and Video Status.",
        link: "https://play.google.com/store/apps/details?id=com.dailyquotes.app.quotely"
    },
    {
        title: "Human Body Parts",
        image: HBP,
        description: "Human Body Parts Kids Learning is an educational app designed especially for children to learn about human body parts in a fun, interactive, and engaging way.",
        link: "https://play.google.com/store/apps/details?id=com.humanbodyparts.kidslearning.app"
    },


];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function ProjectSection() {
    return (
        <section id="projects" className="py-20 bg-black text-white">
            <div className="w-full mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                >
                    Our Products
                </motion.h2>
                <motion.p
                    className="text-center text-gray-400 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Here's a look at some of our recent work.
                </motion.p>

                <div className="flex justify-center items-center flex-wrap">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition m-5 "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description.length >= 70 ? project.description.slice(0, 70) + ' ...' : project.description}</p>
                                <a
                                    href={project.link}
                                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                                >
                                    View Product →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
