import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left ">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Nexora</h3>
                    <ul className="text-gray-400 text-sm space-y-1 md:flex">
                        <li><button onClick={() => scrollToSection('home')} className="hover:text-white cursor-pointer pr-3">Home</button></li>
                        <li><button onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer pr-3">About</button></li>
                        <li><button onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer pr-3">Services</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="hover:text-white cursor-pointer pr-3">Contact</button></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <div className="text-gray-400 text-sm flex flex-col md:items-start md:flex md:justify-center">
                        <div className="flex justify-center mb-4">
                            <Mail size={18} className="mr-4" />
                            <a href="mailto:contacttonewaurainfo@gmail.com" rel="noopener noreferrer" >contacttonewaurainfo@gmail.com</a>
                        </div>
                        <div className="flex justify-center mb-4">
                            <Phone size={18} className="mr-4" />
                            <a href="tel:8200502449">+91 82005 02449</a>
                        </div>
                        <div className="flex justify-center">
                            <MapPin size={18} className="mr-4" /><a href="https://maps.app.goo.gl/JR7g3XZfWXCouYuMA"
                                target="_blank"
                                rel="noopener noreferrer">Shop 3, Nr. Primary school - 19,
                                Oppo. Shikhod Talav,<br /> Anand, Gujarat, India. - 388001.</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-6">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}
