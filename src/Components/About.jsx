import { motion } from "framer-motion";
import {
  FaSearch,
  FaPencilRuler,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdLightbulbOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

import unique from "../assets/unique.jpg";

const processSteps = [
  {
    title: "Discover",
    text: "Understanding brand values, goals, and audience.",
    icon: <FaSearch className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Design",
    text: "Creating visuals that align with identity and message.",
    icon: <FaPencilRuler className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Strategize",
    text: "Planning content and digital presence with intention.",
    icon: <FaChartLine className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Refine",
    text: "Optimizing designs and content for clarity and impact.",
    icon: <FaCheckCircle className="w-6 h-6 text-amber-400" />,
  },
];

const values = [
  {
    title: "Creative Excellence",
    text: "Designs crafted with intention, detail, and originality.",
    icon: <GiBrain className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Purpose-Driven Strategy",
    text: "Creativity guided by clear objectives and measurable impact.",
    icon: <MdLightbulbOutline className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Authentic Connection",
    text: "Building trust and engagement through genuine digital presence.",
    icon: <AiOutlineUser className="w-6 h-6 text-amber-400" />,
  },
];

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900" />

      {/* Ambient Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-amber-400">Unique Shobayo</span>
          </h1>
          <p className="mt-6 text-slate-300 text-lg">
            Creative Designer & Social Media Manager shaping meaningful digital
            experiences through{" "}
            <span className="text-white font-semibold">
              Full Spectrum Creative
            </span>
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative backdrop-blur-2xl bg-white/10 border border-white/30 rounded-3xl p-4 shadow-2xl">
              <img
                src={unique}
                alt="Unique Shobayo"
                className="w-72 md:w-80 h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 bg-amber-500/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              A Full Spectrum Approach to Creativity
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed">
              I’m a creative designer and social media manager driven by the
              idea that great design is more than aesthetics — it’s
              communication, emotion, and strategy working together.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              My work lives at the intersection of creativity and purpose. Every
              color choice, layout, and piece of content is intentional —
              designed to reflect brand identity while resonating with the
              audience it’s meant to serve.
            </p>
          </motion.div>
        </div>

        {/* Process Section with Hover Interaction & Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-28 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-2xl hover:bg-white/20 flex flex-col items-start gap-4"
            >
              {/* Icon */}
              <div>{step.icon}</div>
              <h4 className="text-white font-semibold text-lg">{step.title}</h4>
              <p className="mt-1 text-slate-300 text-sm">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section with Hover & Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {values.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-2xl hover:bg-white/20 flex flex-col items-start gap-4"
            >
              <div>{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
