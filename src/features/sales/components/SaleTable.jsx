import Card from "../../../components/ui/Card";

export default function SaleTable({
  sales,
  onEdit,
  onDelete
}) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Invoice</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-center">Qty</th>
              <th className="px-6 py-4 text-right">Revenue</th>
              <th className="px-6 py-4 text-right">Profit</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr
                key={sale.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  {sale.invoiceNo}
                </td>

                <td className="px-6 py-4">
                  {sale.customer}
                </td>

                <td className="px-6 py-4">
                  {sale.product}
                </td>

                <td className="px-6 py-4 text-center">
                  {sale.quantity}
                </td>

                <td className="px-6 py-4 text-right">
                  {sale.total.toFixed(2)}
                </td>

                <td className="px-6 py-4 text-right text-green-600 font-semibold">
                  {sale.profit.toFixed(2)}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(sale)}
                      className="rounded bg-amber-500 px-3 py-2 text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(sale)}
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