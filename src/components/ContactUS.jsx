import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
// require('dotenv').config();
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      publicKey,
      // "your_service_id",    // 🔁 replace with your EmailJS Service ID
      // "your_template_id",   // 🔁 replace with your EmailJS Template ID
      // form.current,
      // "your_public_key"     // 🔁 replace with your EmailJS Public Key
    )
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset(); // Clear form
      })
      .catch(() => {
        setStatus("Error sending message.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-center text-zinc-400 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or just want to say hi? Fill out the form below.
        </motion.p>

        <motion.form
          ref={form}
          className="grid gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-zinc-800 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-zinc-800 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-zinc-800 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl transition"
          >
            Send Message
          </button>
          {status && <p className="text-center text-sm text-zinc-400">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
