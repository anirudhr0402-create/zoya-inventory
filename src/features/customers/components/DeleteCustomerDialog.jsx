import {
  AlertTriangle,
  Trash2,
  X
} from "lucide-react";

import Modal from "../../../components/ui/Modal";

export default function DeleteCustomerDialog({
  open,
  customer,
  onCancel,
  onConfirm
}) {
  if (!open || !customer) return null;

  return (
    <Modal
      open={open}
      title=""
      onClose={onCancel}
    >
      <div className="space-y-8">

        <div className="flex flex-col items-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-xl">

            <AlertTriangle size={42} />

          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-800">
            Delete Customer?
          </h2>

          <p className="mt-3 max-w-md text-center leading-7 text-slate-500">
            This action cannot be undone.
            <br />
            Customer
            <span className="mx-1 font-semibold text-slate-700">
              "{customer.name}"
            </span>
            will be permanently removed.
          </p>

        </div>

        <div className="rounded-3xl border border-red-200 bg-red-50 p-6">

          <div className="flex gap-4">

            <AlertTriangle
              size={24}
              className="mt-1 text-red-600"
            />

            <div>

              <h3 className="font-bold text-red-700">
                Warning
              </h3>

              <p className="mt-2 text-sm leading-6 text-red-600">
                This customer and related customer
                information will be permanently deleted.
                Historical sales records should be retained
                before removing this customer.
              </p>

            </div>

          </div>

        </div>

        <div className="flex justify-end gap-4">

          <button
            onClick={onCancel}
            className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <X size={18} />
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-red-300"
          >
            <Trash2 size={18} />
            Delete Customer
          </button>

        </div>

      </div>

    </Modal>
  );
}