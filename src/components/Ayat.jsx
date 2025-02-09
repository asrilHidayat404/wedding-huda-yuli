import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "@/customHooks/useAnimation";

gsap.registerPlugin(ScrollTrigger);

const Ayat = () => {
    const container = useRef(null)
    const postion = {
        start: "top 60%",
        end: "bottom 50%"
    }
    useAnimation(container, ".an", postion)
    // useEffect(() => {
    //     // GSAP: Animasi saat gambar muncul
    //     const gsapContext = gsap.context(() => {
    //         gsap.from(".an", {
    //             y: 50,
    //             opacity: 0,
    //             stagger: 0.5,
    //             duration: 0.5,
    //             scrollTrigger: {
    //                 trigger: container.current,
    //                 start: "top 90%",
    //                 end: "bottom 10%",
    //                 toggleActions: "play none none reverse",
    //                 scrub: true
    //             },
    //         });
    //     }, container);

    //     return () => {
    //         gsapContext.revert(); // Bersihkan GSAP context
    //     };
    // }, []);
  return (
    <div className="text-center bg-stone-800 text-white px-5 py-10" ref={container}>
        <p className="lg:w-1/2 mx-auto an">
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.
        </p>
        <br />
        <b className="an">(Q.S Ar Rum : 21)</b>
      </div>
  )
}

export default Ayat
