const Termsandcondition = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
                <div className="w-24 h-1 bg-[#00A3A1] mx-auto"></div>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none text-gray-700">
                {/* Introduction */}
                <section className="mb-10">
                    <p className="text-lg leading-relaxed mb-6">
                        Offers a unified platform that fosters innovation while providing end-to-end data management.
                    </p>
                </section>

                {/* Partnership Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Partnership</h2>
                    <p className="mb-6">
                        We're your strategic partners in digital transformation. With over a decade of experience and a team of certified experts, we deliver tailored solutions that drive growth, enhance efficiency, and secure your digital assets.
                    </p>
                </section>

                {/* Client Focus Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Commitment</h2>
                    <p className="mb-6">
                        Luminous works with businesses of all sizes, from small startups to large enterprises. We tailor our solutions to meet the specific needs and budget of each client offers a wide range of IT services. As we invest heavily in ongoing training and professional development for our team. We also participate in industry conferences, maintain partnerships with leading technology providers, and conduct internal research and development projects.
                    </p>
                </section>

                {/* Repeated Content - Consider revising in actual implementation */}
                <section className="mb-10">
                    <p className="mb-6">
                        Luminous works with businesses of all sizes, from small startups to large enterprises. We tailor our solutions to meet the specific needs and budget of each client offers a wide range of IT services. As we invest heavily in ongoing training and professional development for our team. We also participate in industry conferences, maintain partnerships with leading technology providers, and conduct internal research and development projects.
                    </p>
                </section>

                {/* Digital Transformation Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Digital Transformation</h2>
                    <p className="mb-6">
                        We're your strategic partners in digital transformation. With over a decade of experience and a team of certified experts, we deliver tailored solutions that drive growth, enhance efficiency, and secure your digital assets.
                    </p>
                </section>

                {/* Services Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
                    <p className="mb-6">
                        Luminous works with businesses of all sizes, from small startups to large enterprises. We tailor our solutions to meet the specific needs and budget of each client offers a wide range of IT services. As we invest heavily in ongoing training and professional development for our team. We also participate in industry conferences, maintain partnerships with leading technology providers, and conduct internal research and development projects.
                    </p>
                </section>

                {/* Closing Section */}
                <section>
                    <p className="text-lg leading-relaxed">
                        Offers a unified platform that fosters innovation while providing end-to-end data management. See how we help your team solve today's biggest challenges.
                    </p>
                </section>
            </div>

            {/* Acceptance Section */}
            <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Acceptance of Terms</h3>
                <p className="text-gray-600 mb-4">
                    By using our services, you agree to these Terms & Conditions. If you do not agree, please refrain from using our services.
                </p>
                <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
        </div>
    )
}


export default Termsandcondition