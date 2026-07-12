import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { purchaseSchema } from "../validation/purchaseSchema";

export default function PurchaseForm({
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
    resolver: zodResolver(purchaseSchema),
    defaultValues: {
      supplier: "",
      product: "",
      quantity: 1,
      unitPrice: 0,
      purchaseDate: "",
      status: "Pending"
    }
  });

  useEffect(() => {
    reset(
      initialValues || {
        supplier: "",
        product: "",
        quantity: 1,
        unitPrice: 0,
        purchaseDate: "",
        status: "Pending"
      }
    );
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("supplier")}
        placeholder="Supplier"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">
        {errors.supplier?.message}
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
        {...register("unitPrice")}
        placeholder="Unit Price"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">
        {errors.unitPrice?.message}
      </p>

      <input
        type="date"
        {...register("purchaseDate")}
        className="w-full rounded border p-2"
      />

      <select
        {...register("status")}
        className="w-full rounded border p-2"
      >
        <option>Pending</option>
        <option>Received</option>
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