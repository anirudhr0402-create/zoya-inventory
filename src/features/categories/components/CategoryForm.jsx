import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { categorySchema } from "../validation/categorySchema";

export default function CategoryForm({
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
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      description: "",
      status: "Active"
    }
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    } else {
      reset({
        name: "",
        description: "",
        status: "Active"
      });
    }
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block font-medium">
          Category Name
        </label>

        <input
          {...register("name")}
          className="w-full rounded-lg border p-3"
        />

        <p className="text-sm text-red-500">
          {errors.name?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={4}
          {...register("description")}
          className="w-full rounded-lg border p-3"
        />

        <p className="text-sm text-red-500">
          {errors.description?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-lg border p-3"
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
          className="rounded-lg bg-blue-600 px-6 py-2 text-white"
        >
          Save Category
        </button>
      </div>
    </form>
  );
}