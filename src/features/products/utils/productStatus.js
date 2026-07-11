export function getProductStatus(stock) {
  const quantity = Number(stock);

  if (quantity <= 0) {
    return "Out of Stock";
  }

  if (quantity <= 20) {
    return "Low Stock";
  }

  return "Active";
}