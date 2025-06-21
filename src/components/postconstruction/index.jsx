import React from 'react';

const PostConstruction = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Banner Section */}
      <div className="rts-banner-area rts-section-gap rts-breadcrumb-area offers relative">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-lg-12 w-full">
              <div className="breadcrumb-area-inner text-center py-20">
                {/* <span className="water-text text-4xl font-bold opacity-10 block mb-4">Details</span> */}
                <h1 className="title text-4xl md:text-5xl font-bold mb-6">
                  Post Construction Services
                </h1>
                {/* <div className="nav-area-navigation text-lg">
                  <a href="#" className="text-blue-600 hover:underline">home</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="service-details-area py-16">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-lg-12 w-full">
              <div className="service-details-inner-area-wrapper bg-white p-5 rounded-lg shadow-md">
                {/* Service 1: Final Inspection and Handover */}
                <div className="service-container flex flex-col md:flex-row items-center my-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                  <div className="service-image mb-8 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                    <img 
                      src="assets/images/service/FIH.jpg" 
                      alt="Final Inspection Process"
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                  <div className="service-text">
                    <h4 className="title text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                      <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
                      Final Inspection & Project Handover
                    </h4>
                    <p className="disc text-base leading-relaxed text-gray-700">
                      Our comprehensive handover process includes a detailed walkthrough with clients
                      to verify all work meets exacting quality standards. We document every detail in
                      a digital punch list, resolving all snag items before final acceptance. Using
                      advanced inspection tools, we ensure 100% compliance with specifications,
                      delivering buildings that exceed expectations. Clients receive a complete
                      quality certification with photographic evidence of all critical systems.
                    </p>
                  </div>
                </div>

                {/* Service 2: As-Built Documentation */}
                <div className="service-container-two flex flex-col md:flex-row items-center my-16 p-8 bg-gradient-to-l from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                  <div className="service-text-two order-2 md:order-1 md:mr-8">
                    <h4 className="title text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                      <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
                      Comprehensive As-Built Documentation
                    </h4>
                    <p className="disc text-base leading-relaxed text-gray-700">
                      We deliver a complete digital twin package including BIM models, annotated
                      drawings, equipment manuals, and maintenance schedules. Our cloud-based
                      documentation system provides lifetime access to all construction records, with
                      QR code tagging for instant equipment identification. This living documentation
                      evolves with your facility, simplifying future renovations and ensuring optimal
                      system performance throughout the building lifecycle.
                    </p>
                  </div>
                  <div className="service-image-two order-1 md:order-2 mb-8 md:mb-0 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                    <img 
                      src="assets/images/service/TDB.jpg" 
                      alt="As-Built Documentation"
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                </div>

                {/* Service 3: Commissioning and Testing */}
                <div className="service-container flex flex-col md:flex-row items-center my-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                  <div className="service-image mb-8 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                    <img 
                      src="assets/images/service/CTS.jpg" 
                      alt="System Commissioning"
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                  <div className="service-text">
                    <h4 className="title text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                      <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
                      Integrated Systems Commissioning
                    </h4>
                    <p className="disc text-base leading-relaxed text-gray-700">
                      Our certified commissioning agents perform 200+ point checks on all mechanical,
                      electrical, and life safety systems. Using calibrated testing equipment, we
                      validate performance against design specifications, ensuring 100% operational
                      readiness. The process includes energy efficiency verification, load testing,
                      and fail-safe simulations, with all results documented in our proprietary
                      Building Performance Dashboard for ongoing monitoring.
                    </p>
                  </div>
                </div>

                {/* Service 4: Client Training */}
                <div className="service-container-two flex flex-col md:flex-row items-center my-16 p-8 bg-gradient-to-l from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                  <div className="service-text-two order-2 md:order-1 md:mr-8">
                    <h4 className="title text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                      <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
                      Comprehensive Facility Training
                    </h4>
                    <p className="disc text-base leading-relaxed text-gray-700">
                      We provide customized training programs for facility teams, including hands-on
                      equipment demonstrations, digital O&M manuals, and emergency procedure
                      walkthroughs. Our training includes augmented reality guides for complex
                      systems, video tutorials for routine maintenance, and annual refresher courses.
                      Each participant receives certification upon completion, ensuring your team
                      maintains peak building performance long after handover.
                    </p>
                  </div>
                  <div className="service-image-two order-1 md:order-2 mb-8 md:mb-0 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                    <img 
                      src="assets/images/service/COT.jpg" 
                      alt="Client Training Session"
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                </div>

                {/* Service 5: Warranty Support */}
                <div className="service-container flex flex-col md:flex-row items-center my-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                  <div className="service-image mb-8 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                    <img 
                      src="assets/images/service/DLWS.jpg" 
                      alt="Warranty Support"
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                  <div className="service-text">
                    <h4 className="title text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                      <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
                      Extended Warranty Protection
                    </h4>
                    <p className="disc text-base leading-relaxed text-gray-700">
                      Our industry-leading warranty program includes 24/7 support with guaranteed
                      48-hour response times for critical issues. Beyond standard defect liability
                      periods, we offer optional extended warranties covering structural, mechanical,
                      and envelope systems. All warranty claims are managed through our online portal
                      with real-time tracking, and supported by our network of certified trade
                      partners for prompt, quality repairs.
                    </p>
                  </div>
                </div>

                {/* Service 6: Site Cleanup */}
                <div className="service-container-two flex flex-col md:flex-row items-center my-16 p-8 bg-gradient-to-l from-gray-50 to-white rounded-xl shadow-lg transition-all duration-400 overflow-hidden hover:shadow-xl">
                  <div className="service-text-two order-2 md:order-1 md:mr-8">
                    <h4 className="title text-2xl font-bold mb-4 relative pb-3 text-blue-900">
                      <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
                      Turnkey Site Completion
                    </h4>
                    <p className="disc text-base leading-relaxed text-gray-700">
                      Our white-glove cleanup process transforms construction sites into pristine,
                      move-in ready spaces. We implement eco-friendly waste management, deep cleaning
                      of all surfaces, and final aesthetic touch-ups. The process includes air quality
                      testing, window detailing, and landscape restoration. Clients receive a
                      cleanliness certification confirming the space meets hospitality-grade standards
                      before occupancy.
                    </p>
                  </div>
                  <div className="service-image-two order-1 md:order-2 mb-8 md:mb-0 overflow-hidden rounded-lg shadow-md flex-shrink-0 w-full md:w-1/2">
                    <img 
                      src="assets/images/service/SCFT.jpg" 
                      alt="Site Cleanup Process"
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="service-details-main-wrapper-thumbnail my-12">
        <img src="assets/images/banner/14.webp" alt="service" className="w-full h-auto" />
      </div>

      <div className="service-details-inner-area-wrapper container mx-auto px-4">
        <div className="service-main-wrapper-tabs">
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
                What's Included:
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link px-4 py-2 border-b-2 border-transparent font-medium text-gray-500 hover:text-blue-600 hover:border-blue-500"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                No Compromises on Quality
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className="nav-link px-4 py-2 border-b-2 border-transparent font-medium text-gray-500 hover:text-blue-600 hover:border-blue-500"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Customized Solutions
              </button>
            </li>
          </ul>
          
          <div className="tab-content py-6" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="inner-wrapper-tab-service-wrapper">
                <div className="single flex items-start mb-6">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Product and Project Development:</b> Our team of architects and
                    designers collaborate with you to conceptualize a layout that suits your
                    preferences, lifestyle, and budget. From layout to finishing touches, every detail is
                    customized.
                  </div>
                </div>
                <div className="single flex items-start mb-6">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Material Prescription:</b> We prioritize quality in
                    every aspect of your home. With carefully sourced materials and skilled
                    professionals, we ensure that each element, from foundation to
                    finishing, meets our high standards.
                  </div>
                </div>
                <div className="single flex items-start mb-6">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Project Management:</b> We take the stress out of building
                    with a dedicated project manager, providing regular updates and
                    transparent timelines so you're informed at every stage.
                  </div>
                </div>
                <div className="single flex items-start">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Installation:</b> We take the stress out of building
                    with a dedicated project manager, providing regular updates and
                    transparent timelines so you're informed at every stage.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="inner-wrapper-tab-service-wrapper">
                <div className="single flex items-start mb-6">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Product and Project Development:</b> Our team of architects and
                    designers collaborate with you to conceptualize a layout that suits your
                    preferences, lifestyle, and budget. From layout to finishing touches, every detail is
                    customized.
                  </div>
                </div>
                <div className="single flex items-start mb-6">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Material Prescription:</b> We prioritize quality in
                    every aspect of your home. With carefully sourced materials and skilled
                    professionals, we ensure that each element, from foundation to
                    finishing, meets our high standards.
                  </div>
                </div>
                <div className="single flex items-start">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Project Management:</b> We take the stress out of building
                    with a dedicated project manager, providing regular updates and
                    transparent timelines so you're informed at every stage.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div className="inner-wrapper-tab-service-wrapper">
                <div className="single flex items-start mb-6">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Product and Project Development:</b> Our team of architects and
                    designers collaborate with you to conceptualize a layout that suits your
                    preferences, lifestyle, and budget. From layout to finishing touches, every detail is
                    customized.
                  </div>
                </div>
                <div className="single flex items-start mb-6">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Material Prescription:</b> We prioritize quality in
                    every aspect of your home. With carefully sourced materials and skilled
                    professionals, we ensure that each element, from foundation to
                    finishing, meets our high standards.
                  </div>
                </div>
                <div className="single flex items-start">
                  <div className="icon mr-4 mt-1 text-green-500">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="inner-content">
                    <b>Project Management:</b> We take the stress out of building
                    with a dedicated project manager, providing regular updates and
                    transparent timelines so you're informed at every stage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="rts-call-to-action py-16">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-lg-12 w-full">
              <div className="call-to-action-area-service bg-[#00A3A1] text-white p-12 rounded-xl text-center">
                <div className="inner">
                  <h3 className="title text-3xl font-bold mb-4">Ready to work together</h3>
                  <p className="disc text-lg mb-8 max-w-2xl mx-auto">
                    Whether you have a project in mind and you're looking for a reliable construction
                    partner or you're looking to take the next step in your career, we want to hear from
                    you!
                  </p>
                  <a href="#" className="rts-btn btn-primary inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    Make An Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="why-choose-us-area py-16">
        <div className="container mx-auto px-4">
          <div className="row flex flex-col md:flex-row items-center">
            <div className="col-xl-6 col-lg-12 pr-0 md:pr-16 mb-12 md:mb-0">
              <div className="reveal-item overflow-hidden relative">
                <div className="reveal-animation reveal-end reveal-primary absolute inset-0 bg-blue-500 opacity-20"></div>
                <img src="assets/images/service/01.webp" alt="journey-area" className="w-full rounded-lg shadow-xl" />
                <div className="vedio-icone absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button className="video-play-button w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <span className="w-0 h-0 border-t-8 border-r-0 border-b-8 border-l-12 border-t-transparent border-r-transparent border-b-transparent border-l-blue-500 ml-1"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 pt-0 md:pt-8">
              <div className="how-we-works-wrappers">
                <div className="title-wrapper-left mb-12">
                  <span className="pre text-blue-500 font-semibold block mb-2">How We Work</span>
                  <h2 className="title text-3xl md:text-4xl font-bold leading-tight">
                    How To Work With OMANYE <br />
                    Construction Builder
                  </h2>
                </div>
                
                <div className="single-choose-us-one flex mb-8">
                  <div className="icon relative mr-6 flex-shrink-0">
                    <img src="assets/images/service/07.svg" alt="service" className="w-12 h-12" />
                    <span className="absolute -top-3 -right-3 bg-gray-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  </div>
                  <div className="info-wrapper">
                    <h5 className="title text-xl font-bold mb-2">Consultation & Planning</h5>
                    <p className="disc text-gray-600">
                      We begin with a thorough consultation to understand your vision, budget,
                      and project goals. Our team works with you to develop a tailored plan
                    </p>
                  </div>
                </div>
                
                <div className="single-choose-us-one flex mb-8">
                  <div className="icon relative mr-6 flex-shrink-0">
                    <img src="assets/images/service/08.svg" alt="service" className="w-12 h-12" />
                    <span className="absolute -top-3 -right-3 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  </div>
                  <div className="info-wrapper">
                    <h5 className="title text-xl font-bold mb-2">Design & Pre-Construction</h5>
                    <p className="disc text-gray-600">
                      We begin with a thorough consultation to understand your vision, budget,
                      and project goals. Our team works with you to develop a tailored plan
                    </p>
                  </div>
                </div>
                
                <div className="single-choose-us-one flex">
                  <div className="icon relative mr-6 flex-shrink-0">
                    <img src="assets/images/service/09.svg" alt="service" className="w-12 h-12" />
                    <span className="absolute -top-3 -right-3 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  </div>
                  <div className="info-wrapper">
                    <h5 className="title text-xl font-bold mb-2">Construction & Delivery</h5>
                    <p className="disc text-gray-600">
                      We begin with a thorough consultation to understand your vision, budget,
                      and project goals. Our team works with you to develop a tailored plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostConstruction;