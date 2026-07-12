import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { purchaseSchema } from "../validation/purchaseSchema";
import { DEFAULT_PURCHASE } from "../constants/purchaseDefaults";

import useSuppliers from "../../suppliers/hooks/useSuppliers";

import PurchaseItemsTable from "./PurchaseItemsTable";
import PurchaseSummary from "./PurchaseSummary";

import usePurchaseItems from "../hooks/usePurchaseItems";

import calculatePurchaseTotals from "../utils/calculatePurchaseTotals";

export default function PurchaseForm({
  onSubmit,
  onCancel
}) {

  const {
    data: suppliers = []
  } = useSuppliers();

  const {
    items,
    addItem,
    removeItem,
    updateItem
  } = usePurchaseItems();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: zodResolver(
      purchaseSchema
    ),
    defaultValues:
      DEFAULT_PURCHASE
  });

  const discount =
    watch("discount");

  const transportCharges =
    watch("transportCharges");

  async function submit(values) {

    if (!items.length) {

      toast.error(
        "Add at least one product."
      );

      return;

    }

    const totals =
      calculatePurchaseTotals(
        items,
        discount,
        transportCharges
      );

    await onSubmit({

      ...values,

      items,

      ...totals

    });

  }

  return (

    <form
  onSubmit={handleSubmit(
    submit,
    (errors) => {
      console.log(errors);
      toast.error("Please fill all mandatory fields.");
    }
  )}
>

      <div className="rounded-xl bg-white p-6 shadow">

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">

              Supplier
              <span className="ml-1 text-red-600">*</span>

            </label>

            <select
              {...register("supplierId")}
              className={`w-full rounded border p-3 ${
                errors.supplierId
                  ? "border-red-500"
                  : ""
              }`}
            >

              <option value="">
                Select Supplier
              </option>

              {suppliers.map(supplier => (

                <option
                  key={supplier.id}
                  value={supplier.id}
                >
                  {supplier.name}
                </option>

              ))}

            </select>

            <p className="mt-1 text-sm text-red-600">
              {errors.supplierId?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 block font-medium">

              Invoice Number
              <span className="ml-1 text-red-600">*</span>

            </label>

            <input
              {...register("invoiceNumber")}
              placeholder="Invoice Number"
              className={`w-full rounded border p-3 ${
                errors.invoiceNumber
                  ? "border-red-500"
                  : ""
              }`}
            />

            <p className="mt-1 text-sm text-red-600">
              {errors.invoiceNumber?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 block font-medium">

              Invoice Date
              <span className="ml-1 text-red-600">*</span>

            </label>

            <input
              type="date"
              {...register("invoiceDate")}
              className="w-full rounded border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Remarks
            </label>

            <input
              {...register("remarks")}
              className="w-full rounded border p-3"
            />

          </div>

        </div>

      </div>

      <PurchaseItemsTable
        items={items}
        addItem={addItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />

      <PurchaseSummary
        items={items}
        discount={discount}
        transportCharges={
          transportCharges
        }
        onDiscountChange={(v)=>
          setValue(
            "discount",
            Number(v)
          )
        }
        onTransportChange={(v)=>
          setValue(
            "transportCharges",
            Number(v)
          )
        }
      />

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border px-5 py-3"
        >
          Cancel
        </button>

        <button
          disabled={isSubmitting}
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
        >
          {isSubmitting
            ? "Saving Purchase..."
            : "Save Purchase"}
        </button>

      </div>

    </form>

  );

}