import React from 'react';

const ContactUs = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Banner Section */}
            <div className="rts-banner-area rts-section-gap rts-breadcrumb-area relative bg-blue-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="breadcrumb-area-inner text-center">
                        {/* <span className="water-text text-4xl font-bold opacity-10 block mb-4">Contact</span> */}
                        <h1 className="title text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                        {/* <div className="nav-area-navigation text-lg">
                            <a href="#" className="text-blue-600 hover:underline">home</a>
                            <span className="mx-2">/</span>
                            <a href="#" className="text-gray-600">Contact Us</a>
                        </div> */}
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
                                <span className="text-blue-600 font-semibold block mb-4">Get In Touch</span>
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
                                <h4 className="text-2xl font-bold mb-6">Let's Get in Touch</h4>
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
                                        className="rts-btn btn-primary w-full md:w-auto px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg transition duration-300"
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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.904071149987!2d55.27041531536492!3d25.23912598387338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzIwLjkiTiA1NcKwMTYnMTkuNiJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;