export default function SupplierToolbar({
  search,
  onSearch,
  onAdd,
  sortField,
  sortDirection,
  onSortChange
}) {
  return (
    <div className="mb-6 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search suppliers..."
            className="w-full rounded-lg border px-4 py-2 md:w-80"
          />

          <select
            value={sortField}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-lg border px-4 py-2"
          >
            <option value="name">Name</option>
            <option value="contactPerson">Contact</option>
            <option value="email">Email</option>
            <option value="status">Status</option>
          </select>

          <span className="flex items-center rounded-lg border px-4">
            {sortDirection === "asc"
              ? "↑ Asc"
              : "↓ Desc"}
          </span>
        </div>

        <button
          onClick={onAdd}
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          + Add Supplier
        </button>
      </div>
    </div>
  );
}