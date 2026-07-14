import {
  ShoppingBag,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  IndianRupee,
  ArrowUpRight
} from "lucide-react";

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  gradient
}) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className={`bg-gradient-to-r ${gradient} p-6 text-white`}>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm opacity-90">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-black">
              {value}
            </h2>

          </div>

          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">

            <Icon size={34} />

          </div>

        </div>

      </div>

      <div className="flex items-center justify-between p-5">

        <span className="text-sm text-slate-500">
          {subtitle}
        </span>

        <ArrowUpRight
          size={18}
          className="text-emerald-600 transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </div>

    </div>
  );
}

export default function DashboardStats({
  products = [],
  customers = [],
  purchases = [],
  sales = [],
  inventory = []
}) {

  const totalSales = sales.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
    0
  );

  const inventoryValue =
    inventory.reduce(
      (sum, item) =>
        sum +
        Number(item.quantity || 0) *
          Number(item.averageCost || 0),
      0
    );

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      <StatCard
        title="Products"
        value={products.length}
        subtitle="Available Products"
        icon={Package}
        gradient="from-indigo-600 to-violet-600"
      />

      <StatCard
        title="Customers"
        value={customers.length}
        subtitle="Registered Customers"
        icon={Users}
        gradient="from-pink-500 to-rose-500"
      />

      <StatCard
        title="Purchases"
        value={purchases.length}
        subtitle="Purchase Entries"
        icon={ShoppingCart}
        gradient="from-sky-500 to-blue-600"
      />

      <StatCard
        title="Sales"
        value={sales.length}
        subtitle={`₹ ${totalSales.toLocaleString("en-IN")}`}
        icon={ShoppingBag}
        gradient="from-emerald-500 to-green-600"
      />

      <StatCard
        title="Inventory"
        value={`₹ ${inventoryValue.toLocaleString("en-IN")}`}
        subtitle="Current Stock Value"
        icon={IndianRupee}
        gradient="from-orange-500 to-red-500"
      />

    </div>
  );
}