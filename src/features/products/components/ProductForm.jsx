import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Package2,
  IndianRupee,
  Layers3,
  Building2,
  CircleCheck,
  Save,
  X
} from "lucide-react";

import { productSchema } from "../validation/productSchema";

import useCategories from "../../categories/hooks/useCategories";
import useSuppliers from "../../suppliers/hooks/useSuppliers";

export default function ProductForm({
  initialValues,
  onSubmit,
  onCancel
}) {

  const { data: categories = [] } =
    useCategories();

  const { data: suppliers = [] } =
    useSuppliers();

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver:
      zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      supplier: "",
      status: "ACTIVE",
      price: ""
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
        category: "",
        supplier: "",
        status: "ACTIVE",
        price: ""
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

            <Package2 size={38} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">

              {initialValues
                ? "Edit Product"
                : "Create Product"}

            </h2>

            <p className="mt-2 text-indigo-100">

              Maintain your product
              catalogue professionally.

            </p>

          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

              <Package2
                size={18}
              />

              Product Name
              <span className="text-red-600">
                *
              </span>

            </label>

            <input
              {...register("name")}
              placeholder="Enter Product Name"
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

              <Layers3
                size={18}
              />

              Category
              <span className="text-red-600">
                *
              </span>

            </label>

            <select
              {...register("category")}
              className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:ring-4 focus:ring-indigo-100 ${
                errors.category
                  ? "border-red-500"
                  : "border-slate-200"
              }`}
            >

              <option value="">
                Select Category
              </option>

              {categories.map(
                category => (

                  <option
                    key={category.id}
                    value={category.name}
                  >
                    {category.name}
                  </option>

                )
              )}

            </select>

            <p className="mt-2 text-sm text-red-600">
              {errors.category?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

              <Building2
                size={18}
              />

              Supplier
              <span className="text-red-600">
                *
              </span>

            </label>

            <select
              {...register("supplier")}
              className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:ring-4 focus:ring-indigo-100 ${
                errors.supplier
                  ? "border-red-500"
                  : "border-slate-200"
              }`}
            >

              <option value="">
                Select Supplier
              </option>

              {suppliers.map(
                supplier => (

                  <option
                    key={supplier.id}
                    value={supplier.name}
                  >
                    {supplier.name}
                  </option>

                )
              )}

            </select>

            <p className="mt-2 text-sm text-red-600">
              {errors.supplier?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

              <IndianRupee
                size={18}
              />

              Selling Price
              <span className="text-red-600">
                *
              </span>

            </label>

            <input
              type="number"
              step="0.01"
              {...register("price")}
              placeholder="0.00"
              className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:ring-4 focus:ring-indigo-100 ${
                errors.price
                  ? "border-red-500"
                  : "border-slate-200"
              }`}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.price?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

              <CircleCheck
                size={18}
              />

              Status
              <span className="text-red-600">
                *
              </span>

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
            : "Save Product"}

        </button>

      </div>

    </form>

  );

}