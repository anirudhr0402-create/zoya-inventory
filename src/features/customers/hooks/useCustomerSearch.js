import { useMemo, useState } from "react";

export default function useCustomerSearch(data = []) {
  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(() => {
    const keyword = search.toLowerCase();

    if (!keyword) return data;

    return data.filter(customer =>
      customer.code.toLowerCase().includes(keyword) ||
      customer.name.toLowerCase().includes(keyword) ||
      customer.phone.toLowerCase().includes(keyword) ||
      customer.email.toLowerCase().includes(keyword) ||
      customer.status.toLowerCase().includes(keyword)
    );
  }, [data, search]);

  return {
    search,
    setSearch,
    filteredCustomers
  };
}