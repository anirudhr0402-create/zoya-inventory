import {
  Eye,
  Pencil,
  Trash2,
  ShoppingBag
} from "lucide-react";

import Card from "../../../components/ui/Card";

export default function SalesTable({
  sales = [],
  onView,
  onEdit,
  onDelete
}) {
  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="border-b">

              <th className="px-6 py-5 text-left text-xs font-bold uppercase text-slate-500">
                Product
              </th>

              <th className="px-6 py-5 text-left text-xs font-bold uppercase text-slate-500">
                Customer
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase text-slate-500">
                Qty
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase text-slate-500">
                Unit Price
              </th>

              <th className="px-6 py-5 text-right text-xs font-bold uppercase text-slate-500">
                Total
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase text-slate-500">
                Date
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase text-slate-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {sales.length === 0 && (

              <tr>

                <td
                  colSpan={7}
                  className="py-20 text-center"
                >

                  <ShoppingBag
                    size={52}
                    className="mx-auto mb-4 text-slate-300"
                  />

                  <h2 className="text-xl font-bold text-slate-700">
                    No Sales Found
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Create your first sale.
                  </p>

                </td>

              </tr>

            )}

            {sales.map((sale, index) => {

              const quantity = Number(
                sale.quantity || 0
              );

              const unitPrice = Number(
                sale.unitPrice || 0
              );

              const total =
                quantity * unitPrice;

              return (

                <tr
                  key={sale.id}
                  className={`border-b transition hover:bg-indigo-50 ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-slate-50/40"
                  }`}
                >

                  <td className="px-6 py-5">

                    <div>

                      <h3 className="font-semibold text-slate-800">
                        {sale.productName ||
                          "-"}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {sale.invoiceNumber ||
                          "-"}
                      </p>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    {sale.customer || "-"}

                  </td>

                  <td className="px-6 py-5 text-center font-semibold">

                    {quantity}

                  </td>

                  <td className="px-6 py-5 text-right">

                    ₹{" "}
                    {unitPrice.toLocaleString(
                      "en-IN",
                      {
                        minimumFractionDigits: 2
                      }
                    )}

                  </td>

                  <td className="px-6 py-5 text-right font-bold text-emerald-600">

                    ₹{" "}
                    {total.toLocaleString(
                      "en-IN",
                      {
                        minimumFractionDigits: 2
                      }
                    )}

                  </td>

                  <td className="px-6 py-5 text-center">

                    {sale.saleDate || "-"}

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onView(sale)
                        }
                        className="rounded-xl bg-sky-100 p-3 text-sky-600 transition hover:bg-sky-600 hover:text-white"
                      >

                        <Eye size={18} />

                      </button>

                      <button
                        onClick={() =>
                          onEdit(sale)
                        }
                        className="rounded-xl bg-amber-100 p-3 text-amber-600 transition hover:bg-amber-600 hover:text-white"
                      >

                        <Pencil size={18} />

                      </button>

                      <button
                        onClick={() =>
                          onDelete(sale)
                        }
                        className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:bg-red-600 hover:text-white"
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