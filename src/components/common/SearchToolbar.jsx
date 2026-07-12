export default function SearchToolbar({
  search,
  onSearch,
  buttonText,
  onAdd
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-5 shadow md:flex-row md:items-center md:justify-between">

      <input
        value={search}
        onChange={(e) =>
          onSearch(e.target.value)
        }
        placeholder="Search..."
        className="w-full rounded-lg border p-3 md:w-96"
      />

      <button
        onClick={onAdd}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        {buttonText}
      </button>

    </div>
  );
}