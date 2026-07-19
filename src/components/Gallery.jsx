import { useState, useEffect } from "react";

const ARTWORKS = [
  { id: 1, file: "/ArtWork1.jpeg", title: "ArtWork 1" },
  { id: 2, file: "/ArtWork2.jpeg", title: "ArtWork 2" },
  { id: 3, file: "/ArtWork3.jpeg", title: "ArtWork 3" },
  { id: 4, file: "/ArtWork4.jpeg", title: "ArtWork 4" },
  { id: 5, file: "/Artwork5.jpeg", title: "ArtWork 5" },
  { id: 6, file: "/Artwork6.jpeg", title: "ArtWork 6" },
  { id: 7, file: "/ArtWork7.jpeg", title: "ArtWork 7" },
  { id: 8, file: "/ArtWork8.jpeg", title: "ArtWork 8" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  const goNext = () => {
    if (animating) return;
    setDirection("next");
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % ARTWORKS.length);
      setAnimating(false);
    }, 500);
  };

  const goPrev = () => {
    if (animating) return;
    setDirection("prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + ARTWORKS.length) % ARTWORKS.length);
      setAnimating(false);
    }, 500);
  };

  const goTo = (index) => {
    if (animating || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 500);
  };

  const prev = (current - 1 + ARTWORKS.length) % ARTWORKS.length;
  const next = (current + 1) % ARTWORKS.length;

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 border-t border-yellow-500/10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3">Works</p>
          <h2 className="font-serif font-black mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Featured <span className="gold-text">Gallery</span>
          </h2>
          <div className="brush-line w-24 mx-auto mb-6" />
          <p className="text-yellow-100/40 max-w-xl mx-auto text-sm leading-relaxed">
            A curated glimpse into Subham's body of work — each piece a window into artistic expression.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative">

          {/* Counter */}
          <div className="text-center mb-6">
            <span className="font-serif text-5xl font-black gold-text"
              style={{ textShadow: "0 0 40px rgba(212,168,67,0.4)" }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-yellow-700 font-serif text-2xl mx-2">/</span>
            <span className="text-yellow-700 font-serif text-xl">
              {String(ARTWORKS.length).padStart(2, "0")}
            </span>
          </div>

          {/* Main slideshow area */}
          <div className="flex items-center justify-center gap-4 md:gap-8">

            {/* Prev thumbnail */}
            <div
              onClick={goPrev}
              className="hidden md:block cursor-pointer flex-shrink-0 rounded-xl overflow-hidden border border-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105"
              style={{ width: "140px", height: "180px", opacity: 0.45 }}>
              <img src={ARTWORKS[prev].file} alt="prev"
                className="w-full h-full object-cover" />
            </div>

            {/* Main image */}
            <div className="relative flex-1 max-w-2xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  height: "480px",
                  border: "1px solid rgba(212,168,67,0.25)",
                  boxShadow: "0 0 60px rgba(212,168,67,0.15)",
                }}>

                {/* Image */}
                <img
                  key={current}
                  src={ARTWORKS[current].file}
                  alt={ARTWORKS[current].title}
                  className="w-full h-full object-cover"
                  style={{
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    opacity: animating ? 0 : 1,
                    transform: animating
                      ? direction === "next" ? "translateX(40px)" : "translateX(-40px)"
                      : "translateX(0px)",
                  }}
                />

                {/* Gold overlay gradient bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: "linear-gradient(to top, rgba(10,0,8,0.9), transparent)" }} />

                {/* Title bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-serif font-bold gold-text text-xl mb-1">
                    {ARTWORKS[current].title}
                  </div>
                  <div className="text-yellow-500/60 text-xs tracking-widest uppercase">
                    by Subham Das
                  </div>
                </div>

                {/* Left arrow */}
                <button onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
                  <span className="text-yellow-400 font-bold text-lg">‹</span>
                </button>

                {/* Right arrow */}
                <button onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
                  <span className="text-yellow-400 font-bold text-lg">›</span>
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-0.5 rounded-full overflow-hidden"
                style={{ background: "rgba(212,168,67,0.1)" }}>
                <div
                  className="h-full rounded-full gold-bg"
                  style={{
                    width: `${((current + 1) / ARTWORKS.length) * 100}%`,
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>

            {/* Next thumbnail */}
            <div
              onClick={goNext}
              className="hidden md:block cursor-pointer flex-shrink-0 rounded-xl overflow-hidden border border-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105"
              style={{ width: "140px", height: "180px", opacity: 0.45 }}>
              <img src={ARTWORKS[next].file} alt="next"
                className="w-full h-full object-cover" />
            </div>

          </div>

          {/* Dot navigation with numbers */}
          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            {ARTWORKS.map((art, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex flex-col items-center gap-1 group transition-all duration-200">
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "32px" : "10px",
                    height: "10px",
                    background: i === current
                      ? "linear-gradient(135deg, #d4a843, #f0c060)"
                      : "rgba(212,168,67,0.25)",
                  }}
                />
                <span className="text-[10px] font-bold transition-colors duration-200"
                  style={{ color: i === current ? "#d4a843" : "rgba(212,168,67,0.3)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-8 overflow-x-auto pb-2 justify-center flex-wrap">
            {ARTWORKS.map((art, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                className="flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300"
                style={{
                  width: "70px", height: "70px",
                  border: i === current
                    ? "2px solid #d4a843"
                    : "2px solid rgba(212,168,67,0.1)",
                  opacity: i === current ? 1 : 0.5,
                  transform: i === current ? "scale(1.1)" : "scale(1)",
                  boxShadow: i === current ? "0 0 16px rgba(212,168,67,0.4)" : "none",
                }}>
                <img src={art.file} alt={art.title}
                  className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}