"use client";

import { useState, useEffect } from "react";
import InterceptedPageAsModal from "@/app/components/UI/helper/ProfilePageModal";

const ProfilePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="min-h-screen flex justify-center items-center">
      {isClient ? (
        <div>
          <InterceptedPageAsModal />
        </div>
      ) : (
        <h1 className="text-5xl">Loading...</h1>
      )}
    </section>
  );
};

export default ProfilePage;
