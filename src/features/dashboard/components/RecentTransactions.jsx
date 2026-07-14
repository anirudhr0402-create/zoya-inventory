import {
  ShoppingBag,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  Clock3
} from "lucide-react";

export default function RecentTransactions({
  sales = [],
  purchases = []
}) {
  const transactions = [
    ...sales.map(item => ({
      id: item.id,
      type: "Sale",
      name: item.customer || "Customer",
      product: item.productName,
      amount:
        Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
      date: item.saleDate,
      color:
        "bg-emerald-100 text-emerald-600",
      icon: ShoppingBag
    })),
    ...purchases.map(item => ({
      id: item.id,
      type: "Purchase",
      name: item.supplier || "Supplier",
      product: item.productName,
      amount:
        Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
      date: item.purchaseDate,
      color:
        "bg-blue-100 text-blue-600",
      icon: ShoppingCart
    }))
  ]
    .sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    )
    .slice(0, 8);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Recent Transactions
          </h2>

          <p className="mt-1 text-slate-500">
            Latest business activities
          </p>

        </div>

        <Clock3 className="text-indigo-600" />

      </div>

      {transactions.length === 0 ? (

        <div className="flex h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

          <Clock3
            size={60}
            className="text-slate-300"
          />

          <h3 className="mt-5 text-xl font-bold text-slate-700">
            No Transactions
          </h3>

          <p className="mt-2 text-slate-500">
            Sales and purchases will appear here.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {transactions.map(item => {

            const Icon = item.icon;

            return (

              <div
                key={`${item.type}-${item.id}`}
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50"
              >

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >

                  <Icon size={24} />

                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-bold text-slate-800">

                      {item.product}

                    </h3>

                    {item.type ===
                    "Sale" ? (
                      <ArrowUpRight className="text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="text-blue-600" />
                    )}

                  </div>

                  <p className="mt-1 text-sm text-slate-500">

                    {item.type}
                    {" • "}
                    {item.name}

                  </p>

                </div>

                <div className="text-right">

                  <div
                    className={`text-lg font-bold ${
                      item.type ===
                      "Sale"
                        ? "text-emerald-600"
                        : "text-blue-600"
                    }`}
                  >

                    ₹{" "}
                    {item.amount.toLocaleString(
                      "en-IN",
                      {
                        minimumFractionDigits: 2
                      }
                    )}

                  </div>

                  <div className="mt-1 text-xs text-slate-400">

                    {item.date || "-"}

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </div>
  );
}