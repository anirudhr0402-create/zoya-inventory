import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ShoppingCart,
  Package,
  Truck,
  Hash,
  IndianRupee,
  CalendarDays,
  FileText,
  Save,
  X,
  Sparkles
} from "lucide-react";

import { purchaseSchema } from "../validation/purchaseSchema";
import useProducts from "../../products/hooks/useProducts";
import useSuppliers from "../../suppliers/hooks/useSuppliers";

export default function PurchaseForm({
  initialValues,
  onSubmit,
  onCancel
}) {
  const { data: products = [] } =
    useProducts();

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
    resolver: zodResolver(
      purchaseSchema
    ),
    defaultValues: {
      productId: "",
      supplier: "",
      quantity: "",
      unitPrice: "",
      purchaseDate:
        new Date()
          .toISOString()
          .split("T")[0],
      invoiceNumber: "",
      remarks: ""
    }
  });

  useEffect(() => {
    reset(
      initialValues || {
        productId: "",
        supplier: "",
        quantity: "",
        unitPrice: "",
        purchaseDate:
          new Date()
            .toISOString()
            .split("T")[0],
        invoiceNumber: "",
        remarks: ""
      }
    );
  }, [initialValues, reset]);

  const inputClass = error =>
    `w-full rounded-2xl border px-5 py-4 outline-none transition duration-300 focus:ring-4 focus:ring-indigo-100 ${
      error
        ? "border-red-500"
        : "border-slate-200"
    }`;

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-7"
    >
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">

            <ShoppingCart size={38} />

          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-3xl font-bold">

                {initialValues
                  ? "Edit Purchase"
                  : "New Purchase"}

              </h2>

              <Sparkles size={18} />

            </div>

            <p className="mt-2 text-indigo-100">
              Record supplier purchases
              professionally.
            </p>

          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">

              <Package size={18} />

              Product

            </label>

            <select
              {...register(
                "productId"
              )}
              className={inputClass(
                errors.productId
              )}
            >
              <option value="">
                Select Product
              </option>

              {products.map(
                product => (
                  <option
                    key={product.id}
                    value={
                      product.id
                    }
                  >
                    {product.name}
                  </option>
                )
              )}

            </select>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">

              <Truck size={18} />

              Supplier

            </label>

            <select
              {...register(
                "supplier"
              )}
              className={inputClass(
                errors.supplier
              )}
            >
              <option value="">
                Select Supplier
              </option>

              {suppliers.map(
                supplier => (
                  <option
                    key={supplier.id}
                    value={
                      supplier.name
                    }
                  >
                    {supplier.name}
                  </option>
                )
              )}

            </select>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">

              <Hash size={18} />

              Quantity

            </label>

            <input
              type="number"
              {...register(
                "quantity"
              )}
              className={inputClass(
                errors.quantity
              )}
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">

              <IndianRupee
                size={18}
              />

              Unit Price

            </label>

            <input
              type="number"
              step="0.01"
              {...register(
                "unitPrice"
              )}
              className={inputClass(
                errors.unitPrice
              )}
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">

              <CalendarDays
                size={18}
              />

              Purchase Date

            </label>

            <input
              type="date"
              {...register(
                "purchaseDate"
              )}
              className={inputClass(
                errors.purchaseDate
              )}
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold">

              <FileText
                size={18}
              />

              Invoice Number

            </label>

            <input
              {...register(
                "invoiceNumber"
              )}
              className={inputClass(
                errors.invoiceNumber
              )}
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 flex items-center gap-2 font-semibold">

            <FileText
              size={18}
            />

            Remarks

          </label>

          <textarea
            rows={4}
            {...register(
              "remarks"
            )}
            className={inputClass(
              errors.remarks
            )}
          />

        </div>

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
        >
          <X size={18} />
          Cancel
        </button>

        <button
          type="submit"
          disabled={
            isSubmitting
          }
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-indigo-300"
        >
          <Save size={18} />
          {isSubmitting
            ? "Saving..."
            : "Save Purchase"}
        </button>

      </div>

    </form>
  );
}