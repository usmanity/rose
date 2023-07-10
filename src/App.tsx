import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="mx-auto">
        <Navbar />
        <HeroSection />
        <Projects />
        <Footer />
        <Outlet />
      </div>
    </>
  );
}

export default App;
