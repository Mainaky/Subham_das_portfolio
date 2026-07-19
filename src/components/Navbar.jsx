import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${scrolled ? "nav-glass" : "bg-transparent"}`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full gold-bg flex items-center justify-center text-black font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">SD</div>
          <div>
            <div className="font-serif font-bold text-sm leading-tight gold-text">Subham Das</div>
            <div className="text-[10px] text-yellow-700 tracking-widest uppercase">Fine Artist</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-medium text-yellow-200/60 hover:text-yellow-300 transition-colors tracking-wide relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hidden md:block text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border border-yellow-500/40 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
          Commission Work
        </a>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={() => setOpen(v => !v)} aria-label="menu">
          <span className={`block w-5 h-[1.5px] bg-yellow-400 transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-yellow-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-yellow-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 nav-glass flex flex-col border-b border-yellow-500/20">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="px-8 py-4 text-sm font-medium text-yellow-200/70 border-b border-yellow-500/10 hover:text-yellow-300 hover:bg-yellow-500/5 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="px-8 py-4 text-sm font-bold text-yellow-400 hover:text-yellow-300">
            Commission Work →
          </a>
        </div>
      )}
    </>
  );
}
