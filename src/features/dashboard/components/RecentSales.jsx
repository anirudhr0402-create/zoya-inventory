export default function RecentSales({ sales = [] }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-semibold">
        Recent Sales
      </h2>

      {sales.length === 0 ? (
        <p className="text-gray-500">
          No sales available
        </p>
      ) : (
        sales.slice(0, 5).map((sale) => (
          <div
            key={sale.id}
            className="flex justify-between border-b py-2"
          >
            <span>{sale.customer}</span>

            <span className="font-semibold">
              INR {sale.total}
            </span>
          </div>
        ))
      )}
    </div>
  );
}