import { z } from "zod";

export const saleSchema = z.object({
  customer: z.string().min(1, "Customer is required"),

  product: z.string().min(1, "Product is required"),

  quantity: z.coerce
    .number()
    .min(1, "Quantity is required"),

  costPrice: z.coerce
    .number()
    .min(0.01, "Cost Price is required"),

  sellingPrice: z.coerce
    .number()
    .min(0.01, "Selling Price is required"),

  saleDate: z.string().min(1),

  status: z.string().min(1)
});