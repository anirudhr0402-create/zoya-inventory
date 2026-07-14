import {
  Truck,
  Eye,
  Pencil,
  Trash2,
  Phone,
  Mail,
  CircleCheck
} from "lucide-react";

import Card from "../../../components/ui/Card";

export default function SupplierTable({
  suppliers = [],
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
                Supplier
              </th>

              <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Contact
              </th>

              <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Email
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {suppliers.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="py-24 text-center"
                >

                  <Truck
                    size={54}
                    className="mx-auto mb-4 text-slate-300"
                  />

                  <h2 className="text-xl font-bold text-slate-700">
                    No Suppliers Found
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Add your first supplier.
                  </p>

                </td>

              </tr>

            )}

            {suppliers.map((supplier, index) => (

              <tr
                key={supplier.id}
                className={`transition-all hover:bg-indigo-50 ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50/40"
                }`}
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow">

                      <Truck size={22} />

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-800">
                        {supplier.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {supplier.company || "-"}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 text-slate-700">

                    <Phone size={15} />

                    {supplier.phone || "-"}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 text-slate-700">

                    <Mail size={15} />

                    {supplier.email || "-"}

                  </div>

                </td>

                <td className="px-6 py-5 text-center">

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

                    <CircleCheck size={15} />

                    Active

                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onView(supplier)}
                      className="rounded-xl bg-slate-100 p-3 text-slate-700 transition hover:-translate-y-1 hover:bg-indigo-100 hover:text-indigo-700"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(supplier)}
                      className="rounded-xl bg-amber-100 p-3 text-amber-700 transition hover:-translate-y-1 hover:bg-amber-200"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(supplier)}
                      className="rounded-xl bg-rose-100 p-3 text-rose-700 transition hover:-translate-y-1 hover:bg-rose-200"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        </div>

    </Card>
  );
}