import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import CarouselCard from './CarouselCard';

const HeroSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  // Handlers for mouse/touch events
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  // For touch devices
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  const onChange = currentSlide => {
    console.log(currentSlide);
  };

  return (
    <div
      ref={dragRef}
      style={{ cursor: isDragging ? 'grabbing' : 'auto' }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Carousel
        afterChange={onChange}
        draggable={true}
        swipeToSlide={true}
        autoplay={true}
        autoplaySpeed={3000}
      >
        <CarouselCard img={"/assets/imgs/web-dev.jpg"} title={"Web Development"} subtitle={"Building tomorrow, today — on the web."} />
        <CarouselCard img={"/assets/imgs/app-dev.jpg"} title={"App Development"} subtitle={"In your pocket. On the go. Built to grow."} />
        <CarouselCard img={"/assets/imgs/digital-marketing.jpg"} title={"Digital Marketing"} subtitle={"Clicks to customers, Strategy to success."} />
        <CarouselCard img={"/assets/imgs/graphic-designing.jpg"} title={"Graphic Designing"} subtitle={"From Sketch to Success"} />
      </Carousel>
    </div>
  );
};
export default HeroSection;