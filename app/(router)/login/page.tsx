import LoginForm from "@/app/components/Forms/LoginForm";

const Login = () => {
  return (
    <section className="pt-6 sm:pt-0 sm:flex justify-center items-center  min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <LoginForm />
    </section>
  );
};

export default Login;
