import React, { useState, useEffect, useRef } from "react";

const Play = ({ isPlay, setIsPlay }) => {
  const audioRef = useRef(null);
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/lagu.mp3");
    }

    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlay]);

  const handlePlayClick = (e) => {
    e.preventDefault();
    setIsPlay((prev) => !prev);
  };

  const smoothScroll = () => {
    // if (!isScrolling) return; // Jika isScrolling false, berhenti
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setIsScrolling(false);
      return;
    }

    window.scrollBy(0, 2); // Scroll perlahan (2px per frame)
    scrollRef.current = requestAnimationFrame(smoothScroll);
  };

  const handleScrollClick = () => {
    if (isScrolling) {
      cancelAnimationFrame(scrollRef.current); // Hentikan animasi scroll
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
      smoothScroll(); // Mulai scroll
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 space-y-4 flex flex-col">
      <button className="bg-gray-200 p-2 rounded-full" onClick={handlePlayClick}>
        {isPlay ? (
          <img src="/pause.png" alt="Pause" width={15} />
        ) : (
          <img src="/play-button.png" alt="Play" width={15} />
        )}
      </button>
      <button className="bg-gray-200 p-2 rounded-full" onClick={handleScrollClick}>
        <img src="/scroll-bar.png" alt="Scroll" width={15} />
      </button>
    </div>
  );
};

export default Play;
