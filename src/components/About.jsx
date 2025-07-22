import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#F0FDFF] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="relative h-full">
            <div className="h-full">
              <img 
                src="/assets/imgs/about.jpg" 
                alt="About Us" 
                className="w-full h-full object-cover rounded-[20px]"
                style={{ minHeight: '500px' }} // Ensures minimum height for better appearance
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* About Us Header */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-4xl font-bold text-[#5A6F80] mb-4">About us</h2>
              <h3 className="text-xl text-[#62BCD8] font-semibold mb-4">Innovation to the Future Tech</h3>
              <p className="text-[#717275] leading-relaxed">
                We believe in our Innovation Team approach that combines strategy, technology, 
                and creativity. Over two decades, diversity a passion for excellence, 
                attention to detail and the client relationship by exceeding expectations 
                in every project.
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Our Mission */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-[#62BCD8] mb-3">Our Mission</h4>
                <p className="text-[#717275] text-sm leading-relaxed">
                  At TFS we strive every day to deliver innovative, efficient, 
                  and scalable technology solutions that empower businesses to thrive in the digital 
                  world.
                </p>
              </div>

              {/* Our Vision */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-[#62BCD8] mb-3">Our Vision</h4>
                <p className="text-[#717275] text-sm leading-relaxed">
                  We aspire to be the global leader in transformative tech 
                  and impact. We aim to drive progress by delivering 
                  standards in quality, integrity, 
                  and impact. We aim to drive progress by delivering 
                  solutions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;