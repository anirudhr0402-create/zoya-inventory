import {
  Crown,
  Package,
  TrendingUp,
  ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function TopProductsWidget({
  sales = []
}) {
  const navigate = useNavigate();

  const topProducts = Object.values(
    sales.reduce((acc, sale) => {
      const id =
        sale.productId ||
        sale.productName;

      if (!acc[id]) {
        acc[id] = {
          id,
          productName:
            sale.productName,
          quantity: 0,
          revenue: 0
        };
      }

      acc[id].quantity += Number(
        sale.quantity || 0
      );

      acc[id].revenue +=
        Number(sale.quantity || 0) *
        Number(sale.unitPrice || 0);

      return acc;
    }, {})
  )
    .sort(
      (a, b) =>
        b.quantity - a.quantity
    )
    .slice(0, 5);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Top Selling Products
          </h2>

          <p className="mt-1 text-slate-500">
            Highest selling products
          </p>

        </div>

        <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">

          <TrendingUp size={24} />

        </div>

      </div>

      {topProducts.length === 0 ? (

        <div className="flex h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

          <Package
            size={60}
            className="text-slate-300"
          />

          <h3 className="mt-5 text-xl font-bold text-slate-700">
            No Sales Yet
          </h3>

          <p className="mt-2 text-slate-500">
            Top products will appear here.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {topProducts.map(
            (product, index) => (

              <div
                key={product.id}
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white">

                  {index === 0 ? (
                    <Crown size={24} />
                  ) : (
                    <Package size={24} />
                  )}

                </div>

                <div className="flex-1">

                  <h3 className="font-bold text-slate-800">
                    {product.productName}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Sold {product.quantity} units
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-lg font-bold text-emerald-600">
                    ₹{" "}
                    {product.revenue.toLocaleString(
                      "en-IN",
                      {
                        minimumFractionDigits: 2
                      }
                    )}
                  </h3>

                </div>

              </div>

            )
          )}

          <button
            onClick={() =>
              navigate("/sales")
            }
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >

            View Sales

            <ArrowRight size={18} />

          </button>

        </div>

      )}

    </div>
  );
}