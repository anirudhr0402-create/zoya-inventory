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
    reset(
      initialValues || {
        name: "",
        description: "",
        status: "Active"
      }
    );
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <label className="mb-1 block">
          Category Name
        </label>

        <input
          {...register("name")}
          className="w-full rounded border p-2"
        />

        <p className="text-sm text-red-500">
          {errors.name?.message}
        </p>
      </div>

      <div>
        <label className="mb-1 block">
          Description
        </label>

        <textarea
          {...register("description")}
          rows={3}
          className="w-full rounded border p-2"
        />

        <p className="text-sm text-red-500">
          {errors.description?.message}
        </p>
      </div>

      <div>
        <label className="mb-1 block">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded border p-2"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

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