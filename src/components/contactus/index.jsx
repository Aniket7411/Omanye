import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Banner Section */}
        

            <div className="rts-banner-area relative bg-gray-900 py-16 md:py-20"
                style={{
                    backgroundImage: "url('assets/images/newimages/contactus.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "overlay"
                }}>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Contact <span className="text-[#00A3A1]">Us</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-6">
                            Streamlined construction sourcing to delivery
                        </p>
                        <Link to="/contact-us">
                            <button className="px-6 py-2 bg-[#00A3A1] hover:bg-teal-600 text-white font-medium rounded-md transition duration-300">
                                Request Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Contact Content Section */}
            <div className="rts-contact-area-page py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Left Side - Contact Info */}
                        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                            <div className="contact-main-wrapper-left">
                                <span className="text-[#00A3A1] font-semibold block mb-4">Get In Touch</span>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    We are always ready to help you <br />
                                    and answer your questions
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Our team is available to assist you with any inquiries about our construction services,
                                    materials, or project consultations.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Call Center */}
                                    <div className="quick-contact-page-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="icon mb-4">
                                            <img
                                                src="assets/images/contact/01.svg"
                                                alt="Phone Icon"
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <h5 className="text-xl font-bold mb-2">Call Center</h5>
                                        <p className="text-gray-600">
                                            <a href="tel:+971503118846" className="hover:text-blue-600">+971 50 311 8846</a>
                                            <br />
                                            <a href="tel:+971503118846" className="hover:text-blue-600">+971 50 311 8846</a>
                                        </p>
                                    </div>

                                    {/* Our Office */}
                                    <div className="quick-contact-page-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="icon mb-4">
                                            <img
                                                src="assets/images/contact/02.svg"
                                                alt="Location Icon"
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <h5 className="text-xl font-bold mb-2">Our Office</h5>
                                        <p className="text-gray-600">
                                            FOB 51927 Compass Building,<br />
                                            Al Shohoda Road,<br />
                                            Al Hamra Industrial Zone
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="lg:w-1/2">
                            <div className="contact-form-area-wrapper bg-white p-8 rounded-xl shadow-lg">
                                <h4 className="text-2xl font-bold mb-6">Let's Get in Touch / Share Requiements </h4>
                                <form id="contact-form" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="single">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="single">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="single">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="single">
                                        <textarea
                                            name="message"
                                            placeholder="Type Your Message"
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="rts-btn btn-primary w-full md:w-auto px-8 py-3 bg-[#00a3A1] hover:bg-[#0a8f8d] text-white font-bold rounded-lg transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section (Optional) */}
            <div className="container mx-auto px-4 py-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Our Location</h3>
                    <div className="aspect-w-16 aspect-h-9">
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.904071149987!2d55.27041531536492!3d25.23912598387338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzIwLjkiTiA1NcKwMTYnMTkuNiJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1890042548685!2d55.78368562370279!3d25.665028662596168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60bee567a253b%3A0x80fd444807765d7!2sRAKEZ%20Compass%20Coworking%20Centre!5e0!3m2!1sen!2sin!4v1750503855124!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;