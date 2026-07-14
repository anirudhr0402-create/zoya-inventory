import {
  Search,
  Plus
} from "lucide-react";

export default function SalesToolbar({
  search,
  onSearch,
  onAdd
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg md:flex-row md:items-center md:justify-between">

      <div className="relative w-full md:max-w-md">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={e =>
            onSearch(e.target.value)
          }
          placeholder="Search sales..."
          className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

      </div>

      <button
        onClick={onAdd}
        className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-indigo-300"
      >

        <Plus size={20} />

        New Sale

      </button>

    </div>
  );
}