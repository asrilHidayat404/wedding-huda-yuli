"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Intro = ({open, setOpen}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const toName = searchParams.get("to") || "Tamu Undangan";
  
  useEffect(() => {
    // Jika parameter `to` tidak ada, tambahkan `to=`
    if (!searchParams.get("to")) {
      router.push("?to=");
    }
  }, [searchParams, router]);
  return (
    <div className={`w-screen h-screen justify-center items-center z-30 flex ${open ? '-translate-y-0' : 'transform -translate-y-[80rem] transition-transform duration-1000 ease-linear'} fixed`}>

        <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: `url("bggelap.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(50%)", // Apply blur to background image
          // backgroundColor: "rgba(0, 0, 0, 1)"
        }}
      ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-lg font-light tracking-widest mb-2">
            THE WEDDING OF
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tangerine-bold">
            Huda &amp; Yuli
          </h1>
          <p className="text-lg mb-2">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="text-lg mb-4">{toName}</p>
          <p className="text-sm italic mb-6">
            *Mohon maaf apabila ada kesalahan pada penulisan nama dan gelar
          </p>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-full flex items-center border-2" onClick={(e) => setOpen(e)}>
            <i className="fas fa-envelope mr-2"></i>
            Buka Undangan
          </button>
        </div>
      </div>
  )
}

export default Intro
