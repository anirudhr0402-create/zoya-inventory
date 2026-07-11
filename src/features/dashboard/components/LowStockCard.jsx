export default function LowStockCard({
  lowStock,
  outOfStock
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold">
        Stock Status
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Low Stock</span>

          <span className="font-semibold text-orange-500">
            {lowStock}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Out Of Stock</span>

          <span className="font-semibold text-red-600">
            {outOfStock}
          </span>
        </div>
      </div>
    </div>
  );
}