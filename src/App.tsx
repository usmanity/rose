import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <Projects />
      </div>
    </>
  );
}

export default App;
