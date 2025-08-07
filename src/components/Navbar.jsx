import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Nexora from "../assets/Nexora.png";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Product", href: "#product" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();

            const handleScroll = () => {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => setIsOpen(false), 300);
                }
            };

            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    handleScroll();
                }, 300);
            } else {
                handleScroll();
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <header
            className="fixed w-full z-50 bg-transparent text-white backdrop-blur-2xl py-3"
            role="banner"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center ml-3">
                    <a href="/" aria-label="Nexora Home">
                        <img src={Nexora} alt="Nexora Logo" className="w-15 max-md:w-12" />
                    </a>
                    <div className="flex flex-col justify-center">
                        <a href="/" className="text-xl font-bold text-white max-md:text-[18px] pb-0 mb-0" aria-label="Nexora Info Solution Home">
                            Nexora
                        </a>
                        <span className="text-white max-md:text-[10px] text-sm">
                            Info Solution
                        </span>
                    </div>
                </div>

                <nav className="hidden md:flex" role="navigation" aria-label="Main menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="hover:text-black cursor-pointer rounded-xl transition-all duration-600 ease-in-out hover:bg-white px-5 py-2"
                            aria-label={`Go to ${link.name}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="w-6 h-6 mr-3" /> : <Menu className="w-6 h-6 mr-3" />}
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
                        className="md:hidden bg-transparent px-4 pb-4 overflow-hidden mt-3"
                        aria-label="Mobile navigation menu"
                    >
                        <div className="flex flex-col space-y-4 pt-2 pl-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-white hover:text-blue-400 transition cursor-pointer"
                                    aria-label={`Go to ${link.name}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
