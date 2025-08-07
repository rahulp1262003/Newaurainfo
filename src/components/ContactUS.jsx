import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [statusType, setStatusType] = useState("info"); // success or error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("info");

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      setStatus("✅ Message sent successfully!");
      setStatusType("success");
      form.current.reset();
    } catch (err) {
      setStatus("❌ Error sending message.");
      setStatusType("error");
    }
  };

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <section id="contact" className="py-20 bg-black text-white">
      {/* JSON-LD Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nexora Info Solution",
            "url": "https://nexorainfosolution.com/",
            "logo": "https://nexorainfosolution.com/assets/Nexora-dCyo8ZZu.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 82005 02449",
                "contactType": "customer support",
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91 79905 49414",
                "contactType": "customer support",
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91 90337 21291",
                "contactType": "customer support",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-5xl max-md:text-4xl font-bold text-center mb-4"
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
            aria-label="Your Name"
            className="bg-zinc-800 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            aria-label="Your Email"
            className="bg-zinc-800 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            aria-label="Your Message"
            className="bg-zinc-800 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`text-center text-sm ${statusType === "success"
                ? "text-green-400"
                : statusType === "error"
                  ? "text-red-400"
                  : "text-zinc-400"
                }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
