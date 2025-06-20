import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';



// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-md cursor-pointer z-10 transition-all duration-300 hover:scale-110"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-md cursor-pointer z-10 transition-all duration-300 hover:scale-110"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const CarouselComponent = ({ items, type = 'product' }) => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  // Determine styling based on carousel type
  const getCardStyle = (type) => {
    switch(type) {
      case 'project':
        return 'bg-gradient-to-br from-blue-50 to-gray-50 border border-gray-200';
      case 'service':
        return 'bg-gradient-to-br from-orange-50 to-amber-50 border border-amber-100';
      default: // product
        return 'bg-gradient-to-br from-gray-50 to-white border border-gray-200';
    }
  };

  // Determine button style based on type
  const getButtonStyle = (type) => {
    switch(type) {
      case 'project':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'service':
        return 'bg-orange-500 hover:bg-orange-600';
      default: // product
        return 'bg-gray-800 hover:bg-gray-900';
    }
  };

  return (
    <div className="px-4 py-8 md:px-8 max-w-7xl mx-auto">
      <Slider {...settings} className="relative">
        {items.map((item, index) => (
          <div key={index} className="px-2 py-4 focus:outline-none">
            <div className={`${getCardStyle(type)} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
              {/* Image Section */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {item.badge && (
                  <span className="absolute top-3 right-3 bg-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                
                {type === 'product' && item.price && (
                  <p className="text-gray-600 font-medium mb-3">${item.price.toLocaleString()}</p>
                )}
                
                {item.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                )}
                
                {type === 'project' && item.location && (
                  <p className="text-gray-500 text-sm mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </p>
                )}
                
                {item.features && (
                  <ul className="mb-4 space-y-1">
                    {item.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <svg className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="mt-auto pt-3">
                  <button 
                    className={`${getButtonStyle(type)} text-white text-sm font-medium py-2 px-4 rounded-lg w-full transition-colors duration-300`}
                  >
                    {type === 'product' ? 'View Details' : type === 'project' ? 'See Project' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;