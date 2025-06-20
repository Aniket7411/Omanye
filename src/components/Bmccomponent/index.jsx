import React, { useState } from 'react';
import { FaTimes, FaCheck, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaSearch } from 'react-icons/fa';

const BMCServicePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const services = [
    {
      id: 1,
      title: "Comprehensive Material Solutions",
      description: "At Omanye, we deliver end-to-end construction material solutions tailored to your project's needs. Whether residential or commercial, our sourcing and planning process ensures unmatched quality, reliability, and on-time delivery—ensuring your project stands tall for years to come.",
      image: "Rectangle 620.svg",
      gradient: "linear-gradient(to right, #f9f9f9, white)"
    },
    {
      id: 2,
      title: "Premium Quality Materials",
      description: "We partner with industry-leading suppliers to source high-grade cement, steel, concrete, and more. Our stringent quality checks ensure every product meets top industry standards—translating to durable, high-performance structures that stand the test of time.",
      image: "two.jpg",
      gradient: "linear-gradient(to left, #f9f9f9, white)",
      reverse: true
    },
    {
      id: 3,
      title: "Sustainable & Eco-Friendly Options",
      description: "We believe in building a sustainable tomorrow. Choose from our range of eco-friendly materials including fly ash bricks, recycled aggregates, and low-carbon concrete—designed to minimize environmental impact while maintaining top-tier performance.",
      image: "three.jpg",
      gradient: "linear-gradient(to right, #f9f9f9, white)"
    },
    {
      id: 4,
      title: "Customized Material Planning",
      description: "No two projects are the same. That's why we offer tailored material planning based on your specific requirements. Our team collaborates with stakeholders to craft efficient supply plans—reducing costs, minimizing waste, and ensuring smooth workflows.",
      image: "fourth.jpg",
      gradient: "linear-gradient(to left, #f9f9f9, white)",
      reverse: true
    },
    {
      id: 5,
      title: "End-to-End Delivery & Support",
      description: "We offer complete logistical support—from procurement to on-site delivery. Our experienced operations team ensures fast, safe, and reliable transport of materials. With Omanye, your project runs efficiently with dependable support at every stage.",
      image: "Rectangle 620 (2).svg",
      gradient: "linear-gradient(to right, #f9f9f9, white)"
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
              Building and Construction Materials Solutions
            </h1>
            {/* <div className="breadcrumb text-gray-600">
              <a href="#" className="hover:text-blue-600">home</a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <img src="assets/images/service/Rectangle 13.svg" alt="service" className="w-full rounded-lg shadow-md" />
          </div>
          
          <div className="service-details">
            <h2 className="text-3xl font-bold mb-6">Description Of The Service</h2>
            <p className="text-gray-700 mb-8 text-lg">
              We prescribe, and supply building and construction materials for all phases and application
              in the built environment. Our comprises materials from conception to furnishing, working
              closely with architects, consultants, owners, investors, designers all the key stakeholders
              and professionals involved in conceiving, designing and execution of projects. No project is
              too big or small for us. every project is unique for us and give it the required attention.
              We supply materials for projects and local distributors.
              Check our <a href="product-list.html" className="text-blue-600 hover:underline">product list</a> for your most
              trusted materials and solutions.
            </p>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`py-3 px-6 font-medium ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  What's Included
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`py-3 px-6 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  No Compromises on Quality
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`py-3 px-6 font-medium ${activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Customized Solutions
                </button>
              </div>

              <div className="py-6">
                {activeTab === 'home' && (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Product and Project Development:</strong> Our team of architects and
                        designers collaborate with you to conceptualize a layout that suits your
                        preferences, lifestyle, and budget. From layout to finishing touches, every detail is
                        customized.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Material Prescription:</strong> We prioritize quality in
                        every aspect of your home. With carefully sourced materials and skilled
                        professionals, we ensure that each element, from foundation to
                        finishing, meets our high standards.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Project Management:</strong> We take the stress out of building
                        with a dedicated project manager, providing regular updates and
                        transparent timelines so you're informed at every stage.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Quality Assurance:</strong> Our rigorous quality control processes ensure that every material meets international standards and specifications.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Certified Suppliers:</strong> We work only with certified and reputable suppliers who share our commitment to excellence.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Testing & Validation:</strong> All materials undergo thorough testing in accredited laboratories before delivery.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Tailored Solutions:</strong> We analyze your specific project requirements to provide the most suitable material recommendations.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Technical Support:</strong> Our team of experts provides ongoing technical support throughout your project lifecycle.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-lg">Flexible Delivery:</strong> We adapt our delivery schedules to match your construction timeline and workflow.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
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

      {/* Why Choose Us */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="relative rounded-lg overflow-hidden">
                <img src="assets/images/service/01.webp" alt="journey-area" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-blue-700 transition">
                    <span className="sr-only">Play Video</span>
                    <span className="block w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <span className="text-blue-600 font-medium mb-2 block">How We Works</span>
                <h2 className="text-3xl font-bold">
                  How To Work With OMANYE <br />
                  Construction Builder
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-6 relative">
                    <img src="assets/images/service/07.svg" alt="service" className="h-12" />
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-2">Consultation & Planning</h5>
                    <p className="text-gray-600">We begin with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-6 relative">
                    <img src="assets/images/service/08.svg" alt="service" className="h-12" />
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-2">Design & Pre-Construction</h5>
                    <p className="text-gray-600">We begin with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-6 relative">
                    <img src="assets/images/service/09.svg" alt="service" className="h-12" />
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-2">Construction & Delivery</h5>
                    <p className="text-gray-600">We begin with a thorough consultation to understand your vision, budget, and project goals. Our team works with you to develop a tailored plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-16 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
              style={{ background: service.gradient }}
            >
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
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
          ))}
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
                <li><a href="#service" className="text-gray-400 hover:text-white">Building Materials</a></li>
                <li><a href="#service" className="text-gray-400 hover:text-white">Construction Service</a></li>
                <li><a href="#service" className="text-gray-400 hover:text-white">Turnkey Service</a></li>
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

export default BMCServicePage;