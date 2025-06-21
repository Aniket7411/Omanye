import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector('.back-to-top');
      if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#00A3A1] text-white pt-12 pb-6 px-4">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-8 justify-between">
        
        {/* Company Info */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center mb-4">
            <img 
              src="/assets/images/logo/hh.svg" 
              alt="Omanye FZ-LLC" 
              style={{ height: '50px' }}
            />
          </div>
          <p className="text-[#fff] mb-6">
            We're committed to elevating the construction experience with innovation and quality craftsmanship.
          </p>
          <div className="flex gap-4">
            <a href="#" className=" hover:text-[#000] transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className=" hover:text-[#000] transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className=" hover:text-[#000] transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className=" hover:text-[#000] transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-[#000] text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['About Us'  , 'Projects', 'Terms & Conditions', 'Contact Us'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className=" hover:text-[#000] transition-colors flex items-center"
                >
                  <span className="mr-2">→</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-[#000] text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {[
              'General Contracting',
              'Project Management',
              'New Construction',
              'Renovations & Remodeling',
              'Interior Finishing'
            ].map((service) => (
              <li key={service}>
                <a 
                  href="#" 
                  className=" hover:text-[#000] transition-colors flex items-center"
                >
                  <span className="mr-2">→</span> {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-[#000] text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-[#000] mt-1 mr-3 flex-shrink-0" />
              <span className="">
                FOB 51927 Compass Building, Al Shohoda Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
              </span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#000] mr-3" />
              <span className="">+971 50 311 8846</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#000] mr-3" />
              <span className="">gbd.omanyefz@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FaClock className="text-[#000] mr-3" />
              <span className="">
                Mon-Fri: 9:00 am - 5:00 pm<br />
                Sat: 9:00 am - 2:00 pm
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className=" mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Omanye FZ-LLC. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-500 hover:text-[#000] transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="back-to-top fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors hidden items-center justify-center"
        style={{ zIndex: 999 }}
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;