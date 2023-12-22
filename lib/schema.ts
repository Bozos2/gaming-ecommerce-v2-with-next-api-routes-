import { z } from "zod";

export const FormDataSchema = z
  .object({
    firstName: z
      .string({
        required_error: "Please enter your first name",
        invalid_type_error: "First name must be letters",
      })
      .min(4, { message: "Minimum characters: 4" })
      .max(20, { message: "Name is too long." }),
    lastName: z
      .string({
        required_error: "Please enter your last name",
        invalid_type_error: "Last name must be letters",
      })
      .min(4, { message: "Minimum characters: 4" })
      .max(20, { message: "Last name is too long." }),
    email: z
      .string({
        required_error: "Please enter your email",
        invalid_type_error: "Email must contain @",
      })
      .email({ message: "This is not a valid email format" }),
    password: z
      .string({
        required_error: "Please enter a password",
      })
      .min(6, { message: "Minimum characters: 6" })
      .max(32, { message: "Maximum characters: 32" }),
    confirmPassword: z.string({
      required_error: "Please confirm your password",
    }),
    age: z.coerce.string(),
    gender: z.string(),
    country: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const ContactFormSchema = z.object({
  firstName: z.string({
    required_error: "Please enter your first name",
    invalid_type_error: "First name must be letters",
  }),
  lastName: z.string({
    required_error: "Please enter your last name",
    invalid_type_error: "Last name must be letters",
  }),
  email: z
    .string({
      required_error: "Please enter your email",
      invalid_type_error: "Email must contain @",
    })
    .email({ message: "This is not a valid email format" }),
  message: z
    .string({
      required_error: "Please enter your message",
      invalid_type_error: "Message must have some words",
    })
    .min(6, { message: "Message must be at least 6 characters." }),
});

export const NewsletterSchema = z.object({
  email: z
    .string({
      required_error: "Please enter your email",
      invalid_type_error: "Email must contain @",
    })
    .email({ message: "This is not a valid email format" }),
});
