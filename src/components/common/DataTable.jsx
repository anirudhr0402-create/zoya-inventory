export default function DataTable({
  columns,
  data,
  emptyMessage = "No records found",
  actions
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            {columns.map(column => (

              <th
                key={column.key}
                className="px-5 py-4 text-left font-semibold"
              >
                {column.label}
              </th>

            ))}

            {actions && (
              <th className="px-5 py-4 text-center">
                Actions
              </th>
            )}

          </tr>

        </thead>

        <tbody>

          {data.length === 0 && (

            <tr>

              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="py-8 text-center text-slate-500"
              >
                {emptyMessage}
              </td>

            </tr>

          )}

          {data.map(row => (

            <tr
              key={row.id}
              className="border-t hover:bg-slate-50"
            >

              {columns.map(column => (

                <td
                  key={column.key}
                  className="px-5 py-4"
                >
                  {column.render
                    ? column.render(row)
                    : row[column.key]}
                </td>

              ))}

              {actions && (

                <td className="space-x-2 px-5 py-4 text-center">

                  {actions(row)}

                </td>

              )}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}