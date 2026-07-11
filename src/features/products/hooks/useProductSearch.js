import { useMemo, useState } from "react";

export default function useProductSearch(products = []) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return products;
    }

    return products.filter((product) => {
  const keyword = search.toLowerCase();

  return (
    product.code.toLowerCase().includes(keyword) ||
    product.name.toLowerCase().includes(keyword) ||
    product.category.toLowerCase().includes(keyword) ||
    product.supplier.toLowerCase().includes(keyword) ||
    product.status.toLowerCase().includes(keyword)
  );
});
  }, [products, search]);

  return {
    search,
    setSearch,
    filteredProducts
  };
}