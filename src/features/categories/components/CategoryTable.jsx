import Card from "../../../components/ui/Card";

export default function CategoryTable({
  categories,
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
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Description
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
            {categories.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-10 text-center text-gray-500"
                >
                  No categories found.
                </td>
              </tr>
            )}

            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">
                  {category.name}
                </td>

                <td className="px-6 py-4">
                  {category.description}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                      category.status
                    )}`}
                  >
                    {category.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(category)}
                      className="rounded bg-amber-500 px-3 py-2 text-white hover:bg-amber-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(category)}
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