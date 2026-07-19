import { PHILOSOPHY_QUOTES } from "../data";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 section-bg-alt border-t border-yellow-500/10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3">Inspiration</p>
          <h2 className="font-serif font-black mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Art <span className="gold-text">Philosophy</span>
          </h2>
          <div className="brush-line w-24 mx-auto" />
        </div>

        {/* Subham's own words */}
        <div className="art-card p-8 md:p-12 mb-12 text-center relative overflow-hidden">
          <div className="absolute top-4 left-6 text-6xl text-yellow-500/10 font-serif leading-none">"</div>
          <div className="absolute bottom-4 right-6 text-6xl text-yellow-500/10 font-serif leading-none rotate-180">"</div>
          <p className="font-cormorant italic text-yellow-100/75 leading-relaxed relative z-10 mb-6"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}>
            Drawing is not just a skill for me — it is a conversation I have with the world. Every portrait reveals a hidden story, every anatomy study deepens my reverence for the human form, and every stroke of pastel or acrylic is a moment of pure meditation. Art is where I am most fully alive.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-yellow-500/40" />
            <span className="text-yellow-500 font-bold text-sm tracking-widest uppercase">Subham Das</span>
            <div className="w-8 h-px bg-yellow-500/40" />
          </div>
        </div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHILOSOPHY_QUOTES.map((q, i) => (
            <div key={i} className="art-card p-6 text-center group hover:border-yellow-500/30">
              <div className="text-2xl text-yellow-500/30 font-serif mb-4 group-hover:text-yellow-500/50 transition-colors">"</div>
              <p className="font-cormorant italic text-yellow-100/55 text-sm leading-relaxed mb-4">{q.quote}</p>
              <p className="text-yellow-600 text-xs font-bold tracking-wider uppercase">— {q.author}</p>
            </div>
          ))}
        </div>

        {/* Art journey timeline */}
        <div className="mt-16">
          <h3 className="font-serif font-bold text-center gold-text text-xl mb-10">The Artistic Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/30 via-yellow-500/10 to-transparent -translate-x-1/2 hidden md:block" />
            {[
              { phase: "The Beginning", desc: "First pencil on paper — discovering the joy of observation and recreation.", icon: "✏️", side: "left" },
              { phase: "Portrait Mastery", desc: "Learning to see faces differently — light, shadow, emotion, and the story behind the eyes.", icon: "👤", side: "right" },
              { phase: "Anatomy Studies", desc: "Delving into the architecture of the human body — structure, movement, and grace.", icon: "🫀", side: "left" },
              { phase: "Colour & Medium", desc: "Expanding into acrylics and soft pastels — discovering the language of colour.", icon: "🎨", side: "right" },
              { phase: "Caricature & Play", desc: "Adding humour and wit — the art of exaggeration and personality capture.", icon: "😄", side: "left" },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-6 mb-8 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
                <div className={`flex-1 art-card p-5 ${item.side === "right" ? "md:text-right" : ""}`}>
                  <div className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-1">Phase {i + 1}</div>
                  <h4 className="font-serif font-bold gold-text mb-2">{item.phase}</h4>
                  <p className="text-yellow-100/45 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full gold-bg flex items-center justify-center text-lg flex-shrink-0 z-10 shadow-lg hidden md:flex">
                  {item.icon}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
