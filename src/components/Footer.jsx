import React from "react";
import { MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";
import Nexora from "../assets/Nexora.png";

export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (e, href) => {
        if (!href) return;
        if (href.startsWith("#")) {
            e.preventDefault();
            const handleScroll = () => {
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: "smooth" });
            };
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(handleScroll, 300);
            } else {
                handleScroll();
            }
        } else {
            navigate(href);
        }
    };

    return (
        <footer className="bg-[#061033] text-white py-8" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Logo & Nav */}
                <div>
                    <div className="flex items-center mb-3" aria-label="Nexora Info Solution logo">
                        <a href="/" className="flex items-center" aria-label="Go to homepage">
                            <img
                                src={Nexora}
                                alt="Nexora Info Solution logo"
                                className="w-15 max-md:w-10"
                                loading="lazy"
                                decoding="async"
                            />
                        </a>
                        <div className="flex flex-col justify-center ml-2">
                            <a href="/" className="text-2xl font-bold text-white max-md:text-[18px]">Nexora</a>
                            <span className="text-white max-md:text-[10px]">Info Solution</span>
                        </div>
                    </div>
                    <nav aria-label="Footer navigation">
                        <ul className="text-gray-400 text-sm space-y-1 md:flex ml-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "#about" },
                                { name: "Services", href: "#services" },
                                { name: "Contact", href: "#contact" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <button
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="hover:text-white pr-3"
                                        aria-label={`Go to ${link.name}`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Contact */}
                <address className="not-italic" aria-label="Contact information">
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <div className="text-gray-400 text-sm space-y-4">
                        <div className="flex items-start">
                            <Mail size={18} className="mr-4" aria-hidden="true" />
                            <a href="mailto:contact2nexorainfosolution@gmail.com" className="break-all">
                                contact2nexorainfosolution@gmail.com
                            </a>
                        </div>
                        <div className="flex items-start">
                            <Phone size={18} className="mr-3" aria-hidden="true" />
                            <div className="flex flex-col">
                                <a href="tel:+918200502449">+91 82005 02449</a>
                                <a href="tel:+917990549414">+91 79905 49414</a>
                                <a href="tel:+919033721291">+91 90337 21291</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin size={18} className="mr-4" aria-hidden="true" />
                            <a
                                href="https://maps.app.goo.gl/JR7g3XZfWXCouYuMA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Shop 3, Nr. Primary school - 19, Oppo. Shikhod Talav,<br />
                                Anand, Gujarat, India - 388001.
                            </a>
                        </div>
                    </div>
                </address>
            </div>

            <div className="text-center text-gray-500 text-sm mt-6">
                &copy; {new Date().getFullYear()} Nexora Info Solution. All rights reserved.
            </div>
        </footer>
    );
}
