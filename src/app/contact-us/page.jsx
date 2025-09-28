import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { Mail, Phone } from 'lucide-react'

const Contactus = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative'>
        <div className="bg-[url('/assets/contact-us.jpg')] bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px]">
          <div className='bg-black/50 h-full w-full flex flex-col justify-center items-center text-center px-4'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                Contact Us
              </h1>
              <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto'>
                Get in touch with us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Contact Information */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
            Get In Touch
          </h2>
          <p className='text-lg text-gray-600 mb-12'>
            We are here to answer any questions you may have.
          </p>
        </div>

        {/* Contact Methods */}
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Email Contact */}
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center'>
            <div className='w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-6'>
              <Mail className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>Email</h3>
            <a 
              href="mailto:vivek@corseco.tech" 
              className='text-lg text-gray-600 hover:text-gray-800 font-medium'
            >
              vivek@corseco.tech
            </a>
          </div>

          {/* Phone Contact */}
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center'>
            <div className='w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-6'>
              <Phone className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>Phone</h3>
            <div className='space-y-2'>
              <a 
                href="tel:+919818004499" 
                className='block text-lg text-gray-600 hover:text-gray-800 font-medium'
              >
                +91-98180 04499
              </a>
              <a 
                href="tel:+17053337229" 
                className='block text-lg text-gray-600 hover:text-gray-800 font-medium'
              >
                +1 705-3337229
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus