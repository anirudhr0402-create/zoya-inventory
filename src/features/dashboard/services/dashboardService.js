function delay(ms = 400) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getDashboardSummary() {
  await delay();

  return {
    totalProducts: 248,
    totalCategories: 14,
    totalSuppliers: 18,
    totalCustomers: 326,
    totalSales: 145230,
    totalPurchases: 112540,
    lowStockItems: 12,
    outOfStockItems: 3
  };
}