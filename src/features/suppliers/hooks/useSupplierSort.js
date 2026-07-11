import { useMemo, useState } from "react";

export default function useSupplierSort(
  suppliers = []
) {
  const [sortField, setSortField] =
    useState("name");

  const [sortDirection, setSortDirection] =
    useState("asc");

  const sortedSuppliers = useMemo(() => {
    const data = [...suppliers];

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
    suppliers,
    sortField,
    sortDirection
  ]);

  function changeSort(field) {
    if (field === sortField) {
      setSortDirection((previous) =>
        previous === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  }

  return {
    sortedSuppliers,
    sortField,
    sortDirection,
    changeSort
  };
}