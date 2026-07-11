import { useEffect, useMemo, useState } from "react";

export default function usePagination(data = [], initialPageSize = 5) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.max(
    1,
    Math.ceil(data.length / pageSize)
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;

    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  function nextPage() {
    setPage((current) => Math.min(current + 1, totalPages));
  }

  function previousPage() {
    setPage((current) => Math.max(current - 1, 1));
  }

  return {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  };
}