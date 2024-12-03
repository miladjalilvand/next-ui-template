"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";

const images = [
  "/assets/1.png",
  "/assets/2.png",
//   "/assets/kartmeli.jpg",
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const swiperRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentImage]);

  // Next image handler
  const nextImage = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Previous image handler
  const prevImage = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handle circle click navigation
  const handleCircleClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setCurrentImage(index);
  };

  return (
    <div className="flex flex-col justify-center items-center  overflow-hidden ">
      <div className="relative w-screen h-screen overflow-hidden"> {/* اضافه کردن overflow-hidden برای جلوگیری از اسکرول */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
          loop={true}
          className="h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`تصویر ${index + 1}`}
                  fill
                  className="object-cover" // این ویژگی برای فیت شدن تصاویر به صورت کامل و پر کردن فضای اسلایدر
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-row-reverse z-20">
          <button
            onClick={prevImage}
            className="bg-red-700 text-white px-4 py-4 hover:bg-gray-800"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={nextImage}
            className="bg-red-700 text-white px-4 py-4 hover:bg-gray-800"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="flex md:w-1/7 h-full items-center justify-center pt-1">
        <CursorImage
          currentIndex={currentImage}
          onCircleClick={handleCircleClick}
        />
      </div>
    </div>
  );
}

function CursorImage({ currentIndex, onCircleClick }) {
  return (
    <ul className="flex flex-row space-x-px justify-center items-center p-6">
      {images.map((_, ind) => (
        <li key={ind}>
          <div
            onClick={() => onCircleClick(ind)}
            className={`rounded-full cursor-pointer m-1 ${
              currentIndex === ind
                ? "w-4 h-4 bg-gray-600"
                : "w-3 h-3 bg-gray-300"
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
