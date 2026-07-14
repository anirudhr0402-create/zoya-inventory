import {
  Package2,
  Eye,
  Pencil,
  Trash2,
  CircleCheck,
  CircleX,
  TriangleAlert,
  Tag
} from "lucide-react";

import Card from "../../../components/ui/Card";

export default function ProductTable({
  products = [],
  onView,
  onEdit,
  onDelete
}) {

  function getStatus(status) {

    const value =
      String(status || "ACTIVE")
        .trim()
        .toUpperCase();

    if (value === "ACTIVE") {
      return {
        text: "Active",
        className:
          "bg-emerald-100 text-emerald-700 border border-emerald-200",
        icon: <CircleCheck size={15}/>
      };
    }

    return {
      text: "Inactive",
      className:
        "bg-rose-100 text-rose-700 border border-rose-200",
      icon: <CircleX size={15}/>
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

              <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                Selling Price
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

            {products.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="py-24 text-center"
                >

                  <Package2
                    size={54}
                    className="mx-auto mb-4 text-slate-300"
                  />

                  <h2 className="text-xl font-bold text-slate-700">
                    No Products Found
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Create your first product.
                  </p>

                </td>

              </tr>

            )}

            {products.map((product,index)=>{

              const status =
                getStatus(product.status);

              return(

                <tr
                  key={product.id}
                  className={`transition-all hover:bg-indigo-50 ${
                    index%2===0
                      ? "bg-white"
                      : "bg-slate-50/40"
                  }`}
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow">

                        <Package2 size={22}/>

                      </div>

                      <div>

                        <h3 className="font-semibold text-slate-800">
                          {product.name}
                        </h3>

                        <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                          <Tag size={14}/>

                          {product.code}

                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {product.category}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-right">

                    <span className="text-lg font-bold text-emerald-600">

                      ₹{" "}
                      {Number(
                        product.price||0
                      ).toLocaleString(
                        "en-IN",
                        {
                          minimumFractionDigits:2
                        }
                      )}

                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${status.className}`}
                    >

                      {status.icon}

                      {status.text}

                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={()=>onView(product)}
                        className="rounded-xl bg-slate-100 p-3 text-slate-700 transition hover:-translate-y-1 hover:bg-indigo-100 hover:text-indigo-700"
                      >
                        <Eye size={18}/>
                      </button>

                      <button
                        onClick={()=>onEdit(product)}
                        className="rounded-xl bg-amber-100 p-3 text-amber-700 transition hover:-translate-y-1 hover:bg-amber-200"
                      >
                        <Pencil size={18}/>
                      </button>

                      <button
                        onClick={()=>onDelete(product)}
                        className="rounded-xl bg-rose-100 p-3 text-rose-700 transition hover:-translate-y-1 hover:bg-rose-200"
                      >
                        <Trash2 size={18}/>
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