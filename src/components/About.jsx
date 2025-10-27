import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Meet Saumya Gautam
            </h2>
            <p className="mt-4 text-slate-600">
              Saumya is a conscious leadership coach who blends modern psychology,
              organizational design, and contemplative wisdom traditions. Her work
              supports founders, executives, and purpose-led teams to cultivate
              presence, clarity, and compassionate impact.
            </p>
            <p className="mt-3 text-slate-600">
              Sessions are spacious and practical: a steady space to listen
              deeply, name what matters, and move forward with grounded action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md sm:h-72 sm:w-72">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B1733]/10 to-[#1A2A6C]/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-semibold tracking-tight text-[#7B1733]">
                  SG
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
