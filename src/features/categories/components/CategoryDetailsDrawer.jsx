import {
  FolderTree,
  FileText,
  CircleCheck,
  CircleX,
  CalendarDays,
  Boxes,
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
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50">

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

export default function CategoryDetailsDrawer({
  category,
  open,
  onClose
}) {
  if (!category) return null;

  const active =
    String(category.status || "ACTIVE")
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

              <FolderTree size={38} />

            </div>

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-3xl font-bold">
                  {category.name}
                </h2>

                <Sparkles size={18} />

              </div>

              <p className="mt-2 text-indigo-100">
                Category Information
              </p>

            </div>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <DetailCard
            icon={
              <FolderTree
                size={20}
                className="text-indigo-600"
              />
            }
            label="Category"
            value={category.name}
          />

          <DetailCard
            icon={
              <Boxes
                size={20}
                className="text-violet-600"
              />
            }
            label="Products"
            value={category.productCount || 0}
            color="text-violet-700"
          />

          <DetailCard
            icon={
              <FileText
                size={20}
                className="text-blue-600"
              />
            }
            label="Description"
            value={
              category.description ||
              "No description available"
            }
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
            label="Created On"
            value={
              category.createdAt
                ? new Date(
                    category.createdAt.seconds
                      ? category.createdAt.seconds * 1000
                      : category.createdAt
                  ).toLocaleDateString(
                    "en-IN"
                  )
                : "-"
            }
          />

          <DetailCard
            icon={
              <CalendarDays
                size={20}
                className="text-fuchsia-600"
              />
            }
            label="Last Updated"
            value={
              category.updatedAt
                ? new Date(
                    category.updatedAt.seconds
                      ? category.updatedAt.seconds * 1000
                      : category.updatedAt
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