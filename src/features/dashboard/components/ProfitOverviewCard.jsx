import {
  TrendingUp,
  TrendingDown,
  Wallet,
  IndianRupee,
  Percent,
  Sparkles
} from "lucide-react";

export default function ProfitOverviewCard({
  sales = [],
  purchases = []
}) {
  const revenue = sales.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
    0
  );

  const expense = purchases.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
    0
  );

  const profit = revenue - expense;

  const margin =
    revenue === 0
      ? 0
      : (
          (profit / revenue) *
          100
        ).toFixed(2);

  const positive = profit >= 0;

  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">

      <div
        className={`bg-gradient-to-r ${
          positive
            ? "from-emerald-600 via-green-500 to-lime-400"
            : "from-rose-600 via-red-500 to-orange-500"
        } p-8 text-white`}
      >

        <div className="flex items-center justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

              <Sparkles size={16} />

              Business Profit

            </div>

            <h2 className="mt-5 text-5xl font-black">

              ₹{" "}
              {profit.toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 2
                }
              )}

            </h2>

            <p className="mt-3 text-lg opacity-90">
              Overall Profit / Loss
            </p>

          </div>

          <div className="rounded-3xl bg-white/20 p-6 backdrop-blur">

            {positive ? (
              <TrendingUp size={50} />
            ) : (
              <TrendingDown size={50} />
            )}

          </div>

        </div>

      </div>

      <div className="grid gap-6 p-8 md:grid-cols-3">

        <div className="rounded-2xl bg-emerald-50 p-6">

          <div className="flex items-center justify-between">

            <Wallet
              className="text-emerald-600"
              size={28}
            />

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">

              Revenue

            </span>

          </div>

          <h3 className="mt-5 text-3xl font-black text-emerald-600">

            ₹{" "}
            {revenue.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2
              }
            )}

          </h3>

        </div>

        <div className="rounded-2xl bg-rose-50 p-6">

          <div className="flex items-center justify-between">

            <IndianRupee
              className="text-rose-600"
              size={28}
            />

            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">

              Expense

            </span>

          </div>

          <h3 className="mt-5 text-3xl font-black text-rose-600">

            ₹{" "}
            {expense.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2
              }
            )}

          </h3>

        </div>

        <div className="rounded-2xl bg-indigo-50 p-6">

          <div className="flex items-center justify-between">

            <Percent
              className="text-indigo-600"
              size={28}
            />

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">

              Margin

            </span>

          </div>

          <h3
            className={`mt-5 text-3xl font-black ${
              positive
                ? "text-emerald-600"
                : "text-rose-600"
            }`}
          >
            {margin}%
          </h3>

        </div>

      </div>

    </div>
  );
}