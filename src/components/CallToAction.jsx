import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section id="book" className="relative">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-md backdrop-blur"
        >
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Ready to begin?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Book a 30-minute intro call to explore your goals and see if we’re a
            fit. You’ll leave with clarity and a next step—no pressure.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@saumya.coach?subject=Intro%20Call%20with%20Saumya%20Gautam&body=Hi%20Saumya%2C%20I'd%20love%20to%20book%20an%20intro%20call.%20My%20availability%20is..."
              className="inline-flex items-center rounded-full bg-[#1A2A6C] px-6 py-3 font-medium text-white shadow-lg shadow-[#1A2A6C]/20 transition hover:translate-y-[-2px] hover:bg-[#152155] focus:outline-none focus:ring-2 focus:ring-[#1A2A6C]/40"
            >
              Book intro call
            </a>
            <a
              href="#approach"
              className="inline-flex items-center rounded-full px-6 py-3 text-[#7B1733] ring-1 ring-[#7B1733]/20 transition hover:bg-[#7B1733]/5"
            >
              Learn more first
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Prefer another channel? Reach out on your favorite platform after the
            intro email.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
