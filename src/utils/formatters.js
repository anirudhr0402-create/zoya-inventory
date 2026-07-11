export function formatCurrency(value) {
  return new Intl.NumberFormat("en-BH", {
    style: "currency",
    currency: "BHD"
  }).format(value);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}