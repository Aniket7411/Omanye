import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt, FaEnvelope, FaChevronDown, FaSearch, FaTimes, FaLongArrowAltRight, } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

    return (
        <header className="bg-white w-full shadow-sm sticky top-0 z-40">
            {/* Top Header Section */}
            <div className="bg-gray-100 py-2 px-4 hidden md:block">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start">
                        <div className="flex items-center">
                            <FaPhoneAlt className="text-gray-600 mr-2 text-sm" />
                            <a href="tel:971503118846" className="text-gray-700 hover:text-blue-600 text-sm">971503118846</a>
                            <span className="mx-1">,</span>
                            <a href="tel:971503118846" className="text-gray-700 hover:text-blue-600 text-sm">971503118846</a>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-gray-600 mr-2 text-sm" />
                            <a href="mailto:gbd.omanyefz@gmail.com" className="text-gray-700 hover:text-blue-600 text-sm">gbd.omanyefz@gmail.com</a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center mt-2 md:mt-0">
                        <span className="text-gray-600 mr-3 text-sm">Follow Us On:</span>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors"><FaFacebookF className="text-sm" /></a>
                            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors"><FaInstagram className="text-sm" /></a>
                            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><FaWhatsapp className="text-sm" /></a>
                            <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors"><FaLinkedinIn className="text-sm" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header Section */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <img
                                src="../assets/images/logo/01.svg"
                                alt="OMANYE Logo"
                                className="h-10 md:h-12 w-auto transition-all duration-300 hover:opacity-90"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition-colors">
                                Services
                                <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white shadow-xl rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                                <div className="grid grid-cols-3 gap-6 p-6">
                                    {/* Services Column 1 */}
                                    <div className="space-y-4">
                                        <ServiceMenuItem
                                            icon="assets/images/service/04.svg"
                                            title="Building and Construction Materials Solutions"
                                            description="Once planning is complete, site preparation begins. This phase involves clearing..."
                                            link="/bmc-services"
                                        />
                                        <ServiceMenuItem
                                            icon="assets/images/service/05.svg"
                                            title="Construction Services"
                                            description="Product & Project Management, Material Prescription and Installation"
                                            link="/construction-services"
                                        />


                                        <ServiceMenuItem
                                            icon="assets/images/service/06.svg"
                                            title="Turnkey Projects"
                                            description="offering end-to-end construction solutions tailored to your needs"
                                            link="/turnkey-projects"
                                        />


                                        <ServiceMenuItem
                                            icon="assets/images/service/06.svg"
                                            title="Green-construction"
                                            description="  Green Building and energy
                                            efficient solutions, permanent
                                            prevention and treatment of damp
                                            prising and capillary rising,
                                            and smart building deploying
                                            reliable IoT technology."
                                            link="/green-construction"
                                        />
                                    </div>

                                    {/* Services Column 2 */}
                                    <div className="space-y-4">
                                        <ServiceMenuItem
                                            icon="assets/images/service/07.svg"
                                            title="Material Sourcing and Procurement Service"
                                            description="We provide best IT solutions for any type of business as strategy, management..."
                                            link="/hassle-free-procurement"
                                        />
                                        <ServiceMenuItem
                                            icon="assets/images/service/09.svg"
                                            title="Post-Construction"
                                            description="We provide best IT solutions for any type of business as strategy, management..."
                                            link="/post-construction"
                                        />


                                        <ServiceMenuItem
                                            icon="assets/images/service/contact.svg"
                                            title="Get Free Consultation"
                                            description="From preconstruction to virtual design and construction, we offer virtual design construction."
                                            link="/contact-us"
                                            isHighlighted={true}
                                        />
                                    </div>

                                    {/* Services Image Column */}
                                    <div className="flex items-center justify-center overflow-hidden rounded-md">
                                        <img
                                            src="assets/images/newimages/constructionhelmet.webp"
                                            alt="/construction Services"
                                            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="/contact-us" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
                        <a href="/our-products" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Products</a>
                                                <a href="/products-detail" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Product Query</a>

                    </nav>

                    {/* Header Actions */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleSearch}
                            className="text-gray-600 hover:text-blue-600 p-2 transition-colors"
                            aria-label="Search"
                        >
                            <FaSearch className="text-lg" />
                        </button>

                        <a
                            href="contact-us"
                            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00a3A1] hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                        >
                            Get a Quote
                            <FaLongArrowAltRight className="ml-1 text-xs" />
                        </a>

                        <button
                            onClick={toggleMenu}
                            className="md:hidden bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors"
                            aria-label="Menu"
                        >
                            <GiHamburgerMenu className="h-5 w-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg fixed inset-0 w-full h-screen z-50 overflow-y-auto pt-4">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-6">
                            <a href="/" className="flex items-center">
                                <img
                                    src="../assets/images/logo/01.svg"
                                    alt="OMANYE Logo"
                                    className="h-10 w-auto"
                                />
                            </a>
                            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 p-2">
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        <div className="space-y-3 pb-8">
                            <div className="border-b border-gray-200 pb-2">
                                <button
                                    onClick={toggleMobileServices}
                                    className="flex items-center justify-between w-full text-gray-800 font-medium py-2"
                                >
                                    <span>Services</span>
                                    <FaChevronDown className={`text-xs transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {mobileServicesOpen && (
                                    <div className="pl-4 mt-2 space-y-3">
                                        <MobileServiceItem
                                            title="Building Materials Solutions"
                                            link="/bmc-services"
                                        />
                                        <MobileServiceItem
                                            title="Construction Services"
                                            link="/construction-services"
                                        />
                                        <MobileServiceItem
                                            title="Turnkey Projects"
                                            link="/turnkey-projects"
                                        />
                                        <MobileServiceItem
                                            title="Material Sourcing"
                                            link="/hassle-free-procurement"
                                        />
                                        <MobileServiceItem
                                            title="Post-Construction"
                                            link="/post-construction"
                                        />
                                    </div>
                                )}
                            </div>

                            <a href="contact-us" className="block text-gray-800 hover:text-blue-600 font-medium py-3 border-b border-gray-200">Contact</a>
                            <a href="our-products" className="block text-gray-800 hover:text-blue-600 font-medium py-3 border-b border-gray-200">Products</a>

                            <a
                                href="contact-us"
                                className="block w-full text-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mt-4 transition-colors"
                            >
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center pt-20 md:pt-32 px-4">
                    <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-xl animate-fadeIn">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-800">What are you looking for?</h3>
                            <button
                                onClick={toggleSearch}
                                className="text-gray-500 hover:text-gray-700 p-1 transition-colors"
                                aria-label="Close search"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for services, products..."
                                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                autoFocus
                            />
                            <button className="absolute right-4 top-3 text-gray-500 hover:text-blue-600 transition-colors">
                                <FaSearch className="text-lg" />
                            </button>
                        </div>
                        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                            <p>Popular searches: <a href="/bmc-services" className="text-blue-600 hover:underline ml-2">Construction materials</a>, <a href="/turnkey-projects" className="text-blue-600 hover:underline">Turnkey projects</a></p>
                          
                          <Link to="/contact-us">
                          <button type='button' className='bg-[#00A3A1] rounded-md text-[#fff] px-2 py-1'>Drop Query</button>
                          </Link> 
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

// Service Menu Item Component
const ServiceMenuItem = ({ icon, title, description, link, isHighlighted = false }) => {
    return (
        <a
            href={link}
            className={`group flex items-start p-3 rounded-md transition-all ${isHighlighted ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'} hover:shadow-sm`}
        >
            <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-3 ${isHighlighted ? 'bg-blue-200' : 'bg-blue-100'}`}>
                <img src={icon} alt={title} className="h-5 w-5" />
            </div>
            <div>
                <h4 className={`text-sm font-medium ${isHighlighted ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'}`}>
                    {title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{description}</p>
            </div>
        </a>
    );
};

// Mobile Service Item Component
const MobileServiceItem = ({ title, link }) => {
    return (
        <a
            href={link}
            className="block py-2 px-3 -mx-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
        >
            {title}
        </a>
    );
};

export default Header;