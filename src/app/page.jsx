"use client";

import { DiscussionEmbed } from "disqus-react";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Intro from "@/components/Intro";
import Play from "@/components/Play";
import { Suspense, useEffect, useState } from "react";

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
       <Suspense fallback={<div className={`w-screen h-screen justify-center items-center z-30 flex ${open ? '-translate-y-0' : 'transform -translate-y-[80rem] transition-transform duration-1000 ease-linear'} fixed`}>Loading...</div>}>
          <Intro open={isOpened} setOpen={handleOpen} />
      </Suspense>

      <Hero />
      <Play isPlay={isPlay} setIsPlay={setIsPlay} />
      <div className="text-center bg-stone-800 text-white px-5 py-10">
        <p className="lg:w-1/2 mx-auto">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>
        <br />
        <b>(Q.S Ar Rum : 21)</b>
      </div>
      {/* <!--  --> */}

      <div className="text-center p-5 pt-10 bg-slate-700 text-white">
        <p
          className="mb-4 text-2xl tangerine-regular"
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          Assalamualaikum Wr. Wb.
        </p>
        <p className="text-sm mb-8">
          Dengan memohon Rahmat dan Ridho Allah SWT, Kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami
        </p>
        <div className="relative inline-block">
          <img
            alt="Wedding couple in traditional attire"
            className="rounded-full mx-auto mb-4"
            height="400"
            src="/img5.jpeg"
            width="300"
          />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold mb-2 berkshire-swash-regular">
            Ahmad Saiful Huda
          </p>
          <p className="text-sm mb-4">Putra BPK abd Rahman dan ibu ROBIYATUN</p>
          <p className="text-2xl font-bold mb-4">&amp;</p>
          <p className="text-lg font-bold mb-2 berkshire-swash-regular">
            Yuliana S.Ag
          </p>
          <p className="text-sm">Putri dari BPK SUDAHRI dan ibu Ida</p>
        </div>
      </div>

      {/* <!--  --> */}

      <Information />

      {/* <!--  --> */}

      <Gallery />

      {/* <!--  --> */}

      <div className="flex bg-gray-700 text-gray-100 flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-4 tangerine-bold tangerine-bold">
          Wedding Gift
        </h1>
        <p className="text-center mb-8">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
          jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado
          secara cashless.
        </p>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mb-4 w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <img
              alt="DANA Logo"
              className="rounded-lg"
              height="50"
              src="https://cdn.antaranews.com/cache/1200x800/2022/04/25/dana.jpg.webp"
              width="60"
            />
          </div>
          <p className="text-xl font-semibold mb-2">+62 878-8375-7280</p>
          <p>Huda &amp; Yuli</p>
        </div>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-gift text-2xl"></i>
          </div>
          <p className="text-center font-semibold mb-2">KIRIM HADIAH</p>
          <p className="text-center mb-4">
            Nama : Huda &amp; Yuli
            <br />
            Alamat : Desa Paterongan, Lenteng Sumenep
          </p>
          <CopyButton text="Desa Paterongan, Lenteng Sumenep" />
        </div>
      </div>

      {/* <!--  --> */}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tangerine-bold">Ucapan dan Doa</h1>
          <p className="text-lg mt-2">
            Berikan ucapan terbaik untuk kedua mempelai
          </p>
        </div>
        {/* <div className="bg-gray-600 p-6 rounded-lg w-full max-w-2xl">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Ucapan</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-gray-300 p-4 rounded-lg">
                <img
                  alt="User avatar"
                  className="w-12 h-12 rounded-full"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/apfRpwwvbatsEeFYVzKI6Eq2LIIQfsyG4zLgSF0Czsk.jpg"
                  width="50"
                />
                <div>
                  <p className="text-red-600 font-bold">ok2</p>
                  <p>ok2</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-gray-300 p-4 rounded-lg">
                <img
                  alt="User avatar"
                  className="w-12 h-12 rounded-full"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/apfRpwwvbatsEeFYVzKI6Eq2LIIQfsyG4zLgSF0Czsk.jpg"
                  width="50"
                />
                <div>
                  <p className="text-red-600 font-bold">ok</p>
                  <p>ok</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-gray-300 p-4 rounded-lg">
                <img
                  alt="User avatar"
                  className="w-12 h-12 rounded-full"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/apfRpwwvbatsEeFYVzKI6Eq2LIIQfsyG4zLgSF0Czsk.jpg"
                  width="50"
                />
                <div>
                  <p className="text-red-600 font-bold">ij</p>
                  <p>oko</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 mb-2 rounded-lg bg-gray-200 text-black"
              placeholder="Nama Anda"
              type="text"
            />
            <textarea
              className="w-full p-2 rounded-lg bg-gray-200 text-black"
              placeholder="Berikan Ucapan &amp; Doa"
            ></textarea>
          </div>
          <button className="bg-yellow-700 text-white py-2 px-4 rounded-lg">
            Kirim
          </button>
        </div> */}
        <div className="bg-gray-600 p-6 rounded-lg w-full max-w-2xl">
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

        <div className="bg-gray-600 p-6 rounded-lg mt-8 w-full max-w-2xl text-center">
          <p className="mb-4">
            Mari bantu kami mempersiapkan acara menjadi lebih baik dengan
            mengisi formulir RSVP dibawah ini
          </p>
          <Confirmation />
        </div>
      </div>

      {/*  */}

      <div className="relative">
        <img
          alt="Wedding couple in traditional attire"
          className="w-full h-screen object-cover opacity-50"
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tangerine-bold">
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
    <div className="flex items-center justify-center ">
      <div className=" rounded-lg shadow-lg w-full bg-gray-700">
        <div className="text-white text-lg font-semibold p-4 rounded-t-lg flex justify-between items-center">
          <span>KONFIRMASI KEHADIRAN</span>
          <i className="fas fa-times cursor-pointer"></i>
        </div>
        <div className="p-6">
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


const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Kembalikan status setelah beberapa detik
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin: ", err);
    }
  }
  return (
    <button
      onClick={handleCopy}
      className="bg-gray-300 text-gray-800 px-4 py-2 rounded transition hover:bg-gray-400"
    >
      {copied ? "✅ Disalin!" : "Salin Alamat"}
    </button>
  );
}