export default function InventoryToolbar({
  search,
  onSearch
}) {
  return (
    <div className="mb-6 rounded-xl bg-white p-5 shadow-sm">
      <input
        value={search}
        onChange={(e) =>
          onSearch(e.target.value)
        }
        placeholder="Search inventory..."
        className="w-full rounded-lg border px-4 py-2 lg:w-96"
      />

      <p className="mt-2 text-sm text-gray-500">
        Search by product, category or supplier.
      </p>
    </div>
  );
}