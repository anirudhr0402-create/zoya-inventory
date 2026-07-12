export default function LowStockWidget({
  inventory = []
}) {
  const lowStock = inventory.filter(
    (item) => item.stock <= item.reorderLevel
  );

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-semibold">
        Low Stock
      </h2>

      {lowStock.length === 0 ? (
        <p className="text-gray-500">
          No low stock products
        </p>
      ) : (
        lowStock.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-2"
          >
            <span>{item.productName}</span>

            <span className="font-semibold text-red-600">
              {item.stock}
            </span>
          </div>
        ))
      )}
    </div>
  );
}