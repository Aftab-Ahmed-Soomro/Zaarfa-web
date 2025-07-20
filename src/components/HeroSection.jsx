import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import CarouselCard from './CarouselCard';

const carouselData = [
  {
    img: "/assets/imgs/web-dev.jpg",
    title: "Web Development",
    subtitle: "Building tomorrow, today — on the web.",
  },
  {
    img: "/assets/imgs/app-dev.jpg",
    title: "App Development",
    subtitle: "In your pocket. On the go. Built to grow.",
  },
  {
    img: "/assets/imgs/digital-marketing.jpg",
    title: "Digital Marketing",
    subtitle: "Clicks to customers, Strategy to success.",
  },
  {
    img: "/assets/imgs/graphic-designing.jpg",
    title: "Graphic Designing",
    subtitle: "From Sketch to Success",
  },
];

const HeroSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  // Handlers for mouse/touch events
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  // For touch devices
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  // Remove unused variable warning
  // const onChange = currentSlide => {};

  const handlePrev = (e) => {
    e.stopPropagation();
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div
      style={{ cursor: isDragging ? 'grabbing' : 'auto' }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => { handleDragEnd(); setIsHovered(false); }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      className="relative group"
    >
      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={handlePrev}
        className={`
          absolute top-1/2 left-4 z-10 -translate-y-1/2
          bg-[#6A7D8C] hover:bg-[#09307D] shadow-md rounded-full p-2 ml-14
          transition-opacity duration-400
          ${isHovered ? 'opacity-100' : 'opacity-0'}
          group-hover:opacity-100
        `}
        style={{
          pointerEvents: isHovered ? 'auto' : 'none',
          cursor: isHovered ? 'pointer' : 'default'
        }}
      >
        <MdKeyboardArrowLeft className="w-[45px] h-[45px] text-white" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={handleNext}
        className={`
          absolute top-1/2 right-4 z-10 -translate-y-1/2
          bg-[#6A7D8C] hover:bg-[#09307D] shadow-md rounded-full p-2 mr-14
          transition-opacity duration-400
          ${isHovered ? 'opacity-100' : 'opacity-0'}
          group-hover:opacity-100
        `}
        style={{
          pointerEvents: isHovered ? 'auto' : 'none',
          cursor: isHovered ? 'pointer' : 'default'
        }}
      >
        <MdKeyboardArrowRight className="w-[45px] h-[45px] text-white" />
      </button>
      <Carousel
        ref={carouselRef}
        draggable={true}
        swipeToSlide={true}
        autoplay={true}
        autoplaySpeed={3000}
        dots={true}
      >
        {carouselData.map((item, idx) => (
          <div key={idx}>
            <CarouselCard img={item.img} title={item.title} subtitle={item.subtitle} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;