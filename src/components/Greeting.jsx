import { useAnimation } from '@/customHooks/useAnimation'
import React, { useRef } from 'react'

const Greeting = () => {
    const container = useRef(null)
    const postion = {
        start: "top 100%",
        end: "bottom 90%"
    }
    useAnimation(container, ".an", postion)
  return (
    <div className="text-center p-5 pt-10 bg-slate-700 text-white" ref={container}>
        <p
          className="mb-4 text-2xl tangerine-regular an"
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          Assalamualaikum Wr. Wb.
        </p>
        <p className="text-sm mb-8 an">
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
        <div className="text-center an">
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
  )
}

export default Greeting
