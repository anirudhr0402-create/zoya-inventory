import { useMemo, useState } from "react";

export default function useSaleSearch(
  data = []
) {
  const [search, setSearch] =
    useState("");

  const filteredSales =
    useMemo(() => {
      const keyword =
        search.toLowerCase().trim();

      if (!keyword) {
        return data;
      }

      return data.filter(sale => {
        return (
          (sale.productName || "")
            .toLowerCase()
            .includes(keyword) ||
          (sale.customer || "")
            .toLowerCase()
            .includes(keyword) ||
          (sale.invoiceNumber || "")
            .toLowerCase()
            .includes(keyword) ||
          (sale.remarks || "")
            .toLowerCase()
            .includes(keyword)
        );
      });
    }, [data, search]);

  return {
    search,
    setSearch,
    filteredSales
  };
}