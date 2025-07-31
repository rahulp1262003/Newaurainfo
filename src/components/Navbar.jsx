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
                // Go back to homepage first, then scroll
                navigate("/");
                // Delay scroll after navigation
                setTimeout(() => {
                    handleScroll();
                }, 300); // adjust if needed
            } else {
                handleScroll();
            }
        } else {
            // Direct route (like /services)
            setIsOpen(false);
        }
    };


    return (
        <header className="fixed w-full z-50 bg-transparent text-white backdrop-blur-2xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between ">
                <div className="flex items-center">
                    <div>
                        <img src={Nexora} alt="" className="w-18" />
                    </div>
                    <div className="flex flex-col">
                        <Link to="/" className="text-2xl font-bold text-white">
                            Nexora
                        </Link>
                        <a href="#home" className=" text-white">
                            Info Solution
                        </a>
                    </div>
                </div>
                <nav className="hidden md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="hover:text-black cursor-pointer rounded-xl transition-all duration-600 ease-in-out hover:bg-white px-5 py-2"
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
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-white hover:text-blue-400 transition cursor-pointer py-2"
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