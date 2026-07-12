import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(3, "Category name is required"),

  description: z
    .string()
    .min(3, "Description is required"),

  status: z.enum([
    "Active",
    "Inactive"
  ])
});