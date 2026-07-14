import {
  CalendarDays,
  FileText,
  IndianRupee,
  Package,
  ShoppingBag,
  User,
  Hash,
  MessageSquare,
  X
} from "lucide-react";

import Drawer from "../../../components/ui/Drawer";

function DetailRow({
  icon: Icon,
  label,
  value
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">

      <div className="rounded-xl bg-indigo-100 p-3">

        <Icon
          size={18}
          className="text-indigo-600"
        />

      </div>

      <div className="flex-1">

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">

          {label}

        </p>

        <p className="mt-1 text-base font-semibold text-slate-800">

          {value || "-"}

        </p>

      </div>

    </div>
  );
}

export default function SaleDetailsDrawer({
  open,
  sale,
  onClose
}) {
  if (!open || !sale) return null;

  const quantity = Number(
    sale.quantity || 0
  );

  const unitPrice = Number(
    sale.unitPrice || 0
  );

  const total =
    quantity * unitPrice;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title=""
    >

      <div className="space-y-6">

        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white">

          <div className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-3">

                <ShoppingBag size={34} />

                <h2 className="text-3xl font-bold">

                  Sale Details

                </h2>

              </div>

              <p className="mt-3 text-indigo-100">

                Invoice

                {" "}

                {sale.invoiceNumber || "-"}

              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-2xl bg-white/20 p-3"
            >

              <X size={22} />

            </button>

          </div>

        </div>

        <DetailRow
          icon={Package}
          label="Product"
          value={sale.productName}
        />

        <DetailRow
          icon={User}
          label="Customer"
          value={sale.customer}
        />

        <DetailRow
          icon={Hash}
          label="Quantity"
          value={quantity}
        />

        <DetailRow
          icon={IndianRupee}
          label="Unit Price"
          value={`₹ ${unitPrice.toLocaleString(
            "en-IN",
            {
              minimumFractionDigits: 2
            }
          )}`}
        />

        <DetailRow
          icon={IndianRupee}
          label="Total Amount"
          value={`₹ ${total.toLocaleString(
            "en-IN",
            {
              minimumFractionDigits: 2
            }
          )}`}
        />

        <DetailRow
          icon={CalendarDays}
          label="Sale Date"
          value={sale.saleDate}
        />

        <DetailRow
          icon={FileText}
          label="Invoice Number"
          value={sale.invoiceNumber}
        />

        <DetailRow
          icon={MessageSquare}
          label="Remarks"
          value={sale.remarks}
        />

      </div>

    </Drawer>
  );
}