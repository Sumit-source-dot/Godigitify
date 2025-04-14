import React, { useState, useEffect } from "react";

const testimonialList = [
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It's easier to reach your savings goals when you have the right savings account.",
      rating: 5
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position: "Marketing Director at EasyFrontend",
      content:
        "The level of professionalism and creativity exceeded all our expectations. Our website redesign project was delivered on time and has significantly improved our conversion rates.",
      rating: 4
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CTO at EasyFrontend",
      content:
        "Their technical expertise solved complex challenges we'd been struggling with for months. The team is responsive, knowledgeable, and a pleasure to work with.",
      rating: 5
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Priya Patel",
      position: "Product Manager at EasyFrontend",
      content:
        "The mobile app they developed for us has received rave reviews from our users. The intuitive design and flawless performance have set a new standard.",
      rating: 5
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Michael Chen",
      position: "Operations Director at EasyFrontend",
      content:
        "Their data analytics solution provided insights we never knew were possible. It's revolutionized how we make business decisions.",
      rating: 4
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Emma Wilson",
      position: "Head of Design at EasyFrontend",
      content:
        "Collaborating with their design team was inspiring. They understood our brand vision perfectly and translated it into a stunning visual identity.",
      rating: 5
    },
  ],
];

function ShapeOne() {
    return (
      <svg
        className="absolute bottom-0 left-0 -z-[1]"
        width="404"
        height="572"
        viewBox="0 0 404 572"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="118"
          cy="286"
          r="265.5"
          stroke="#5B21B6" // Changed to purple-800
          strokeOpacity="0.2"
          strokeWidth="41"
        />
      </svg>
    );
  }

function ShapeTwo() {
    return (
      <svg
        className="absolute top-0 right-0 -z-[1]"
        width="269"
        height="479"
        viewBox="0 0 269 479"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="239.5"
          cy="239.5"
          r="239.5"
          fill="#1E40AF" // Changed to blue-800
          fillOpacity="0.2" // Reduced opacity for subtlety
        />
      </svg>
    );
  }

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-purple-800' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonial23 = () => {
  const [activeSet, setActiveSet] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleSlideChange = (newIndex) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveSet(newIndex);
      setTransitioning(false);
    }, 300);
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((activeSet + 1) % testimonialList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSet]);

  return (
    <section className="ezy__testimonial23 py-14 md:py-24 bg-white text-zinc-900 relative z-[1]">
      {/* Original background elements */}
      <ShapeOne />
      <ShapeTwo />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h2 className="text-[32px] font-bold leading-normal text-gray-900">
              Everyone should believe in What Our Client Say.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-[1.7] text-gray-600">
              Jobs can be categorized as paid or unpaid. Examples of unpaid jobs
              include volunteer, homemaker, mentor, student, and sometimes
              intern.
            </p>
          </div>
        </div>

        <div className="mt-12 relative">
          {/* Slider container */}
          <div className="relative h-[500px] md:h-[400px] overflow-hidden">
            {testimonialList.map((testimonials, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${
                  activeSet === index
                    ? 'translate-x-0 opacity-100'
                    : index < activeSet
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                {testimonials.map((testimonial, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-xl shadow-md border border-gray-200 p-8 transition-all duration-300 ${
                      transitioning ? 'opacity-80 scale-95' : 'opacity-100 scale-100'
                    } hover:shadow-lg hover:border-purple-200`}
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-purple-100"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{testimonial.content}</p>
                    <div className="text-right">
                      <svg
                        className="w-8 h-8 text-purple-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonialList.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSet === index ? 'w-6 bg-purple-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial23;