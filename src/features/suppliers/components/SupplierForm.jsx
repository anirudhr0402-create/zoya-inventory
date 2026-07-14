import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Truck,
  User,
  Phone,
  Mail,
  Building2,
  MapPin,
  Landmark,
  Map,
  BadgeCheck,
  Save,
  X,
  Sparkles
} from "lucide-react";

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
    formState: {
      errors,
      isSubmitting
    }
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

  function inputClass(error) {
    return `w-full rounded-2xl border px-5 py-4 outline-none transition-all duration-300 focus:ring-4 focus:ring-indigo-100 ${
      error
        ? "border-red-500"
        : "border-slate-200"
    }`;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7"
    >
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">

            <Truck size={38} />

          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-3xl font-bold">

                {initialValues
                  ? "Edit Supplier"
                  : "Create Supplier"}

              </h2>

              <Sparkles size={18} />

            </div>

            <p className="mt-2 text-indigo-100">
              Maintain supplier information professionally.
            </p>

          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Truck size={18} />
              Supplier Name
            </label>

            <input
              {...register("name")}
              placeholder="Supplier Name"
              className={inputClass(errors.name)}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.name?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <User size={18} />
              Contact Person
            </label>

            <input
              {...register("contactPerson")}
              placeholder="Contact Person"
              className={inputClass(errors.contactPerson)}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.contactPerson?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Phone size={18} />
              Phone Number
            </label>

            <input
              {...register("phone")}
              placeholder="+91 XXXXX XXXXX"
              className={inputClass(errors.phone)}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.phone?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Mail size={18} />
              Email
            </label>

            <input
              {...register("email")}
              placeholder="supplier@email.com"
              className={inputClass(errors.email)}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.email?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Building2 size={18} />
              GST Number
            </label>

            <input
              {...register("gstNumber")}
              placeholder="GST Number"
              className={inputClass(errors.gstNumber)}
            />

            <p className="mt-2 text-sm text-red-600">
              {errors.gstNumber?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <BadgeCheck size={18} />
              Status
            </label>

            <select
              {...register("status")}
              className={inputClass()}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 flex items-center gap-2 font-semibold">
            <MapPin size={18} />
            Address
          </label>

          <textarea
            rows={4}
            {...register("address")}
            placeholder="Supplier Address"
            className={inputClass(errors.address)}
          />

          <p className="mt-2 text-sm text-red-600">
            {errors.address?.message}
          </p>

        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Landmark size={18} />
              City
            </label>

            <input
              {...register("city")}
              placeholder="City"
              className={inputClass(errors.city)}
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <Map size={18} />
              State
            </label>

            <input
              {...register("state")}
              placeholder="State"
              className={inputClass(errors.state)}
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">
              <MapPin size={18} />
              Pincode
            </label>

            <input
              {...register("pincode")}
              placeholder="Pincode"
              className={inputClass(errors.pincode)}
            />

          </div>

        </div>

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
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
            : "Save Supplier"}
        </button>

      </div>

    </form>
  );
}