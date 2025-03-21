import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Modal = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 w-[400px] h-[400px] max-w-3xl rounded-md">
        <button
          className="absolute top-1 right-1 text-gray-900 hover:text-black z-50"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            pagination={false}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            className="relative w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`캐러셀 이미지 ${index + 1}`}
                  className="w-full h-auto rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center">
            <button className="prev-btn cursor-pointer">
              <FiChevronLeft size={24} />
            </button>
            <div className="text-center">
              {currentIndex + 1} / {images.length}
            </div>
            <button className="next-btn cursor-pointer">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
