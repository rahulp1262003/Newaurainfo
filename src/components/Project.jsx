import { motion } from "framer-motion";

const projects = [
    {
        title: "E-Commerce App",
        image: "https://cdn.dribbble.com/userupload/17919100/file/original-4040769ee756ae0a166b1cedb84e9567.jpg?resize=752x&vertical=center",
        description: "A modern and scalable shopping experience built using Next.js, Stripe, and Tailwind CSS.",
        link: "#"
    },
    {
        title: "Chat Application",
        image: "https://cdn.dribbble.com/userupload/9508817/file/original-4a443e64eb7000c0234a27647ca72e3d.png?resize=752x&vertical=center",
        description: "Real-time messaging platform using Socket.io, Node.js, and MongoDB.",
        link: "#"
    },
    {
        title: "Portfolio Website",
        image: "https://cdn.dribbble.com/userupload/37179259/file/original-99fdefac96631e4668d231378941e405.jpg?resize=752x&vertical=center",
        description: "Responsive and animated personal portfolio using React and Framer Motion.",
        link: "#"
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function ProjectSection() {
    return (
        <section id="projects" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                >
                    Recent Projects
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

                <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                                >
                                    View Project →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
