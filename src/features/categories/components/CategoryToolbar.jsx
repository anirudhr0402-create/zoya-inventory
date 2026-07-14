import {
  Search,
  FolderPlus,
  Download,
  RefreshCw,
  FolderTree,
  Sparkles
} from "lucide-react";

export default function CategoryToolbar({
  search,
  onSearch,
  onAdd,
  onRefresh = () => {},
  onExport = () => {}
}) {
  return (
    <div className="mb-8 overflow-hidden rounded-[28px] bg-white shadow-lg ring-1 ring-slate-200">

      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px]">

        <div className="rounded-[27px] bg-white p-7">

          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl">

                <FolderTree size={30} />

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h2 className="text-2xl font-bold text-slate-800">
                    Category Manager
                  </h2>

                  <Sparkles
                    size={18}
                    className="text-amber-500"
                  />

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Organize products into categories.
                </p>

              </div>

            </div>

            <div className="relative w-full xl:max-w-xl">

              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  onSearch(e.target.value)
                }
                placeholder="Search Category..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-[15px] font-medium text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />

            </div>

          </div>

          <div className="mt-7 flex flex-wrap items-center justify-end gap-3">

            <button
              onClick={onExport}
              className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-semibold text-emerald-700 transition hover:-translate-y-1 hover:bg-emerald-100"
            >
              <Download size={18} />
              Export
            </button>

            <button
              onClick={onRefresh}
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <RefreshCw size={18} />
              Refresh
            </button>

            <button
              onClick={onAdd}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-indigo-300"
            >
              <FolderPlus size={18} />
              Add Category
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}