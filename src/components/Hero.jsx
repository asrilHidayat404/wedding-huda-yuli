"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import CountdownTimer from "@/libs/CountDownTimer";

const Hero = () => {
  return (
    <SwiperComponents>
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-lg font-light tracking-widest mb-4">
            THE WEDDING OF
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-300  tangerine-bold">
            Ahmad Saiful Huda
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-300  tangerine-bold">
            &amp;
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-300  tangerine-bold">
            Yuliana S.Ag
          </h1>
          <p className="text-lg my-8">Senin, 17 FEBRUARI 2025</p>
          <CountdownTimer deadline={"Februari, 17, 2025"} specificHour={8} />
          
          <br />
          <br />
          <br />
          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Huda+%26+Yuli&details=The+Wedding+of+Huda+%26+Yuli%3Cbr%3ESenin%2C+17+Februari+2025+Pukul+07%3A30%3Cbr%3EKediaman+Mempelai+Wanita%0D%0ATarogan%2C+Lenteng%0D%0ASumenep&dates=20250217T073000&location=https://maps.app.goo.gl/wKUJ9DLp4CRDrMKF8"
            target="_blank"
            className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mt-20"
          >
            Save to Calendar
          </a>
        </div>
      </div>
      {/* <Bubbles /> */}
    </SwiperComponents>
  );
};

export default Hero;

const SwiperComponents = ({ children }) => {
  const bg = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg"];

  return (
    <>
      <Swiper
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {bg?.map((m, i) => {
          return (
            <SwiperSlide key={i}>
              <main
                className="flex flex-col justify-end min-h-screen text-white hero relative"
                style={{
                  backgroundImage: `url("/${m}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {children}
              </main>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
