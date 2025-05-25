import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            // Add a small delay before closing to ensure the click completes
            setTimeout(() => setIsOpen(false), 300);
        }
    };

    return (
        <header className="fixed w-full z-50 bg-black bg-opacity-90 text-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold text-blue-500">
                    Newaurainfo
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="hover:text-blue-400 transition cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                                opacity: { duration: 0.2 },
                                height: { delay: 0.2, duration: 0.3 }
                            }
                        }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black px-4 pb-4 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 pt-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-white hover:text-blue-400 transition cursor-pointer py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}