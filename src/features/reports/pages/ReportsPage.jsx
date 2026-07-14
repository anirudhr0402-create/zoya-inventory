import {
  BarChart3,
  TrendingUp,
  IndianRupee,
  Package,
  ShoppingCart,
  ShoppingBag,
  Download,
  Calendar,
  Sparkles
} from "lucide-react";

import PageHeader from "../../../components/ui/PageHeader";
import Card from "../../../components/ui/Card";

export default function ReportsPage() {
  const cards = [
    {
      title: "Today's Sales",
      value: "₹ 0.00",
      icon: ShoppingBag,
      color:
        "from-emerald-500 to-green-600"
    },
    {
      title: "Today's Purchases",
      value: "₹ 0.00",
      icon: ShoppingCart,
      color:
        "from-blue-500 to-indigo-600"
    },
    {
      title: "Inventory Value",
      value: "₹ 0.00",
      icon: Package,
      color:
        "from-violet-500 to-fuchsia-600"
    },
    {
      title: "Profit",
      value: "₹ 0.00",
      icon: TrendingUp,
      color:
        "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="space-y-8">

      <PageHeader
        title="Reports"
        subtitle="Business analytics & insights"
      />

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <BarChart3 size={34} />

              <h2 className="text-3xl font-bold">
                Reports & Analytics
              </h2>

              <Sparkles size={20} />

            </div>

            <p className="mt-3 text-indigo-100">
              Monitor business performance in
              real time.
            </p>

          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg">

              <Calendar size={18} />

              Date Range

            </button>

            <button className="flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg">

              <Download size={18} />

              Export PDF

            </button>

          </div>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map(card => {
          const Icon = card.icon;

          return (
            <Card
              key={card.title}
              className="overflow-hidden rounded-3xl border-0 shadow-xl"
            >

              <div
                className={`bg-gradient-to-r ${card.color} p-6 text-white`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm opacity-90">
                      {card.title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                      {card.value}
                    </h2>

                  </div>

                  <div className="rounded-2xl bg-white/20 p-4">

                    <Icon size={34} />

                  </div>

                </div>

              </div>

            </Card>
          );
        })}

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="rounded-3xl p-8">

          <h3 className="mb-6 text-xl font-bold">
            Monthly Sales
          </h3>

          <div className="flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

            <div className="text-center">

              <BarChart3
                size={60}
                className="mx-auto text-slate-300"
              />

              <p className="mt-4 text-slate-500">
                Sales chart will appear here.
              </p>

            </div>

          </div>

        </Card>

        <Card className="rounded-3xl p-8">

          <h3 className="mb-6 text-xl font-bold">
            Profit Analysis
          </h3>

          <div className="flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

            <div className="text-center">

              <IndianRupee
                size={60}
                className="mx-auto text-slate-300"
              />

              <p className="mt-4 text-slate-500">
                Profit analytics will appear
                here.
              </p>

            </div>

          </div>

        </Card>

      </div>

    </div>
  );
}