"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Calendar, Clock, Users, CheckCircle, Star } from 'lucide-react';

const Booking = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
          <div className='text-center'>
            <div className='inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6'>
              <Star className='w-4 h-4' />
              Free Strategy Session
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              Let's Transform Your{' '}
              <span className='text-gray-600'>
                Shipping Experience
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Schedule a free 30-minute strategy call to discover how our AI-powered solutions can revolutionize your global shipping operations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Left Side - Call Details */}
          <div className='space-y-8'>
            <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center'>
                  <Calendar className='w-6 h-6 text-white' />
                </div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                  Free 30-Minute Strategy Call
                </h2>
              </div>
              
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5 text-gray-600' />
                    What We'll Discuss:
                  </h3>
                  <div className='space-y-3'>
                    {[
                      'Detecting tampering and image fraud',
                      'Verifying shipment origins',
                      'Automated quality control for shipments'
                    ].map((item, index) => (
                      <div key={index} className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0'></div>
                        <p className='text-gray-600'>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                    <Users className='w-5 h-5 text-gray-600' />
                    Deep-Dive Into Our Solutions:
                  </h3>
                  <div className='space-y-3'>
                    {[
                      'QC and compliance reports',
                      'Validate FSC, PEFC and more',
                      'ERP and supply chain integration'
                    ].map((item, index) => (
                      <div key={index} className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0'></div>
                        <p className='text-gray-600'>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className='bg-gray-50 rounded-2xl p-6 border border-gray-200'>
              <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                <Clock className='w-5 h-5 text-gray-600' />
                Why Book This Call?
              </h3>
              <div className='space-y-3'>
                {[
                  'Get personalized recommendations for your business',
                  'Learn about industry best practices',
                  'Discover cost-saving opportunities',
                  'No obligation - completely free consultation'
                ].map((benefit, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <CheckCircle className='w-4 h-4 text-gray-600 flex-shrink-0' />
                    <p className='text-sm text-gray-700'>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Calendly Widget */}
          <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
            <div className='bg-gray-50 p-6 border-b border-gray-200'>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Schedule Your Call</h3>
              <p className='text-gray-600'>Choose a time that works best for you</p>
            </div>
            <div className='p-6'>
              <InlineWidget 
                url="https://calendly.com/vivek-corseco/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                styles={{
                  height: '600px',
                  width: '100%'
                }}
                prefill={{
                  name: '',
                  email: ''
                }}
                utm={{
                  utmCampaign: 'Strategy Call',
                  utmSource: 'Website',
                  utmMedium: 'Booking Form'
                }}
                pageSettings={{
                  resize: true,
                }}
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 text-center'>
          <div className='inline-flex items-center gap-8 bg-white rounded-xl px-8 py-4 shadow-sm border border-gray-100'>
            <div className='flex items-center gap-2 text-gray-600'>
              <CheckCircle className='w-5 h-5 text-gray-600' />
              <span className='text-sm font-medium'>100% Free</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600'>
              <Clock className='w-5 h-5 text-gray-600' />
              <span className='text-sm font-medium'>30 Minutes</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600'>
              <Users className='w-5 h-5 text-gray-600' />
              <span className='text-sm font-medium'>Expert Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;













// "use client";
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { MoveLeft, MoveRight, Clock, CheckCircle, AlertCircle, X } from 'lucide-react';
// import React, { useState, useEffect } from 'react';

// const MONTHS = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// const Booking = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [showTimeSlots, setShowTimeSlots] = useState(false);
//   const [step, setStep] = useState(1);
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Feedback state
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showError, setShowError] = useState(false);
//   const [feedbackMessage, setFeedbackMessage] = useState('');

//   // Form data state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     website: '',
//     revenue: '',
//     captcha: ''
//   });

//   // Interests state with unique identifiers
//   const [interests, setInterests] = useState({
//     mettaradeAi: false,
//     forensicAnalysis: false,
//     locationProof: false
//   });

//   // Your Calendly username - replace this with your actual username
//   const CALENDLY_USERNAME = 'wtamang333';
//   const EVENT_TYPE = '30min'; 

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const today = new Date();
  
//   const firstDayOfMonth = new Date(year, month, 1);
//   const lastDayOfMonth = new Date(year, month + 1, 0);
//   const startDate = new Date(firstDayOfMonth);
//   startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

//   const days = [];
//   const currentDateIterator = new Date(startDate);
  
//   for (let i = 0; i < 42; i++) {
//     days.push(new Date(currentDateIterator));
//     currentDateIterator.setDate(currentDateIterator.getDate() + 1);
//   }

//   // Load Calendly script with better debugging
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;
  
    
//     document.head.appendChild(script);

//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   // Generate static time slots (since Calendly API is deprecated)
//   const generateTimeSlots = () => {
//     const slots = [];
//     for (let hour = 9; hour <= 17; hour++) {
//       for (let minute of [0, 30]) {
//         if (hour === 17 && minute === 30) break; // Stop at 17:00
//         const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//         slots.push({ time, available: Math.random() > 0.3 }); // Simulate availability
//       }
//     }
//     return slots;
//   };

//   const fetchAvailableTimes = async (date) => {
//     setLoading(true);
//     try {
//       // Simulate API call delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Generate static slots since Calendly API is deprecated
//       const slots = generateTimeSlots();
//       setTimeSlots(slots.filter(slot => slot.available));
//     } catch (error) {
//       console.error('Error fetching available times:', error);
//       setTimeSlots([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const navigateMonth = (direction) => {
//     setCurrentDate(prev => {
//       const newDate = new Date(prev);
//       newDate.setMonth(prev.getMonth() + direction);
//       return newDate;
//     });
//     setSelectedDate(null);
//     setShowTimeSlots(false);
//     setTimeSlots([]);
//   };

//   const handleDateSelect = async (date) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
    
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     await fetchAvailableTimes(date);
//   };

//   const handleTimeSelect = (timeSlot) => {
  
//     setSelectedTime(timeSlot);
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[id]) {
//       setErrors(prev => ({
//         ...prev,
//         [id]: ''
//       }));
//     }
//   };

//   const handleSelectChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
    
//     // Clear error when user makes selection
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const handleCheckboxChange = (interest) => {
//     setInterests(prev => ({
//       ...prev,
//       [interest]: !prev[interest]
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }
//     if (!formData.website.trim()) newErrors.website = 'Website/storefront is required';
//     if (!formData.revenue) newErrors.revenue = 'Please select your monthly revenue';
//     if (!formData.captcha) {
//       newErrors.captcha = 'Please answer the captcha';
//     } else if (formData.captcha !== '4') {
//       newErrors.captcha = 'Incorrect answer. 2+2=4';
//     }
    
//     setErrors(newErrors);
   
    
//     return Object.keys(newErrors).length === 0;
//   };

//   const createCalendlyBooking = () => {
  
//     if (typeof window !== 'undefined' && window.Calendly) {
    
      
//       // Get selected interests as a string
//       const selectedInterests = Object.entries(interests)
//         .filter(([key, value]) => value)
//         .map(([key, value]) => {
//           switch(key) {
//             case 'mettaradeAi': return 'MettaradeAi';
//             case 'forensicAnalysis': return 'Forensic Analysis';
//             case 'locationProof': return 'Location Proof';
//             default: return key;
//           }
//         })
//         .join(', ');

//       const widgetConfig = {
//         url: `https://calendly.com/${CALENDLY_USERNAME}/${EVENT_TYPE}`,
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//           customAnswers: {
//             a1: formData.website,
//             a2: `Monthly Revenue: ${getRevenueText(formData.revenue)}`,
//             a3: formData.message || 'No additional message',
//             a4: selectedInterests || 'None specified'
//           }
//         },
//         utm: {
//           utmCampaign: 'Strategy Call',
//           utmSource: 'Website',
//           utmMedium: 'Booking Form'
//         }
//       };
    
//       try {
//         window.Calendly.initPopupWidget(widgetConfig);
      
//       } catch (error) {
//         console.error('❌ Error initializing widget:', error);
//         // Fallback to direct URL
//         const calendlyUrl = `https://calendly.com/${CALENDLY_USERNAME}/${EVENT_TYPE}`;
      
//         window.open(calendlyUrl, '_blank');
//       }
//     } else {
    
//       const calendlyUrl = `https://calendly.com/${CALENDLY_USERNAME}/${EVENT_TYPE}`;
    
//       window.open(calendlyUrl, '_blank');
//     }
//   };

//   const getRevenueText = (value) => {
//     switch(value) {
//       case '1000': return '$1,000 - $5,000';
//       case '5000': return '$5,000 - $10,000';
//       case '10000': return '$10,000 - $25,000';
//       case '25000': return '$25,000+';
//       default: return 'Not specified';
//     }
//   };

//   // Enhanced submit handler with user feedback
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
 
    
//     if (!validateForm()) {
//       setFeedbackMessage('Please fix all errors before submitting');
//       setShowError(true);
//       setTimeout(() => setShowError(false), 5000);
//       return;
//     }

//     setIsSubmitting(true);
//     setShowError(false);
//     setShowSuccess(false);

//     try {
     
      
//       // Create Calendly booking
//       createCalendlyBooking();
      
//       // Show success message
//       setFeedbackMessage('Success! Calendly booking window should open now. If you don\'t see it, please check your popup blocker settings.');
//       setShowSuccess(true);
      
//       // Reset form after 3 seconds
//       setTimeout(() => {
//         setFormData({
//           name: '',
//           email: '',
//           message: '',
//           website: '',
//           revenue: '',
//           captcha: ''
//         });
//         setInterests({
//           mettaradeAi: false,
//           forensicAnalysis: false,
//           locationProof: false
//         });
        
//         // Reset calendar selection
//         setStep(1);
//         setSelectedDate(null);
//         setSelectedTime(null);
//         setShowTimeSlots(false);
//         setShowSuccess(false);
        
     
//       }, 4000);
      
//     } catch (error) {
  
//       setFeedbackMessage('❌ Something went wrong. Please try again or contact support.');
//       setShowError(true);
//       setTimeout(() => setShowError(false), 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const formatSelectedDate = () => {
//     if (!selectedDate) return '';
//     const options = { weekday: 'long', month: 'long', day: 'numeric' };
//     return selectedDate.toLocaleDateString('en-US', options);
//   };

//   const getCurrentTime = () => {
//     return new Date().toLocaleTimeString('en-US', { 
//       hour: '2-digit', 
//       minute: '2-digit',
//       hour12: false,
//       timeZone: 'Africa/Lagos'
//     });
//   };

//   return (
//     <div className='flex flex-col gap-10 mt-20 mb-20'>
//       {/* Success Toast Message */}
//       {showSuccess && (
//         <div className='fixed top-4 right-4 z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md animate-in slide-in-from-right'>
//           <CheckCircle size={20} />
//           <span className='text-sm'>{feedbackMessage}</span>
//           <button onClick={() => setShowSuccess(false)} className='ml-2'>
//             <X size={16} />
//           </button>
//         </div>
//       )}
      
//       {/* Error Toast Message */}
//       {showError && (
//         <div className='fixed top-4 right-4 z-50 bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md animate-in slide-in-from-right'>
//           <AlertCircle size={20} />
//           <span className='text-sm'>{feedbackMessage}</span>
//           <button onClick={() => setShowError(false)} className='ml-2'>
//             <X size={16} />
//           </button>
//         </div>
//       )}

//       {/* Header */}
//       <div className='text-center px-4'> 
//         <h1 className='lg:text-[72px] md:text-[40px] text-[32px] font-bold leading-tight'>
//           We're Excited to Meet You!
//         </h1>
//         <p className='lg:text-[24px] md:text-[20px] text-[16px] text-[#808080] mt-4'>
//           Grab a time that works best for you.
//         </p>
//       </div>

//       <div className='flex lg:flex-row flex-col items-start gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20'>
//         {/* Left Side - Call Details */}
//         <div className='w-full lg:w-[43%] flex flex-col gap-6 lg:pr-8'>
//           <h2 className='lg:text-[40px] md:text-[32px] text-[24px] font-bold leading-[150%]'>
//             Free <span className='text-[#808080]'>30 Minutes Strategy Call</span>
//           </h2>
          
//           <div className='space-y-6'>
//             <div className='space-y-3'>
//               <h3 className='lg:text-[24px] md:text-[20px] text-[16px] font-bold text-[#78797C]'>
//                 On this strategy call we'll discuss:
//               </h3>
//               <ul className='list-disc pl-6 space-y-2 md:text-[16px] text-[14px] text-[#78797C]'>
//                 <li>Detecting tampering, image fraud</li>
//                 <li>Verifying shipment origins</li>
//                 <li>Automated QC for shipments</li>
//               </ul>
//             </div>
            
//             <div className='space-y-3'>
//               <h3 className='lg:text-[24px] md:text-[20px] text-[16px] font-bold text-[#78797C]'>
//                 From there, we'll do a deep-dive into the products built to solve many of the issues related to global shipping
//               </h3>
//               <ul className='list-disc pl-6 space-y-2 md:text-[16px] text-[14px] text-[#78797C]'>
//                 <li>QC and compliance reports</li>
//                 <li>Validate FSC, PEFC and more</li>
//                 <li>ERP, Supply chain connect</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Calendar/Form */}
//         <div className='w-full lg:w-[57%] flex justify-center lg:border-l border-[#E0E0E0] lg:pl-10'>
//           {step === 1 && (
//             <div className='w-full max-w-4xl'>
//               <div className='flex lg:flex-row flex-col gap-6 lg:gap-10 w-full'>
//                 {/* Calendar Section */}
//                 <div className='w-full lg:max-w-[350px] bg-white flex flex-col gap-6'>
//                   <h2 className='text-[26px] font-bold text-[#2A2A2A]'>
//                     Select Date & Time
//                   </h2>
                  
//                   {/* Calendar View */}
//                   <div className='space-y-4'>
//                     {/* Month Navigation */}
//                     <div className='flex items-center justify-between mb-6 text-[#78797C]'>
//                       <button
//                         onClick={() => navigateMonth(-1)}
//                         className='p-2 hover:bg-[#F0F2F8] rounded-full transition-colors'
//                         aria-label="Previous month"
//                       >
//                         <MoveLeft size={20} />
//                       </button>
//                       <h3 className='text-lg font-medium'>
//                         {MONTHS[month]} {year}
//                       </h3>
//                       <button
//                         onClick={() => navigateMonth(1)}
//                         className='p-2 hover:bg-[#F0F2F8] rounded-full transition-colors'
//                         aria-label="Next month"
//                       >
//                         <MoveRight size={20} />
//                       </button>
//                     </div>

//                     {/* Days Header */}
//                     <div className='grid grid-cols-7 gap-1 mb-2 text-[#78797C]'>
//                       {DAYS.map(day => (
//                         <div key={day} className='text-center text-sm font-medium py-2'>
//                           {day}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Calendar Grid */}
//                     <div className='grid grid-cols-7 gap-1'>
//                       {days.map((date, index) => {
//                         const isCurrentMonth = date.getMonth() === month;
//                         const isPast = date < today;
//                         const isToday = date.toDateString() === today.toDateString();
//                         const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

//                         return (
//                           <button
//                             key={index}
//                             onClick={() => handleDateSelect(date)}
//                             disabled={!isCurrentMonth || isPast}
//                             className={`
//                               h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200
//                               ${!isCurrentMonth 
//                                 ? 'text-gray-300 cursor-not-allowed' 
//                                 : isPast 
//                                   ? 'text-gray-400 cursor-not-allowed' 
//                                   : isSelected
//                                     ? 'bg-[#1A1A1A] text-white'
//                                     : isToday
//                                       ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
//                                       : 'text-gray-700 hover:bg-gray-100'
//                               }
//                             `}
//                           >
//                             {date.getDate()}
//                           </button>
//                         );
//                       })}
//                     </div>

//                     {/* Timezone */}
//                     <div className='mt-6 pt-4 border-t border-gray-100'>
//                       <div className='flex items-center gap-2 text-gray-600'>
//                         <Clock size={16} />
//                         <span className='text-sm'>West Africa Time ({getCurrentTime()})</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Time Slots Section */}
//                 {showTimeSlots && (
//                   <div className='w-full lg:max-w-[400px] space-y-6'>
//                     {/* Selected Date Header */}
//                     <div>
//                       <h3 className='text-lg font-medium text-gray-800'>
//                         {formatSelectedDate()}
//                       </h3>
//                     </div>

//                     {/* Loading State */}
//                     {loading && (
//                       <div className='flex justify-center py-12'>
//                         <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
//                       </div>
//                     )}

//                     {/* Time Slots Grid */}
//                     {!loading && timeSlots.length > 0 && (
//                       <div className='space-y-4'>
//                         <p className='text-sm text-gray-600'>Available times:</p>
//                         <div className='grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2'>
//                           {timeSlots.map((timeSlot, index) => (
//                             <button
//                               key={index}
//                               onClick={() => handleTimeSelect(timeSlot)}
//                               className={`
//                                 py-3 px-4 border rounded-lg text-center transition-all duration-200 
//                                 ${selectedTime?.time === timeSlot.time
//                                   ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
//                                   : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                                 }
//                               `}
//                             >
//                               {timeSlot.time}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* No slots available */}
//                     {!loading && timeSlots.length === 0 && selectedDate && (
//                       <div className='text-center py-8 text-gray-500'>
//                         <p>No available time slots for this date.</p>
//                         <p className='text-sm mt-2'>Please select another date.</p>
//                       </div>
//                     )}

//                     {/* Next Button */}
//                     {selectedTime && !loading && (
//                       <div className='flex justify-center pt-4'>
//                         <Button 
//                           onClick={() => setStep(2)} 
//                           className='w-full max-w-[200px] hover:bg-[#1A1A1A] bg-white text-black hover:text-white  border border-[#1A1A1A] py-3 font-medium transition-colors'
//                         >
//                           NEXT
//                         </Button>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
          
//           {/* Form Step */}
//           {step === 2 && (
//             <div className='w-full max-w-md bg-white space-y-6'>
//               <div className='flex items-center justify-between'>
//                 <h2 className='text-[26px] font-bold text-[#2A2A2A]'>
//                   Enter Details
//                 </h2>
//                 <button 
//                   onClick={() => setStep(1)}
//                   className='text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1'
//                 >
//                   <MoveLeft size={16} /> Back
//                 </button>
//               </div>
              
//               {/* Selected Date & Time Display */}
//               {selectedDate && selectedTime && (
//                 <div className='bg-gray-50 p-4 rounded-lg'>
//                   <h3 className='font-medium text-gray-800'>Selected Slot:</h3>
//                   <p className='text-sm text-gray-600'>
//                     {formatSelectedDate()} at {selectedTime.time}
//                   </p>
//                 </div>
//               )}
              
//               <form onSubmit={handleSubmit} className='space-y-5'>
//                 {/* Name Field */}
//                 <div>
//                   <Label htmlFor="name">Name *</Label>
//                   <Input 
//                     type="text" 
//                     id="name" 
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder='Enter your full name' 
//                     className={errors.name ? 'border-red-500' : ''}
//                     required
//                   />
//                   {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
//                 </div>
                
//                 {/* Email Field */}
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input 
//                     type="email" 
//                     id="email" 
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder='Enter your email address' 
//                     className={errors.email ? 'border-red-500' : ''}
//                     required
//                   />
//                   {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
//                 </div>
                
//                 {/* Message Field */}
//                 <div>
//                   <Label htmlFor="message">Message (Optional)</Label>
//                   <Textarea 
//                     id="message" 
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder='Tell us about your specific needs or questions' 
//                     rows={3}
//                   />
//                 </div>

//                 {/* Website Field */}
//                 <div>
//                   <Label htmlFor="website">Website/Amazon Storefront *</Label>
//                   <Textarea 
//                     id="website" 
//                     value={formData.website}
//                     onChange={handleInputChange}
//                     placeholder='Please share your website URL and/or Amazon storefront' 
//                     className={errors.website ? 'border-red-500' : ''}
//                     rows={2}
//                     required
//                   />
//                   {errors.website && <p className='text-red-500 text-sm mt-1'>{errors.website}</p>}
//                 </div>

//                 {/* Revenue Field */}
//                 <div>
//                   <Label>Average Monthly Revenue *</Label>
//                   <Select onValueChange={(value) => handleSelectChange('revenue', value)} value={formData.revenue}>
//                     <SelectTrigger className={errors.revenue ? 'border-red-500' : ''}>
//                       <SelectValue placeholder='Select your average monthly revenue' />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="1000">$1,000 - $5,000</SelectItem>
//                       <SelectItem value="5000">$5,000 - $10,000</SelectItem>
//                       <SelectItem value="10000">$10,000 - $25,000</SelectItem>
//                       <SelectItem value="25000">$25,000+</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   {errors.revenue && <p className='text-red-500 text-sm mt-1'>{errors.revenue}</p>}
//                 </div>

//                 {/* Captcha Field */}
//                 <div>
//                   <Label>Security Check: What's 2+2? *</Label>
//                   <Select onValueChange={(value) => handleSelectChange('captcha', value)} value={formData.captcha}>
//                     <SelectTrigger className={errors.captcha ? 'border-red-500' : ''}>
//                       <SelectValue placeholder='Select the correct answer' />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="3">3</SelectItem>
//                       <SelectItem value="4">4</SelectItem>
//                       <SelectItem value="5">5</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   {errors.captcha && <p className='text-red-500 text-sm mt-1'>{errors.captcha}</p>}
//                 </div>

//                 {/* Interests Section */}
//                 <div className='space-y-3'>
//                   <Label>I would be interested in chatting about: (Optional)</Label>
                  
//                   <div className='space-y-3'>
//                     <div className='flex items-center gap-3'>
//                       <input
//                         type="checkbox" 
//                         id="mettaradeAi"  
//                         checked={interests.mettaradeAi}
//                         onChange={() => handleCheckboxChange('mettaradeAi')}
//                         className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
//                       />
//                       <Label htmlFor="mettaradeAi" className='cursor-pointer'>MettaradeAi</Label>
//                     </div>
                    
//                     <div className='flex items-center gap-3'>
//                       <input
//                         type="checkbox" 
//                         id="forensicAnalysis"  
//                         checked={interests.forensicAnalysis}
//                         onChange={() => handleCheckboxChange('forensicAnalysis')}
//                         className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
//                       />
//                       <Label htmlFor="forensicAnalysis" className='cursor-pointer'>Forensic Analysis</Label>
//                     </div>
                    
//                     <div className='flex items-center gap-3'>
//                       <input
//                         type="checkbox" 
//                         id="locationProof"  
//                         checked={interests.locationProof}
//                         onChange={() => handleCheckboxChange('locationProof')}
//                         className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
//                       />
//                       <Label htmlFor="locationProof" className='cursor-pointer'>Location Proof</Label>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <Button 
//                   type="submit" 
//                   disabled={isSubmitting}
//                   className='w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white py-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
//                 >
//                   {isSubmitting ? (
//                     <div className='flex items-center gap-2'>
//                       <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
//                       Opening Calendly...
//                     </div>
//                   ) : (
//                     'Schedule Meeting'
//                   )}
//                 </Button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;





// "use client";
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { MoveLeft, MoveRight } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MONTHS = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// export default function Page() {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [showTimeSlots, setShowTimeSlots] = useState(false);
//   const [step, setStep] = useState(1);
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     website: '',
//     revenue: '',
//     captcha: ''
//   });

//   // Calendly API configuration
//   const CALENDLY_ACCESS_TOKEN = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzU1NzcxNTM1LCJqdGkiOiJmMmQyYWM2Ny05YmRmLTQ5ZmEtYWZlOC1hYmExNTQ4YjQwY2EiLCJ1c2VyX3V1aWQiOiI3MjEzZjU1Yi0zZTllLTQ4MDAtYTUyNC05MWM4ZjFjMjE3YjcifQ.mk8WQFg6r4YHdFW4o9gPoP7qoBTP7w4vJOovkFv8mhWdsUONxPe3DvYhMqgFxyQh0CtxNI2Rth2NkA12RoiF1g';
//   // You need to replace this with your actual Calendly event type UUID
//   // You can find this in your Calendly dashboard or by making a request to /event_types
//   const EVENT_TYPE_UUID = '7213f55b-3e9e-4800-a524-91c8f1c217b7';

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const today = new Date();
  
//   const firstDayOfMonth = new Date(year, month, 1);
//   const lastDayOfMonth = new Date(year, month + 1, 0);
//   const startDate = new Date(firstDayOfMonth);
//   startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

//   const days = [];
//   const currentDateIterator = new Date(startDate);
  
//   for (let i = 0; i < 42; i++) {
//     days.push(new Date(currentDateIterator));
//     currentDateIterator.setDate(currentDateIterator.getDate() + 1);
//   }

//   // Fetch available time slots from Calendly API
//   const fetchAvailableTimes = async (date) => {
//     setLoading(true);
//     try {
//       if (!EVENT_TYPE_UUID) {
//         throw new Error('Calendly event type UUID not configured');
//       }
  
//       // Ensure the selected date is in the future
//       const now = new Date();
//       const selectedDate = new Date(date);
      
//       if (selectedDate <= now) {
//         throw new Error('Selected date must be in the future');
//       }
  
//       // Create a 7-day range starting from the selected date
//       const startTime = new Date(selectedDate);
//       startTime.setHours(0, 0, 0, 0);
      
//       const endTime = new Date(selectedDate);
//       endTime.setDate(endTime.getDate() + 6); // 7-day range max
//       endTime.setHours(23, 59, 59, 999);
  
//       console.log('Fetching available times for:', {
//         startTime: startTime.toISOString(),
//         endTime: endTime.toISOString()
//       });
  
//       const response = await axios.get(
//         'https://api.calendly.com/event_type_available_times',
//         {
//           headers: {
//             'Authorization': `Bearer ${CALENDLY_ACCESS_TOKEN}`,
//             'Content-Type': 'application/json'
//           },
//           params: {
//             event_type: `https://api.calendly.com/event_types/${EVENT_TYPE_UUID}`,
//             start_time: startTime.toISOString(),
//             end_time: endTime.toISOString()
//           }
//         }
//       );
  
//       console.log('Calendly API response:', response.data);
  
//       // Filter results to only show times for the selected date
//       const availableTimes = response.data.collection
//         .filter(slot => {
//           const slotDate = new Date(slot.start_time);
//           return slotDate.toDateString() === selectedDate.toDateString();
//         })
//         .map(slot => {
//           const time = new Date(slot.start_time);
//           return {
//             time: time.toLocaleTimeString('en-US', { 
//               hour: '2-digit', 
//               minute: '2-digit', 
//               hour12: false 
//             }),
//             start_time: slot.start_time
//           };
//         });
  
//       setTimeSlots(availableTimes);
//     } catch (error) {
//       console.error('Error fetching available times:', error);
      
//       // Check for specific error types
//       if (error.response?.status === 404) {
//         console.error('Event type not found or API endpoint deprecated');
//       } else if (error.response?.status === 403) {
//         console.error('Authentication failed or insufficient permissions');
//       }
      
//       // Fallback to static slots
//       const staticSlots = [
//         '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
//         '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
//         '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
//       ].map(time => ({ time, start_time: null }));
      
//       setTimeSlots(staticSlots);
//     } finally {
//       setLoading(false);
//     }
//   };
  
  
//   // Create Calendly booking
//   const createBooking = async () => {
//     try {
//       // Create a single-use scheduling link (this may still work)
//       const response = await axios.post(
//         'https://api.calendly.com/scheduling_links',
//         {
//           max_event_count: 1,
//           owner: `https://api.calendly.com/event_types/${EVENT_TYPE_UUID}`,
//           owner_type: "EventType"
//         },
//         {
//           headers: {
//             'Authorization': `Bearer ${CALENDLY_ACCESS_TOKEN}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );
  
//       // Redirect to Calendly booking page
//       window.open(response.data.resource.booking_url, '_blank');
//     } catch (error) {
//       console.error('Scheduling links may also be deprecated:', error);
//       // Fallback to direct Calendly URL
//       const directUrl = `https://calendly.com/your-username/30min`;
//       window.open(directUrl, '_blank');
//     }
//   };
  

//   const navigateMonth = (direction) => {
//     setCurrentDate(prev => {
//       const newDate = new Date(prev);
//       newDate.setMonth(prev.getMonth() + direction);
//       return newDate;
//     });
//     setSelectedDate(null);
//     setShowTimeSlots(false);
//     setTimeSlots([]);
//   };

//   const handleDateSelect = async (date) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
    
//     if (date < today || date.getMonth() !== month) {
//       console.log('Cannot select past dates or dates outside current month');
//       return;
//     }
    
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     await fetchAvailableTimes(date);
//   };
  
//   const handleTimeSelect = (timeSlot) => {
//     setSelectedTime(timeSlot);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSelectChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.website || !formData.revenue || !formData.captcha) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     if (formData.captcha !== '4') {
//       alert('Please answer the captcha correctly');
//       return;
//     }
//     createBooking();
//   };

//   const formatSelectedDate = () => {
//     if (!selectedDate) return '';
//     const options = { weekday: 'long', month: 'long', day: 'numeric' };
//     return selectedDate.toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className='flex flex-col gap-10 mt-20 mb-20'>
//       {/* Header */}
//       <div className='text-center'> 
//         <p className='lg:text-[72px] md:text-[40px] text-[32px] font-bold'>We're Excited to Meet You!</p>
//         <p className='lg:text-[24px] md:text-[20px] text-[16px] text-[#808080]'>Grab a time that works best for you.</p>
//       </div>

//       <div className='flex lg:flex-row flex-col items-start lg:px-20 md:px-10 px-5  '>
//         {/* Left Side - Call Details */}
//         <div className='flex lg:w-[43%] w-full flex-col gap-2 items-start justify-center lg:pr-[31px]'>
//           <p className='lg:text-[40px] md:text-[32px] text-[24px] font-bold leading-[150%]  mb-6'>
//             Free <span className='text-[#808080]'>30 Minutes Strategy Call</span>
//           </p>
//           <div className='flex flex-col gap-2 text-[#78797C]'>
//             <p className='lg:text-[24px] md:text-[20px] text-[16px] font-bold'>On this strategy call we'll discuss:</p>
//             <ul className='list-disc pl-6 space-y-1 md:text-[16px] text-[14px]'>
//               <li>Detecting tampering, image fraud</li>
//               <li>Verifying shipment origins</li>
//               <li>Automated QC for shipments</li>
//             </ul>
//           </div>
//           <div className='flex flex-col gap-2 text-[#78797C]'>
//             <p className='lg:text-[24px] md:text-[20px] text-[16px] font-bold'>From there, we'll do a deep-dive into the products built to solve many of the issues related to global shipping</p>
//             <ul className='list-disc pl-6 space-y-1 md:text-[16px] text-[14px]'>
//               <li>QC and compliance reports</li>
//               <li>Validate FSC, PEFC and more</li>
//               <li>ERP, Supply chain connect</li>
//             </ul>
//           </div>
//         </div>
//           <div className='lg:w-[57%] w-full flex justify-center items-center  lg:border-l border-[#E0E0E0] lg:px-10 '>
//         {/* Right Side - Calendar */}
//         {step === 1 && (
//           <div className='flex w-full  justify-center '>
//             <div className='flex lg:flex-row flex-col gap-10 w-full'>
//               <div className='w-full bg-white flex flex-col rounded-lg  gap-10 max-w-[482px]'>
//                 <h2 className='text-[26px] font-bold text-[#2A2A2A]'>
//                 Enter Details
//                 </h2>
                
//                 {/* Calendar View */}
//                 <div className='space-y-4 w-full'>
//                   {/* Month Navigation */}
//                   <div className='flex items-center justify-between mb-6 gap-4 text-[#78797C] w-[270px]'>
//                     <button
//                       onClick={() => navigateMonth(-1)}
//                       className='p-2 hover:bg-[#F0F2F8] rounded-full transition-colors'
//                     >
//                       <MoveLeft/>
//                     </button>
//                     <h3 className='text-base font-medium'>
//                       {MONTHS[month]} {year}
//                     </h3>
//                     <button
//                       onClick={() => navigateMonth(1)}
//                       className='p-2 hover:bg-[#F0F2F8] rounded-full transition-colors'
//                     >
//                       <MoveRight/>
//                     </button>
//                   </div>

//                   {/* Days Header */}
//                   <div className='grid grid-cols-7 gap-1 mb-2 text-[#78797C]'>
//                     {DAYS.map(day => (
//                       <div key={day} className='text-center text-sm font-medium py-2'>
//                         {day}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Calendar Grid */}
//                   <div className='grid grid-cols-7 gap-1'>
//                     {days.map((date, index) => {
//                       const isCurrentMonth = date.getMonth() === month;
//                       const isPast = date < today;
//                       const isToday = date.toDateString() === today.toDateString();
//                       const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

//                       return (
//                         <button
//                           key={index}
//                           onClick={() => handleDateSelect(date)}
//                           disabled={!isCurrentMonth || isPast}
//                           className={`
//                             md:h-12 h-8 md:w-12 w-8 rounded-lg md:text-sm text-[10px] font-medium transition-all duration-200
//                             ${!isCurrentMonth 
//                               ? 'text-gray-300 cursor-not-allowed' 
//                               : isPast 
//                                 ? 'text-gray-400 cursor-not-allowed' 
//                                 : isSelected
//                                   ? 'bg-[#1A1A1A] text-white'
//                                   : isToday
//                                     ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
//                                     : 'text-gray-700 hover:bg-gray-100'
//                             }
//                           `}
//                         >
//                           {date.getDate()}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   {/* Timezone */}
//                   <div className='mt-6 pt-4'>
//                     <div className='flex items-center gap-2 text-gray-600'>
//                       <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                         <circle cx='12' cy='12' r='10'/>
//                         <polyline points='12,6 12,12 16,14'/>
//                       </svg>
//                       <span className='text-sm'>West Africa Time (16:50)</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Time Slots View */}
//               {showTimeSlots && (
//                 <div className='space-y-6 w-full p-6'>
//                   {/* Selected Date Header */}
//                   <div className='flex items-center justify-between'>
//                     <h3 className='text-lg font-medium text-gray-800'>
//                       {formatSelectedDate()}
//                     </h3>
//                   </div>

//                   {/* Loading State */}
//                   {loading && (
//                     <div className='flex justify-center py-8'>
//                       <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
//                     </div>
//                   )}

//                   {/* Time Slots Grid */}
//                   {!loading && (
//                     <div className='flex flex-wrap  justify-center gap-3 h-[400px] overflow-y-auto scrollbar-hide'>
//                       {timeSlots.map((timeSlot, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleTimeSelect(timeSlot)}
//                           className={`
//                             py-3 px-4 border rounded-lg text-center transition-all duration-200 w-[152px] 
//                             ${selectedTime?.time === timeSlot.time
//                               ? 'bg-[#606163] text-white border-[#606163]'
//                               : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                             }
//                           `}
//                         >
//                           {timeSlot.time}
//                         </button>
//                       ))}
//                     </div>
//                   )}

//                   {/* Next Button */}
//                   {selectedTime && !loading && (
//                     <div className='flex justify-center'>
//                     <button 
//                       onClick={() => setStep(2)} 
//                       className='w-[152px] bg-white  mx-auto border cursor-pointer text-black py-3 rounded-lg font-medium hover:bg-[#606163] hover:text-white transition-colors'
//                     >
//                       NEXT
//                     </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
        
//         {step === 2 && (
//           <div className='max-w-full bg-white flex flex-col p-6 gap-10 '>
//             <h2 className='text-[26px] font-bold text-[#2A2A2A]'>
//               Enter Details
//             </h2>
            
//             <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//               <div>
//                 <Label htmlFor="name">Name *</Label>
//                 <Input 
//                   type="text" 
//                   id="name" 
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder='Enter your name' 
//                   required
//                 />
//               </div>
              
//               <div>
//                 <Label htmlFor="email">Email Address *</Label>
//                 <Input 
//                   type="email" 
//                   id="email" 
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder='Enter your email' 
//                   required
//                 />
//               </div>
              
//               <Button 
//                 type="button"
//                 className='w-fit bg-white text-black hover:bg-gray-100 py-3 border border-black font-medium transition-colors'
//               >
//                 Add Guest
//               </Button>
              
//               <div>
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea 
//                   id="message" 
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder='Enter your message' 
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="website">Please share your current website and/or Amazon storefront and product*</Label>
//                 <Textarea 
//                   id="website" 
//                   value={formData.website}
//                   onChange={handleInputChange}
//                   placeholder='Enter your website/storefront URL' 
//                 />
//               </div>
//               <div className='w-full flex flex-col gap-2'>
//                 <Label htmlFor="revenue">What's your average monthly revenue*</Label>
//                 <Select onValueChange={(value) => handleSelectChange('revenue', value)}>
//                     <SelectTrigger className={'w-full'}>
//                         <SelectValue placeholder='Select your average monthly revenue' />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="1000">$1,000 - $5,000</SelectItem>
//                         <SelectItem value="5000">$5,000 - $10,000</SelectItem>
//                         <SelectItem value="10000">$10,000 - $25,000</SelectItem>
//                         <SelectItem value="25000">$25,000+</SelectItem>
//                     </SelectContent>
//                 </Select>
//               </div>
//               <div className='w-full flex flex-col gap-2'>
//                 <Label htmlFor="captcha">What's 2+2?*</Label>
//                 <Select onValueChange={(value) => handleSelectChange('captcha', value)}>
//                     <SelectTrigger className={'w-full'}>
//                         <SelectValue placeholder='Select' />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="4">4</SelectItem>
//                         <SelectItem value="3">3</SelectItem>
//                         <SelectItem value="8">8</SelectItem>
//                     </SelectContent>
//                 </Select>
//               </div>
//               <div className='w-full flex flex-col gap-1'>
//                 <Label htmlFor="intrestedchat">I would be interested in chatting about?</Label>
//                 <div className='flex gap-2'>
                    
//                   <Input type="checkbox" id="intrestedchat"  className='w-fit' value={formData.intrestedchat} onChange={handleInputChange} placeholder='Enter your interested chat' />
//                   <Label htmlFor="MettaradeAi">MettaradeAi</Label>
//                   </div>
//                   <div className='flex gap-2'>
                   
                  
//                   <Input type="checkbox" id="intrestedchat"  className='w-fit' value={formData.intrestedchat} onChange={handleInputChange} placeholder='Enter your interested chat' />
//                   <Label htmlFor="Forensicanalysis">Forensic analysis</Label>
//                   </div>
//                   <div className='flex gap-2'>
                   
//                   <Input type="checkbox" id="intrestedchat"  className='w-fit' value={formData.intrestedchat} onChange={handleInputChange} placeholder='Enter your interested chat' />
//                   <Label htmlFor="Locationproof">Location proof</Label>
//                   </div>

//                  </div>
//               <Button 
//                 type="submit" 
//                 disabled={loading}
//                 className='w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-white border   w-fit transition-colors'
//               >
//                 {loading ? 'Creating Booking...' : 'Schedule Meeting'}
//               </Button>
//             </form>
//           </div>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// }