import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jitendra Shrivastava',
      role: 'Founder',
      company: 'Bluewaterworks',
      content: 'Document verification has never been this seamless. Corseco ensures we stay compliant effortlessly.',
      rating: 5,
      avatar: '/team/jitendra.jpg'
    },
    {
      name: 'Siddhartha Chauahan',
      role: 'Founder',
      company: 'Calsys India Pvt. Ltd.',
      content: 'The forensic analysis capabilities are outstanding. We can now verify authenticity with complete confidence.',
      rating: 5,
      avatar: '/team/siddartha.jpeg'
    },
    {
      name:"Raj Menon",
      role: 'Founder',
      company: 'Emco Ceremica India',
      content: 'Corseco has revolutionized our quality control process. The AI-powered detection is incredibly accurate and saves us hours every day.',
      rating: 5,
      avatar: '/team/profile3.png'
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 px-5 md:px-15 lg:px-30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#01172D] mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-[#344E65] max-w-2xl mx-auto">
            Real stories from those using Corseco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#01172D]/8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-[#344E65] italic leading-relaxed mb-4 text-base">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FCD34D" className="text-yellow-500">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <div>
                    <p className="font-semibold text-[#01172D] text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#64748b]">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
