import { useMemo, useState } from "react";

export default function useCategorySort(categories = []) {
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedCategories = useMemo(() => {
    const data = [...categories];

    data.sort((a, b) => {
      const first = String(a[sortField]).toLowerCase();
      const second = String(b[sortField]).toLowerCase();

      return sortDirection === "asc"
        ? first.localeCompare(second)
        : second.localeCompare(first);
    });

    return data;
  }, [categories, sortField, sortDirection]);

  function changeSort(field) {
    if (field === sortField) {
      setSortDirection((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  }

  return {
    sortedCategories,
    sortField,
    sortDirection,
    changeSort
  };
}