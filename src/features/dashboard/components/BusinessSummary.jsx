import {
  TrendingUp,
  TrendingDown,
  Wallet,
  Package,
  ShoppingCart,
  ShoppingBag,
  CircleDollarSign,
  ArrowUpRight
} from "lucide-react";

function SummaryCard({
  title,
  value,
  icon: Icon,
  color,
  subtitle
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2">

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
          className="text-emerald-600"
        />

      </div>

    </div>
  );
}

export default function BusinessSummary({
  dashboard = {}
}) {
  const {
    totalSales = 0,
    totalPurchases = 0,
    inventoryValue = 0,
    profit = 0,
    products = 0,
    stock = 0,
    orders = 0,
    customers = 0
  } = dashboard;

  return (
    <div className="space-y-8">

      <div className="grid gap-6 xl:grid-cols-4">

        <SummaryCard
          title="Sales"
          value={`₹ ${Number(
            totalSales
          ).toLocaleString("en-IN")}`}
          subtitle="Revenue"
          icon={ShoppingBag}
          color="from-emerald-500 to-green-600"
        />

        <SummaryCard
          title="Purchases"
          value={`₹ ${Number(
            totalPurchases
          ).toLocaleString("en-IN")}`}
          subtitle="Expenses"
          icon={ShoppingCart}
          color="from-sky-500 to-blue-600"
        />

        <SummaryCard
          title="Inventory"
          value={`₹ ${Number(
            inventoryValue
          ).toLocaleString("en-IN")}`}
          subtitle="Current Stock"
          icon={Package}
          color="from-violet-500 to-fuchsia-600"
        />

        <SummaryCard
          title="Net Profit"
          value={`₹ ${Number(
            profit
          ).toLocaleString("en-IN")}`}
          subtitle="Business Profit"
          icon={
            profit >= 0
              ? TrendingUp
              : TrendingDown
          }
          color={
            profit >= 0
              ? "from-orange-500 to-red-500"
              : "from-rose-500 to-red-700"
          }
        />

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white shadow-xl">

          <Package size={32} />

          <h2 className="mt-5 text-4xl font-bold">
            {products}
          </h2>

          <p className="mt-2 text-indigo-100">
            Products
          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 p-6 text-white shadow-xl">

          <Wallet size={32} />

          <h2 className="mt-5 text-4xl font-bold">
            {stock}
          </h2>

          <p className="mt-2 text-emerald-100">
            Stock Units
          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white shadow-xl">

          <CircleDollarSign size={32} />

          <h2 className="mt-5 text-4xl font-bold">
            {orders}
          </h2>

          <p className="mt-2 text-orange-100">
            Orders
          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-rose-600 p-6 text-white shadow-xl">

          <ShoppingBag size={32} />

          <h2 className="mt-5 text-4xl font-bold">
            {customers}
          </h2>

          <p className="mt-2 text-pink-100">
            Customers
          </p>

        </div>

      </div>

    </div>
  );
}