import Card from "../../../components/ui/Card";

export default function SaleStats({ sales }) {
  const totalSales = sales.length;

  const revenue = sales.reduce(
    (sum, sale) => sum + sale.total,
    0
  );

  const profit = sales.reduce(
    (sum, sale) => sum + sale.profit,
    0
  );

  return (
    <div className="mb-6 grid gap-5 md:grid-cols-3">
      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Sales
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {totalSales}
        </h2>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Revenue
        </p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          INR {revenue.toFixed(2)}
        </h2>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Profit
        </p>

        <h2 className="mt-2 text-3xl font-bold text-blue-600">
          INR {profit.toFixed(2)}
        </h2>
      </Card>
    </div>
  );
}