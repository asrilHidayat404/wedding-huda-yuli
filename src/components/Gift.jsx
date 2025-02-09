import { useAnimation } from '@/customHooks/useAnimation';
import React, { useRef, useState } from 'react'
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
const Gift = () => {
        const container = useRef(null)
        const postion = {
            start: "top 100%",
            end: "bottom 90%"
        }
        useAnimation(container, ".an", postion)
  return (
    <div className="flex bg-gray-700 text-gray-100 flex-col items-center justify-center min-h-screen p-4" ref={container}>
    <h1 className="text-4xl an font-bold mb-4 tangerine-bold tangerine-bold">
      Wedding Gift
    </h1>
    <p className="text-center mb-8 an">
      Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
      jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado
      secara cashless.
    </p>
    <div className="bg-white text-gray-800 grid place-items-center rounded-lg shadow-lg p-6 mb-4 w-full max-w-md an">
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
    <div className="bg-white text-gray-800 an rounded-lg shadow-lg p-6 w-full max-w-md grid place-items-center">
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
  )
}

export default Gift
