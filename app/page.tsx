"use client"

import ProfileCards from "@/app/Components/profileCards";
import QrSection from "@/app/Components/qrSection";


export default function Home() {
  return (
    <main>
      <div className="bg-[url('/bg.png')] min-h-screen bg-cover bg-center flex items-center justify-center px-4">
      <ProfileCards />
      </div>
    </main>
    
  );
}
