import {
  Package2,
  TriangleAlert,
  CircleCheck,
  CircleX,
  PencilLine
} from "lucide-react";

import Card from "../../../components/ui/Card";

export default function InventoryTable({
  inventory = [],
  onEdit = () => {}
}) {
  function getStatus(item) {
    const qty = Number(item.quantity || 0);
    const reorder = Number(item.reorderLevel || 10);

    if (qty === 0) {
      return {
        label: "Out of Stock",
        icon: <CircleX size={15} />,
        badge:
          "bg-rose-100 text-rose-700 border border-rose-200"
      };
    }

    if (qty <= reorder) {
      return {
        label: "Low Stock",
        icon: <TriangleAlert size={15} />,
        badge:
          "bg-amber-100 text-amber-700 border border-amber-200"
      };
    }

    return {
      label: "In Stock",
      icon: <CircleCheck size={15} />,
      badge:
        "bg-emerald-100 text-emerald-700 border border-emerald-200"
    };
  }

  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 bg-slate-50">

            <tr className="border-b">

              <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Product
              </th>

              <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Category
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Stock
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Reorder
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                Avg Cost
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                Inventory Value
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {(!inventory || inventory.length === 0) && (

              <tr>

                <td
                  colSpan={8}
                  className="py-24 text-center"
                >

                  <Package2
                    size={52}
                    className="mx-auto mb-4 text-slate-300"
                  />

                  <h2 className="text-xl font-bold text-slate-700">
                    Inventory Empty
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Purchase products to build inventory.
                  </p>

                </td>

              </tr>

            )}

            {inventory.map((item, index) => {

              const qty =
                Number(item.quantity || 0);

              const avg =
                Number(item.averageCost || 0);

              const value =
                qty * avg;

              const status =
                getStatus(item);

              return (

                <tr
                  key={item.id}
                  className={`transition-all hover:bg-indigo-50 ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-slate-50/40"
                  }`}
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow">

                        <Package2 size={22} />

                      </div>

                      <div>

                        <h3 className="font-semibold text-slate-800">
                          {item.productName}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {item.productCode}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {item.category || "-"}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <span className="rounded-xl bg-indigo-100 px-4 py-2 font-bold text-indigo-700">
                      {qty}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <span className="font-semibold text-slate-700">
                      {item.reorderLevel}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-right font-semibold text-slate-700">

                    ₹ {avg.toFixed(2)}

                  </td>

                  <td className="px-6 py-5 text-right text-lg font-bold text-emerald-600">

                    ₹{" "}
                    {value.toLocaleString(
                      "en-IN",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      }
                    )}

                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${status.badge}`}
                    >
                      {status.icon}
                      {status.label}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <button
                      onClick={() => onEdit(item)}
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-indigo-300"
                    >
                      <PencilLine size={18} />
                      Adjust
                    </button>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </Card>
  );
}