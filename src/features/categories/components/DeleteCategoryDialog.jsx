import {
  AlertTriangle,
  Trash2,
  X
} from "lucide-react";

import Modal from "../../../components/ui/Modal";

export default function DeleteCategoryDialog({
  open,
  category,
  onCancel,
  onConfirm
}) {
  if (!open || !category) return null;

  return (
    <Modal
      open={open}
      title=""
      onClose={onCancel}
    >
      <div className="space-y-8">

        <div className="flex flex-col items-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-xl">

            <AlertTriangle size={42} />

          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-800">
            Delete Category?
          </h2>

          <p className="mt-3 max-w-md text-center text-slate-500">

            This action cannot be undone.

            <br />

            All products linked with

            <span className="mx-1 font-semibold text-slate-700">
              "{category.name}"
            </span>

            may be affected.

          </p>

        </div>

        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">

          <div className="flex items-start gap-4">

            <AlertTriangle
              size={24}
              className="mt-1 text-rose-600"
            />

            <div>

              <h3 className="font-bold text-rose-700">
                Warning
              </h3>

              <p className="mt-2 text-sm leading-6 text-rose-600">

                It is recommended to ensure no
                products are assigned to this
                category before deleting it.

              </p>

            </div>

          </div>

        </div>

        <div className="flex justify-end gap-4">

          <button
            onClick={onCancel}
            className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:bg-slate-100"
          >

            <X size={18} />

            Cancel

          </button>

          <button
            onClick={onConfirm}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-rose-300"
          >

            <Trash2 size={18} />

            Delete Category

          </button>

        </div>

      </div>

    </Modal>
  );
}