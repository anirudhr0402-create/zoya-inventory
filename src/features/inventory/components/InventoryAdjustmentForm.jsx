import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { inventoryAdjustmentSchema } from "../validation/inventoryAdjustmentSchema";

import useProducts from "../../products/hooks/useProducts";

export default function InventoryAdjustmentForm({

  onSubmit,

  onCancel

}) {

  const {

    data: products = []

  } = useProducts();

  const {

    register,

    handleSubmit,

    formState: {
      errors,
      isSubmitting
    }

  } = useForm({

    resolver:
      zodResolver(
        inventoryAdjustmentSchema
      ),

    defaultValues: {

      productId: "",

      adjustmentType: "IN",

      quantity: "",

      reason: "",

      remarks: ""

    }

  });

  return (

    <form

      onSubmit={handleSubmit(onSubmit)}

      className="space-y-5"

    >

      <div>

        <label className="mb-2 block font-medium">

          Product <span className="text-red-600">*</span>

        </label>

        <select

          {...register("productId")}

          className={`w-full rounded-lg border p-3 ${
            errors.productId
              ? "border-red-500"
              : ""
          }`}

        >

          <option value="">

            Select Product

          </option>

          {products.map(product => (

            <option

              key={product.id}

              value={product.id}

            >

              {product.name}

            </option>

          ))}

        </select>

        {errors.productId && (

          <p className="mt-1 text-sm text-red-600">

            {errors.productId.message}

          </p>

        )}

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">

            Adjustment Type <span className="text-red-600">*</span>

          </label>

          <select

            {...register("adjustmentType")}

            className="w-full rounded-lg border p-3"

          >

            <option value="IN">

              Stock In

            </option>

            <option value="OUT">

              Stock Out

            </option>

          </select>

        </div>

        <div>

          <label className="mb-2 block font-medium">

            Quantity <span className="text-red-600">*</span>

          </label>

          <input

            type="number"

            {...register("quantity")}

            className={`w-full rounded-lg border p-3 ${
              errors.quantity
                ? "border-red-500"
                : ""
            }`}

          />

          {errors.quantity && (

            <p className="mt-1 text-sm text-red-600">

              {errors.quantity.message}

            </p>

          )}

        </div>

      </div>

      <div>

        <label className="mb-2 block font-medium">

          Reason <span className="text-red-600">*</span>

        </label>

        <input

          {...register("reason")}

          placeholder="Example: Initial Stock"

          className={`w-full rounded-lg border p-3 ${
            errors.reason
              ? "border-red-500"
              : ""
          }`}

        />

        {errors.reason && (

          <p className="mt-1 text-sm text-red-600">

            {errors.reason.message}

          </p>

        )}

      </div>

      <div>

        <label className="mb-2 block font-medium">

          Remarks

        </label>

        <textarea

          rows={3}

          {...register("remarks")}

          className="w-full rounded-lg border p-3"

        />

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

          disabled={isSubmitting}

          type="submit"

          className="rounded-lg bg-blue-600 px-6 py-2 text-white disabled:opacity-50"

        >

          {isSubmitting
            ? "Saving..."
            : "Save Adjustment"}

        </button>

      </div>

    </form>

  );

}