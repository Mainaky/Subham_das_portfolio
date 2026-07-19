import { STATS } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden canvas-texture">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #d4a843 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #e8647a 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-6"
          style={{ background: "radial-gradient(circle, #9b59b6 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Decorative art symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["✦", "✧", "◈", "❋", "✦", "◇", "✧", "❋"].map((s, i) => (
          <div key={i} className="absolute text-yellow-500/10 font-serif select-none"
            style={{
              fontSize: `${Math.random() * 30 + 10}px`,
              top: `${10 + i * 11}%`,
              left: `${5 + i * 12}%`,
              animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}>
            {s}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 fade-up">
          <span className="text-yellow-400 text-xs">🎨</span>
          <span className="text-yellow-300/80 text-xs font-semibold tracking-widest uppercase">Fine Art Portfolio</span>
          <span className="text-yellow-400 text-xs">🎨</span>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-8 fade-up">
          <div className="relative">
            <div className="w-28 h-28 rounded-full shadow-2xl glow-gold float overflow-hidden border-2 border-yellow-500">
  <img src="/subham.jpeg" alt="Subham Das" className="w-full h-full object-cover" />
             </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-sm border-2 border-black">
              ✦
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-serif font-black leading-none mb-2 fade-up-2" style={{ fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "-0.03em" }}>
          <span className="gold-text text-glow">Subham</span>
        </h1>
        <h1 className="font-serif font-black leading-none mb-6 fade-up-2" style={{ fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "-0.03em" }}>
          <span style={{ color: "#f5f0e8" }}>Das</span>
        </h1>

        {/* Tagline */}
        <p className="font-cormorant italic text-yellow-200/60 mb-4 fade-up-3" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
          <span className="ornament">✦</span>
          Where Lines Become Life & Colours Tell Stories
          <span className="ornament">✦</span>
        </p>

        {/* Art forms strip */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-up-3">
          {["Portrait Art", "Human Anatomy", "Caricature", "Acrylic", "Soft Pastel"].map((art, i) => {
            const colors = ["#d4a843", "#e8647a", "#4ecdc4", "#9b59b6", "#f0c060"];
            return (
              <span key={art} className="medium-tag" style={{
                background: `${colors[i]}15`,
                borderColor: `${colors[i]}40`,
                color: colors[i],
              }}>
                {art}
              </span>
            );
          })}
        </div>

        {/* Bio */}
        <p className="text-yellow-100/50 max-w-xl mx-auto mb-12 leading-relaxed fade-up-4" style={{ fontSize: "0.95rem" }}>
          A passionate fine artist with a profound love for drawing — blending technical mastery with artistic soul across five distinct art forms. Every stroke is intentional. Every piece is a conversation.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 fade-up-4">
          <a href="#gallery" className="gold-bg text-black font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg">
            View Gallery
          </a>
          <a href="#contact" className="border border-yellow-500/40 text-yellow-300 font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-yellow-500/10 hover:-translate-y-1 transition-all duration-300">
            Commission a Piece
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-10 border-t border-yellow-500/15">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif font-black gold-text mb-1" style={{ fontSize: "2.2rem", letterSpacing: "-0.04em" }}>{s.num}</div>
              <div className="text-yellow-200/40 text-xs uppercase tracking-widest font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-yellow-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-yellow-400 to-transparent" />
      </div>
    </section>
  );
}
