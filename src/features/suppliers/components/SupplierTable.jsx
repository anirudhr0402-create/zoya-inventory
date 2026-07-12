export default function SupplierTable({
  suppliers,
  onView,
  onEdit,
  onDelete
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-5 py-4 text-left">
              Supplier
            </th>

            <th className="px-5 py-4 text-left">
              Contact
            </th>

            <th className="px-5 py-4 text-left">
              Phone
            </th>

            <th className="px-5 py-4 text-left">
              GST
            </th>

            <th className="px-5 py-4 text-center">
              Status
            </th>

            <th className="px-5 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {suppliers.map((supplier) => (

            <tr
              key={supplier.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-5 py-4 font-medium">
                {supplier.name}
              </td>

              <td className="px-5 py-4">
                {supplier.contactPerson}
              </td>

              <td className="px-5 py-4">
                {supplier.phone}
              </td>

              <td className="px-5 py-4">
                {supplier.gstNumber}
              </td>

              <td className="px-5 py-4 text-center">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    supplier.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {supplier.status}
                </span>

              </td>

              <td className="space-x-2 px-5 py-4 text-center">

                <button
                  onClick={() => onView(supplier)}
                  className="rounded bg-slate-600 px-3 py-1 text-white"
                >
                  View
                </button>

                <button
                  onClick={() => onEdit(supplier)}
                  className="rounded bg-blue-600 px-3 py-1 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(supplier)}
                  className="rounded bg-red-600 px-3 py-1 text-white"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}