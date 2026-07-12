import Card from "../../../components/ui/Card";

export default function InventoryTable({
  inventory,
  onEdit
}) {
  function getStatus(item) {
    if (item.stock === 0) {
      return {
        label: "Out of Stock",
        className: "bg-red-100 text-red-700"
      };
    }

    if (item.stock <= item.reorderLevel) {
      return {
        label: "Low Stock",
        className: "bg-yellow-100 text-yellow-700"
      };
    }

    return {
      label: "In Stock",
      className: "bg-green-100 text-green-700"
    };
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Supplier</th>
              <th className="px-6 py-4 text-center">Stock</th>
              <th className="px-6 py-4 text-center">Reorder</th>
              <th className="px-6 py-4 text-right">Unit Price</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => {
              const status = getStatus(item);

              return (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold">
                      {item.productName}
                    </div>

                    <div className="text-sm text-gray-500">
                      {item.productCode}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {item.category}
                  </td>

                  <td className="px-6 py-4">
                    {item.supplier}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {item.stock}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {item.reorderLevel}
                  </td>

                  <td className="px-6 py-4 text-right">
                    INR {Number(item.averageCost || 0).toFixed(2)}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onEdit(item)}
                      className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}