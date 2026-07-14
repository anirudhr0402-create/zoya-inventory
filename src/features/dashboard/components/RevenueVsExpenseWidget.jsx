import {
  IndianRupee,
  TrendingUp,
  TrendingDown,
  Wallet
} from "lucide-react";

export default function RevenueVsExpenseWidget({
  sales = [],
  purchases = []
}) {
  const revenue = sales.reduce(
    (sum, sale) =>
      sum +
      Number(sale.quantity || 0) *
        Number(sale.unitPrice || 0),
    0
  );

  const expense = purchases.reduce(
    (sum, purchase) =>
      sum +
      Number(purchase.quantity || 0) *
        Number(purchase.unitPrice || 0),
    0
  );

  const max = Math.max(
    revenue,
    expense,
    1
  );

  const revenueHeight =
    (revenue / max) * 100;

  const expenseHeight =
    (expense / max) * 100;

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Revenue vs Expense
          </h2>

          <p className="mt-1 text-slate-500">
            Financial comparison
          </p>

        </div>

        <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">

          <Wallet size={24} />

        </div>

      </div>

      <div className="flex h-80 items-end justify-center gap-24">

        <div className="flex flex-col items-center">

          <div className="mb-4 text-center">

            <div className="flex items-center justify-center gap-1 text-emerald-600">

              <IndianRupee size={18} />

              <span className="text-xl font-bold">

                {revenue.toLocaleString(
                  "en-IN",
                  {
                    minimumFractionDigits: 2
                  }
                )}

              </span>

            </div>

          </div>

          <div className="flex h-56 items-end">

            <div
              className="w-24 rounded-t-3xl bg-gradient-to-t from-emerald-600 via-green-500 to-lime-400 shadow-lg transition-all duration-700"
              style={{
                height: `${Math.max(
                  revenueHeight,
                  5
                )}%`
              }}
            />

          </div>

          <div className="mt-5 flex items-center gap-2 font-semibold text-emerald-600">

            <TrendingUp size={18} />

            Revenue

          </div>

        </div>

        <div className="flex flex-col items-center">

          <div className="mb-4 text-center">

            <div className="flex items-center justify-center gap-1 text-rose-600">

              <IndianRupee size={18} />

              <span className="text-xl font-bold">

                {expense.toLocaleString(
                  "en-IN",
                  {
                    minimumFractionDigits: 2
                  }
                )}

              </span>

            </div>

          </div>

          <div className="flex h-56 items-end">

            <div
              className="w-24 rounded-t-3xl bg-gradient-to-t from-red-600 via-rose-500 to-pink-400 shadow-lg transition-all duration-700"
              style={{
                height: `${Math.max(
                  expenseHeight,
                  5
                )}%`
              }}
            />

          </div>

          <div className="mt-5 flex items-center gap-2 font-semibold text-rose-600">

            <TrendingDown size={18} />

            Expense

          </div>

        </div>

      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl bg-emerald-50 p-5">

          <p className="text-sm text-slate-500">
            Total Revenue
          </p>

          <h2 className="mt-2 text-3xl font-bold text-emerald-600">

            ₹{" "}
            {revenue.toLocaleString(
              "en-IN",
              {
                minimumFractionDigits: 2
              }
            )}

          </h2>

        </div>

        <div className="rounded-2xl bg-rose-50 p-5">

          <p className="text-sm text-slate-500">
            Total Expense
          </p>

          <h2 className="mt-2 text-3xl font-bold text-rose-600">

            ₹{" "}
            {expense.toLocaleString(
              "en-IN",
              {
                minimumFractionDigits: 2
              }
            )}

          </h2>

        </div>

      </div>

    </div>
  );
}