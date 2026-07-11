export default function CategoryToolbar({
  search,
  onSearch,
  onAdd,
  sortField,
  sortDirection,
  onSortChange
}) {
  return (
   <div className="flex flex-col gap-3 md:flex-row">
  <input
    value={search}
    onChange={(e) => onSearch(e.target.value)}
    placeholder="Search categories..."
    className="w-full rounded-lg border px-4 py-2 md:w-80"
  />

  <select
    value={sortField}
    onChange={(e) => onSortChange(e.target.value)}
    className="rounded-lg border px-4 py-2"
  >
    <option value="name">Name</option>
    <option value="description">Description</option>
    <option value="status">Status</option>
  </select>

  <span className="flex items-center rounded-lg border px-4">
    {sortDirection === "asc" ? "↑ Asc" : "↓ Desc"}
  </span>
</div>
  );
}