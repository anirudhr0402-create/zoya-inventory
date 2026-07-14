import { Search, LogOut } from "lucide-react";

import useAuth from "../../features/auth/hooks/useAuth";
import useLogout from "../../features/auth/hooks/useLogout";

export default function Header() {
  const { user } = useAuth();

  const { logout } = useLogout();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">

      {/* Search */}

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search products, customers, invoices..."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
        />

      </div>

      {/* User Section */}

      <div className="flex items-center gap-6">

        <div className="text-right">

          <h3 className="font-semibold text-slate-800">
            {user?.name || "Administrator"}
          </h3>

          <p className="text-sm text-slate-500">
            {user?.role || "System Admin"}
          </p>

        </div>

        <div className="h-12 w-px bg-slate-200" />

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-semibold text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </header>
  );
}