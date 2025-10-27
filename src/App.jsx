import Hero from "./components/Hero";
import Approach from "./components/Approach";
import About from "./components/About";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[conic-gradient(at_50%_50%,#7B1733_0deg,#1A2A6C_140deg,#7B1733_280deg,#1A2A6C_360deg)]" />
            <span className="text-sm font-medium tracking-wide text-slate-700">
              Saumya Gautam
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#approach" className="hover:text-slate-900">
              Approach
            </a>
            <a href="#book" className="text-[#7B1733] hover:text-[#6A122B]">
              Book call
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Approach />
        <About />
        <CallToAction />
      </main>

      <footer className="border-t border-slate-200/60 bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Saumya Gautam. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
