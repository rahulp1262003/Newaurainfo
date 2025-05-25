import React from "react";
import aboutImg from "../assets/about.png"; // Ensure this file exists

export default function AboutSection() {
    return (
        <section id="about" className="py-16 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <h2 className="text-5xl font-bold">About Us</h2>
            </div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                    <div className="grid gap-6">
                        <div className="bg-gray-900 p-4 rounded-xl shadow border border-gray-700">
                            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                            <p className="text-gray-400 text-sm">
                                To deliver high-quality, reliable, and scalable software solutions.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl shadow border border-gray-700">
                            <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                            <p className="text-gray-400 text-sm">
                                To become a global leader in digital transformation and innovation.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-xl shadow border border-gray-700">
                            <h3 className="text-xl font-semibold text-white mb-2">Our Values</h3>
                            <p className="text-gray-400 text-sm">
                                Integrity, excellence, and customer satisfaction drive everything we do.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={aboutImg}
                        alt="About illustration"
                        className="rounded-2xl shadow-lg border border-gray-800 w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
}
