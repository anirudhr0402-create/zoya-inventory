import {
  ShoppingBag,
  IndianRupee,
  Package,
  TrendingUp
} from "lucide-react";

function StatCard({
  title,
  value,
  icon: Icon,
  color,
  subtitle
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <div className={`bg-gradient-to-r ${color} p-6 text-white`}>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm opacity-90">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {value}
            </h2>

          </div>

          <div className="rounded-2xl bg-white/20 p-4">

            <Icon size={32} />

          </div>

        </div>

      </div>

      <div className="px-6 py-4 text-sm text-slate-500">

        {subtitle}

      </div>

    </div>
  );
}

export default function SalesStats({
  sales = []
}) {
  const totalRevenue =
    sales.reduce(
      (sum, sale) =>
        sum +
        Number(sale.quantity || 0) *
          Number(sale.unitPrice || 0),
      0
    );

  const totalQuantity =
    sales.reduce(
      (sum, sale) =>
        sum +
        Number(sale.quantity || 0),
      0
    );

  const averageSale =
    sales.length === 0
      ? 0
      : totalRevenue / sales.length;

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Sales"
        value={sales.length}
        subtitle="Sales Records"
        icon={ShoppingBag}
        color="from-indigo-600 to-violet-600"
      />

      <StatCard
        title="Revenue"
        value={`₹ ${totalRevenue.toLocaleString(
          "en-IN",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }
        )}`}
        subtitle="Total Revenue"
        icon={IndianRupee}
        color="from-emerald-500 to-green-600"
      />

      <StatCard
        title="Products Sold"
        value={totalQuantity}
        subtitle="Units Sold"
        icon={Package}
        color="from-sky-500 to-blue-600"
      />

      <StatCard
        title="Average Sale"
        value={`₹ ${averageSale.toLocaleString(
          "en-IN",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }
        )}`}
        subtitle="Per Invoice"
        icon={TrendingUp}
        color="from-orange-500 to-red-500"
      />

    </div>
  );
}