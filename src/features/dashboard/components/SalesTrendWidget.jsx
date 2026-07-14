import {
  TrendingUp,
  CalendarDays,
  ArrowUpRight
} from "lucide-react";

export default function SalesTrendWidget({
  sales = []
}) {
  const monthlySales = Array.from(
    { length: 12 },
    (_, i) => ({
      month: new Date(
        0,
        i
      ).toLocaleString("en", {
        month: "short"
      }),
      amount: 0
    })
  );

  sales.forEach(sale => {
    if (!sale.saleDate) return;

    const month = new Date(
      sale.saleDate
    ).getMonth();

    monthlySales[month].amount +=
      Number(sale.quantity || 0) *
      Number(sale.unitPrice || 0);
  });

  const max =
    Math.max(
      ...monthlySales.map(
        m => m.amount
      ),
      1
    );

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Monthly Sales Trend
          </h2>

          <p className="mt-1 text-slate-500">
            Revenue by month
          </p>

        </div>

        <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">

          <TrendingUp size={24} />

        </div>

      </div>

      <div className="flex h-72 items-end justify-between gap-3">

        {monthlySales.map(item => {

          const height =
            (item.amount / max) * 100;

          return (

            <div
              key={item.month}
              className="flex flex-1 flex-col items-center"
            >

              <div className="mb-3 text-xs font-semibold text-slate-500">

                {item.amount > 0
                  ? `₹${Math.round(
                      item.amount
                    ).toLocaleString()}`
                  : ""}

              </div>

              <div className="flex h-56 w-full items-end">

                <div
                  className="w-full rounded-t-2xl bg-gradient-to-t from-indigo-600 via-violet-500 to-fuchsia-500 transition-all duration-700 hover:opacity-80"
                  style={{
                    height: `${Math.max(
                      height,
                      4
                    )}%`
                  }}
                />

              </div>

              <span className="mt-3 text-sm font-semibold text-slate-600">

                {item.month}

              </span>

            </div>

          );

        })}

      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-5">

        <div className="flex items-center gap-3">

          <CalendarDays className="text-indigo-600" />

          <span className="font-medium text-slate-600">

            Current Financial Year

          </span>

        </div>

        <button className="flex items-center gap-2 font-semibold text-indigo-600">

          View Details

          <ArrowUpRight size={18} />

        </button>

      </div>

    </div>
  );
}