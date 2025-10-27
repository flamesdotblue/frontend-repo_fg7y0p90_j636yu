import { motion } from "framer-motion";
import { Brain, Layers, Infinity } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Inner Work",
    text:
      "Modern psychology meets compassionate inquiry to befriend your patterns, emotions, and nervous system—building self-awareness and resilience.",
    color: "#7B1733",
  },
  {
    icon: Layers,
    title: "Outer Work",
    text:
      "Systems thinking, frameworks, goals and values alignment to translate insight into clear strategy, action, and sustainable results.",
    color: "#1A2A6C",
  },
  {
    icon: Infinity,
    title: "Spiritual Coaching",
    text:
      "A grounded exploration of oneness and connectedness to lead from presence, humility, and service to something larger.",
    color: "#0E1E5B",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          An integrative path to conscious leadership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-2xl text-slate-600"
        >
          We weave inner work, outer strategy, and spiritual orientation so your
          choices emerge from clarity, compassion, and coherence.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md"
            >
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <item.icon className="h-5 w-5" style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
