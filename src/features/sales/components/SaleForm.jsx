import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { saleSchema } from "../validation/saleSchema";

export default function SaleForm({
  initialValues,
  onSubmit,
  onCancel
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(saleSchema),
    defaultValues: {
      customer: "",
      product: "",
      quantity: 1,
      costPrice: 0,
      sellingPrice: 0,
      saleDate: "",
      status: "Completed"
    }
  });

  useEffect(() => {
    reset(
      initialValues || {
        customer: "",
        product: "",
        quantity: 1,
        costPrice: 0,
        sellingPrice: 0,
        saleDate: "",
        status: "Completed"
      }
    );
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("customer")}
        placeholder="Customer"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">
        {errors.customer?.message}
      </p>

      <input
        {...register("product")}
        placeholder="Product"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">
        {errors.product?.message}
      </p>

      <input
        type="number"
        {...register("quantity")}
        placeholder="Quantity"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">
        {errors.quantity?.message}
      </p>

      <input
        type="number"
        step="0.01"
        {...register("costPrice")}
        placeholder="Cost Price"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">
        {errors.costPrice?.message}
      </p>

      <input
        type="number"
        step="0.01"
        {...register("sellingPrice")}
        placeholder="Selling Price"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">
        {errors.sellingPrice?.message}
      </p>

      <input
        type="date"
        {...register("saleDate")}
        className="w-full rounded border p-2"
      />

      <select
        {...register("status")}
        className="w-full rounded border p-2"
      >
        <option>Completed</option>
        <option>Cancelled</option>
      </select>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded border px-4 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}