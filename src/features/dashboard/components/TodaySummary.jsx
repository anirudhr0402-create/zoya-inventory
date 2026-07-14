import {
  calculateTodayPurchases,
  calculateTodaySales
} from "../utils/dashboardUtils";

export default function TodaySummary({
  sales = [],
  purchases = []
}) {

  const todaySales =
    calculateTodaySales(sales);

  const todayPurchases =
    calculateTodayPurchases(
      purchases
    );

  const todayProfit =
    todaySales - todayPurchases;

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h3 className="mb-5 text-lg font-semibold">
        Today's Business Summary
      </h3>

      <div className="grid gap-5 md:grid-cols-3">

        <div>

          <p className="text-gray-500">
            Sales
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            ₹{" "}
            {todaySales.toLocaleString(
              "en-IN"
            )}
          </h2>

        </div>

        <div>

          <p className="text-gray-500">
            Purchases
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            ₹{" "}
            {todayPurchases.toLocaleString(
              "en-IN"
            )}
          </h2>

        </div>

        <div>

          <p className="text-gray-500">
            Profit
          </p>

          <h2
            className={`mt-2 text-3xl font-bold ${
              todayProfit >= 0
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            ₹{" "}
            {todayProfit.toLocaleString(
              "en-IN"
            )}
          </h2>

        </div>

      </div>

    </div>
  );
}