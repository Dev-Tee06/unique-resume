import { motion } from "framer-motion";
import {
  FaPalette,
  FaChartLine,
  FaBullhorn,
  FaAward,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Creative Design",
      description:
        "Visually stunning graphics, UI/UX designs, and digital art tailored to elevate your brand identity.",
      icon: <FaPalette className="w-10 h-10 text-amber-400" />,
    },
    {
      title: "Social Media Management",
      description:
        "Manage, curate, and grow your social presence with engaging content and strategy.",
      icon: <FaBullhorn className="w-10 h-10 text-amber-400" />,
    },
    {
      title: "Branding & Strategy",
      description:
        "Develop a strong, coherent brand identity and digital strategy to connect with your audience.",
      icon: <FaChartLine className="w-10 h-10 text-amber-400" />,
    },
  ];

  const stats = [
    {
      icon: <FaAward className="w-8 h-8 text-amber-400" />,
      number: 500,
      label: "Completed Projects",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-amber-400" />,
      number: 50,
      label: "Happy Clients",
    },
    {
      icon: <FaProjectDiagram className="w-8 h-8 text-amber-400" />,
      number: 4,
      label: "Years of Experience",
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
          Our <span className="text-amber-400">Services</span>
        </h1>
        <p className="mt-4 text-slate-300 text-lg">
          Full Spectrum Creative offers a range of services to help your brand
          shine online.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col items-start hover:bg-amber-500/20 transition transform cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-slate-300 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats / Why Choose Me */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto mt-28 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why <span className="text-amber-400">Choose Me</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col items-center shadow-2xl cursor-pointer"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white">{stat.number}+</h3>
              <p className="text-slate-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-28 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Want to work together?
        </h2>
        <p className="text-slate-300 mb-6">
          Reach out and let's create something amazing together.
        </p>
        <a
          href="https://wa.me/2349071143452"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
        >
          Contact Me on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
