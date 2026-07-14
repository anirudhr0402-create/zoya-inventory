import { useEffect, useState } from "react";
import {
  Package2,
  Boxes,
  Save,
  X,
  ArrowUpCircle,
  ArrowDownCircle,
  AlertTriangle,
  ClipboardList,
  IndianRupee
} from "lucide-react";

import Modal from "../../../components/ui/Modal";

const TYPES = [
  "Purchase",
  "Sale",
  "Damaged",
  "Returned",
  "Opening Stock",
  "Manual Correction"
];

export default function InventoryModal({
  open,
  item,
  onSubmit,
  onClose
}) {
  const [type, setType] =
    useState("Manual Correction");

  const [quantity, setQuantity] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  useEffect(() => {
    if (!open) return;

    setType("Manual Correction");
    setQuantity("");
    setRemarks("");
  }, [open]);

  if (!open || !item) return null;

  const current =
    Number(item.quantity || 0);

  const average =
    Number(item.averageCost || 0);

  const value =
    current * average;

  async function save() {
    if (!quantity || Number(quantity) <= 0)
      return;

    let newQty = current;

    switch (type) {
      case "Purchase":
      case "Returned":
      case "Opening Stock":
        newQty += Number(quantity);
        break;

      case "Sale":
      case "Damaged":
        newQty -= Number(quantity);

        if (newQty < 0)
          newQty = 0;

        break;

      default:
        newQty = Number(quantity);
    }

    await onSubmit({
      ...item,
      quantity: newQty,
      adjustmentType: type,
      adjustmentQty: Number(
        quantity
      ),
      remarks
    });
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title=""
    >
      <div className="space-y-6">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-7 text-white shadow-xl">

          <div className="flex items-center gap-5">

            <div className="rounded-3xl bg-white/20 p-4 backdrop-blur">

              <Package2 size={34} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {item.productName}
              </h2>

              <p className="mt-1 text-indigo-100">
                {item.productCode}
              </p>

            </div>

          </div>

        </div>

        <div className="grid gap-5 lg:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex items-center gap-3">

              <Boxes
                className="text-indigo-600"
                size={22}
              />

              <span className="font-semibold">
                Current Stock
              </span>

            </div>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              {current}
            </h2>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex items-center gap-3">

              <IndianRupee
                className="text-emerald-600"
                size={22}
              />

              <span className="font-semibold">
                Avg Cost
              </span>

            </div>

            <h2 className="mt-5 text-4xl font-bold text-emerald-700">
              ₹ {average.toFixed(2)}
            </h2>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex items-center gap-3">

              <ClipboardList
                className="text-violet-600"
                size={22}
              />

              <span className="font-semibold">
                Inventory Value
              </span>

            </div>

            <h2 className="mt-5 text-3xl font-bold text-violet-700">
              ₹{" "}
              {value.toLocaleString(
                "en-IN",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              )}
            </h2>

          </div>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

          <div className="grid gap-6 lg:grid-cols-2">

            <div>

              <label className="mb-2 block font-semibold text-slate-700">
                Adjustment Type
              </label>

              <select
                value={type}
                onChange={(e) =>
                  setType(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              >
                {TYPES.map(t => (
                  <option
                    key={t}
                  >
                    {t}
                  </option>
                ))}
              </select>

            </div>

            <div>

              <label className="mb-2 block font-semibold text-slate-700">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

            </div>

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-semibold text-slate-700">
              Remarks
            </label>

            <textarea
              rows={4}
              value={remarks}
              onChange={(e) =>
                setRemarks(
                  e.target.value
                )
              }
              placeholder="Reason for stock adjustment..."
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">

            <div className="flex gap-3">

              <AlertTriangle
                size={20}
                className="mt-0.5 text-amber-600"
              />

              <p className="text-sm text-amber-700">
                Every adjustment will
                be stored in Stock
                Ledger for audit
                tracking.
              </p>

            </div>

          </div>

        </div>

        <div className="flex justify-end gap-4">

          <button
            onClick={onClose}
            className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <X size={18} />
            Cancel
          </button>

          <button
            onClick={save}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-indigo-300"
          >
            {type === "Purchase" ||
            type === "Returned" ? (
              <ArrowUpCircle
                size={18}
              />
            ) : (
              <ArrowDownCircle
                size={18}
              />
            )}

            <Save size={18} />

            Save Adjustment
          </button>

        </div>

      </div>

    </Modal>
  );
}