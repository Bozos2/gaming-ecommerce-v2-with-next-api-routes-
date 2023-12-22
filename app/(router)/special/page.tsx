import Image from "next/image";
import Link from "next/link";
import img from "../../assets/Images/special.png";

const SpecialPage = () => {
  return (
    <div className="flex flex-col  items-center sm:min-h-screen px-4 sm:py-24 pt-16 pb-40 font-poppins bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <div className="flex flex-col items-end">
        <Image src={img} alt="error image" width={500} height={500} priority />
        <Link
          className="text-xs text-blue-500 hover:underline hover:underline-offset-2"
          href="https://storyset.com/web"
        >
          Web illustrations by Storyset
        </Link>
      </div>
      <div className="mt-12 ">
        <h1 className="font-semibold text-4xl tracking-wider text-center">
          Oops!
        </h1>
        <h1 className="font-semibold text-4xl  tracking-wider mt-2 text-center">
          This page is currently under development
        </h1>
      </div>
    </div>
  );
};

export default SpecialPage;
