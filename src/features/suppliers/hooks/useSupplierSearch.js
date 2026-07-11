import { useMemo, useState } from "react";

export default function useSupplierSearch(data = []) {
  const [search, setSearch] = useState("");

  const filteredSuppliers = useMemo(() => {
    const keyword = search.toLowerCase();

    if (!keyword) return data;

    return data.filter(supplier =>
      supplier.code.toLowerCase().includes(keyword) ||
      supplier.name.toLowerCase().includes(keyword) ||
      supplier.contactPerson.toLowerCase().includes(keyword) ||
      supplier.phone.toLowerCase().includes(keyword) ||
      supplier.email.toLowerCase().includes(keyword) ||
      supplier.status.toLowerCase().includes(keyword)
    );
  }, [data, search]);

  return {
    search,
    setSearch,
    filteredSuppliers
  };
}