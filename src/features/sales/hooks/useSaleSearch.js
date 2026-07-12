import { useMemo, useState } from "react";

export default function useSaleSearch(data = []) {
  const [search, setSearch] = useState("");

  const filteredSales = useMemo(() => {
    const keyword = search.toLowerCase();

    if (!keyword) return data;

    return data.filter(
      sale =>
        sale.invoiceNo.toLowerCase().includes(keyword) ||
        sale.customer.toLowerCase().includes(keyword) ||
        sale.product.toLowerCase().includes(keyword) ||
        sale.status.toLowerCase().includes(keyword)
    );
  }, [data, search]);

  return {
    search,
    setSearch,
    filteredSales
  };
}