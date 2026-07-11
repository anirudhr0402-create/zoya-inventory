import { z } from "zod";

export const productSchema = z.object({
  code: z.string().min(3, "Product code is required"),

  name: z.string().min(3, "Product name is required"),

  category: z.string().min(1, "Category is required"),

  supplier: z.string().min(1, "Supplier is required"),

  price: z.coerce
    .number()
    .positive("Price must be greater than zero"),

  stock: z.coerce
    .number()
    .min(0, "Stock cannot be negative")
});