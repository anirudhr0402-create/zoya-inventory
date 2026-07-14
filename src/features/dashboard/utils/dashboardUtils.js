export function isToday(date) {
  if (!date) return false;

  const today = new Date();

  const value = new Date(
    date.seconds
      ? date.seconds * 1000
      : date
  );

  return (
    value.getDate() === today.getDate() &&
    value.getMonth() === today.getMonth() &&
    value.getFullYear() === today.getFullYear()
  );
}

export function calculateTodaySales(sales = []) {
  return sales
    .filter(sale => isToday(sale.createdAt))
    .reduce(
      (sum, sale) =>
        sum + Number(sale.grandTotal || 0),
      0
    );
}

export function calculateTodayPurchases(
  purchases = []
) {
  return purchases
    .filter(purchase =>
      isToday(purchase.createdAt)
    )
    .reduce(
      (sum, purchase) =>
        sum +
        Number(purchase.grandTotal || 0),
      0
    );
}