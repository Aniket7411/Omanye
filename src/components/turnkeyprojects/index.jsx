import React from 'react';

const TurnkeyProjects = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Banner Section */}
            <div className="rts-banner-area rts-section-gap rts-breadcrumb-area offers relative bg-blue-50 py-20"
                style={{
                    backgroundImage: "url('assets/images/newimages/turnkeyproject.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-70"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-r "></div> */}

                <div className="container mx-auto px-4 relative z-10">
                    <div className="breadcrumb-area-inner text-center max-w-4xl mx-auto">
                        <h1 className="title text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white">
                            Turnkey Projects
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100 mb-3">
                            Complete end-to-end construction solutions from design to delivery.
                            Our turnkey approach ensures seamless execution and quality results.
                        </p>




                    </div>
                </div>
            </div>

            {/* Service Details Section */}
            <div className="service-details-area py-6">
                <div className="container mx-auto px-4">
                    <div className="service-details-inner-area-wrapper bg-white p-5 md:p-1 rounded-lg shadow-md">
                        {/* Responsive Turnkey Construction Services */}
                        <div className="max-w-6xl mx-auto">
                            {/* Service 1 */}
                            <div className="service-container flex flex-col md:flex-row items-center my-12 md:my-16 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2 relative">
                                    <img
                                        src="assets/images/service/WATCP.jpg"
                                        alt="Turnkey Construction Process"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <span className="bg-blue-600 px-3 py-1 rounded-md font-bold text-sm text-white">
                                            End-to-End Solutions
                                        </span>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Complete Turnkey Construction Solutions
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Our turnkey construction services provide a seamless, stress-free building
                                        experience from concept to completion. We manage every detail - including
                                        design approvals, permitting, construction, and final inspections -
                                        delivering a fully functional space ready for immediate use.
                                    </p>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="service-container flex flex-col md:flex-row items-center my-4 md:my-8 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2 relative">
                                    <img
                                        src="assets/images/service/DEUOR.jpg"
                                        alt="Design to Execution Process"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <span className="bg-blue-600 px-3 py-1 rounded-md font-bold text-sm text-white">
                                            500+ Projects
                                        </span>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Integrated Design-Build Excellence
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Our in-house team of architects, engineers, and construction professionals
                                        collaborate from day one to deliver cohesive turnkey projects. This
                                        integrated approach eliminates communication gaps between designers and
                                        builders.
                                    </p>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="service-container flex flex-col md:flex-row items-center my-12 md:my-16 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2 relative">
                                    <img
                                        src="assets/images/service/DEUOR.jpg"
                                        alt="Design to Execution Process"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <span className="bg-blue-600 px-3 py-1 rounded-md font-bold text-sm text-white">
                                            500+ Projects
                                        </span>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Architects Engineering Contracts
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Our in-house team of architects, engineers, and construction professionals
                                        collaborate from day one to deliver cohesive turnkey projects. This
                                        integrated approach eliminates communication gaps between designers and
                                        builders.
                                    </p>
                                </div>
                            </div>

                            {/* Service 4 */}
                            <div className="service-container flex flex-col md:flex-row items-center my-12 md:my-16 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2 relative">
                                    <img
                                        src="assets/images/service/TCE.jpg"
                                        alt="Design to Execution Process"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <span className="bg-blue-600 px-3 py-1 rounded-md font-bold text-sm text-white">
                                            500+ Projects
                                        </span>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Optimized Project Delivery
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Our turnkey approach delivers projects 25% faster than traditional methods
                                        through advanced scheduling and bulk material procurement. Clients benefit
                                        from fixed-price contracts with 99% cost predictability.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <div className="flex-1 min-w-[120px] bg-blue-50 p-3 rounded-lg">
                                            <div className="text-lg font-bold text-blue-600 mb-1">25% Faster</div>
                                            <div className="text-xs text-gray-600">Time savings</div>
                                        </div>
                                        <div className="flex-1 min-w-[120px] bg-blue-50 p-3 rounded-lg">
                                            <div className="text-lg font-bold text-blue-600 mb-1">99% On Budget</div>
                                            <div className="text-xs text-gray-600">Cost predictability</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service 5 */}
                            <div className="service-container flex flex-col md:flex-row items-center my-12 md:my-16 p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                                <div className="service-image mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2 relative">
                                    <img
                                        src="assets/images/service/QAH.jpg"
                                        alt="Design to Execution Process"
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <span className="bg-blue-600 px-3 py-1 rounded-md font-bold text-sm text-white">
                                            500+ Projects
                                        </span>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h4 className="title text-xl md:text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                                        <span className="absolute bottom-0 left-0 w-12 md:w-16 h-1 bg-blue-500"></span>
                                        Certified Quality Handover
                                    </h4>
                                    <p className="disc text-base leading-relaxed text-gray-700">
                                        Every turnkey project undergoes our rigorous 300-point quality assurance
                                        program before handover. Clients receive comprehensive digital operations
                                        manuals and warranty documentation.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className="service-details-main-wrapper-thumbnail my-12">
                        <img
                            src="assets/images/banner/breadcrumb-10.webp"
                            alt="service"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            {/* Enhanced Call to Action Section */}
            <div className="rts-call-to-action py-8 bg-gradient-to-r from-[#005f5d] to-[#00827f] text-white">
                <div className="container mx-auto px-4">
                    <div className="call-to-action-area-service text-center p-6 md:p-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20">
                        <div className="inner max-w-3xl mx-auto">
                            <h3 className="title text-2xl md:text-4xl font-bold mb-6">
                                Let's Build Something Extraordinary Together
                            </h3>
                            <p className="disc text-lg md:text-xl mb-8 leading-relaxed">
                                From groundbreaking ideas to finished structures, we partner with you at every step.
                                Our team of certified professionals brings decades of combined experience to deliver
                                construction solutions that are innovative, durable, and tailored to your vision.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="contact-us"
                                    className="rts-btn btn-primary inline-block bg-white text-[#005f5d] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                                >
                                    Start Your Project
                                </a>
                              
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-10 pt-6 border-t border-white border-opacity-20">
                                <p className="text-sm md:text-base opacity-80 mb-4">
                                    Trusted by industry leaders and local businesses alike
                                </p>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurnkeyProjects;