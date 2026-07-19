import React from "react";

export default function Contact() {
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mjgqjnbg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) { setStatus("sent"); form.reset(); }
    else { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 border-t border-yellow-500/10">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3">Commission & Connect</p>
          <h2 className="font-serif font-black mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Let's Create <span className="gold-text">Together</span>
          </h2>
          <div className="brush-line w-24 mx-auto mb-6" />
          <p className="text-yellow-100/40 max-w-xl mx-auto text-sm leading-relaxed">
            Have a vision? Let's turn it into art. Whether it's a custom portrait, a caricature, or any other commission — Subham would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="art-card p-8">
            <h3 className="font-serif font-bold gold-text text-xl mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: "📧", label: "Email", value: "Artyatra792@gmail.com", href: "mailto:Artyatra792@gmail.com" },
                { icon: "📱", label: "Instagram", value: "@drawwithsubham_2003", href: "https://www.instagram.com/drawwithsubham_2003/" },
                { icon: "📍", label: "Location", value: "West Bengal, India", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-200 group">
                  <span className="text-xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <div className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-yellow-100/70 text-sm font-medium group-hover:text-yellow-200 transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="art-card p-8">
            <h3 className="font-serif font-bold gold-text text-xl mb-6">Commission Info</h3>
            <div className="flex flex-col gap-4">
              {[
                { art: "Portrait Art",     time: "5–7 days",   icon: "👤", color: "#d4a843" },
                { art: "Human Anatomy",    time: "7–10 days",  icon: "🫀", color: "#e8647a" },
                { art: "Caricature",       time: "2–4 days",   icon: "😄", color: "#4ecdc4" },
                { art: "Acrylic Painting", time: "10–14 days", icon: "🎨", color: "#9b59b6" },
                { art: "Soft Pastel",      time: "5–8 days",   icon: "🌸", color: "#f0c060" },
              ].map((c) => (
                <div key={c.art} className="flex items-center justify-between py-3 border-b border-yellow-500/10 last:border-0">
                  <div className="flex items-center gap-3">
                    <span>{c.icon}</span>
                    <span className="text-sm font-medium text-yellow-100/70">{c.art}</span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}30` }}>
                    {c.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-yellow-500/50 text-xs mt-4">* Timelines depend on complexity and size.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8 art-card p-8">
          <h3 className="font-serif font-bold gold-text text-xl mb-6">Send a Message ✦</h3>

          {status === "sent" && (
            <div className="mb-4 p-4 rounded-xl text-sm" style={{ background: "rgba(0,200,100,0.1)", border: "1px solid rgba(0,200,100,0.3)", color: "#4ade80" }}>
              ✅ Message sent! Subham will reply soon.
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 p-4 rounded-xl text-sm" style={{ background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.3)", color: "#f87171" }}>
              ❌ Something went wrong. Please try again!
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Your Name" required
              className="w-full px-4 py-3 rounded-xl text-sm text-yellow-100 placeholder-yellow-800 outline-none"
              style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.2)" }} />
            <input type="email" name="email" placeholder="Your Email" required
              className="w-full px-4 py-3 rounded-xl text-sm text-yellow-100 placeholder-yellow-800 outline-none"
              style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.2)" }} />
            <select name="artform"
              className="w-full px-4 py-3 rounded-xl text-sm text-yellow-100 outline-none"
              style={{ background: "rgba(20,0,16,1)", border: "1px solid rgba(212,168,67,0.2)" }}>
              <option value="">Select Art Form</option>
              <option value="Portrait">Portrait Art</option>
              <option value="Anatomy">Human Anatomy</option>
              <option value="Caricature">Caricature</option>
              <option value="Acrylic">Acrylic Painting</option>
              <option value="Pastel">Soft Pastel</option>
            </select>
            <textarea name="message" placeholder="Describe your commission..." rows={4} required
              className="w-full px-4 py-3 rounded-xl text-sm text-yellow-100 placeholder-yellow-800 outline-none resize-none"
              style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.2)" }} />
            <button type="submit"
              className="gold-bg text-black font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg">
              Send Message ✦
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}