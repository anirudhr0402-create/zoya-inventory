import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { customerSchema } from "../validation/customerSchema";

export default function CustomerForm({
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
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
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
        placeholder="Customer Name"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">{errors.name?.message}</p>

      <input
        {...register("phone")}
        placeholder="Phone"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">{errors.phone?.message}</p>

      <input
        {...register("email")}
        placeholder="Email"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">{errors.email?.message}</p>

      <textarea
        {...register("address")}
        placeholder="Address"
        className="w-full rounded border p-2"
      />
      <p className="text-sm text-red-500">{errors.address?.message}</p>

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