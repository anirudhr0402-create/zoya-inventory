import {
  Package,
  IndianRupee,
  Boxes,
  TrendingUp
} from "lucide-react";

export default function InventoryValueWidget({
  inventory = []
}) {
  const totalItems = inventory.reduce(
    (sum, item) =>
      sum + Number(item.quantity || 0),
    0
  );

  const totalValue = inventory.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.averageCost || 0),
    0
  );

  const averageValue =
    inventory.length === 0
      ? 0
      : totalValue / inventory.length;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

      <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-700 p-7 text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm opacity-90">
              Inventory Worth
            </p>

            <h2 className="mt-3 text-4xl font-black">

              ₹{" "}
              {totalValue.toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 2
                }
              )}

            </h2>

          </div>

          <div className="rounded-3xl bg-white/20 p-5">

            <IndianRupee size={42} />

          </div>

        </div>

      </div>

      <div className="grid gap-5 p-7">

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-indigo-100 p-3">

              <Boxes className="text-indigo-600" />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Total Units
              </p>

              <h3 className="text-2xl font-bold text-slate-800">

                {totalItems}

              </h3>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-emerald-100 p-3">

              <Package className="text-emerald-600" />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Products
              </p>

              <h3 className="text-2xl font-bold text-slate-800">

                {inventory.length}

              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Average Value / Product
              </p>

              <h3 className="mt-2 text-2xl font-bold text-indigo-700">

                ₹{" "}
                {averageValue.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2
                  }
                )}

              </h3>

            </div>

            <TrendingUp
              className="text-indigo-600"
              size={34}
            />

          </div>

        </div>

      </div>

    </div>
  );
}