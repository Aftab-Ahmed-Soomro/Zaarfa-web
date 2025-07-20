import React from 'react'

const CarouselCard = ({ img, title, subtitle }) => {
  return (
    <div className="relative w-full h-[680px] overflow-hidden">
      {/* Background Image */}
      <img className="w-full h-full object-cover" src={img} alt="" />
      {/* Diagonal White Overlay */}
      <div
        className="absolute top-0 right-0 h-full w-[60%] flex items-end justify-end"
        style={{
          clipPath: 'polygon(100% 100%, 100% 150px, 0 135%)',
          background: 'white',
        }}
      >
        <div className="flex flex-col items-end justify-end p-12 w-full">
          <h2 className="text-xl md:text-3xl font-bold text-[#6c7a89] mb-2">{title}</h2>
          <p className="text-sm sm:text-[16px] text-[#6c7a89] mb-6">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
