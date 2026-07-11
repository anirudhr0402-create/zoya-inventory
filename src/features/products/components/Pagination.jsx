export default function Pagination({
  page,
  pageSize,
  totalPages,
  nextPage,
  previousPage,
  setPage,
  setPageSize
}) {
  return (
    <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <span className="text-sm">Rows per page</span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPage(1);
            setPageSize(Number(e.target.value));
          }}
          className="rounded border px-3 py-2"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`h-10 w-10 rounded ${
              page === index + 1
                ? "bg-blue-600 text-white"
                : "border"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={previousPage}
          disabled={page === 1}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}