import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { supplierSchema } from "../validation/supplierSchema";

export default function SupplierForm({
  initialValues,
  onSubmit,
  onCancel
}) {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    resolver: zodResolver(supplierSchema),
    defaultValues: {
      name: "",
      contactPerson: "",
      phone: "",
      email: "",
      address: "",
      status: "Active"
    }
  });

  useEffect(() => {
    reset(
      initialValues || {
        name: "",
        contactPerson: "",
        phone: "",
        email: "",
        address: "",
        status: "Active"
      }
    );
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("name")}
        placeholder="Supplier Name"
        className="w-full rounded border p-2"
      />

      <input
        {...register("contactPerson")}
        placeholder="Contact Person"
        className="w-full rounded border p-2"
      />

      <input
        {...register("phone")}
        placeholder="Phone"
        className="w-full rounded border p-2"
      />

      <input
        {...register("email")}
        placeholder="Email"
        className="w-full rounded border p-2"
      />

      <textarea
        {...register("address")}
        placeholder="Address"
        className="w-full rounded border p-2"
      />

      <select
        {...register("status")}
        className="w-full rounded border p-2"
      >
        <option>Active</option>
        <option>Inactive</option>
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