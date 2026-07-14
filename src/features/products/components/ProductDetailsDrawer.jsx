import {
  Package2,
  IndianRupee,
  Layers3,
  CircleCheck,
  CircleX,
  CalendarDays,
  Building2,
  Hash
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

        <div className="rounded-xl bg-white p-2 shadow-sm">
          {icon}
        </div>

        <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </span>

      </div>

      <h3 className={`text-lg font-bold ${color}`}>
        {value || "-"}
      </h3>

    </div>
  );
}

export default function ProductDetailsDrawer({
  product,
  open,
  onClose
}) {
  if (!product) return null;

  const active =
    String(product.status || "")
      .toUpperCase() === "ACTIVE";

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

              <Package2 size={40} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {product.name}
              </h2>

              <p className="mt-2 text-indigo-100">
                Product Information
              </p>

            </div>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <DetailCard
            icon={
              <Hash
                size={20}
                className="text-indigo-600"
              />
            }
            label="Product Code"
            value={product.code}
          />

          <DetailCard
            icon={
              <Layers3
                size={20}
                className="text-violet-600"
              />
            }
            label="Category"
            value={product.category}
          />

          <DetailCard
            icon={
              <Building2
                size={20}
                className="text-blue-600"
              />
            }
            label="Supplier"
            value={product.supplier}
          />

          <DetailCard
            icon={
              <IndianRupee
                size={20}
                className="text-emerald-600"
              />
            }
            label="Selling Price"
            value={`₹ ${Number(
              product.price || 0
            ).toLocaleString("en-IN", {
              minimumFractionDigits: 2
            })}`}
            color="text-emerald-700"
          />

          <DetailCard
            icon={
              active ? (
                <CircleCheck
                  size={20}
                  className="text-emerald-600"
                />
              ) : (
                <CircleX
                  size={20}
                  className="text-rose-600"
                />
              )
            }
            label="Status"
            value={
              active
                ? "Active"
                : "Inactive"
            }
            color={
              active
                ? "text-emerald-700"
                : "text-rose-700"
            }
          />

          <DetailCard
            icon={
              <CalendarDays
                size={20}
                className="text-amber-600"
              />
            }
            label="Created"
            value={
              product.createdAt
                ? new Date(
                    product.createdAt.seconds
                      ? product.createdAt.seconds *
                        1000
                      : product.createdAt
                  ).toLocaleDateString(
                    "en-IN"
                  )
                : "-"
            }
          />

        </div>

      </div>
    </Drawer>
  );
}