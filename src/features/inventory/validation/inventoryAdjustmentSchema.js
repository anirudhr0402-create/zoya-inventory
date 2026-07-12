import { z } from "zod";

export const inventoryAdjustmentSchema = z.object({

  productId: z.string().min(1, "Product is required"),

  adjustmentType: z.enum([
    "IN",
    "OUT"
  ]),

  quantity: z.coerce
    .number()
    .positive("Quantity must be greater than zero"),

  reason: z.string().min(3, "Reason is required"),

  remarks: z.string().optional()

});