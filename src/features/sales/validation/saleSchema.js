import { z } from "zod";

export const saleItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than zero"),
  sellingPrice: z.coerce.number().positive("Selling price must be greater than zero"),
  gst: z.coerce.number().min(0)
});

export const saleSchema = z.object({
  customerId: z.string().min(1, "Customer is required"),
  invoiceNumber: z.string().min(1, "Invoice Number is required"),
  invoiceDate: z.string().min(1, "Invoice Date is required"),
  discount: z.coerce.number().min(0),
  transportCharges: z.coerce.number().min(0),
  remarks: z.string().optional()
});