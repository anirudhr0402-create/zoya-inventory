import calculateSaleTotals from "../utils/calculateSaleTotals";

export default function SaleSummary({
  items,
  discount,
  transportCharges,
  onDiscountChange,
  onTransportChange
}) {

  const {
    subtotal,
    gst,
    grandTotal
  } = calculateSaleTotals(
    items,
    discount,
    transportCharges
  );

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h3 className="mb-5 text-lg font-semibold">
        Sale Summary
      </h3>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between">

          <span>Discount</span>

          <input
            type="number"
            value={discount}
            onChange={(e)=>
              onDiscountChange(e.target.value)
            }
            className="w-36 rounded border p-2 text-right"
          />

        </div>

        <div className="flex items-center justify-between">

          <span>Transport Charges</span>

          <input
            type="number"
            value={transportCharges}
            onChange={(e)=>
              onTransportChange(e.target.value)
            }
            className="w-36 rounded border p-2 text-right"
          />

        </div>

        <div className="flex justify-between">

          <span>GST</span>

          <span>
            ₹ {gst.toFixed(2)}
          </span>

        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>Grand Total</span>

          <span>
            ₹ {grandTotal.toFixed(2)}
          </span>

        </div>

      </div>

    </div>
  );

}