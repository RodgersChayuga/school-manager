import * as z from "zod";

export const RegistrationSchema = z
  .object({
    firstName: z.string().min(2, { message: "Too short" }),
    lastName: z.string().min(2, { message: "Too short" }),
    email: z
      .string()
      .min(2, { message: "This field has to be field" })
      .email("This is not a valid email."),
    password: z.string().min(8, { message: "Must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const SigninSchema = z.object({
  email: z
    .string()
    .min(2, { message: "This field has to be field" })
    .email("This is not a valid email."),
  password: z.string().min(8, { message: "Must be at least 8 characters" }),
});
