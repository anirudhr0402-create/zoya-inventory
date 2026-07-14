import {
  AlertTriangle,
  Package,
  ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function LowStockWidget({
  inventory = []
}) {
  const navigate = useNavigate();

  const lowStock = inventory
    .filter(item => {
      const qty = Number(item.quantity || 0);
      const reorder = Number(
        item.reorderLevel || 10
      );

      return qty <= reorder;
    })
    .sort(
      (a, b) =>
        Number(a.quantity) -
        Number(b.quantity)
    )
    .slice(0, 5);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Low Stock Alert
          </h2>

          <p className="mt-1 text-slate-500">
            Products requiring replenishment
          </p>

        </div>

        <div className="rounded-2xl bg-amber-100 p-3 text-amber-600">

          <AlertTriangle size={26} />

        </div>

      </div>

      {lowStock.length === 0 ? (

        <div className="flex h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50">

          <Package
            size={60}
            className="text-emerald-400"
          />

          <h3 className="mt-5 text-xl font-bold text-emerald-700">
            Everything looks great 🎉
          </h3>

          <p className="mt-2 text-slate-500">
            No low stock products.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {lowStock.map(item => (

            <div
              key={item.id}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50"
            >

              <div>

                <h3 className="font-bold text-slate-800">
                  {item.productName}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.category}
                </p>

              </div>

              <div className="text-right">

                <div className="rounded-xl bg-red-100 px-4 py-2 text-lg font-bold text-red-600">

                  {item.quantity}

                </div>

                <div className="mt-2 text-xs text-slate-500">

                  Reorder:
                  {" "}
                  {item.reorderLevel}

                </div>

              </div>

            </div>

          ))}

          <button
            onClick={() =>
              navigate("/inventory")
            }
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >

            Open Inventory

            <ArrowRight size={18} />

          </button>

        </div>

      )}

    </div>
  );
}