export default function CategoryTable({
  categories,
  onEdit,
  onDelete
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-5 py-4 text-left">
              Name
            </th>

            <th className="px-5 py-4 text-left">
              Description
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

          {categories.map(category => (

            <tr
              key={category.id}
              className="border-t"
            >

              <td className="px-5 py-4 font-medium">
                {category.name}
              </td>

              <td className="px-5 py-4">
                {category.description}
              </td>

              <td className="px-5 py-4 text-center">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    category.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {category.status}
                </span>

              </td>

              <td className="space-x-2 px-5 py-4 text-center">

                <button
                  onClick={() =>
                    onEdit(category)
                  }
                  className="rounded bg-blue-600 px-3 py-1 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(category)
                  }
                  className="rounded bg-red-600 px-3 py-1 text-white"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

          {!categories.length && (

            <tr>

              <td
                colSpan="4"
                className="py-8 text-center text-slate-500"
              >
                No Categories Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}