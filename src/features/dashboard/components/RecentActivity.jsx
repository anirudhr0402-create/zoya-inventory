import {
  ShoppingBag,
  ShoppingCart,
  Package,
  UserPlus,
  Truck,
  ArrowUpRight
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "New Sale",
    description: "Invoice INV-1001 created",
    time: "2 min ago",
    icon: ShoppingBag,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    id: 2,
    title: "Purchase Added",
    description: "Rice 50Kg purchased",
    time: "10 min ago",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    title: "Inventory Updated",
    description: "Stock adjusted",
    time: "35 min ago",
    icon: Package,
    color: "bg-violet-100 text-violet-600"
  },
  {
    id: 4,
    title: "Customer Added",
    description: "New customer registered",
    time: "1 hr ago",
    icon: UserPlus,
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 5,
    title: "Supplier Added",
    description: "Supplier created",
    time: "Today",
    icon: Truck,
    color: "bg-amber-100 text-amber-600"
  }
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Recent Activity
          </h2>

          <p className="mt-1 text-slate-500">
            Latest business activities
          </p>

        </div>

        <button className="text-sm font-semibold text-indigo-600">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {activities.map(item => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50"
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 transition group-hover:text-indigo-600"
                  />

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>

              </div>

              <span className="text-xs font-semibold text-slate-400">
                {item.time}
              </span>

            </div>

          );

        })}

      </div>

    </div>
  );
}