export default function LowStockProducts({
  products = []
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h3 className="mb-4 text-lg font-semibold">
        Low Stock Products
      </h3>

      {products.length === 0 && (
        <p className="text-green-600">
          No low stock products 🎉
        </p>
      )}

      {products.map(product => (

        <div
          key={product.id}
          className="flex justify-between border-b py-3"
        >

          <span>{product.productName}</span>

          <span className="font-semibold text-red-600">
            {product.quantity}
          </span>

        </div>

      ))}

    </div>
  );
}