import {
  PackagePlus,
  ShoppingCart,
  ShoppingBag,
  Users,
  Truck,
  FileBarChart2,
  ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const actions = [
  {
    title: "Add Product",
    subtitle: "Create new product",
    icon: PackagePlus,
    color: "from-indigo-600 to-violet-600",
    path: "/products"
  },
  {
    title: "New Purchase",
    subtitle: "Increase inventory",
    icon: ShoppingCart,
    color: "from-sky-500 to-blue-600",
    path: "/purchases"
  },
  {
    title: "New Sale",
    subtitle: "Create invoice",
    icon: ShoppingBag,
    color: "from-emerald-500 to-green-600",
    path: "/sales"
  },
  {
    title: "Customer",
    subtitle: "Manage customers",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    path: "/customers"
  },
  {
    title: "Supplier",
    subtitle: "Manage suppliers",
    icon: Truck,
    color: "from-amber-500 to-orange-500",
    path: "/suppliers"
  },
  {
    title: "Reports",
    subtitle: "Business insights",
    icon: FileBarChart2,
    color: "from-violet-500 to-fuchsia-600",
    path: "/reports"
  }
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Quick Actions
          </h2>

          <p className="mt-1 text-slate-500">
            Frequently used shortcuts
          </p>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {actions.map(action => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl"
            >

              <div
                className={`bg-gradient-to-r ${action.color} p-6 text-white`}
              >

                <Icon size={34} />

              </div>

              <div className="p-6">

                <h3 className="text-lg font-bold text-slate-800">
                  {action.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {action.subtitle}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-indigo-600">

                  Open

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </div>

            </button>

          );

        })}

      </div>

    </div>
  );
}