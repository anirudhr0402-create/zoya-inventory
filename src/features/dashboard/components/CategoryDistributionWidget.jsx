import {
  PieChart,
  Layers3,
  ArrowUpRight
} from "lucide-react";

const COLORS = [
  "bg-indigo-500",
  "bg-violet-500",
  "bg-fuchsia-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500"
];

export default function CategoryDistributionWidget({
  products = []
}) {
  const categories = Object.values(
    products.reduce((acc, product) => {
      const category =
        product.category || "Others";

      if (!acc[category]) {
        acc[category] = {
          name: category,
          count: 0
        };
      }

      acc[category].count++;

      return acc;
    }, {})
  );

  const total = Math.max(
    categories.reduce(
      (sum, item) => sum + item.count,
      0
    ),
    1
  );

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Category Distribution
          </h2>

          <p className="mt-1 text-slate-500">
            Products by category
          </p>

        </div>

        <div className="rounded-2xl bg-violet-100 p-3 text-violet-600">

          <PieChart size={24} />

        </div>

      </div>

      {categories.length === 0 ? (

        <div className="flex h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

          <Layers3
            size={60}
            className="text-slate-300"
          />

          <h3 className="mt-5 text-xl font-bold text-slate-700">
            No Categories
          </h3>

          <p className="mt-2 text-slate-500">
            Add products to see distribution.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {categories.map(
            (category, index) => {

              const percent =
                (
                  (category.count /
                    total) *
                  100
                ).toFixed(1);

              return (

                <div
                  key={category.name}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-violet-200 hover:bg-violet-50"
                >

                  <div className="mb-3 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div
                        className={`h-4 w-4 rounded-full ${
                          COLORS[
                            index %
                              COLORS.length
                          ]
                        }`}
                      />

                      <span className="font-semibold text-slate-700">

                        {category.name}

                      </span>

                    </div>

                    <span className="font-bold text-violet-600">

                      {category.count}

                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                    <div
                      className={`h-full rounded-full ${
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }`}
                      style={{
                        width: `${percent}%`
                      }}
                    />

                  </div>

                  <div className="mt-2 flex items-center justify-between text-sm">

                    <span className="text-slate-500">
                      {percent}% of products
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-violet-500"
                    />

                  </div>

                </div>

              );
            }
          )}

        </div>

      )}

    </div>
  );
}