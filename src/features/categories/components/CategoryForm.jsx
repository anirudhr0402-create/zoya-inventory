import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FolderTree,
  FileText,
  CircleCheck,
  Save,
  X,
  Sparkles
} from "lucide-react";

import { categorySchema } from "../validation/categorySchema";

export default function CategoryForm({
  initialValues,
  onSubmit,
  onCancel
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      description: "",
      status: "ACTIVE"
    }
  });

  useEffect(() => {
    if (initialValues) {
      reset({
        ...initialValues,
        status:
          initialValues.status ||
          "ACTIVE"
      });
    } else {
      reset({
        name: "",
        description: "",
        status: "ACTIVE"
      });
    }
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7"
    >
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">

            <FolderTree size={38} />

          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-3xl font-bold">

                {initialValues
                  ? "Edit Category"
                  : "Create Category"}

              </h2>

              <Sparkles size={18} />

            </div>

            <p className="mt-2 text-indigo-100">
              Organize products into professional categories.
            </p>

          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

        <div className="space-y-6">

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

              <FolderTree size={18} />

              Category Name

              <span className="text-red-600">*</span>

            </label>

            <input
              {...register("name")}
              placeholder="Enter Category Name"
              className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:ring-4 focus:ring-indigo-100 ${
                errors.name
                  ? "border-red-500"
                  : "border-slate-200"
              }`}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.name?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

              <FileText size={18} />

              Description

            </label>

            <textarea
              rows={5}
              {...register("description")}
              placeholder="Enter Category Description"
              className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:ring-4 focus:ring-indigo-100 ${
                errors.description
                  ? "border-red-500"
                  : "border-slate-200"
              }`}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.description?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

              <CircleCheck size={18} />

              Status

              <span className="text-red-600">*</span>

            </label>

            <select
              {...register("status")}
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:ring-4 focus:ring-indigo-100"
            >
              <option value="ACTIVE">
                Active
              </option>

              <option value="INACTIVE">
                Inactive
              </option>

            </select>

          </div>

        </div>

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >

          <X size={18} />

          Cancel

        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-indigo-300 disabled:opacity-50"
        >

          <Save size={18} />

          {isSubmitting
            ? "Saving..."
            : "Save Category"}

        </button>

      </div>

    </form>
  );
}