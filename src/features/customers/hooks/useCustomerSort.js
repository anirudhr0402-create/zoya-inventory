import { useMemo, useState } from "react";

export default function useCustomerSort(
  customers = []
) {
  const [sortField, setSortField] =
    useState("name");

  const [sortDirection, setSortDirection] =
    useState("asc");

  const sortedCustomers = useMemo(() => {
    const data = [...customers];

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
    customers,
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
    sortedCustomers,
    sortField,
    sortDirection,
    changeSort
  };
}