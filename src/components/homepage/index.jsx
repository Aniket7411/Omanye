import React, { useState, useEffect } from 'react';
import { FaTimes, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaArrowRight, FaStar, FaLocationDot, FaSearch } from 'react-icons/fa';

const OmanyePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Auto-rotate banner slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bannerSlides = [
    {
      image: "assets/images/banner/mk.webp",
      title: "Build Your Dream Project with Us Today!",
      text: "We are dedicated to building structures that last and relationships that endure, With a focus on quality, precision, and innovation, we provide a full range of construction services."
    },
    {
      image: "assets/images/banner/12.webp",

      title: "Let Us Help You Build Extraordinary!",
      text: "We are dedicated to building structures that last and relationships that endure, With a focus on quality, precision, and innovation, we provide a full range of construction services."
    },
    {
      image: "assets/images/banner/01.webp",

      title: "Start Building Your Project Today!",
      text: "We are dedicated to building structures that last and relationships that endure, With a focus on quality, precision, and innovation, we provide a full range of construction services."
    }
  ];

  const funFacts = [
    { icon: "01", count: 1200, text: "Over 1,000 projects successfully delivered, from residential homes to large developments..." },
    { icon: "02", count: 85, text: "85% of clients return for future projects, demonstrating our commitment to quality..." },
    { icon: "03", count: 20, text: "Consistent 20% annual revenue growth over the past five years, reflecting our expanding..." }
  ];

  const services = [
    { id: 1, icon: "04", title: "Residential Construction", text: "The process of construction involves a diverse range of activities, combining skilled labor, advanced technology, and precise planning to bring projects to life." },
    { id: 2, icon: "05", title: "Interior Finishing", text: "The process of construction involves a diverse range of activities, combining skilled labor, advanced technology, and precise planning to bring projects to life." },
    { id: 3, icon: "06", title: "Project Management", text: "The process of construction involves a diverse range of activities, combining skilled labor, advanced technology, and precise planning to bring projects to life." },
    { id: 4, icon: "05", title: "Residential Construction", text: "The process of construction involves a diverse range of activities, combining skilled labor, advanced technology, and precise planning to bring projects to life." }
  ];

  const projects = [
    { id: 1, image: "02", title: "Azila Mansion", type: "Luxury Residences, Modern Homes", location: "Dubai Marina", price: "From $290k", client: "RC Builders", year: "15 Oct 2019", duration: "5Y, 3M" },
    { id: 2, image: "03", title: "Azila Mansion", type: "Luxury Residences, Modern Homes", location: "Dubai Marina", price: "From $290k", client: "RC Builders", year: "15 Oct 2019", duration: "5Y, 3M" },
    { id: 3, image: "04", title: "Azila Mansion", type: "Luxury Residences, Modern Homes", location: "Dubai Marina", price: "From $290k", client: "RC Builders", year: "15 Oct 2019", duration: "5Y, 3M" }
  ];

  const teamMembers = [
    { id: 1, image: "01", name: "Henry George", position: "Safety Officer", text: "Highly skilled and experienced construction expert, known for his deep expertise in managing large-scale construction projects" },
    { id: 2, image: "02", name: "Thomas Bryant", position: "Civil Engineer", text: "Highly skilled and experienced construction expert, known for his deep expertise in managing large-scale construction projects" },
    { id: 3, image: "03", name: "Benjamin Clarke", position: "Project Coordinator", text: "Highly skilled and experienced construction expert, known for his deep expertise in managing large-scale construction projects" }
  ];

  const testimonials = [
    { id: 1, image: "01", name: "Sophia Anne Harris", position: "Property Manager at Green Valley Realty", text: "From the initial consultation to the final walk-through, every step was handled with the utmost professionalism and care. Their team listened closely to our needs and created a plan that fit our vision perfectly, all while keeping us within budget and on schedule.", rating: 4.8 },
    { id: 2, image: "02", name: "Alena Joe Harris", position: "Property Manager at Green Valley Realty", text: "The team's commitment to quality and timely delivery was impressive. The end result exceeded our expectations and left our clients thrilled with their new space. Elever provided exceptional guidance and craftsmanship, creating a building we are proud to call ours.", rating: 4.8 }
  ];

  const blogs = [
    { id: 1, image: "01", title: "Modern Construction Techniques Materials Changing", text: "Construction industry undergone transformations in recent years. With advancements technology & the introduction of new materials", time: "2Years Ago", location: "Office" },
    { id: 2, image: "02", title: "Streamlining Projects for Faster Cost Effective Results", text: "Construction industry undergone transformations in recent years. With advancements technology & the introduction of new materials", time: "2Years Ago", location: "Office" },
    { id: 3, image: "03", title: "Modern Construction Techniques Materials Changing", text: "Construction industry undergone transformations in recent years. With advancements technology & the introduction of new materials", time: "2Years Ago", location: "Office" }
  ];

  const brands = ["01", "02", "03", "04", "05", "06"];

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

      {/* Banner Swiper */}
      <div className="relative h-screen">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center flex items-center transition-opacity duration-1000 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}          >
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <span className="text-blue-600 font-medium mb-2 block">Building the better future</span>
                <h1 className="text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-gray-200 mb-6">{slide.text}</p>
                <div className="button-wrapper">
                  <a href="/our-services" className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition">
                    Our Services <img src="assets/images/icons/arrow-up-right-1.svg" alt="arrow" className="ml-2 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>

