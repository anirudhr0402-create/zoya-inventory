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
      city: "",
      state: "",
      pincode: "",
      gstNumber: "",
      customerType: "Retail",
      creditLimit: 0,
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
        city: "",
        state: "",
        pincode: "",
        gstNumber: "",
        customerType: "Retail",
        creditLimit: 0,
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
        className="w-full rounded-lg border p-3"
      />
      <p className="text-sm text-red-500">{errors.name?.message}</p>

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

      <textarea
        {...register("address")}
        rows={3}
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

      <div className="grid gap-4 md:grid-cols-2">

        <input
          {...register("gstNumber")}
          placeholder="GST Number"
          className="rounded-lg border p-3"
        />

        <select
          {...register("customerType")}
          className="rounded-lg border p-3"
        >
          <option>Retail</option>
          <option>Wholesale</option>
          <option>Distributor</option>
        </select>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        <input
          type="number"
          {...register("creditLimit")}
          placeholder="Credit Limit"
          className="rounded-lg border p-3"
        />

        <select
          {...register("status")}
          className="rounded-lg border p-3"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      <div className="flex justify-end gap-3 pt-4">

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
          Save Customer
        </button>

      </div>

    </form>
  );
}