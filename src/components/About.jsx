import { MEDIUMS } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-yellow-500/10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3">The Artist</p>
          <h2 className="font-serif font-black mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            About <span className="gold-text">Subham</span>
          </h2>
          <div className="brush-line w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-yellow-500/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-4 rounded-full border border-yellow-500/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

              {/* Main circle */}
              <div className="absolute inset-8 rounded-full gold-bg flex items-center justify-center shadow-2xl glow-gold">
                <img src="/subham.jpg" alt="Subham Das" className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Floating art icons */}
              {[
                { icon: "👤", angle: 0,   color: "#d4a843" },
                { icon: "🫀", angle: 72,  color: "#e8647a" },
                { icon: "😄", angle: 144, color: "#4ecdc4" },
                { icon: "🖌️", angle: 216, color: "#9b59b6" },
                { icon: "🌸", angle: 288, color: "#f0c060" },
              ].map((item, i) => {
                const rad = (item.angle * Math.PI) / 180;
                const r = 140;
                const x = 50 + (r / 2.8) * Math.sin(rad);
                const y = 50 - (r / 2.8) * Math.cos(rad);
                return (
                  <div key={i} className="absolute w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg float"
                    style={{
                      left: `${x}%`, top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}50`,
                      animationDelay: `${i * 0.4}s`,
                    }}>
                    {item.icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p className="font-cormorant italic text-yellow-200/70 text-xl leading-relaxed mb-6">
              "Art is my language, my breath, my way of seeing the world in its truest colours."
            </p>
            <p className="text-yellow-100/50 leading-relaxed mb-5 text-sm">
              Subham Das is a self-driven fine artist with a deep, burning passion for the visual arts. From the delicate whisper of soft pastels to the bold declaration of acrylics on canvas, he navigates five distinct art forms with equal mastery and love.
            </p>
            <p className="text-yellow-100/50 leading-relaxed mb-8 text-sm">
              His journey began with a pencil and a blank page — and has since expanded into a rich exploration of human anatomy, caricature, portraiture, and colour theory. Every artwork Subham creates carries a piece of his soul.
            </p>

            {/* Mediums */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-4">Mediums & Tools</p>
              <div className="flex flex-wrap gap-2">
                {MEDIUMS.map((m) => (
                  <span key={m.name} className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                    style={{ background: `${m.color}10`, borderColor: `${m.color}35`, color: m.color }}>
                    {m.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
