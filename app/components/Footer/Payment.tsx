import PaypalIcon from "@/app/assets/PaymentIcons/PaypalIcon";
import DinersClub from "@/app/assets/PaymentIcons/DinersClubIcon";
import BitcoinIcon from "@/app/assets/PaymentIcons/BitcoinIcon";
import AmericanExpressIcon from "@/app/assets/PaymentIcons/AmericanExpressIcon";
import MaestroCard from "@/app/assets/PaymentIcons/MaestroCardIcon";
import VisaIcon from "@/app/assets/PaymentIcons/VisaIcon";
import MasterCardIcon from "@/app/assets/PaymentIcons/MasterCardIcon";

const Payment = () => {
  return (
    <div className="max-w-2xl flex flex-row flex-wrap gap-4 hover:cursor-pointer">
      <PaypalIcon />
      <MasterCardIcon />
      <MaestroCard />
      <VisaIcon />
      <AmericanExpressIcon />
      <DinersClub />
      <BitcoinIcon />
    </div>
  );
};

export default Payment;
