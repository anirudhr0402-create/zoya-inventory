export default function ProductDetailsDrawer({
  open,
  product,
  onClose
}) {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
      <div className="h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-semibold">
            Product Details
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 p-6">
          
          <DetailRow label="Name" value={product.name} />
          <DetailRow label="Category" value={product.category} />
          <DetailRow label="Supplier" value={product.supplier} />
          <DetailRow
            label="Price"
            value={`BHD ${Number(product.price).toFixed(2)}`}
          />
          <DetailRow
            label="Stock"
            value={product.stock}
          />
          <DetailRow
            label="Status"
            value={product.status}
          />
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-medium text-gray-600">
        {label}
      </span>

      <span>{value}</span>
    </div>
  );
}