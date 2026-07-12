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
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(supplierSchema),
    defaultValues: {
      name: "",
      contactPerson: "",
      phone: "",
      email: "",
      gstNumber: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
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
        gstNumber: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        status: "Active"
      }
    );
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <input
        {...register("name")}
        placeholder="Supplier Name"
        className="w-full rounded-lg border p-3"
      />
      <p className="text-sm text-red-500">{errors.name?.message}</p>

      <input
        {...register("contactPerson")}
        placeholder="Contact Person"
        className="w-full rounded-lg border p-3"
      />
      <p className="text-sm text-red-500">{errors.contactPerson?.message}</p>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full rounded-lg border p-3"
          />
          <p className="text-sm text-red-500">{errors.phone?.message}</p>
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>
      </div>

      <input
        {...register("gstNumber")}
        placeholder="GST Number"
        className="w-full rounded-lg border p-3"
      />
      <p className="text-sm text-red-500">{errors.gstNumber?.message}</p>

      <textarea
        rows={3}
        {...register("address")}
        placeholder="Address"
        className="w-full rounded-lg border p-3"
      />
      <p className="text-sm text-red-500">{errors.address?.message}</p>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          {...register("city")}
          placeholder="City"
          className="rounded-lg border p-3"
        />

        <input
          {...register("state")}
          placeholder="State"
          className="rounded-lg border p-3"
        />

        <input
          {...register("pincode")}
          placeholder="Pincode"
          className="rounded-lg border p-3"
        />
      </div>

      <div>
        <select
          {...register("status")}
          className="w-full rounded-lg border p-3"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border px-5 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          Save Supplier
        </button>
      </div>
    </form>
  );
}