import {
  Boxes,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function AuthLogo() {
  return (
    <div className="flex items-center gap-5">

      {/* Logo */}

      <div className="relative">

        {/* Glow */}

        <div className="absolute inset-0 rounded-3xl bg-indigo-600 opacity-40 blur-2xl" />

        {/* Glass Box */}

        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">

          <Boxes
            size={38}
            className="text-white"
          />

        </div>

      </div>

      {/* Text */}

      <div>

        <div className="flex items-center gap-2">

          <h1 className="bg-gradient-to-r from-white via-indigo-300 to-violet-400 bg-clip-text text-5xl font-black tracking-tight text-transparent">

            AIMS

          </h1>

          <Sparkles
            size={20}
            className="text-yellow-300"
          />

        </div>

        <p className="mt-1 text-lg font-semibold text-slate-300">

          Alwaris Inventory Management System

        </p>

        <div className="mt-3 flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 w-fit">

          <ShieldCheck size={16} />

          Enterprise Edition

        </div>

      </div>

    </div>
  );
}