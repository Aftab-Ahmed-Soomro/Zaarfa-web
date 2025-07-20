import React from 'react'

const CarouselCard = ({ img, title, subtitle }) => {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[520px] lg:h-[600px] xl:h-[680px] overflow-hidden">
      {/* Background Image */}
      <img className="w-full h-full object-cover" src={img} alt="" />
      {/* Diagonal White Overlay */}
      <div
        className={`
          absolute top-0 right-0 h-full
          w-[90%] xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[55%] xl:w-[50%]
          flex items-end justify-end
          pointer-events-none
        `}
        style={{
          // Responsive diagonal overlay using media queries
          clipPath:
            'polygon(100% 100%, 100% 120px, 10% 105%)',
            background: 'white'
        }}
      >
        <div className="
          flex flex-col items-end justify-end
          px-4 py-6
          sm:px-8 sm:py-10
          md:px-12 md:py-16
          w-full
        ">
          <h2 className="text-[16px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6c7a89] mb-2 text-right">{title}</h2>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg text-[#6c7a89] mb-4 sm:mb-6 text-right">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
