import { useMemo, useState } from "react";

export default function useSaleSort(data = []) {
  const [sortField, setSortField] = useState("invoiceNo");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedSales = useMemo(() => {
    const list = [...data];

    list.sort((a, b) => {
      const first = String(a[sortField]).toLowerCase();
      const second = String(b[sortField]).toLowerCase();

      return sortDirection === "asc"
        ? first.localeCompare(second)
        : second.localeCompare(first);
    });

    return list;
  }, [data, sortField, sortDirection]);

  function changeSort(field) {
    if (field === sortField) {
      setSortDirection(prev =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  }

  return {
    sortedSales,
    sortField,
    sortDirection,
    changeSort
  };
}