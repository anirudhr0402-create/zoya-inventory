import { z } from "zod";

export const saleSchema = z.object({
  productId: z
    .string()
    .min(1, "Product is required"),

  customer: z
    .string()
    .min(1, "Customer is required"),

  quantity: z.coerce
    .number()
    .min(1, "Quantity must be at least 1"),

  unitPrice: z.coerce
    .number()
    .min(0.01, "Unit price is required"),

  saleDate: z
    .string()
    .min(1, "Sale date is required"),

  invoiceNumber: z
    .string()
    .min(1, "Invoice number is required"),

  remarks: z
    .string()
    .optional()
});