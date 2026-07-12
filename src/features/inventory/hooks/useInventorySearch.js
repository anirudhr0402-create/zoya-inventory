import { useMemo, useState } from "react";

export default function useInventorySearch(
  data = []
) {
  const [search, setSearch] =
    useState("");

  const filteredInventory =
    useMemo(() => {
      const keyword =
        search.toLowerCase();

      if (!keyword) return data;

      return data.filter(item =>
        item.productCode
          .toLowerCase()
          .includes(keyword) ||
        item.productName
          .toLowerCase()
          .includes(keyword) ||
        item.category
          .toLowerCase()
          .includes(keyword) ||
        item.supplier
          .toLowerCase()
          .includes(keyword)
      );
    }, [data, search]);

  return {
    search,
    setSearch,
    filteredInventory
  };
}