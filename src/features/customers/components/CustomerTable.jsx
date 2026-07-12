import Card from "../../../components/ui/Card";

export default function CustomerTable({
  customers,
  onEdit,
  onDelete
}) {
  function getStatusClass(status) {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Address
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500"
                >
                  No customers found.
                </td>
              </tr>
            )}

            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div className="font-semibold">
                    {customer.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {customer.code}
                  </div>
                </td>

                <td className="px-6 py-4">
                  {customer.phone}
                </td>

                <td className="px-6 py-4">
                  {customer.email}
                </td>

                <td className="px-6 py-4">
                  {customer.address}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                      customer.status
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(customer)}
                      className="rounded bg-amber-500 px-3 py-2 text-white hover:bg-amber-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(customer)}
                      className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
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