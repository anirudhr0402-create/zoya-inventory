import { useMemo, useState } from "react";

export default function useProductSort(products = []) {
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedProducts = useMemo(() => {
    const data = [...products];

    data.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (typeof valueA === "number") {
        return sortDirection === "asc"
          ? valueA - valueB
          : valueB - valueA;
      }

      return sortDirection === "asc"
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });

    return data;
  }, [products, sortField, sortDirection]);

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
    sortedProducts,
    sortField,
    sortDirection,
    changeSort
  };
}