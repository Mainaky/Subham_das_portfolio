import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Artforms   from "./components/Artforms";
import Gallery    from "./components/Gallery";
import Philosophy from "./components/Philosophy";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#0a0008", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Artforms />
        <Gallery />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
