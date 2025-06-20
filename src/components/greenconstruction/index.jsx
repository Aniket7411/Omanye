import React from 'react';

const GreenBuilding = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Banner Section */}
            <div className="rts-banner-area rts-section-gap rts-breadcrumb-area relative bg-blue-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="breadcrumb-area-inner text-center">
                        <span className="water-text text-4xl font-bold opacity-10 block mb-4">Details</span>
                        <h1 className="title text-4xl md:text-5xl font-bold mb-6">
                            Green Building & SPECIAL INNOVATIVE SOLUTIONS
                        </h1>
                        <div className="nav-area-navigation text-lg">
                            <a href="#" className="text-blue-600 hover:underline">home</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Details Section */}
            <div className="service-details-area py-16">
                <div className="container mx-auto px-4">
                    <div className="service-details-main-wrapper-thumbnail mb-12">
                        <img
                            src="assets/images/banner/02.webp"
                            alt="service"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="service-details-inner-area-wrapper bg-white p-6 md:p-8 rounded-lg shadow-md">
                        {/* Green Building Section */}
                        <div className="mb-16">
                            <h4 className="title text-2xl md:text-3xl font-bold mb-6 text-teal-600">
                                Green Building & Energy Efficient Solutions
                            </h4>

                            {/* Eco-Sustainability */}
                            <div className="service-container flex flex-col md:flex-row items-center my-12 p-6 md:p-8 bg-gradient-to-l from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                                    <img
                                        src="assets/images/service/eco.jpg"
                                        alt="Eco-Sustainability"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Eco-Sustainability
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        We focus on building practices that reduce the environmental impact and support
                                        long-term sustainability through efficient resource management and eco-friendly
                                        materials.
                                    </p>
                                </div>
                            </div>

                            {/* Damp Proofing and Water Treatment */}
                            <div className="service-container flex flex-col md:flex-row-reverse items-center my-12 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:ml-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                                    <img
                                        src="assets/images/service/damp-proofing.jpg"
                                        alt="Damp Proofing"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Damp Proofing and Water Treatment
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Our services include solutions for rising damp, water seepage prevention, and water
                                        purification to enhance structural durability and protect interiors from moisture damage.
                                    </p>
                                </div>
                            </div>

                            {/* Thermal and UV Insulations */}
                            <div className="service-container flex flex-col md:flex-row items-center my-12 p-6 md:p-8 bg-gradient-to-l from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                                    <img
                                        src="assets/images/service/thermal.jpg"
                                        alt="Thermal Insulation"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Thermal and UV Insulations
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Improve energy efficiency with advanced insulation systems that guard against heat
                                        and harmful UV rays, ensuring comfort and reduced utility costs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Smart Building Section */}
                        <div className="mb-16">
                            <h2 className="title text-2xl md:text-3xl font-bold mb-6 text-teal-600">
                                Smart Building IoT & Technology
                            </h2>

                            {/* Smart Building */}
                            <div className="service-container flex flex-col md:flex-row-reverse items-center my-12 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:ml-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                                    <img
                                        src="assets/images/service/smart building.jpg"
                                        alt="Smart Building"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Smart Building
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Integrate intelligent systems such as home automation, industrial controls, and
                                        real-time monitoring for convenience, efficiency, and safety.
                                    </p>
                                </div>
                            </div>

                            {/* Security and Surveillance */}
                            <div className="service-container flex flex-col md:flex-row items-center my-12 p-6 md:p-8 bg-gradient-to-l from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                                    <img
                                        src="assets/images/service/security.jpg"
                                        alt="Security and Surveillance"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Security and Surveillance
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Enhance property security with modern surveillance technologies, including smart
                                        detection systems, CCTV, and remote monitoring features.
                                    </p>
                                </div>
                            </div>

                            {/* Technology Integration */}
                            <div className="service-container flex flex-col md:flex-row-reverse items-center my-12 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:ml-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                                    <img
                                        src="assets/images/service/4668.jpg"
                                        alt="Technology Integration"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Technology Integration
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        We provide installation and support for IoT-enabled devices, IT infrastructure, and
                                        digital tools to future-proof your residential or commercial building.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs Section */}
                        <div className="service-main-wrapper-tabs mb-12">
                            <ul className="nav nav-tabs flex border-b border-gray-200" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active px-4 py-2 border-b-2 border-blue-500 font-medium text-blue-600"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home"
                                        type="button"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        Green Building
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content py-6" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="inner-wrapper-tab-service-wrapper space-y-6">
                                        <div className="single flex items-start">
                                            <div className="icon mr-4 mt-1 text-green-500">
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Eco-sustainability</h3>
                                                <p className="text-gray-600">
                                                    Eco-sustainability integrates renewable energy sources, efficient
                                                    water management, and sustainable materials to create buildings that
                                                    minimize environmental impact. By utilizing solar panels, rainwater
                                                    harvesting systems, and smart energy management, green buildings
                                                    significantly reduce energy consumption and promote a healthier
                                                    indoor environment.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="single flex items-start">
                                            <div className="icon mr-4 mt-1 text-green-500">
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Thermal & UV insulation</h3>
                                                <p className="text-gray-600">
                                                    Proper insulation plays a crucial role in energy efficiency and
                                                    indoor comfort. Thermal insulation reduces heat transfer,
                                                    maintaining optimal indoor temperatures year-round. Additionally,
                                                    UV-resistant coatings and films protect interiors from harmful sun
                                                    exposure, enhancing durability while lowering energy costs for
                                                    cooling.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="single flex items-start">
                                            <div className="icon mr-4 mt-1 text-green-500">
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Damp Proofing and Water Treatment</h3>
                                                <p className="text-gray-600">
                                                    Moisture and water damage can weaken structures and lead to health
                                                    hazards like mold growth. Effective damp proofing solutions include:
                                                    <br /><br />
                                                    <b>Damp Rising Prevention:</b> Specialized barriers and treatments prevent
                                                    water from seeping through walls and foundations.
                                                    <br /><br />
                                                    <b>Prevention and Treatment:</b> Advanced coatings and sealants stop
                                                    moisture penetration, extending the life of buildings.
                                                    <br /><br />
                                                    <b>Water Treatment:</b> Filtration and purification systems improve water
                                                    quality, ensuring safe consumption and environmental compliance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="rts-call-to-action py-16 bg-[#00A3A1] text-white">
                <div className="container mx-auto px-4">
                    <div className="call-to-action-area-service text-center p-8 md:p-12 rounded-xl">
                        <div className="inner max-w-3xl mx-auto">
                            <h3 className="title text-2xl md:text-3xl font-bold mb-4">Ready to work together</h3>
                            <p className="disc text-lg mb-8">
                                Whether you have a project in mind and you're looking for a reliable construction
                                partner or you're looking to take the next step in your career, we want to hear from
                                you!
                            </p>
                            <a
                                href="#"
                                className="rts-btn btn-primary inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                            >
                                Make An Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreenBuilding;