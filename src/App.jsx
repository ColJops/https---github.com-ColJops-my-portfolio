import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";
import MatrixRain from "./components/MatrixRain";
import AnimeBackground from "./components/AnimeBackground";

export default function App() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-transparent">
      <MatrixRain side="left" />
      <MatrixRain side="right" />
      <AnimeBackground />

      {/* 🔥 ANIMOWANY GRADIENT */}
      <div className="fixed inset-0 -z-30 animate-gradient bg-gradient-to-br from-zinc-950 via-zinc-900 to-black"></div>

      {/* 🔥 PARTICLES */}
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] [background-size:30px_30px]"></div>
      </div>

      {/* 🔥 GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/projekty" element={<Projects />} />
        <Route path="/projekty/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}