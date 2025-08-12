import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Quotely from '../assets/Quotely.png';
import HBP from '../assets/HBP1.png';

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
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function ProductSection() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Our Products",
        "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": project.link,
            "name": project.title,
            "description": project.description
        }))
    };

    return (
        <section id="product" className="py-20 bg-black text-white" aria-labelledby="products-heading">
            <Helmet>
                <meta name="description" content="Explore innovative digital products by Nexora Info Solution including Quotely and Human Body Parts Learning App." />
                <meta name="keywords" content="Nexora products, Quotely app, Human Body Parts app, Nexora apps, Android educational apps, daily quotes app" />
                <meta property="og:title" content="Our Products | Nexora Info Solution" />
                <meta property="og:description" content="See what Nexora has built: Quotely, Human Body Parts Kids Learning and more." />
                <meta property="og:image" content="https://nexorainfosolution.com/assets/Nexora-dCyo8ZZu.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nexorainfosolution.com/#product" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <div className="w-full mx-auto px-4">
                <motion.h2
                    id="products-heading"
                    className="text-5xl max-md:text-4xl font-bold text-center mb-4"
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
                        <motion.article
                            key={index}
                            className="mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition m-5 "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} product preview`}
                                loading="lazy"
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-6 bg-zinc-900">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description.length >= 70
                                        ? project.description.slice(0, 70) + ' ...'
                                        : project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                    aria-label={`View ${project.title} on Google Play Store`}
                                >
                                    View Product →
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
