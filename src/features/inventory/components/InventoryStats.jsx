import {
  Boxes,
  PackageCheck,
  AlertTriangle,
  IndianRupee
} from "lucide-react";

function StatCard({
  title,
  value,
  icon,
  gradient,
  textColor
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <div
        className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl opacity-20 ${gradient}`}
      />

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2
            className={`mt-3 text-4xl font-bold tracking-tight ${textColor}`}
          >
            {value}
          </h2>

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${gradient}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default function InventoryStats({
  inventory = []
}) {

  const totalProducts =
    inventory.length;

  const totalStock =
    inventory.reduce(
      (sum, item) =>
        sum +
        Number(
          item.quantity || 0
        ),
      0
    );

  const lowStock =
    inventory.filter(
      item =>
        Number(
          item.quantity || 0
        ) <=
        Number(
          item.reorderLevel ||
            10
        )
    ).length;

  const inventoryValue =
    inventory.reduce(
      (sum, item) =>
        sum +
        Number(
          item.quantity || 0
        ) *
          Number(
            item.averageCost ||
              0
          ),
      0
    );

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Products"
        value={totalProducts}
        gradient="bg-gradient-to-br from-indigo-500 to-blue-600"
        textColor="text-slate-900"
        icon={<Boxes size={26} />}
      />

      <StatCard
        title="Total Stock"
        value={totalStock.toLocaleString()}
        gradient="bg-gradient-to-br from-emerald-500 to-green-600"
        textColor="text-emerald-700"
        icon={<PackageCheck size={26} />}
      />

      <StatCard
        title="Low Stock"
        value={lowStock}
        gradient="bg-gradient-to-br from-amber-400 to-orange-500"
        textColor="text-amber-700"
        icon={<AlertTriangle size={26} />}
      />

      <StatCard
        title="Inventory Value"
        value={`₹ ${inventoryValue.toLocaleString(
          "en-IN",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }
        )}`}
        gradient="bg-gradient-to-br from-violet-600 to-fuchsia-600"
        textColor="text-violet-700"
        icon={<IndianRupee size={26} />}
      />

    </div>
  );
}