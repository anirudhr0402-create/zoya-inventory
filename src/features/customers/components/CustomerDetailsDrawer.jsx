import {
  Users,
  User,
  Phone,
  Mail,
  Building2,
  MapPin,
  BadgeCheck,
  CircleCheck,
  CircleX,
  CalendarDays,
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

export default function CustomerDetailsDrawer({
  customer,
  open,
  onClose
}) {
  if (!customer) return null;

  const active =
    String(customer.status || "Active")
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
              <Users size={38} />
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-3xl font-bold">
                  {customer.name}
                </h2>

                <Sparkles size={18} />

              </div>

              <p className="mt-2 text-indigo-100">
                Customer Information
              </p>

            </div>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <DetailCard
            icon={<Users size={20} className="text-indigo-600" />}
            label="Customer"
            value={customer.name}
          />

          <DetailCard
            icon={<User size={20} className="text-violet-600" />}
            label="Contact Person"
            value={customer.contactPerson}
          />

          <DetailCard
            icon={<Phone size={20} className="text-emerald-600" />}
            label="Phone"
            value={customer.phone}
          />

          <DetailCard
            icon={<Mail size={20} className="text-blue-600" />}
            label="Email"
            value={customer.email}
          />

          <DetailCard
            icon={<Building2 size={20} className="text-amber-600" />}
            label="GST Number"
            value={customer.gstNumber}
          />

          <DetailCard
            icon={<MapPin size={20} className="text-rose-600" />}
            label="Address"
            value={[
              customer.address,
              customer.city,
              customer.state,
              customer.pincode
            ]
              .filter(Boolean)
              .join(", ")}
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
                className="text-fuchsia-600"
              />
            }
            label="Created On"
            value={
              customer.createdAt
                ? new Date(
                    customer.createdAt.seconds
                      ? customer.createdAt.seconds * 1000
                      : customer.createdAt
                  ).toLocaleDateString("en-IN")
                : "-"
            }
          />

        </div>

      </div>

    </Drawer>
  );
}