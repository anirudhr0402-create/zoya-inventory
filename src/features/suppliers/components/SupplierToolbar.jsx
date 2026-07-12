export default function SupplierToolbar({
  search,
  onSearch,
  onAdd
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-5 shadow md:flex-row md:justify-between">

      <input
        value={search}
        onChange={(e) =>
          onSearch(e.target.value)
        }
        placeholder="Search supplier..."
        className="w-full rounded-lg border p-3 md:w-96"
      />

      <button
        onClick={onAdd}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        + New Supplier
      </button>

    </div>
  );
}