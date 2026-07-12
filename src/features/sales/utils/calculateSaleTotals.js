export default function calculateSaleTotals(
  items,
  discount = 0,
  transportCharges = 0
) {

  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity) *
      Number(item.sellingPrice),
    0
  );

  const gst = items.reduce(
    (sum, item) =>
      sum +
      (
        Number(item.quantity) *
        Number(item.sellingPrice) *
        Number(item.gst)
      ) / 100,
    0
  );

  return {

    subtotal,

    gst,

    grandTotal:
      subtotal -
      Number(discount) +
      Number(transportCharges) +
      gst

  };

}