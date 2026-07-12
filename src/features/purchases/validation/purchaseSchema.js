import { z } from "zod";

export const purchaseItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  quantity: z.coerce.number().positive("Quantity must be greater than zero"),
  purchasePrice: z.coerce.number().positive("Purchase price must be greater than zero"),
  gst: z.coerce.number().min(0),
  lineTotal: z.coerce.number()
});

export const purchaseSchema = z.object({
  supplierId: z.string().min(1, "Supplier is required"),
  invoiceNumber: z.string().min(1, "Invoice Number is required"),
  invoiceDate: z.string().min(1, "Invoice Date is required"),
  discount: z.coerce.number().min(0),
  transportCharges: z.coerce.number().min(0),
  remarks: z.string().optional(),
});