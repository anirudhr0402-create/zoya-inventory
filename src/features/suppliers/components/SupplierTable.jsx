import Card from "../../../components/ui/Card";

export default function SupplierTable({
  suppliers,
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
                Supplier
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Contact
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Email
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
            {suppliers.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500"
                >
                  No suppliers found.
                </td>
              </tr>
            )}

            {suppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div className="font-semibold">
                    {supplier.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {supplier.code}
                  </div>
                </td>

                <td className="px-6 py-4">
                  {supplier.contactPerson}
                </td>

                <td className="px-6 py-4">
                  {supplier.phone}
                </td>

                <td className="px-6 py-4">
                  {supplier.email}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                      supplier.status
                    )}`}
                  >
                    {supplier.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(supplier)}
                      className="rounded bg-amber-500 px-3 py-2 text-white hover:bg-amber-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(supplier)}
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