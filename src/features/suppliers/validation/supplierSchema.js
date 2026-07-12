import { z } from "zod";

export const supplierSchema = z.object({
  name: z.string().min(3, "Supplier name is required"),

  contactPerson: z.string().min(3, "Contact person is required"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  email: z
    .string()
    .email("Invalid email"),

  gstNumber: z
    .string()
    .min(15, "GST Number is required"),

  address: z
    .string()
    .min(5, "Address is required"),

  city: z
    .string()
    .min(2),

  state: z
    .string()
    .min(2),

  pincode: z
    .string()
    .min(6),

  status: z.enum([
    "Active",
    "Inactive"
  ])
});