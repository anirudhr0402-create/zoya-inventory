import {
  Sparkles,
  CalendarDays,
  Clock3,
  ArrowRight,
  Building2
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function DashboardWelcomeCard() {
  const navigate = useNavigate();

  const today = new Date();

  const date = today.toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  const time = today.toLocaleTimeString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-indigo-900 to-violet-900 p-10 text-white shadow-2xl">

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            Welcome Back

          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight">

            Alwaris Inventory
            <br />
            Management System

          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">

            Monitor inventory, purchases,
            sales, profits and business
            growth from one beautiful
            dashboard.

          </p>

          <button
            onClick={() =>
              navigate("/reports")
            }
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-slate-900 transition hover:-translate-y-1 hover:shadow-2xl"
          >

            View Reports

            <ArrowRight size={20} />

          </button>

        </div>

        <div className="grid gap-5">

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <div className="flex items-center gap-3">

              <CalendarDays />

              <span className="font-semibold">
                Today
              </span>

            </div>

            <h3 className="mt-4 text-xl font-bold">

              {date}

            </h3>

          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <div className="flex items-center gap-3">

              <Clock3 />

              <span className="font-semibold">
                Current Time
              </span>

            </div>

            <h3 className="mt-4 text-3xl font-bold">

              {time}

            </h3>

          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <div className="flex items-center gap-3">

              <Building2 />

              <span className="font-semibold">
                Company
              </span>

            </div>

            <h3 className="mt-4 text-xl font-bold">

              Zoya Industries

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}