export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="gold-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif font-black gold-text text-xl mb-1">Subham Das</div>
            <div className="text-yellow-700 text-xs tracking-widest uppercase">Fine Artist · West Bengal, India</div>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {["Portrait", "Anatomy", "Caricature", "Acrylic", "Pastel"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-yellow-500/15 text-yellow-700 hover:border-yellow-500/30 hover:text-yellow-500 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
          <div className="text-yellow-800 text-xs text-center md:text-right">
            <div>© 2025 Subham Das</div>
            <div className="mt-1">All artworks reserved ✦</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
