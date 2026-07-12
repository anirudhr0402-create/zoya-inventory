import { useMemo, useState } from "react";

export default function usePurchaseSort(
  purchases = []
) {
  const [sortField, setSortField] =
    useState("invoiceNo");

  const [sortDirection, setSortDirection] =
    useState("asc");

  const sortedPurchases =
    useMemo(() => {
      const data = [...purchases];

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
      purchases,
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
    sortedPurchases,
    sortField,
    sortDirection,
    changeSort
  };
}