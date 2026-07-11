import { useMemo, useState } from "react";

export default function useCategorySearch(categories = []) {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return categories;
    }

    return categories.filter((category) => {
      return (
        category.name.toLowerCase().includes(keyword) ||
        category.description.toLowerCase().includes(keyword) ||
        category.status.toLowerCase().includes(keyword)
      );
    });
  }, [categories, search]);

  return {
    search,
    setSearch,
    filteredCategories
  };
}