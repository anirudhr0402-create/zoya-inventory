import { useMemo, useState } from "react";

export default function useSaleSort(
  sales = []
) {
  const [sortField, setSortField] =
    useState("saleDate");

  const [sortDirection, setSortDirection] =
    useState("desc");

  const sortedSales =
    useMemo(() => {
      const data = [...sales];

      data.sort((a, b) => {
        const first =
          a[sortField] ?? "";

        const second =
          b[sortField] ?? "";

        if (
          sortField === "quantity" ||
          sortField === "unitPrice"
        ) {
          return sortDirection === "asc"
            ? Number(first) -
                Number(second)
            : Number(second) -
                Number(first);
        }

        return sortDirection === "asc"
          ? String(first).localeCompare(
              String(second)
            )
          : String(second).localeCompare(
              String(first)
            );
      });

      return data;
    }, [
      sales,
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
    sortedSales,
    sortField,
    sortDirection,
    changeSort
  };
}