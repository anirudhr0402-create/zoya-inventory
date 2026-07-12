export default function calculatePurchaseTotals(
  items,
  discount = 0,
  transportCharges = 0
) {
  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity) *
        Number(item.purchasePrice),
    0
  );

  const gst = items.reduce(
    (sum, item) =>
      sum +
      (Number(item.quantity) *
        Number(item.purchasePrice) *
        Number(item.gst || 0)) /
        100,
    0
  );

  const grandTotal =
    subtotal -
    Number(discount) +
    Number(transportCharges) +
    gst;

  return {
    subtotal,
    gst,
    grandTotal
  };
}