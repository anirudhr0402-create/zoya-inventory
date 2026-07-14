import {
  ShieldCheck,
  Lock,
  Copyright
} from "lucide-react";

export default function AuthFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-8">

      {/* Security Card */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20">

              <ShieldCheck
                size={24}
                className="text-emerald-400"
              />

            </div>

            <div>

              <h4 className="font-semibold text-white">
                Secure Authentication
              </h4>

              <p className="text-sm text-slate-400">
                Protected by Firebase Authentication
              </p>

            </div>

          </div>

          <div className="rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-semibold text-emerald-300">

            ONLINE

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

        <div className="flex items-center gap-2">

          <Copyright size={15} />

          <span>
            {year} Alwaris Inventory Management System
          </span>

        </div>

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2">

            <Lock size={15} />

            <span>256-bit Encryption</span>

          </div>

          <div>

            Version 1.0.0

          </div>

        </div>

      </div>

    </div>
  );
}