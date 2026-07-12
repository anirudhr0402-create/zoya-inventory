import { useMemo, useState } from "react";

export default function useInventorySort(
  inventory = []
) {
  const [sortField, setSortField] =
    useState("productName");

  const [sortDirection, setSortDirection] =
    useState("asc");

  const sortedInventory =
    useMemo(() => {
      const data = [...inventory];

      data.sort((a, b) => {
        const first = String(
          a[sortField]
        ).toLowerCase();

        const second = String(
          b[sortField]
        ).toLowerCase();

        return sortDirection === "asc"
          ? first.localeCompare(second)
          : second.localeCompare(first);
      });

      return data;
    }, [
      inventory,
      sortField,
      sortDirection
    ]);

  function changeSort(field) {
    if (field === sortField) {
      setSortDirection(prev =>
        prev === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  }

  return {
    sortedInventory,
    sortField,
    sortDirection,
    changeSort
  };
}