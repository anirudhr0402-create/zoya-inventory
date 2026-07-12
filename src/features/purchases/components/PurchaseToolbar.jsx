export default function PurchaseToolbar({
  search,
  onSearch,
  onAdd,
  sortField,
  sortDirection,
  onSortChange
}) {
  return (
    <div className="mb-6 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex gap-3">
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search purchases..."
            className="rounded-lg border px-4 py-2 w-80"
          />

          <select
            value={sortField}
            onChange={(e) =>
              onSortChange(e.target.value)
            }
            className="rounded-lg border px-4 py-2"
          >
            <option value="invoiceNo">
              Invoice
            </option>

            <option value="supplier">
              Supplier
            </option>

            <option value="product">
              Product
            </option>

            <option value="status">
              Status
            </option>
          </select>

          <span className="flex items-center rounded-lg border px-4">
            {sortDirection === "asc"
              ? "↑ Asc"
              : "↓ Desc"}
          </span>
        </div>

        <button
          onClick={onAdd}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          + Purchase
        </button>
      </div>
    </div>
  );
}