import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(3, "Customer name is required"),

  phone: z.string().min(10, "Phone number is required"),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  address: z.string().min(5, "Address is required"),

  city: z.string().min(2),

  state: z.string().min(2),

  pincode: z.string().min(6),

  gstNumber: z.string().optional(),

  customerType: z.enum([
    "Retail",
    "Wholesale",
    "Distributor"
  ]),

  creditLimit: z.coerce.number().min(0),

  status: z.enum([
    "Active",
    "Inactive"
  ])
});