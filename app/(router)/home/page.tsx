import HomeText from "@/app/components/HomeUI/HomeText";
import MascotImage from "@/app/components/HomeUI/MascotImage";
import AboutText from "@/app/components/HomeUI/AboutText";
import AboutIcons from "@/app/components/HomeUI/AboutIcons";
import UsersText from "@/app/components/HomeUI/UsersText";
import CommunitySection from "@/app/components/HomeUI/CommunitySection";
import ContactUsForm from "@/app/components/HomeUI/ContactUsForm";
import Faq from "@/app/components/HomeUI/FAQAccordion";
import Review from "@/app/components/HomeUI/ReviewSection";

const Home = () => {
  return (
    <main className="min-h-screen  overflow-hidden">
      <div className="flex flex-row justify-around sm:pt-12  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
        <div>
          <HomeText />
        </div>
        <div className="hidden mr-2 lg:block">
          <MascotImage />
        </div>
      </div>
      <div className="bg-neutral-900">
        <UsersText />
      </div>

      <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black  py-4">
        <div className="flex justify-end">
          <AboutText />
        </div>
        <div className="flex justify-center mt-44">
          <AboutIcons />
        </div>
      </div>
      <div className=" bg-neutral-900">
        <CommunitySection />
      </div>
      <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
        <ContactUsForm />
      </div>
      <div className="bg-neutral-900">
        <Faq />
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
        <Review />
      </div>
    </main>
  );
};

export default Home;
