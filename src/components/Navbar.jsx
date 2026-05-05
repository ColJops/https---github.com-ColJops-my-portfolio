import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-zinc-900/80 backdrop-blur border-b border-zinc-800 sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-wide">
        <span className="text-cyan-400">Daniel Kupracz </span> Dev Portfolio
      </h1>

      <div className="flex gap-8 text-lg font-medium">
        <Link
          to="/"
          className="relative text-zinc-300 hover:text-cyan-400 transition
          after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
          after:bg-cyan-400 after:transition-all after:duration-300
          hover:after:w-full"
        >
          Start
        </Link>
        <Link
          to="/o-mnie"
          className="relative text-zinc-300 hover:text-cyan-400 transition
          after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
          after:bg-cyan-400 after:transition-all after:duration-300
          hover:after:w-full"
        >
          O mnie
        </Link>
        <Link
          to="/projekty"
          className="relative text-zinc-300 hover:text-cyan-400 transition
          after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
          after:bg-cyan-400 after:transition-all after:duration-300
          hover:after:w-full"
        >
          Projekty
        </Link>
      </div>
    </nav>
  );
}