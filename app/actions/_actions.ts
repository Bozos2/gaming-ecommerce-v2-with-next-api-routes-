"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema, NewsletterSchema } from "@/lib/schema";
import ContactFormEmailPage from "../emails/ContactEmail";
import NewstletterSubPage from "../emails/NewsletterEmail";
import { ResetPasswordEmailTemplate } from "../emails/ResetPassword";
import { VerifyEmailTemplate } from "../emails/VerifyEmail";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_KEY);

export async function sendEmailContactForm(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { firstName, lastName, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "GameLoot <info@bozesoldo.com>",
        to: `${process.env.EMAIL}`,
        subject: "Contact form submission",
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmailPage({ firstName, lastName, email, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

type NewsletterInput = z.infer<typeof NewsletterSchema>;

export async function NewsletterSubscription(email: NewsletterInput) {
  const result = NewsletterSchema.safeParse(email);

  if (result.success) {
    const { email } = result.data;
    try {
      const data = await resend.emails.send({
        from: "GameLoot <info@bozesoldo.com>",
        to: `${email}`,
        subject: "Newsletter subsciption",
        text: `Hello ${email}, thank you for subscription`,
        react: NewstletterSubPage({ email }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

export async function PasswordReset(email: string, resetPasswordToken: string) {
  const data = await resend.emails.send({
    from: "GameLoot <info@bozesoldo.com>",
    to: `${email}`,
    subject: "Reset Password ",
    text: `Hello ${email}, change your password there`,
    react: ResetPasswordEmailTemplate({
      email,
      resetPasswordToken,
    }) as React.ReactElement,
  });
  return { success: true, data };
}

export async function VerifyEmail(
  email: string,
  emailVerificationToken: string
) {
  const data = await resend.emails.send({
    from: "GameLoot <info@bozesoldo.com>",
    to: `${email}`,
    subject: "Verify Account",
    text: `Hello ${email}, verify your account`,
    react: VerifyEmailTemplate({
      email,
      emailVerificationToken,
    }) as React.ReactElement,
  });
  return { success: true, data };
}
