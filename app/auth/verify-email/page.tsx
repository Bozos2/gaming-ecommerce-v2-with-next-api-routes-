import User from "@/lib/mongooseModel";

interface VerifyEmailPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const VerifyEmailPage = async ({ searchParams }: VerifyEmailPageProps) => {
  if (searchParams.token) {
    const user = await User.findOne({
      emailVerificationToken: searchParams.token as string,
    });
    if (!user) {
      return (
        <div className="min-h-screen text-3xl flex justify-center items-center">
          Invalid token!
        </div>
      );
    }

    await User.findByIdAndUpdate(
      { _id: user._id },
      {
        emailVerified: true,
        emailVerificationToken: null,
      }
    );

    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-xl sm:text-2xl">
          Email verified for <b>{user.email}</b>!
        </h1>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl sm:text-2xl">Verify Email</h1>
        <p>No email verification token found. Check your email.</p>
      </div>
    );
  }
};

export default VerifyEmailPage;
