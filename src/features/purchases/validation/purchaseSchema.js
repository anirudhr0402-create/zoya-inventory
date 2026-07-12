import { z } from "zod";

export const purchaseSchema = z.object({
  supplier: z.string().min(1, "Supplier is required"),

  product: z.string().min(1, "Product is required"),

  quantity: z.coerce
    .number()
    .min(1, "Quantity is required"),

  unitPrice: z.coerce
    .number()
    .min(0.01, "Unit price is required"),

  purchaseDate: z.string().min(1),

  status: z.string().min(1)
});