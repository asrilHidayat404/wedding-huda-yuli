"use client";

import { DiscussionEmbed } from "disqus-react";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Intro from "@/components/Intro";
import Play from "@/components/Play";
import { Suspense, useEffect, useRef, useState } from "react";
import Ayat from "@/components/Ayat";
import Greeting from "@/components/Greeting";
import Gift from "@/components/Gift";
import { useAnimation } from "@/customHooks/useAnimation";

export default function Home() {
  const [isOpened, setIsOpened] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpened((prev) => !prev);
    if (isOpened) {
      setIsPlay(true);
    }
  };
  useEffect(() => {
    // Mencegah scroll pada body
    if (isOpened) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpened) {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  return (
    <div className={`relative`}>
      <Suspense
        fallback={
          <div
            className={`w-screen h-screen justify-center items-center z-30 flex fixed bg-black text-white`}
          >
            Loading...
          </div>
        }
      >
        <Intro open={isOpened} setOpen={handleOpen} />
      </Suspense>

      <Hero />
      <Play isPlay={isPlay} setIsPlay={setIsPlay} />

      <Ayat />
      {/* <!--  --> */}

      <Greeting />

      {/* <!--  --> */}

      <Information />

      {/* <!--  --> */}

      <Gallery />

      {/* <!--  --> */}

      <Gift />

      {/* <!--  --> */}

     <Pray />

      {/*  */}
      

      <div className="relative bg-gray-900 text-gray-200">
        <img
          alt="Wedding couple in traditional attire"
          className="w-full h-screen object-cover opacity-30"
          height="1080"
          src="/img3.jpeg"
          width="1920"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm md:text-base lg:text-lg mb-2">
            Atas kehadiran dan doa restu dari Bapak/Ibu/Saudara/I sekalian, kami
            mengucapkan Terima Kasih.
          </p>
          <p className="italic text-sm md:text-base lg:text-lg mb-4">
            Wassalamualaikum Wr. Wb.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-8">
            Kami yang berbahagia
          </p>
          <h1 className="text-[50px] md:text-5xl lg:text-6xl font-bold mb-8 tangerine-bold">
            Huda &amp; Yuli
          </h1>
          <div className="translate-y-[10rem] text-sm">
            <p className="text-sm flex gap-2 bodoni-moda-text">
              Made with
              <img src="/love.png" width={20} alt="" />
            </p>
            <p className="bodoni-moda-text">Anonymous</p>
            <a
              href="https://wa.me/6281249356051" // Ganti dengan nomor WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="block w-10 h-10 mx-auto"
            >
              <img
                src="whatsapp.png"
                width={20}
                alt="WhatsApp"
                className="mx-auto mt-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Confirmation() {
  const [attendance, setAttendance] = useState("");
  const [name, setName] = useState("");

  const handleSendMessage = () => {
    const whatsappMessage = `Nama: ${name}%0AKonfirmasi: ${attendance}`;
    window.open(
      `https://wa.me/6287883757280?text=${whatsappMessage}`,
      "_blank"
    );
  };


  return (
    <div className="flex items-center justify-center " >
      <div className=" rounded-lg shadow-lg w-full bg-gray-700">
        <div className="text-white text-lg font-semibold p-4 rounded-t-lg flex justify-between items-center an">
          <span>KONFIRMASI KEHADIRAN</span>
          <i className="fas fa-times cursor-pointer"></i>
        </div>
        <div className="p-6 an">
          <form>
            <div className="mb-4">
              <label
                className="block text-left text-gray-200 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Masukkan nama anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <span className="block text-left text-gray-200 text-sm font-bold mb-2">
                Konfirmasi Kehadiran
              </span>
              <div className="flex items-center mb-2 text-sm">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="hadir"
                  name="kehadiran"
                  value="Iya, Saya akan Hadir"
                  onChange={(e) => setAttendance(e.target.value)}
                />
                <label className="text-gray-200" htmlFor="hadir">
                  Ya, saya akan hadir
                </label>
              </div>
              <div className="flex items-center text-sm">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="tidak-hadir"
                  name="kehadiran"
                  value="Maaf, Saya Tidak Bisa Hadir"
                  onChange={(e) => setAttendance(e.target.value)}
                />
                <label className="text-gray-200" htmlFor="tidak-hadir">
                  Maaf, saya belum bisa hadir
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleSendMessage}
                className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Kirim Konfirmasi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Pray() {
  const container = useRef(null);
  const postion = {
    start: "top 100%",
    end: "bottom 90%",
  };
  useAnimation(container, ".an", postion);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-10" ref={container}>
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold tangerine-bold an">Ucapan dan Doa</h1>
      <p className="text-lg mt-2 an">
        Berikan ucapan terbaik untuk kedua mempelai
      </p>
    </div>
    <div className="bg-gray-600 p-6 rounded-lg w-full max-w-2xl an">
      <DiscussionEmbed
        shortname="wedding-huda-yuli"
        config={{
          url: "http://localhost:5173",
          // identifier: this.props.article.id,
          title: "wedding-huda-yuli",
          language: "en", //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </div>

    <div className="bg-gray-600 p-6 rounded-lg mt-8 w-full max-w-2xl text-center an">
      <p className="mb-4">
        Mari bantu kami mempersiapkan acara menjadi lebih baik dengan
        mengisi formulir RSVP dibawah ini
      </p>
      <Confirmation />
    </div>
  </div>
  )
}
