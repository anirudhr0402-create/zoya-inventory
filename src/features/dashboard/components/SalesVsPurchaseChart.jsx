import {
  BarChart3,
  ShoppingBag,
  ShoppingCart,
  TrendingUp
} from "lucide-react";

export default function SalesVsPurchaseChart({
  sales = [],
  purchases = []
}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const chartData = months.map(
    (month, index) => {
      const salesValue = sales
        .filter(item => {
          if (!item.saleDate)
            return false;

          return (
            new Date(
              item.saleDate
            ).getMonth() === index
          );
        })
        .reduce(
          (sum, item) =>
            sum +
            Number(
              item.quantity || 0
            ) *
              Number(
                item.unitPrice || 0
              ),
          0
        );

      const purchaseValue =
        purchases
          .filter(item => {
            if (
              !item.purchaseDate
            )
              return false;

            return (
              new Date(
                item.purchaseDate
              ).getMonth() === index
            );
          })
          .reduce(
            (sum, item) =>
              sum +
              Number(
                item.quantity || 0
              ) *
                Number(
                  item.unitPrice || 0
                ),
            0
          );

      return {
        month,
        sales: salesValue,
        purchases:
          purchaseValue
      };
    }
  );

  const maxValue = Math.max(
    ...chartData.flatMap(item => [
      item.sales,
      item.purchases
    ]),
    1
  );

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Sales vs Purchases
          </h2>

          <p className="mt-1 text-slate-500">
            Monthly comparison
          </p>

        </div>

        <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">

          <BarChart3 size={24} />

        </div>

      </div>

      <div className="flex h-80 items-end justify-between gap-3">

        {chartData.map(item => (

          <div
            key={item.month}
            className="flex flex-1 flex-col items-center"
          >

            <div className="flex h-60 items-end gap-2">

              <div
                className="w-5 rounded-t-xl bg-gradient-to-t from-emerald-600 to-lime-400 transition-all duration-700"
                style={{
                  height: `${Math.max(
                    (item.sales /
                      maxValue) *
                      100,
                    4
                  )}%`
                }}
              />

              <div
                className="w-5 rounded-t-xl bg-gradient-to-t from-indigo-700 to-violet-400 transition-all duration-700"
                style={{
                  height: `${Math.max(
                    (item.purchases /
                      maxValue) *
                      100,
                    4
                  )}%`
                }}
              />

            </div>

            <span className="mt-3 text-sm font-semibold text-slate-600">

              {item.month}

            </span>

          </div>

        ))}

      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">

        <div className="flex items-center gap-3">

          <div className="h-4 w-4 rounded bg-emerald-500" />

          <ShoppingBag
            size={18}
            className="text-emerald-600"
          />

          <span className="font-medium text-slate-700">
            Sales
          </span>

        </div>

        <div className="flex items-center gap-3">

          <div className="h-4 w-4 rounded bg-indigo-600" />

          <ShoppingCart
            size={18}
            className="text-indigo-600"
          />

          <span className="font-medium text-slate-700">
            Purchases
          </span>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">

          <TrendingUp
            size={18}
            className="text-emerald-600"
          />

          <span className="text-sm font-semibold text-emerald-700">
            Live Business Analytics
          </span>

        </div>

      </div>

    </div>
  );
}