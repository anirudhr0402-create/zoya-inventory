import ProductImage from "./ProductImage";
import Card from "../../../components/ui/Card";

export default function ProductTable({
  products,
  onView,
  onEdit,
  onDelete
}) {
  function getStatusClass(status) {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Low Stock":
        return "bg-yellow-100 text-yellow-700";

      case "Out of Stock":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <Card>
  <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="min-w-[300px] px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Product
            </th>

            <th className="min-w-[150px] px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Category
            </th>

            <th className="min-w-[180px] px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Supplier
            </th>

            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
              Price
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
              Stock
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
              Status
            </th>

            <th className="min-w-[220px] px-6 py-4 text-center text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="py-10 text-center text-gray-500"
              >
                No products found.
              </td>
            </tr>
          )}

          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b transition hover:bg-gray-50"
            >
              {/* Product */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <ProductImage name={product.name} />

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.code}
                    </p>
                  </div>
                </div>
              </td>

              {/* Category */}
              <td className="px-6 py-4">
                {product.category}
              </td>

              {/* Supplier */}
              <td className="px-6 py-4">
                {product.supplier}
              </td>

              {/* Price */}
              <td className="px-6 py-4 text-right font-medium">
                BHD {Number(product.price).toFixed(2)}
              </td>

              {/* Stock */}
              <td className="px-6 py-4 text-center font-medium">
                {product.stock}
              </td>

              {/* Status */}
              <td className="px-6 py-4 text-center">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                    product.status
                  )}`}
                >
                  {product.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                  <button
                    onClick={() => onView(product)}
                    className="rounded-lg bg-slate-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit(product)}
                    className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(product)}
                    className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
</Card>
  );
}