import { ARTFORMS } from "../data";

export default function Artforms() {
  return (
    <section id="artforms" className="py-24 px-6 md:px-12 section-bg-alt border-t border-yellow-500/10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3">Expertise</p>
          <h2 className="font-serif font-black mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Art <span className="gold-text">Forms</span>
          </h2>
          <div className="brush-line w-24 mx-auto mb-6" />
          <p className="text-yellow-100/40 max-w-xl mx-auto text-sm leading-relaxed">
            Five distinct disciplines, one unified vision — to create art that moves, provokes, and endures.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ARTFORMS.map((art, i) => (
            <div key={art.title} className="art-card p-7 group">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ background: art.tagColor.bg, border: `1px solid ${art.tagColor.border}` }}>
                {art.icon}
              </div>

              {/* Tag */}
              <div className="inline-block medium-tag mb-4"
                style={{ background: art.tagColor.bg, borderColor: art.tagColor.border, color: art.tagColor.text }}>
                Art Form {String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xl mb-3" style={{ color: art.tagColor.text }}>
                {art.title}
              </h3>

              {/* Desc */}
              <p className="text-yellow-100/45 text-sm leading-relaxed mb-5">{art.desc}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {art.skills.map((s) => (
                  <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${art.tagColor.text}10`, color: `${art.tagColor.text}90`, border: `1px solid ${art.tagColor.text}20` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
