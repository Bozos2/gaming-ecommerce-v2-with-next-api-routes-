import User from "@/lib/mongooseModel";
import ChangePasswordForm from "@/app/components/Forms/ChangePasswordForm";
import ResetPasswordModal from "@/app/components/UI/helper/ResetPasswordModal";
import { connectToMongoDB } from "@/lib/mongooseConnect";

interface ResetPasswordPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageProps) => {
  connectToMongoDB().catch((err) => console.log("error:", err));
  if (searchParams.token) {
    const user = await User.findOne({
      resetPasswordToken: searchParams.token as string,
    });
    if (!user) {
      return (
        <div className="min-h-screen text-3xl flex justify-center items-center">
          Invalid token!
        </div>
      );
    }

    return (
      <ChangePasswordForm resetPasswordToken={searchParams.token as string} />
    );
  } else {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ResetPasswordModal title="Click here to reset password" />
      </div>
    );
  }
};

export default ResetPasswordPage;
