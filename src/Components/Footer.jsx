import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900 text-white pt-20 pb-10">
      {/* Top Glow Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
          {/* BRANDING */}
          <div>
            <h2 className="text-3xl font-bold text-amber-400 tracking-wide">
              Unique Shobayo
            </h2>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed max-w-sm">
              Full Spectrum Creative — crafting faith-inspired designs,
              meaningful brand experiences, and visuals that inspire connection
              and clarity.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>

            <div className="space-y-3 text-slate-300 text-sm">
              <a
                href="mailto:adliquedesigns@gmail.com"
                className="flex items-center gap-3 hover:text-amber-300 transition"
              >
                <FaEnvelope className="text-amber-400" />
                adliquedesigns@gmail.com
              </a>

              <a
                href="https://wa.me/2349071143452"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-amber-300 transition"
              >
                <FaWhatsapp className="text-amber-400" />
                +234 907 114 3452
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.pinterest.com/adliquedesigns/_created/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
              >
                <FaPinterest className="text-xl" />
              </a>

              <a
                href="http://www.instagram.com/adliquedesigns"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>

            <p className="mt-4 text-slate-400 text-xs max-w-xs">
              Follow for design insights, ministry visuals, and creative
              storytelling.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Unique Shobayo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
