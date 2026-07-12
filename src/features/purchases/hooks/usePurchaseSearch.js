import { useMemo, useState } from "react";

export default function usePurchaseSearch(
  purchases = []
) {
  const [search, setSearch] =
    useState("");

  const filteredPurchases =
    useMemo(() => {
      const keyword =
        search.toLowerCase();

      if (!keyword) return purchases;

      return purchases.filter(p =>
        p.invoiceNo
          .toLowerCase()
          .includes(keyword) ||
        p.supplier
          .toLowerCase()
          .includes(keyword) ||
        p.product
          .toLowerCase()
          .includes(keyword) ||
        p.status
          .toLowerCase()
          .includes(keyword)
      );
    }, [purchases, search]);

  return {
    search,
    setSearch,
    filteredPurchases
  };
}