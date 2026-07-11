import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CATEGORY_OPTIONS,
  SUPPLIER_OPTIONS
} from "../constants/productOptions";
import { productSchema } from "../validation/productSchema";

export default function ProductForm({
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
        resolver: zodResolver(productSchema),
        defaultValues: {
            code: "",
            name: "",
            category: "",
            supplier: "",
            price: "",
            stock: ""
        }
    });

    useEffect(() => {
        if (initialValues) {
            reset(initialValues);
        } else {
            reset({
                code: "",
                name: "",
                category: "",
                supplier: "",
                price: "",
                stock: ""
            });
        }
    }, [initialValues, reset]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
        >
        

            <div>
                <label className="mb-1 block">Product Name</label>
                <input {...register("name")} className="w-full rounded border p-2" />
                <p className="text-sm text-red-500">{errors.name?.message}</p>
            </div>

            <div>
                <label className="mb-1 block">Category</label>

                <select
                    {...register("category")}
                    className="w-full rounded border p-2"
                >
                    <option value="">Select Category</option>

                    {CATEGORY_OPTIONS.map((category) => (
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>

                <p className="text-sm text-red-500">
                    {errors.category?.message}
                </p>
            </div>
            <div>
                <label className="mb-1 block">Supplier</label>

                <select
                    {...register("supplier")}
                    className="w-full rounded border p-2"
                >
                    <option value="">Select Supplier</option>

                    {SUPPLIER_OPTIONS.map((supplier) => (
                        <option
                            key={supplier}
                            value={supplier}
                        >
                            {supplier}
                        </option>
                    ))}
                </select>

                <p className="text-sm text-red-500">
                    {errors.supplier?.message}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-1 block">Price</label>
                    <input
                        type="number"
                        step="0.01"
                        {...register("price")}
                        className="w-full rounded border p-2"
                    />
                    <p className="text-sm text-red-500">{errors.price?.message}</p>
                </div>

                <div>
                    <label className="mb-1 block">Stock</label>
                    <input
                        type="number"
                        {...register("stock")}
                        className="w-full rounded border p-2"
                    />
                    <p className="text-sm text-red-500">{errors.stock?.message}</p>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
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