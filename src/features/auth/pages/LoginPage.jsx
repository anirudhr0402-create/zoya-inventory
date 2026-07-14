import BackgroundAnimation from "../components/BackgroundAnimation";
import FloatingStats from "../components/FloatingStats";
import MouseGlow from "../components/MouseGlow";
import AuthLogo from "../components/AuthLogo";
import LoginForm from "../components/LoginForm";
import AuthFooter from "../components/AuthFooter";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      <BackgroundAnimation />

      <MouseGlow />

      <div className="relative z-10 flex min-h-screen">

        {/* LEFT PANEL */}

        <div className="hidden w-1/2 flex-col justify-between p-16 lg:flex">

          <div>

            <AuthLogo />

            <div className="mt-16">

              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-xl">

                Enterprise Inventory Platform

              </span>

              <h1 className="mt-8 text-6xl font-black leading-tight text-white">

                Manage

                <br />

                Inventory

                <br />

                Like Never

                <br />

                Before.

              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">

                One platform to manage inventory,
                suppliers, customers, purchases,
                sales, reports and analytics.

              </p>

            </div>

          </div>

          <FloatingStats />

        </div>

        {/* RIGHT PANEL */}

        <div className="flex flex-1 items-center justify-center p-8 lg:p-16">

          <div className="w-full max-w-lg">

            <LoginForm />

            <AuthFooter />

          </div>

        </div>

      </div>

    </div>
  );
}