import {
  ShoppingCart,
  Package,
  Truck,
  Hash,
  IndianRupee,
  CalendarDays,
  FileText,
  Sparkles
} from "lucide-react";

import Drawer from "../../../components/ui/Drawer";

function DetailCard({
  icon,
  label,
  value,
  color = "text-slate-700"
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-indigo-50">

      <div className="mb-3 flex items-center gap-3">

        <div className="rounded-xl bg-white p-3 shadow-sm">
          {icon}
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {label}
        </span>

      </div>

      <div className={`text-lg font-bold ${color}`}>
        {value || "-"}
      </div>

    </div>
  );
}

export default function PurchaseDetailsDrawer({
  purchase,
  open,
  onClose
}) {
  if (!purchase) return null;

  const total =
    Number(purchase.quantity || 0) *
    Number(purchase.unitPrice || 0);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title=""
      width="max-w-2xl"
    >
      <div className="space-y-6">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">

              <ShoppingCart size={38} />

            </div>

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-3xl font-bold">
                  Purchase Details
                </h2>

                <Sparkles size={18} />

              </div>

              <p className="mt-2 text-indigo-100">
                Complete purchase information.
              </p>

            </div>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <DetailCard
            icon={<Package size={20} className="text-indigo-600" />}
            label="Product"
            value={purchase.productName}
          />

          <DetailCard
            icon={<Truck size={20} className="text-violet-600" />}
            label="Supplier"
            value={purchase.supplier}
          />

          <DetailCard
            icon={<Hash size={20} className="text-emerald-600" />}
            label="Quantity"
            value={purchase.quantity}
          />

          <DetailCard
            icon={<IndianRupee size={20} className="text-amber-600" />}
            label="Unit Price"
            value={`₹ ${Number(
              purchase.unitPrice || 0
            ).toLocaleString("en-IN", {
              minimumFractionDigits: 2
            })}`}
          />

          <DetailCard
            icon={<IndianRupee size={20} className="text-green-600" />}
            label="Total Amount"
            value={`₹ ${total.toLocaleString("en-IN", {
              minimumFractionDigits: 2
            })}`}
            color="text-emerald-700"
          />

          <DetailCard
            icon={<CalendarDays size={20} className="text-blue-600" />}
            label="Purchase Date"
            value={purchase.purchaseDate}
          />

          <DetailCard
            icon={<FileText size={20} className="text-fuchsia-600" />}
            label="Invoice Number"
            value={purchase.invoiceNumber}
          />

          <DetailCard
            icon={<FileText size={20} className="text-rose-600" />}
            label="Remarks"
            value={purchase.remarks}
          />

        </div>

      </div>

    </Drawer>
  );
}