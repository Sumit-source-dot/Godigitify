
import React from "react";

const ChooseExpert = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#00112d]/10 text-[#00112d] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Expert Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find the Perfect <span className="text-[#00112d]">Expert</span> for Your Project
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00112d] to-purple-800 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with top-tier professionals rigorously vetted for quality and expertise. Our platform matches you with the ideal specialist for your unique requirements.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              How It <span className="text-[#00112d]">Works</span>
            </h3>
            <p className="text-gray-500 max-w-lg text-center">
              Simple steps to find and collaborate with your ideal professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Decorative line for steps */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1.5 bg-gradient-to-r from-[#00112d]/20 to-purple-800/20 z-0"></div>
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00112d] to-purple-800 text-white text-3xl font-bold rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:from-[#00112d]/90 group-hover:to-purple-800/90 transition-all">
                1
              </div>
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Browse experts"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h4 className="font-bold text-xl mb-3 text-center text-gray-800">Browse Experts</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Explore our curated directory of professionals with verified credentials and proven track records.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10 group transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00112d] to-purple-800 text-white text-3xl font-bold rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:from-[#00112d]/90 group-hover:to-purple-800/90 transition-all">
                2
              </div>
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Compare experts"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h4 className="font-bold text-xl mb-3 text-center text-gray-800">Compare Specializations</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Evaluate experts based on portfolios, client testimonials, and specific skill sets.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00112d] to-purple-800 text-white text-3xl font-bold rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:from-[#00112d]/90 group-hover:to-purple-800/90 transition-all">
                3
              </div>
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Collaborate"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h4 className="font-bold text-xl mb-3 text-center text-gray-800">Select & Collaborate</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Begin your project with confidence through our secure messaging and project management tools.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-24 border border-gray-200">
          <div className="md:flex">
            <div className="md:w-1/2 p-10 md:p-14 bg-gradient-to-br from-[#00112d]/10 to-purple-800/10">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Why Our <span className="text-[#00112d]">Experts Stand Out</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We maintain the highest standards for our professional network, ensuring you get exceptional talent tailored to your project needs.
              </p>
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-10 md:p-14">
              <div className="grid gap-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00112d]/10 p-3 rounded-lg mr-6">
                    <svg className="w-8 h-8 text-[#00112d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Rigorous Vetting Process</h4>
                    <p className="text-gray-600">
                      Only 15% of applicants pass our comprehensive screening evaluating skills, experience, and professional ethics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00112d]/10 p-3 rounded-lg mr-6">
                    <svg className="w-8 h-8 text-[#00112d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Rapid Matching</h4>
                    <p className="text-gray-600">
                      Our AI-powered platform recommends ideal candidates within 24 hours of posting your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00112d]/10 p-3 rounded-lg mr-6">
                    <svg className="w-8 h-8 text-[#00112d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Flexible Engagement</h4>
                    <p className="text-gray-600">
                      Choose from hourly, project-based, or retainer models with transparent pricing and no hidden fees.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00112d]/10 p-3 rounded-lg mr-6">
                    <svg className="w-8 h-8 text-[#00112d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Quality Guarantee</h4>
                    <p className="text-gray-600">
                      30-day satisfaction guarantee with dedicated support to ensure project success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Find Your <span className="text-[#00112d]">Perfect Expert</span>?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of businesses and individuals who've successfully completed projects with our vetted professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#00112d] hover:bg-[#00112d]/90 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Browse Experts Now
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
              How It Works
            </button>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex items-center space-x-2 text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Trusted by 10,000+ clients worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseExpert;