import { motion } from "framer-motion";
import unique from "../assets/unique.jpg";
import photoshop from "../assets/tools.png";
import illustrator from "../assets/tools2.jfif";

export default function Home() {
  return (
    <section className="relative min-h-screen mt-10 flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900" />

      {/* Ambient Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      {/* Main Glass Container */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 md:p-16 shadow-2xl"
        >
          {/* Hero */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Unique <span className="text-amber-400">Shobayo</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-slate-200">
                <span className="font-semibold text-white">
                  Full Spectrum Creative
                </span>{" "}
                — Creative Designer & Social Media Manager
              </p>

              <p className="mt-6 text-slate-300 leading-relaxed max-w-xl">
                I design visually compelling brand experiences and manage social
                media strategies that help brands connect, engage, and stand out
                across digital platforms.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.pinterest.com/adliquedesigns/_created/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 rounded-full bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition"
                >
                  View Design Portfolio
                </a>

                <a
                  href="https://drive.google.com/drive/folders/1PSsin63foIUDoHfHuI11pONmY-aincsD"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
                >
                  Social Media Work
                </a>
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              ["500+", "Creative Designs Delivered"],
              ["50+", "Brands & Projects Managed"],
              ["4+", "Years Creative Experience"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-amber-400">{value}</h3>
                <p className="mt-2 text-slate-300 text-sm">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Design Tools with Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Design Tools & Proficiency
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Tool Card */}
              {[
                {
                  img: photoshop,
                  name: "Adobe Photoshop",
                  desc: "Photo manipulation, social media creatives, UI mockups & brand visuals.",
                },
                {
                  img: illustrator,
                  name: "Adobe Illustrator",
                  desc: "Logo design, vector illustrations, icons & scalable brand assets.",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-center">
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="w-20 h-20 mx-auto object-contain mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-slate-300 text-sm">{tool.desc}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-slate-300 mb-2">
                      <span>Proficiency</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ duration: 1 }}
                        className="h-full bg-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
