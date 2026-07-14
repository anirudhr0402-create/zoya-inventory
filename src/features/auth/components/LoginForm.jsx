import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  Loader2,
  ShieldCheck
} from "lucide-react";

import useLogin from "../hooks/useLogin";

export default function LoginForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [remember, setRemember] =
    useState(true);

  const {
    login,
    loading,
    error
  } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();

    await login({
      email,
      password,
      remember
    });
  }

  return (
    <div className="rounded-[34px] border border-white/10 bg-white/10 p-10 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-3xl">

      <div className="mb-10 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-xl">

          <ShieldCheck
            size={38}
            className="text-white"
          />

        </div>

        <h2 className="mt-6 text-4xl font-black text-white">

          Welcome Back

        </h2>

        <p className="mt-3 text-slate-300">

          Sign in to continue to AIMS

        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Email */}

        <div>

          <label className="mb-3 block text-sm font-semibold text-slate-300">

            Email Address

          </label>

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              required
              value={email}
              onChange={e =>
                setEmail(e.target.value)
              }
              placeholder="name@company.com"
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none backdrop-blur-xl transition duration-300 placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20"
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="mb-3 block text-sm font-semibold text-slate-300">

            Password

          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              required
              value={password}
              onChange={e =>
                setPassword(e.target.value)
              }
              placeholder="••••••••••"
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-14 text-white outline-none backdrop-blur-xl transition duration-300 placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
            >

              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}

            </button>

          </div>

        </div>

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-3 text-sm text-slate-300">

            <input
              type="checkbox"
              checked={remember}
              onChange={e =>
                setRemember(
                  e.target.checked
                )
              }
              className="h-4 w-4 rounded"
            />

            Remember Me

          </label>

          <button
            type="button"
            className="text-sm font-semibold text-indigo-300 transition hover:text-white"
          >
            Forgot Password?
          </button>

        </div>

        {error && (

          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">

            {error}

          </div>

        )}

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 py-4 text-lg font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-indigo-600/40 disabled:cursor-not-allowed disabled:opacity-60"
        >

          {loading ? (
            <>
              <Loader2
                size={22}
                className="animate-spin"
              />

              Signing In...
            </>
          ) : (
            <>
              Continue to Dashboard

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </>
          )}

        </button>

      </form>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">

        Protected by Firebase Authentication

      </div>

    </div>
  );
}