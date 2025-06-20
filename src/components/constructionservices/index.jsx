import React, { useState } from 'react';
import { FaTimes, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const ConstructionServicePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const services = [
        {
            id: 1,
            title: "Complete Product & Project Management",
            description: "Omanye provides comprehensive product and project management solutions tailored for construction projects of all scales. Our expert team guides your project from conception to completion, ensuring seamless execution while maintaining budget discipline. Through advanced planning tools and real-time progress tracking, we minimize risks and maximize efficiency. Our collaborative approach keeps all stakeholders aligned, delivering projects that exceed expectations while adhering to the highest industry standards.",
            image: "cppm.jpg",
            reverse: false
        },
        {
            id: 2,
            title: "Material Prescription & Quality Assurance",
            description: "Our material experts analyze your project requirements to recommend optimal construction materials that balance performance, sustainability, and cost-effectiveness. We implement rigorous quality control protocols, conducting thorough material testing and vetting suppliers to ensure compliance with international standards. From foundation to finishes, we guarantee materials that enhance structural integrity while meeting your aesthetic and functional objectives.",
            image: "mpqa.jpg",
            reverse: true
        },
        {
            id: 3,
            title: "Precision Installation Services",
            description: "Our certified installation teams bring unmatched precision to every construction phase. Specializing in structural frameworks, interior systems, and finishing work, we combine technical expertise with meticulous attention to detail. Using state-of-the-art tools and proven methodologies, we ensure perfect alignment, seamless integration, and flawless execution of all building components. Our quality assurance process guarantees installations that stand the test of time.",
            image: "EIS.jpg",
            reverse: false
        },
        {
            id: 4,
            title: "Residential Construction Excellence",
            description: "We transform residential visions into exceptional living spaces. Whether crafting custom homes or developing multi-unit residences, we blend innovative design with practical functionality. Our residential solutions incorporate energy-efficient features, smart home technology, and premium finishes. From groundbreaking to final walkthrough, we maintain transparent communication, ensuring your dream home becomes reality with zero compromises on quality or comfort.",
            image: "RCS.jpg",
            reverse: true
        },
        {
            id: 5,
            title: "Virtual Design & Construction (VDC)",
            description: "Revolutionize your construction process with our advanced VDC solutions. Through immersive 3D modeling and Building Information Modeling (BIM) technologies, we enable virtual walkthroughs, clash detection, and construction sequencing before physical work begins. Our digital twin approach reduces errors by 40%, optimizes resource allocation, and provides stakeholders with crystal-clear project visualization, resulting in smarter decisions and superior built outcomes.",
            image: "VDC.jpg",
            reverse: false
        }
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                    <FaTimes className="text-2xl" />
                </button>

                <div className="p-6 h-full flex flex-col">
                    <div className="mb-8">
                        <div className="thumbnail mb-4">
                            <img src="assets/images/banner/04.jpg" alt="elevate" className="w-full h-48 object-cover rounded" />
                        </div>
                        <div className="content">
                            <h4 className="text-xl font-bold mb-2">We Build Building and Great Constructive Homes.</h4>
                            <p className="text-gray-600 mb-4">
                                We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly
                                master new technologies.
                            </p>
                            <div className="footer mt-6">
                                <h4 className="text-lg font-semibold mb-2">Got a project in mind?</h4>
                                <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Let's talk</a>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-menu mt-auto">
                        <nav className="mb-8">
                            <ul className="space-y-4">
                                <li><a href="#" className="block hover:text-blue-600">Home</a></li>
                                <li><a href="#about" className="block hover:text-blue-600">About</a></li>
                                <li><a href="#service" className="block hover:text-blue-600">Services</a></li>
                                <li><a href="#project" className="block hover:text-blue-600">Projects</a></li>
                                <li><a href="#team" className="block hover:text-blue-600">Team</a></li>
                                <li><a href="#blog" className="block hover:text-blue-600">Blog</a></li>
                                <li><a href="#footer" className="block hover:text-blue-600">Contact Us</a></li>
                            </ul>
                        </nav>

                        <div className="social-wrapper">
                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-gray-600 hover:text-blue-600"><FaFacebookF /></a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600"><FaTwitter /></a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600"><FaYoutube /></a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-600"><FaLinkedinIn /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="rts-banner-area bg-gray-100 py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center relative z-10">
                        {/* <span className="text-blue-600 text-lg font-medium mb-2 block">Details</span> */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Construction Services
                        </h1>
                        {/* <div className="breadcrumb text-gray-600">
                            <a href="#" className="hover:text-blue-600">home</a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Main Image */}
            <div className="py-8">
                <div className="container mx-auto px-4">
                    <img src="assets/images/service/17.webp" alt="Construction Services" className="w-full rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Service Features */}
            <div className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    {services.map((service) => (
                        <div key={service.id} className="py-8">
                            <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center bg-gradient-to-r ${service.reverse ? 'from-gray-50 to-white' : 'from-white to-gray-50'} rounded-xl shadow-sm hover:shadow-md transition-shadow p-8`}>
                                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:px-8">
                                    <div className="overflow-hidden rounded-lg shadow-md">
                                        <img
                                            src={`assets/images/service/${service.image}`}
                                            alt={service.title}
                                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800 relative pb-2">
                                        <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 text-lg">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-4">Ready to work together</h3>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Whether you have a project in mind and you're looking for a reliable construction
                        partner or you're looking to take the next step in your career, we want to hear from
                        you!
                    </p>
                    <a href="#" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                        Make An Appointment
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-12 bg-gray-900 text-white" id="footer">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/4 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">About Us</h3>
                            <p className="text-gray-400 mb-4">
                                We are dedicated to building structures that last and relationships that endure, with a focus on quality, precision, and innovation.
                            </p>
                            <div className="social flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                            </div>
                        </div>

                        <div className="w-full md:w-1/4 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#service" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#project" className="text-gray-400 hover:text-white">Projects</a></li>
                                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#service" className="text-gray-400 hover:text-white">Construction Services</a></li>
                                <li><a href="#service" className="text-gray-400 hover:text-white">Turnkey Projects</a></li>
                                <li><a href="#service" className="text-gray-400 hover:text-white">Material Sourcing</a></li>
                                <li><a href="#service" className="text-gray-400 hover:text-white">Post Construction</a></li>
                                <li><a href="#service" className="text-gray-400 hover:text-white">Global Business</a></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <address className="text-gray-400 not-italic">
                                <p className="mb-2">123 Construction Street</p>
                                <p className="mb-2">Building City, BC 12345</p>
                                <p className="mb-2">Phone: (123) 456-7890</p>
                                <p className="mb-2">Email: info@omanye.com</p>
                            </address>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} OMANYE FZ -LLC. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg lg:hidden"
            >
                <span className="sr-only">Open Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    );
};

export default ConstructionServicePage;