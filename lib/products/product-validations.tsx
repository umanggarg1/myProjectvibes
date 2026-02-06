import { z } from "zod";

// Zod schema for validating product form data
export const productSchema = z.object({

  // Product name:
  // - must be a string
  // - minimum 3 characters
  // - maximum 120 characters
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(120, { message: "Name must be less than 120 characters" }),

  // URL-friendly identifier for the product
  // - lowercase letters, numbers, and hyphens only
  // - no spaces or special characters
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters" })
    .max(140, { message: "Slug must be less than 140 characters" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message:
        "Slug must be lowercase and contain only letters and numbers and hyphens",
    }),

  // Short description of the product
  // - optional content
  // - max 200 characters
  tagline: z
    .string()
    .max(200, { message: "Tagline must be less than 200 characters" }),

  // Full description
  // - optional field
  description: z.string().optional(),

  // Website URL
  // - required field
  // - must not be empty
  websiteUrl: z
    .string()
    .min(1, { message: "Website URL is required" }),

  // Tags entered as a comma-separated string
  // - required
  // - transformed into an array of lowercase strings
  tags: z
    .string()
    .min(1, { message: "Tags are required" })
    .transform((val) =>
      val
        .split(",")               // split by commas
        .map((tag) =>
          tag.trim().toLowerCase() // clean and normalize each tag
        )
    ),
});
