import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Newaurainfo</h3>
                    <ul className="text-gray-400 text-sm space-y-1 md:flex">
                        <li><button onClick={() => scrollToSection('home')} className="hover:text-white cursor-pointer pr-3">Home</button></li>
                        <li><button onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer pr-3">About</button></li>
                        <li><button onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer pr-3">Services</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="hover:text-white cursor-pointer pr-3">Contact</button></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-gray-400 text-sm">
                        contact@newaurainfo.com<br />
                        +91 98765 43210<br />
                        Anand, Gujarat, India
                    </p>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-6">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}
