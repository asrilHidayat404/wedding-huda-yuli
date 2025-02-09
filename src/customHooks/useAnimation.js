import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrasi plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useAnimation = (elementContainer, elementTarget, position) => {
    useEffect(() => {
        // GSAP: Animasi saat gambar muncul
        const gsapContext = gsap.context(() => {
            gsap.from(`${elementTarget}`, {
                y: 50,
                opacity: 0,
                stagger: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: elementContainer.current,
                    start: position.start,
                    end: position.end,
                    toggleActions: "play none none reverse",
                    scrub: true
                },
            });
        }, elementContainer);

        return () => {
            gsapContext.revert(); // Bersihkan GSAP context
        };
    }, []);
}