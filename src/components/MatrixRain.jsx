import { useEffect, useRef } from "react";

export default function MatrixRain({ side = "left" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const fontSize = 16;
    const columns = Math.floor(w / fontSize);

    const drops = Array(columns).fill(1);

    const chars = "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let raf;
    let frame = 0;

    const draw = () => {
      frame++;

      // 🔥 SPOWOLNIENIE (kluczowe)
      if (frame % 2 !== 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        // 🔥 CYAN + PURPLE MIX
        ctx.fillStyle = Math.random() > 0.9
          ? "#a855f7"   // purple
          : "#22d3ee";  // cyan

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > h && Math.random() > 0.985) {
          drops[i] = 0;
        }

        drops[i] += 0.6; // 🔥 WOLNIEJSZE OPADANIE
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={`hidden xl:block fixed top-0 ${
        side === "left" ? "left-0" : "right-0"
      } h-full w-[160px] pointer-events-none`}
    >
      {/* 🔥 GRADIENT FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* 🔥 CANVAS */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-25 blur-[0.5px]"
      />
    </div>
  );
}