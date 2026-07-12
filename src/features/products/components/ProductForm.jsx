import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { productSchema } from "../validation/productSchema";

import useCategories from "../../categories/hooks/useCategories";
import useSuppliers from "../../suppliers/hooks/useSuppliers";

export default function ProductForm({
  initialValues,
  onSubmit,
  onCancel
}) {
  const {
    data: categories = []
  } = useCategories();

  const {
    data: suppliers = []
  } = useSuppliers();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      supplier: "",
      price: "",
      stock: ""
    }
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    } else {
      reset({
        name: "",
        category: "",
        supplier: "",
        price: "",
        stock: ""
      });
    }
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block font-medium">
          Product Name
        </label>

        <input
          {...register("name")}
          className="w-full rounded-lg border p-3"
          placeholder="Enter product name"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.name?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Category
        </label>

        <select
          {...register("category")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Category
          </option>

          {categories.map(category => (
            <option
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>

        <p className="mt-1 text-sm text-red-500">
          {errors.category?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Supplier
        </label>

        <select
          {...register("supplier")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Supplier
          </option>

          {suppliers.map(supplier => (
            <option
              key={supplier.id}
              value={supplier.name}
            >
              {supplier.name}
            </option>
          ))}
        </select>

        <p className="mt-1 text-sm text-red-500">
          {errors.supplier?.message}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block font-medium">
            Price (₹)
          </label>

          <input
            type="number"
            step="0.01"
            {...register("price")}
            className="w-full rounded-lg border p-3"
            placeholder="0.00"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.price?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Stock
          </label>

          <input
            type="number"
            {...register("stock")}
            className="w-full rounded-lg border p-3"
            placeholder="0"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.stock?.message}
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border px-5 py-2 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}