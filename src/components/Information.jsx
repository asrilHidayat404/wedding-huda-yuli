import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";
gsap.registerPlugin(ScrollTrigger);

const Information = () => {
    const container = useRef(null)
    const interactivePic = useRef(null)

 
    useEffect(() => {
        let ctx = gsap.context(() => {
          gsap.from(".item", {
            y: 50,
            opacity: 0,
            stagger: 0.5, // Waktu jeda antar elemen
            duration: 1,
            scrollTrigger: {
              trigger: container.current, // Section yang dijadikan acuan
              start: "top 60%", // Animasi dimulai saat 80% dari elemen masuk viewport
              end: "bottom 10%", // Animasi berakhir saat bagian bawah elemen 50% terlihat
              toggleActions: "play none none reverse",
              // scrub: true, // Tidak smooth mengikuti scroll
            },
          });
        });
    
        return () => ctx.revert(); // Bersihkan animasi saat komponen unmount
      }, []);

  return (
    <div
    ref={container}
      className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 p-5"
      style={{
        backgroundImage: `url("/img4.jpeg")`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="text-center item text-white p-8 bg-black bg-opacity-80 rounded-lg w-[80%]" ref={interactivePic}>
        <h1 className="text-3xl font-semibold mb-4 tangerine-bold">
          Save The Date
        </h1>
        <div className="mb-8">
          <i className="fas fa-ring text-2xl mb-2"></i>
          <img
            src="https://web.undangandigital.id/wp-content/uploads/2023/08/wedding-ring.png"
            alt=""
            width={50}
            className="mx-auto"
          />
          <div className="space-y-3 mt-3">
            <h2 className="text-xl font-semibold bodoni-moda-text">
              Akad Nikah
            </h2>
            <p>Rabu, 17 Februari 2025</p>
            <p>Pukul 07.30 WIB</p>
          </div>
          <hr className="my-4 border-gray-400" />
          <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
          <h3 className="text-lg font-semibold bodoni-moda-text">Lokasi</h3>
          <p>Kediaman Mempelai Wanita</p>
          <p>Tarogan, Lenteng</p>
          <p>Sumenep Jawa Timur</p>
          <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
            <i className="fas fa-map-marked-alt"></i>
            <a href="https://maps.app.goo.gl/xwMbzvTSkqVkFG786" target="_blank">
              Google Maps Lokasi
            </a>
          </button>
        </div>
        <div>
          <i className="fas fa-ring text-2xl mb-2"></i>
          <img
            src="https://web.undangandigital.id/wp-content/uploads/2023/08/wedding-ring.png"
            alt=""
            width={50}
            className="mx-auto"
          />
          <div className="space-y-3 mt-3">
            <h2 className="text-xl font-semibold bodoni-moda-text">Resepsi</h2>
            <p>Rabu, 17 Februari 2025</p>
            <p>Pukul 14.00 WIB s/d selesai</p>
          </div>
          <hr className="my-4 border-gray-400" />
          <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
          <h3 className="text-lg font-semibold bodoni-moda-text">Lokasi</h3>
          <p>Kediaman Mempelai Wanita</p>
          <p>Tarogan, Lenteng</p>
          <p>Sumenep Jawa Timur</p>
          <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
            <i className="fas fa-map-marked-alt"></i>
            <a href="https://maps.app.goo.gl/xwMbzvTSkqVkFG786" target="_blank">
              Google Maps Lokasi
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
