import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(128,0,32,0.25),transparent_60%)]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(10,32,120,0.25),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block rounded-full bg-white/60 px-4 py-1 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur"
        >
          Integrative Consciousness Coaching
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl"
        >
          Lead with presence. Align with purpose. Create from wholeness.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-600"
        >
          Saumya Gautam supports conscious leaders to integrate inner work, outer
          strategy, and spiritual insight—so you can navigate complexity with
          clarity, compassion, and grounded impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-[#7B1733] px-6 py-3 text-white shadow-lg shadow-[#7B1733]/20 transition hover:translate-y-[-2px] hover:bg-[#6A122B] focus:outline-none focus:ring-2 focus:ring-[#7B1733]/40"
          >
            Book an intro call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#approach"
            className="inline-flex items-center rounded-full px-6 py-3 text-[#1A2A6C] ring-1 ring-[#1A2A6C]/20 transition hover:bg-[#1A2A6C]/5"
          >
            Explore the approach
          </a>
        </motion.div>
      </div>
    </section>
  );
}
