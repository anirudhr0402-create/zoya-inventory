import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Product name is required"),

  category: z
    .string()
    .min(1, "Category is required"),

  supplier: z
    .string()
    .min(1, "Supplier is required"),

  price: z.coerce
    .number()
    .positive("Price must be greater than zero"),

  status: z.enum(
    ["ACTIVE", "INACTIVE"],
    {
      required_error: "Status is required"
    }
  )
});