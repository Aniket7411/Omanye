import React, { useState } from 'react';
import { FaBuilding, FaHardHat, FaTools, FaLeaf, FaTruck, FaHome, FaPhoneAlt, FaEnvelope, FaTimes } from 'react-icons/fa';
import { GiBrickWall, GiHouse, GiElectricalResistance } from 'react-icons/gi';
import { MdConstruction, MdArchitecture } from 'react-icons/md';
import { RiBuilding2Line } from 'react-icons/ri';

const ServicesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'homeowner',
        projectType: 'residential',
        message: ''
    });

    const services = [
        {
            icon: <FaBuilding className="text-4xl text-blue-600" />,
            title: "Building Materials Solutions",
            description: "Premium quality construction materials including cement, steel, bricks, and aggregates with guaranteed durability and performance.",
            features: [
                "Wide range of construction materials",
                "Quality assurance",
                "Competitive pricing",
                "Timely delivery"
            ]
        },
        {
            icon: <MdConstruction className="text-4xl text-orange-500" />,
            title: "Construction Services",
            description: "Complete construction solutions from foundation to finishing with expert project management.",
            features: [
                "Project planning & management",
                "Skilled workforce",
                "Quality control",
                "On-time completion"
            ]
        },
        {
            icon: <GiHouse className="text-4xl text-green-600" />,
            title: "Turnkey Projects",
            description: "End-to-end construction solutions where we handle everything from design to final handover.",
            features: [
                "Single point responsibility",
                "Cost certainty",
                "Reduced risk",
                "Streamlined communication"
            ]
        },
        {
            icon: <FaLeaf className="text-4xl text-emerald-500" />,
            title: "Green Building Solutions",
            description: "Sustainable construction with energy-efficient materials and eco-friendly practices.",
            features: [
                "Energy efficient solutions",
                "Damp proofing treatments",
                "Smart building technology",
                "LEED certification support"
            ]
        },
        {
            icon: <GiElectricalResistance className="text-4xl text-yellow-500" />,
            title: "MEP Services",
            description: "Comprehensive Mechanical, Electrical, and Plumbing services for seamless building operations.",
            features: [
                "HVAC systems",
                "Electrical wiring",
                "Plumbing solutions",
                "Fire protection"
            ]
        },
        {
            icon: <FaTruck className="text-4xl text-gray-600" />,
            title: "Equipment Rental",
            description: "Modern construction equipment available for rent with operator and maintenance support.",
            features: [
                "Excavators & bulldozers",
                "Concrete mixers",
                "Scaffolding",
                "Daily/weekly rates"
            ]
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will contact you shortly.');
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-blue-900 text-white py-10">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Construction Services</h1>
                    <p className="text-xl md:text-2xl mb-4">Comprehensive solutions for residential, commercial, and industrial projects</p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
                    >
                        Get a Free Consultation
                    </button>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        From groundbreaking to ribbon-cutting, we provide complete construction solutions with quality materials, skilled labor, and professional project management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                        >
                            <div className="p-6">
                                <div className="flex justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                                >
                                    Inquire About This Service
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Company</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <FaHardHat className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Experienced Professionals</h3>
                            <p className="text-gray-600">Our team brings decades of combined experience in construction and project management.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <GiBrickWall className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
                            <p className="text-gray-600">We source only the highest quality materials from trusted suppliers.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <RiBuilding2Line className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
                            <p className="text-gray-600">We complete projects on schedule with minimal disruption to your operations.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">Construction Consultation</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <FaTimes className="text-xl" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">You Are</label>
                                        <select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="homeowner">Homeowner</option>
                                            <option value="architect">Architect</option>
                                            <option value="designer">Interior Designer</option>
                                            <option value="contractor">Contractor</option>
                                            <option value="developer">Real Estate Developer</option>
                                            <option value="other">Other Professional</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">Project Type</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="residential">Residential</option>
                                            <option value="commercial">Commercial</option>
                                            <option value="industrial">Industrial</option>
                                            <option value="renovation">Renovation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-1">How Can We Help?</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="4"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Tell us about your project, materials needed, or any specific requirements..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h4 className="text-lg font-semibold mb-2">Prefer to talk directly?</h4>
                                <div className="flex items-center mb-2">
                                    <FaPhoneAlt className="text-blue-600 mr-2" />
                                    <a href="tel:+971503118846" className="text-gray-700 hover:text-blue-600">+971 50 311 8846</a>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-blue-600 mr-2" />
                                    <a href="mailto:gbd.omanyefz@gmail.com" className="text-gray-700 hover:text-blue-600">gbd.omanyefz@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesPage;