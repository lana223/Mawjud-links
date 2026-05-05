"use client";

import { useEffect, useState } from "react";
import ProfileCards from "@/app/Components/ProfileCards";

export default function Home() {
  const [bg, setBg] = useState("/imaget.svg");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");

    const updateBg = () => {
      setBg(media.matches ? "/iPhoneM3.svg" : "/imaget.svg");
    };

    updateBg();
    media.addEventListener("change", updateBg);

    return () => media.removeEventListener("change", updateBg);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <ProfileCards />
    </div>
  );
}