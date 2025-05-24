import React, { useState, useEffect } from 'react';
import './contactformstyles.css';
import Navbar from '../components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiWhatsappLogoThin } from "react-icons/pi";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Please fill in all required fields.');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowSuccess(false);
    setShowError(false);

    if (!validateForm()) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real application, you would send the data to your server here
      console.log('Form submitted:', {
        ...formData,
        timestamp: new Date().toISOString()
      });

      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Track event (optional)
      trackEvent('form_submit_success', { form_name: 'contact_form' });

    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const trackEvent = (eventName, eventData) => {
    console.log('Event tracked:', eventName, eventData);
    // Add your analytics tracking here
  };

  const contactItems = [
    {
      icon: <MdEmail/>,
      title: 'Email',
      details: 'junaid1230bloch@gmail.com'
    },
    {
      icon: <PiWhatsappLogoThin/>,
      title: 'Phone',
      details: '+91 75728 21862'
    },
    {
      icon: <FaMapLocationDot/>,
      title: 'Address',
      details: 'Vadodara, Gujarat, India'
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 py-8" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-xl border border-gray-700 shadow-2xl" data-aos="fade-right">
            {showSuccess && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6 text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {showError && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mb-6 text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20
                           transition-all duration-300 hover:scale-105 focus:scale-105"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20
                           transition-all duration-300 hover:scale-105 focus:scale-105"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20
                           transition-all duration-300 hover:scale-105 focus:scale-105"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20
                           transition-all duration-300 hover:scale-105 focus:scale-105 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6
                         rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-xl border border-gray-700 shadow-2xl" data-aos="fade-left">
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-700/50 rounded-lg group"
                >
                  <div className="w-60 h-60 flex items-center justify-center mr-4 text-lg big">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 whitespace-pre-line">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default ContactPage;
