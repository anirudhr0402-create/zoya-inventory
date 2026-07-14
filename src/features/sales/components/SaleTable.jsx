import {
  ShoppingBag,
  Eye,
  Pencil,
  Trash2,
  Package,
  User,
  CalendarDays,
  IndianRupee
} from "lucide-react";

import Card from "../../../components/ui/Card";

export default function SaleTable({
  sales = [],
  onView,
  onEdit,
  onDelete
}) {
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
                Customer
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Qty
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                Unit Price
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                Total
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Date
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {sales.length === 0 && (

              <tr>

                <td
                  colSpan={7}
                  className="py-24 text-center"
                >

                  <ShoppingBag
                    size={54}
                    className="mx-auto mb-4 text-slate-300"
                  />

                  <h2 className="text-xl font-bold text-slate-700">
                    No Sales Found
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Record your first sale.
                  </p>

                </td>

              </tr>

            )}

            {sales.map((sale, index) => {

              const qty =
                Number(sale.quantity || 0);

              const price =
                Number(sale.unitPrice || 0);

              const total =
                qty * price;

              return (

                <tr
                  key={sale.id}
                  className={`transition-all hover:bg-indigo-50 ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-slate-50/40"
                  }`}
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow">

                        <Package size={22} />

                      </div>

                      <div>

                        <h3 className="font-semibold text-slate-800">
                          {sale.productName}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {sale.productCode}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 font-medium text-slate-700">

                      <User size={16} />

                      {sale.customer}

                    </div>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <span className="rounded-xl bg-indigo-100 px-4 py-2 font-bold text-indigo-700">

                      {qty}

                    </span>

                  </td>

                  <td className="px-6 py-5 text-right">

                    <div className="flex items-center justify-end gap-1 font-semibold">

                      <IndianRupee size={16} />

                      {price.toLocaleString("en-IN", {
                        minimumFractionDigits: 2
                      })}

                    </div>

                  </td>

                  <td className="px-6 py-5 text-right">

                    <span className="text-lg font-bold text-emerald-600">

                      ₹ {total.toLocaleString("en-IN", {
                        minimumFractionDigits: 2
                      })}

                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">

                      <CalendarDays size={15} />

                      {sale.saleDate || "-"}

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => onView(sale)}
                        className="rounded-xl bg-slate-100 p-3 text-slate-700 transition hover:-translate-y-1 hover:bg-indigo-100 hover:text-indigo-700"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => onEdit(sale)}
                        className="rounded-xl bg-amber-100 p-3 text-amber-700 transition hover:-translate-y-1 hover:bg-amber-200"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => onDelete(sale)}
                        className="rounded-xl bg-rose-100 p-3 text-rose-700 transition hover:-translate-y-1 hover:bg-rose-200"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

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