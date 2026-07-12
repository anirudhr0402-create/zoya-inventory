import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(2, "Customer name is required"),

  phone: z.string().min(8, "Phone number is required"),

  email: z.string().email("Invalid email"),

  address: z.string().min(3, "Address is required"),

  status: z.string().min(1, "Status is required")
});