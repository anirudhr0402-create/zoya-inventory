export function getDashboardReport({
  products,
  customers,
  suppliers,
  inventory,
  purchases,
  sales
}) {
  const revenue = sales.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const profit = sales.reduce(
    (sum, item) => sum + item.profit,
    0
  );

  const inventoryValue = inventory.reduce(
    (sum, item) =>
      sum + item.stock * item.unitPrice,
    0
  );

  const lowStock = inventory.filter(
    item => item.stock <= item.reorderLevel
  ).length;

  return {
    totalProducts: products.length,
    totalCustomers: customers.length,
    totalSuppliers: suppliers.length,
    totalPurchases: purchases.length,
    totalSales: sales.length,
    revenue,
    profit,
    inventoryValue,
    lowStock
  };
}