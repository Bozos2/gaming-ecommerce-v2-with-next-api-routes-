import * as React from "react";

interface VerifyEmailTemplateProps {
  email: string;
  emailVerificationToken: string;
}

export const VerifyEmailTemplate: React.FC<
  Readonly<VerifyEmailTemplateProps>
> = ({ email, emailVerificationToken }) => (
  <div>
    <h1>
      Verify email for <b>{email}</b>
    </h1>
    <p>To verify your email, click on this link:</p>
    <a
      href={`https://gaming-ecommerce-v2.vercel.app/auth/verify-email?token=${emailVerificationToken}`}
    >
      Click here to verify your email
    </a>
  </div>
);
