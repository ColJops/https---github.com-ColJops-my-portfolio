export default function GradientBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />

      <div className="fixed inset-0 -z-30 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] [background-size:30px_30px]" />
      </div>
    </>
  );
}