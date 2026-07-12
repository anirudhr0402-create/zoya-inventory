import Card from "../../../components/ui/Card";

export default function PurchaseTable({
  purchases,
  onEdit,
  onDelete
}) {
  function getStatusClass(status) {
    switch (status) {
      case "Received":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left">Invoice</th>
              <th className="px-6 py-4 text-left">Supplier</th>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-center">Qty</th>
              <th className="px-6 py-4 text-right">Price</th>
              <th className="px-6 py-4 text-right">Total</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {purchases.map((purchase) => (
              <tr
                key={purchase.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  {purchase.invoiceNo}
                </td>

                <td className="px-6 py-4">
                  {purchase.supplier}
                </td>

                <td className="px-6 py-4">
                  {purchase.product}
                </td>

                <td className="px-6 py-4 text-center">
                  {purchase.quantity}
                </td>

                <td className="px-6 py-4 text-right">
                  {purchase.unitPrice.toFixed(2)}
                </td>

                <td className="px-6 py-4 text-right">
                  {purchase.total.toFixed(2)}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                      purchase.status
                    )}`}
                  >
                    {purchase.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(purchase)}
                      className="rounded bg-amber-500 px-3 py-2 text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(purchase)}
                      className="rounded bg-red-600 px-3 py-2 text-white"
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