import Link from "next/link";
import DiscordIcon from "@/app/assets/CommunityIcons/DiscordIcon";
import TwitterIcon from "@/app/assets/CommunityIcons/TwitterIcon";
import FacebookIcon from "@/app/assets/CommunityIcons/FacebookIcon";
import InstagramIcon from "@/app/assets/CommunityIcons/InstagramIcon";
import TelegramIcon from "@/app/assets/CommunityIcons/TelegramIcon";
import LinkedinIcon from "@/app/assets/CommunityIcons/LinkedinIcon";
import TiktokIcon from "@/app/assets/CommunityIcons/TiktokIcon";
import PinterestIcon from "@/app/assets/CommunityIcons/PinterestIcon";

const Links = () => {
  return (
    <div className="hidden xl:flex flex-row gap-20">
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Brzi Linkovi
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600 pb-1">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/special">Special</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/login">Login</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Need Help
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600 pb-1">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/shipping">Method of Delivery</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/online-payments">Method of payments</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/contact">Customer Support</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/warranty">Refunds</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Socials
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600">
            <Link href="/faq" className="flex flex-row gap-2 pb-1">
              <DiscordIcon width={22} height={22} /> Discord
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link href="/dostava" className="flex flex-row gap-2 pb-1">
              <TwitterIcon width={22} height={22} /> Twitter
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link href="/online trgovina" className="flex flex-row gap-2 pb-1">
              <FacebookIcon width={20} height={20} /> Facebook
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/kontakt informacije"
              className="flex flex-row gap-2 pb-1"
            >
              <InstagramIcon width={20} height={20} /> Instagram
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <TelegramIcon width={20} height={20} /> Telegram
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <LinkedinIcon width={20} height={20} /> LinkedIn
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <TiktokIcon width={20} height={20} /> Tiktok
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <PinterestIcon width={20} height={20} /> Pinterest
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Contact
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600 pb-1">
            <Link href="/contact">+123 456 789</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/contact">+987 6543210</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/contact">gameloot2@gmail.com</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/contact">gameloottrgovina@gmail.com</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
