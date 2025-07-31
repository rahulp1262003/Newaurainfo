import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";

import Nexora from "../assets/Nexora.png";

export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const scrollToSection = (e, href) => {
        if (!href || typeof href !== "string") return;

        if (href.startsWith("#")) {
            e.preventDefault();

            const handleScroll = () => {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
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
            navigate(href);
        }
    };


    return (
        <footer className="bg-[#061033] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:text-left ">
                <div>
                    <div className="flex items-center mb-3">
                        <div>
                            <a
                                href="/"
                            >
                                <img src={Nexora} alt="" className="w-15 max-md:w-10" />
                            </a>
                        </div>
                        <div className="flex flex-col justify-center">
                            {/* <Link to="/" className="text-2xl font-bold text-white max-md:text-lg">
                            Nexora
                        </Link> */}
                            <a href="/" className="text-2xl font-bold text-white max-md:text-[18px] pb-0 mb-0">
                                Nexora
                            </a>
                            <a href="/" className="text-white max-md:text-[10px] ">
                                Info Solution
                            </a>
                        </div>
                    </div>
                    <ul className="text-gray-400 text-sm space-y-1 md:flex ml-3">
                        <li><button onClick={(e) => scrollToSection(e, '/')} className="hover:text-white cursor-pointer pr-3">Home</button></li>
                        <li><button onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white cursor-pointer pr-3">About</button></li>
                        <li><button onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white cursor-pointer pr-3">Services</button></li>
                        <li><button onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white cursor-pointer pr-3">Contact</button></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 mt-1">Contact</h3>
                    <div className="text-gray-400 text-sm flex flex-col ">
                        <div className="flex mb-4 ">
                            <Mail size={18} color="white" className="mr-4" />
                            <a href="mailto:contact2nexorainfosolution@gmail.com" rel="noopener noreferrer" className="wrap-anywhere">contact2nexorainfosolution@gmail.com</a>
                        </div>
                        <div className="flex mb-4">
                            <div>
                                <Phone size={18} color="white" className="mr-3" />
                            </div>
                            <div className="flex flex-col">
                                <a href="tel:8200502449">+91 82005 02449</a>
                                <a href="tel:7990549414">+91 79905 49414</a>
                                <a href="tel:9033721291">+91 90337 21291</a>
                            </div>
                        </div>
                        <div className="flex ">
                            <MapPin size={18} color="white" className="mr-4" /><a href="https://maps.app.goo.gl/JR7g3XZfWXCouYuMA"
                                target="_blank"
                                rel="noopener noreferrer">Shop 3, Nr. Primary school - 19,
                                Oppo. Shikhod Talav,<br /> Anand, Gujarat, India. - 388001.</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-6">
                &copy; {new Date().getFullYear()} Nexora Info Solution. All rights reserved.
            </div>
        </footer>
    );
}
