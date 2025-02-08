import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";

// Registrasi plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const imgGallery = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img6.JPG",
  "img7.JPG",
  "img8.JPG",
  "img9.JPG",
  "img10.jpg",
  "img11.JPG",
  "img12.JPG",
  "img13.JPG",
  "img14.JPG",
  "img15.JPG",
];

function Gallery() {
    const galleryContainer = useRef(null);
    const interactivePic = useRef(null);


    useEffect(() => {
        // GSAP: Animasi saat gambar muncul
        const gsapContext = gsap.context(() => {
            gsap.from(".gallery-item", {
                y: 50,
                opacity: 0,
                stagger: 0.5,
                duration: 1,
                scrollTrigger: {
                    trigger: interactivePic.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
            });
        }, interactivePic);

        return () => {
            gsapContext.revert(); // Bersihkan GSAP context
        };
    }, []);


    // Anime.js: Efek hover pada gambar
    const handleHover = (e) => {
        anime({
            targets: e.currentTarget,
            scale: 1.1,
            duration: 300,
            easing: "easeInOutQuad",
        });
    };

    const handleHoverOut = (e) => {
        anime({
            targets: e.currentTarget,
            scale: 1,
            duration: 300,
            easing: "easeInOutQuad",
        });
    };

     // Komponen Gambar Galeri
    //  const Pictures = ({ i }) => {
    //     const randomImages = [];
    //     for (let j = 0; j < i; j++) {
    //         randomImages.push(
    //             <img
    //                 data-aos="flip-up"
    //                 key={i}
    //                 src={`https://picsum.photos/1200/700?random=${j}`}
    //                 alt=""
    //                 className="gallery-item lg:w-1/5 md:w-1/4 sm:w-1/3 w-auto rounded-md"
    //                 onMouseEnter={handleHover}
    //                 onMouseLeave={handleHoverOut}
    //             />
    //         );
    //     }
    //     return randomImages
    // };

  return (
    <div className="container mx-auto py-12"  ref={galleryContainer}>
      <h1 className="text-center text-4xl font-semibold mb-4 tangerine-bold">
        Our Gallery
      </h1>
      <div className="flex justify-center mb-8">
        <div className="w-24 h-1 bg-gray-400"></div>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" ref={interactivePic}>
          {imgGallery.map((img, i) => (
            <div className="bg-gray-700 p-2 rounded-lg overflow-hidden" key={i}>
              <img
              data-aos="flip-up"
                alt="A traditional wedding scene with a couple and decorative elements"
                className="gallery-item w-full h-96 object-cover rounded-lg"
                height="384"
                src={`/img/${img}`}
                width="256"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery