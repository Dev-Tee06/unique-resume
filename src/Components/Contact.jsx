import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      info: "adliquedesigns@gmail.com",
      icon: <FaEnvelope className="w-6 h-6 text-amber-400" />,
      link: "mailto:adliquedesigns@gmail.com",
    },
    {
      title: "WhatsApp",
      info: "+2349071143452",
      icon: <FaWhatsapp className="w-6 h-6 text-amber-400" />,
      link: "https://wa.me/2349071143452",
    },
    {
      title: "Pinterest",
      info: "adliquedesigns",
      icon: <FaPinterest className="w-6 h-6 text-amber-400" />,
      link: "https://www.pinterest.com/adliquedesigns/_created/",
    },
    {
      title: "Instagram",
      info: "@adliquedesigns",
      icon: <FaInstagram className="w-6 h-6 text-amber-400" />,
      link: "http://www.instagram.com/adliquedesigns",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900 py-28 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Get in <span className="text-amber-400">Touch</span>
        </h1>
        <p className="mt-4 text-slate-300 text-lg">
          Have a project or idea? Reach out and let’s create something amazing
          together.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {contactMethods.map((method, i) => (
          <motion.a
            key={i}
            href={method.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:bg-amber-500/20 transition transform cursor-pointer"
          >
            <div className="mb-3">{method.icon}</div>
            <h3 className="text-lg font-semibold text-white">{method.title}</h3>
            <p className="text-slate-300 text-sm">{method.info}</p>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <form
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted! (Replace with real backend)");
          }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            Send a Message
          </h2>
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
