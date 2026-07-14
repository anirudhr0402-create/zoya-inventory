import { useMemo, useState } from "react";

export default function useInventorySearch(
  data = []
) {
  const [search, setSearch] =
    useState("");

 const filteredInventory =
  useMemo(() => {
    const keyword =
      search.toLowerCase().trim();

    if (!keyword) return data ?? [];

    return (data ?? []).filter(item => {

      const productCode =
        String(item.productCode ?? "")
          .toLowerCase();

      const productName =
        String(item.productName ?? "")
          .toLowerCase();

      const category =
        String(item.category ?? "")
          .toLowerCase();

      const supplier =
        String(item.supplier ?? "")
          .toLowerCase();

      return (
        productCode.includes(keyword) ||
        productName.includes(keyword) ||
        category.includes(keyword) ||
        supplier.includes(keyword)
      );
    });

  }, [data, search]);

  return {
    search,
    setSearch,
    filteredInventory
  };
}