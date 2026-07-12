import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { saleSchema } from "../validation/saleSchema";
import { DEFAULT_SALE } from "../constants/saleDefaults";

import useCustomers from "../../customers/hooks/useCustomers";

import SaleItemsTable from "./SaleItemsTable";
import SaleSummary from "./SaleSummary";

import useSaleItems from "../hooks/useSaleItems";

import calculateSaleTotals from "../utils/calculateSaleTotals";

export default function SaleForm({
  onSubmit,
  onCancel
}) {

  const {
    data: customers = []
  } = useCustomers();

  const {
    items,
    addItem,
    removeItem,
    updateItem
  } = useSaleItems();

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
      saleSchema
    ),

    defaultValues:
      DEFAULT_SALE

  });

  const discount =
    watch("discount");

  const transportCharges =
    watch("transportCharges");

  async function submit(values) {

    if (items.length === 0) {

      toast.error(
        "Please add at least one product."
      );

      return;

    }

    for (const item of items) {

      if (!item.productId) {

        toast.error(
          "Please select a product."
        );

        return;

      }

      if (Number(item.quantity) <= 0) {

        toast.error(
          "Quantity must be greater than zero."
        );

        return;

      }

      if (
        Number(item.sellingPrice) <= 0
      ) {

        toast.error(
          "Selling Price must be greater than zero."
        );

        return;

      }

    }

    const totals =
      calculateSaleTotals(
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
      onSubmit={handleSubmit(submit)}
      className="space-y-6"
    >

      <div className="rounded-xl bg-white p-6 shadow">

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">
              Customer <span className="text-red-600">*</span>
            </label>

            <select
              {...register("customerId")}
              className={`w-full rounded border p-3 ${
                errors.customerId
                  ? "border-red-500"
                  : ""
              }`}
            >

              <option value="">
                Select Customer
              </option>

              {customers.map(customer => (

                <option
                  key={customer.id}
                  value={customer.id}
                >
                  {customer.name}
                </option>

              ))}

            </select>

            <p className="mt-1 text-sm text-red-600">
              {errors.customerId?.message}
            </p>

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Invoice Number <span className="text-red-600">*</span>
            </label>

            <input
              {...register("invoiceNumber")}
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
              Invoice Date <span className="text-red-600">*</span>
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

      <SaleItemsTable
        items={items}
        addItem={addItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />

      <SaleSummary
        items={items}
        discount={discount}
        transportCharges={transportCharges}
        onDiscountChange={(value)=>
          setValue(
            "discount",
            Number(value)
          )
        }
        onTransportChange={(value)=>
          setValue(
            "transportCharges",
            Number(value)
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
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
        >
          {isSubmitting
            ? "Saving Sale..."
            : "Save Sale"}
        </button>

      </div>

    </form>

  );

}