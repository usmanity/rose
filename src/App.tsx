import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="mx-auto">
        <HeroSection />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
