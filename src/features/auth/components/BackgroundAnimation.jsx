export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />

      {/* Aurora Blob 1 */}

      <div className="absolute -left-40 -top-40 h-[550px] w-[550px] animate-[pulse_12s_ease-in-out_infinite] rounded-full bg-indigo-600/30 blur-[140px]" />

      {/* Aurora Blob 2 */}

      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] animate-[pulse_14s_ease-in-out_infinite] rounded-full bg-violet-600/20 blur-[150px]" />

      {/* Aurora Blob 3 */}

      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] animate-[pulse_16s_ease-in-out_infinite] rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Aurora Blob 4 */}

      <div className="absolute bottom-10 right-32 h-[350px] w-[350px] animate-[pulse_10s_ease-in-out_infinite] rounded-full bg-fuchsia-600/20 blur-[130px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px"
        }}
      />

      {/* Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,.18),transparent_70%)]" />

      {/* Floating Circles */}

      <div className="absolute left-24 top-32 h-6 w-6 rounded-full bg-indigo-400/30 shadow-[0_0_40px_#6366f1]" />

      <div className="absolute right-40 top-48 h-5 w-5 rounded-full bg-violet-400/30 shadow-[0_0_40px_#8b5cf6]" />

      <div className="absolute bottom-36 left-1/4 h-4 w-4 rounded-full bg-cyan-300/40 shadow-[0_0_35px_#22d3ee]" />

      <div className="absolute bottom-24 right-1/4 h-7 w-7 rounded-full bg-fuchsia-400/30 shadow-[0_0_45px_#d946ef]" />

      {/* Decorative Rings */}

      <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full border border-white/5" />

      <div className="absolute right-10 top-20 h-72 w-72 rounded-full border border-white/5" />

      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full border border-indigo-500/10" />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

    </div>
  );
}