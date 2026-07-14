import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  ArrowUpRight
} from "lucide-react";

export default function ProfitLossWidget({
  sales = [],
  purchases = []
}) {
  const totalSales = sales.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
    0
  );

  const totalPurchases = purchases.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
    0
  );

  const profit =
    totalSales - totalPurchases;

  const margin =
    totalSales === 0
      ? 0
      : (
          (profit / totalSales) *
          100
        ).toFixed(1);

  const positive = profit >= 0;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

      <div
        className={`bg-gradient-to-r ${
          positive
            ? "from-emerald-500 to-green-600"
            : "from-red-500 to-rose-600"
        } p-7 text-white`}
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm opacity-90">
              Net Profit / Loss
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              ₹{" "}
              {profit.toLocaleString(
                "en-IN",
                {
                  minimumFractionDigits: 2
                }
              )}
            </h2>

          </div>

          <div className="rounded-3xl bg-white/20 p-5">

            {positive ? (
              <TrendingUp size={42} />
            ) : (
              <TrendingDown size={42} />
            )}

          </div>

        </div>

      </div>

      <div className="space-y-5 p-7">

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">

          <div>

            <p className="text-sm text-slate-500">
              Sales Revenue
            </p>

            <h3 className="mt-2 text-2xl font-bold text-emerald-600">
              ₹{" "}
              {totalSales.toLocaleString(
                "en-IN",
                {
                  minimumFractionDigits: 2
                }
              )}
            </h3>

          </div>

          <ArrowUpRight className="text-emerald-600" />

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">

          <div>

            <p className="text-sm text-slate-500">
              Purchase Cost
            </p>

            <h3 className="mt-2 text-2xl font-bold text-red-600">
              ₹{" "}
              {totalPurchases.toLocaleString(
                "en-IN",
                {
                  minimumFractionDigits: 2
                }
              )}
            </h3>

          </div>

          <IndianRupee className="text-red-500" />

        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">

          <div className="flex items-center justify-between">

            <span className="font-semibold text-slate-700">
              Profit Margin
            </span>

            <span
              className={`rounded-xl px-4 py-2 font-bold ${
                positive
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {margin}%
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}