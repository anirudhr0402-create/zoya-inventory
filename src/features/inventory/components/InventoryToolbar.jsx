import {
  Search,
  SlidersHorizontal,
  Download,
  RotateCcw,
  PackageSearch
} from "lucide-react";

export default function InventoryToolbar({
  search,
  onSearch,
  onRefresh = () => {},
  onExport = () => {}
}) {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px]">

        <div className="rounded-[22px] bg-white p-6">

          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

            <div className="relative w-full xl:max-w-2xl">

              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  onSearch(e.target.value)
                }
                placeholder="Search product, code or category..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-[15px] font-medium outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />

            </div>

            <div className="flex flex-wrap items-center gap-3">

              <button
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>

              <button
                onClick={onExport}
                className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                <Download size={18} />
                Export
              </button>

              <button
                onClick={onRefresh}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-indigo-300"
              >
                <RotateCcw size={18} />
                Refresh
              </button>

            </div>

          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-indigo-50 px-4 py-3">

            <PackageSearch
              size={18}
              className="text-indigo-600"
            />

            <p className="text-sm font-medium text-slate-600">
              Instantly search inventory using Product Name, Product Code or Category.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}