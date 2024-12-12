import i18n from "i18next";
import {z} from "zod"

const required = {required_error: i18n.t("sign-up.required")};

const SignUpSchema = z.object({
    email: z
    .string(required)
    .email(i18n.t("sign-up.email-invalid")),
    password: z
    .string(required)
    .min(4,i18n.t("sign-up.min", {count: 4})),
    confirmPassword: z
    .string(required)
    .min(4,i18n.t("sign-up.min", {count: 4})),
    firstName: z.string().optional(),
    lastName: z.string().optional()
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  });

export type SignUpType = z.infer<typeof SignUpSchema>

export {
    SignUpSchema,
}
