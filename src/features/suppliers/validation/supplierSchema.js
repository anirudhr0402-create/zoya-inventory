import { z } from "zod";

export const supplierSchema = z.object({
  name: z.string().min(2),
  contactPerson: z.string().min(2),
  phone: z.string().min(5),
  email: z.string().email(),
  address: z.string().min(3),
  status: z.string()
});