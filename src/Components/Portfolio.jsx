import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPinterest, FaInstagram, FaFolderOpen } from "react-icons/fa";

// Images
import unique1 from "../assets/unique1.jfif";
import unique2 from "../assets/unique2.jfif";
import unique3 from "../assets/unique3.jfif";
import unique4 from "../assets/unique4.jfif";
import unique5 from "../assets/unique5.jfif";
import unique6 from "../assets/unique6.jfif";
import unique7 from "../assets/unique7.jfif";
import unique8 from "../assets/unique8.jfif";
import unique9 from "../assets/unique9.jfif";
import unique10 from "../assets/unique10.jfif";
import unique11 from "../assets/unique11.jfif";
import unique12 from "../assets/unique12.jfif";
import unique13 from "../assets/unique13.jfif";
import unique14 from "../assets/unique14.jfif";
import unique15 from "../assets/unique15.jfif";
import unique16 from "../assets/unique16.jfif";

const portfolioImages = [
  unique1,
  unique2,
  unique3,
  unique4,
  unique5,
  unique6,
  unique7,
  unique8,
  unique9,
  unique10,
  unique11,
  unique12,
  unique13,
  unique14,
  unique15,
  unique16,
];

const portfolioLinks = [
  {
    title: "Pinterest Portfolio",
    url: "https://www.pinterest.com/adliquedesigns/_created/",
    icon: <FaPinterest className="w-6 h-6" />,
    description: "Curated creative designs & brand visuals.",
  },
  {
    title: "Social Media Campaigns",
    url: "https://drive.google.com/drive/folders/1PSsin63foIUDoHfHuI11pONmY-aincsD",
    icon: <FaFolderOpen className="w-6 h-6" />,
    description: "Past social media management & campaigns.",
  },
  {
    title: "Instagram",
    url: "http://www.instagram.com/adliquedesigns",
    icon: <FaInstagram className="w-6 h-6" />,
    description: "Latest designs & behind-the-scenes work.",
  },
];

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? portfolioImages.length - 1 : prev - 1,
    );

  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev === portfolioImages.length - 1 ? 0 : prev + 1,
    );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900 py-28 px-6">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Creative <span className="text-amber-400">Portfolio</span>
        </h1>
        <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto">
          A refined collection of brand designs, social media creatives, and
          visual storytelling projects.
        </p>
      </motion.div>

      {/* GALLERY */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-white mb-10">Featured Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img}
                alt={`Design ${i + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                View Design
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LINKS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {portfolioLinks.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-amber-500/20 transition hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 text-amber-400 mb-3">
              {link.icon}
              <h3 className="text-lg font-semibold text-white">{link.title}</h3>
            </div>
            <p className="text-slate-300 text-sm">{link.description}</p>
          </a>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={portfolioImages[selectedIndex]}
                alt="Selected work"
                className="rounded-2xl max-h-[80vh]"
              />

              {/* PREVIOUS */}
              <motion.button
                onClick={prevImage}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-4 top-1/2 -translate-y-1/2
                           w-14 h-14 md:w-16 md:h-16
                           flex items-center justify-center
                           rounded-full
                           bg-black/40 backdrop-blur-md
                           border border-white/30
                           text-white text-5xl font-extrabold
                           shadow-lg shadow-amber-500/30
                           hover:bg-amber-500 hover:text-black
                           transition"
              >
                ‹
              </motion.button>

              {/* NEXT */}
              <motion.button
                onClick={nextImage}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-4 top-1/2 -translate-y-1/2
                           w-14 h-14 md:w-16 md:h-16
                           flex items-center justify-center
                           rounded-full
                           bg-black/40 backdrop-blur-md
                           border border-white/30
                           text-white text-5xl font-extrabold
                           shadow-lg shadow-amber-500/40
                           hover:bg-amber-500 hover:text-black
                           transition"
              >
                ›
              </motion.button>

              {/* CLOSE */}
              <motion.button
                onClick={() => setSelectedIndex(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4
                           w-10 h-10
                           rounded-full
                           bg-black/40 backdrop-blur-md
                           border border-white/30
                           text-white text-2xl font-bold
                           hover:bg-red-500
                           transition"
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