\
      {/* Fun Facts */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="icon mb-4">
                    <img src={`assets/images/service/${fact.icon}.svg`} alt="service" className="h-12" />
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{fact.count}+</h2>
                  <p className="text-gray-600">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Company */}
      <div className="py-16 bg-gray-900 text-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <img src="assets/images/about/01.webp" alt="journey-area" className="w-full" />
                </div>
                <div className="flex mt-6">
                  <div className="bg-blue-600 p-6 rounded-lg mr-4 text-center">
                    <h2 className="text-3xl font-bold">500+</h2>
                    <span className="text-sm">Complete Projects</span>
                  </div>
                  <div className="bg-white text-gray-900 p-6 rounded-lg text-center">
                    <h2 className="text-3xl font-bold">48+</h2>
                    <span className="text-sm">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:pl-12">
              <span className="text-blue-400 font-medium mb-2 block">About our Company</span>
              <h2 className="text-4xl font-bold mb-6">Delivering our clients more project clarity, greater insight, and less chaos.</h2>
              <p className="text-gray-300 mb-4">
                Artificial Intelligence refers to the development of computer systems that can perform tasks
                that would typically require human intelligence. It involves the creation of algorithms and
                models that enable machines to learn, reason, perceive, and make decisions.
              </p>
              <p className="text-gray-300 mb-6">
                There are generally two types of AI: Narrow or Weak AI, which is designed to perform
                specific tasks, and General or Strong AI, which possesses human-level intelligence and
                can handle a wide range of tasks.
              </p>
              <a href="#about" className="inline-flex items-center border border-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                Explore More <img src="assets/images/arrow-up-right-2.svg" alt="service" className="ml-2 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-gray-900 py-4 overflow-hidden">
        <div className="marquee whitespace-nowrap">
          <span className="text-white text-xl font-bold mx-8">Premium Construction Theme&nbsp;</span>
          <span className="text-white text-xl font-bold mx-8">Premium Construction Theme&nbsp;</span>
          <span className="text-white text-xl font-bold mx-8">Premium Construction Theme&nbsp;</span>
          <span className="text-white text-xl font-bold mx-8">Premium Construction Theme&nbsp;</span>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-[#00A3A1] text-white" id="service">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-medium mb-2 block">What We Offer</span>
            <h2 className="text-4xl font-bold">Explore Our Services</h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4">
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-80 px-4">
                <div className="bg-gray-800 p-8 rounded-lg h-full">
                  <span className="text-gray-500 text-lg block mb-2">Service 0{service.id}</span>
                  <div className="icon mb-4">
                    <img src={`assets/images/service/${service.icon}.svg`} alt="service" className="h-12" />
                  </div>
                  <div className="inner">
                    <h5 className="text-xl font-bold mb-2">{service.title}</h5>
                    <p className="text-gray-400 mb-4">{service.text}</p>
                    <a href="#service" className="text-blue-400 hover:text-blue-300 flex items-center">
                      Explore More <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 mb-12 lg:mb-0 lg:pr-12">
              <div className="relative">
                <img src="assets/images/service/01.webp" alt="journey-area" className="w-full rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-blue-700 transition">
                    <span className="sr-only">Play Video</span>
                    <span className="block w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="mb-8">
                <span className="text-blue-600 font-medium mb-2 block">How We Works</span>
                <h2 className="text-4xl font-bold">
                  How To Work With Elever <br />
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

      {/* Projects */}
      <div className="py-16 bg-[#00A3A1] text-white" id="project">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-medium mb-2 block">Recent Projects</span>
            <h2 className="text-4xl font-bold">Our Completed Projects</h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4">
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-96 px-4">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <a href="#project" className="thumbnail block">
                    <img src={`assets/images/portfolio/${project.image}.webp`} alt="" className="w-full h-64 object-cover" />
                  </a>
                  <div className="p-6">
                    <a href="#project">
                      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    </a>
                    <p className="text-gray-400 mb-2">{project.type}</p>
                    <a href="#project" className="text-gray-400 flex items-center mb-4">
                      {/* <CiLocationO  className="mr-2" /> {project.location} */}
                    </a>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400 block">Price:</span>
                        <p>{project.price}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Client:</span>
                        <p>{project.client}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Project Year:</span>
                        <p>{project.year}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Duration:</span>
                        <p>{project.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-gray-900 text-white" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-medium mb-2 block">Expert Team Members</span>
            <h2 className="text-4xl font-bold">Meet The Awesome Team</h2>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-6/12 px-4 mb-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col lg:flex-row">
                <a href="#team" className="thumbnail block lg:w-1/3">
                  <img src={`assets/images/team/01.webp`} alt="team" className="w-full h-64 lg:h-auto object-cover" />
                </a>
                <div className="p-6 lg:w-2/3">
                  <a href="#team">
                    <h3 className="text-2xl font-bold mb-2">Henry George</h3>
                  </a>
                  <span className="text-blue-400 block mb-4">Safety Officer</span>
                  <p className="text-gray-400 mb-4">
                    Highly skilled and experienced construction expert, known for his deep expertise in
                    managing large-scale construction projects
                  </p>
                  <div className="social-area-wrapper flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-400"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400"><FaLinkedinIn /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400"><FaYoutube /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="bg-gray-800 rounded-lg overflow-hidden mb-6 flex">
                <a href="#team" className="thumbnail block w-1/3">
                  <img src={`assets/images/team/02.webp`} alt="team" className="w-full h-48 object-cover" />
                </a>
                <div className="p-6 w-2/3">
                  <a href="#team">
                    <h3 className="text-xl font-bold mb-2">Thomas Bryant</h3>
                  </a>
                  <span className="text-blue-400 block mb-2">Civil Engineer</span>
                  <p className="text-gray-400 text-sm mb-2">
                    Highly skilled and experienced construction expert, known for his deep expertise in
                    managing large-scale construction projects
                  </p>
                  <div className="social-area-wrapper flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaLinkedinIn /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaYoutube /></a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden flex">
                <a href="#team" className="thumbnail block w-1/3">
                  <img src={`assets/images/team/03.webp`} alt="team" className="w-full h-48 object-cover" />
                </a>
                <div className="p-6 w-2/3">
                  <a href="#team">
                    <h3 className="text-xl font-bold mb-2">Benjamin Clarke</h3>
                  </a>
                  <span className="text-blue-400 block mb-2">Project Coordinator</span>
                  <p className="text-gray-400 text-sm mb-2">
                    Highly skilled and experienced construction expert, known for his deep expertise in
                    managing large-scale construction projects
                  </p>
                  <div className="social-area-wrapper flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaLinkedinIn /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 text-sm"><FaYoutube /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-medium mb-2 block">Client's Feedback</span>
            <h2 className="text-4xl font-bold">
              What Our Client's Say After <br />
              Get Our Service
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-96 px-4">
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={`assets/images/testimonials/${testimonial.image}.webp`} alt="img" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <h5 className="font-bold">{testimonial.name}</h5>
                        <span className="text-gray-500 text-sm">{testimonial.position}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="stars flex text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-sm font-bold">{testimonial.rating} <span className="text-gray-500 font-normal">Ratings</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#00A3A1] text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12">
              <div className="thumbnail">
                <img src="assets/images/cta/01.webp" alt="service" className="w-full h-64 lg:h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-7/12 p-12">
              <div className="inner">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Build Your Dream? <br />
                  Schedule Your Consultation Today!
                </h2>
                <div className="button-wrapper flex space-x-4">
                  <a href="#about" className="inline-block bg-white text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition">More About Us</a>
                  <a href="#service" className="inline-block bg-white text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition">Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="py-16 bg-white" id="blog">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-medium mb-2 block">Latest News</span>
            <h2 className="text-4xl font-bold">Articles & Blog Posts</h2>
          </div>

          <div className="flex flex-wrap -mx-4">
            {blogs.map((blog, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <a href="#blog" className="thumbnail block relative">
                    <img src={`assets/images/blog/${blog.image}.webp`} alt="blog_card" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {/* <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{blog.time}</span> */}
                      {/* <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded">{blog.location}</span> */}
                    </div>
                  </a>
                  <div className="p-6">
                    <a href="#blog">
                      <h5 className="text-xl font-bold mb-3">{blog.title}</h5>
                    </a>
                    <p className="text-gray-600 mb-4">
                      {blog.text}
                    </p>
                    <a href="#blog" className="text-blue-600 hover:text-blue-800 flex items-center">
                      Read More <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-12 items-center py-4">
            {brands.map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={`assets/images/brand/${brand}.svg`} alt="brand" className="h-12 opacity-60 hover:opacity-100 transition" />
              </div>
            ))}
          </div>
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
                <li><a href="#service" className="text-gray-400 hover:text-white">Residential Construction</a></li>
                <li><a href="#service" className="text-gray-400 hover:text-white">Interior Finishing</a></li>
                <li><a href="#service" className="text-gray-400 hover:text-white">Project Management</a></li>
                <li><a href="#service" className="text-gray-400 hover:text-white">Commercial Construction</a></li>
                <li><a href="#service" className="text-gray-400 hover:text-white">Renovation</a></li>
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

export default OmanyePage;