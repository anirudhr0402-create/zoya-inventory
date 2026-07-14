import { X } from "lucide-react";

export default function Drawer({
  open,
  onClose,
  title,
  width = "max-w-xl",
  children
}) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full ${width} bg-white shadow-2xl transition-transform duration-300`}
      >
        <div className="flex h-full flex-col">

          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

            <h2 className="text-xl font-bold text-slate-800">
              {title}
            </h2>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-slate-100"
            >
              <X size={20} />
            </button>

          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {children}
          </div>

        </div>
      </div>
    </>
  );
}