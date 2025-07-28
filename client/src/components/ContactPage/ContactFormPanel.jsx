import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ContactFormPanel = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    subject: 'Select one',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    isError: false
  });

  const subjectOptions = [
    'Select one',
    'Programme Related Inquiry',
    'Partnership Inquiry',
    'Sponsorship Request',
    'Project Collaboration',
    'General Feedback',
    'Press or Media Inquiry',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (formData.subject === 'Select one')
      newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubjectSelect = option => {
    setFormData(prev => ({ ...prev, subject: option }));
    setErrors(prev => ({ ...prev, subject: undefined }));
    setIsSubjectOpen(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (!agreedToTerms) {
      alert('Please agree to the Terms of Use and Privacy Policy');
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call with 2-second delay and 20% chance of failure
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.2
            ? resolve()
            : reject(new Error('Simulated failure'));
        }, 2000);
      });
      console.log('Form submitted:', formData);
      setToast({
        show: true,
        message: 'Message sent successfully!',
        isError: false
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        subject: 'Select one',
        message: ''
      });
      setAgreedToTerms(false);
      setTimeout(
        () => setToast({ show: false, message: '', isError: false }),
        3000
      );
    } catch (error) {
      setToast({
        show: true,
        message: 'Failed to send message. Please try again.',
        isError: true
      });
      setTimeout(
        () => setToast({ show: false, message: '', isError: false }),
        3000
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-white flex flex-col justify-center h-full w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[calc(100vh-80px)]">
      <div className="relative z-10 max-w-lg w-full mx-auto md:max-w-md">
        {toast.show && (
          <div
            role="alert"
            aria-live="polite"
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-opacity duration-300 ${
              toast.isError
                ? 'bg-red-500/90 text-white'
                : 'bg-[#7A900F]/90 text-white'
            } ${toast.show ? 'opacity-100' : 'opacity-0'}`}
          >
            {toast.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="first name"
                className={`w-full px-3 py-2 border-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7A900F] focus:border-[#7A900F] text-sm ${
                  errors.firstName ? 'border-red-500' : 'border-gray-800'
                }`}
                aria-describedby={
                  errors.firstName ? 'firstName-error' : undefined
                }
              />
              {errors.firstName && (
                <p id="firstName-error" className="text-red-500 text-xs mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="last name"
                className={`w-full px-3 py-2 border-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7A900F] focus:border-[#7A900F] text-sm ${
                  errors.lastName ? 'border-red-500' : 'border-gray-800'
                }`}
                aria-describedby={
                  errors.lastName ? 'lastName-error' : undefined
                }
              />
              {errors.lastName && (
                <p id="lastName-error" className="text-red-500 text-xs mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email"
              className={`w-full px-3 py-2 border-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7A900F] focus:border-[#7A900F] text-sm ${
                errors.email ? 'border-red-500' : 'border-gray-800'
              }`}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject Dropdown */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Which best describes you?
            </label>
            <div className="relative">
              <button
                id="subject"
                type="button"
                onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                aria-expanded={isSubjectOpen}
                aria-label="Select inquiry type"
                className={`w-full px-3 py-2 border-2 rounded-lg text-left text-white focus:outline-none focus:ring-2 focus:ring-[#7A900F] focus:border-[#7A900F] flex items-center justify-between text-sm ${
                  errors.subject ? 'border-red-500' : 'border-gray-800'
                }`}
              >
                <span
                  className={
                    formData.subject === 'Select one'
                      ? 'text-gray-500'
                      : 'text-white'
                  }
                >
                  {formData.subject}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${isSubjectOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {errors.subject && (
                <p id="subject-error" className="text-red-500 text-xs mt-1">
                  {errors.subject}
                </p>
              )}
              {isSubjectOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto">
                  {subjectOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSubjectSelect(option)}
                      className={`w-full px-3 py-2 text-left hover:bg-gray-700 transition-colors text-sm ${
                        formData.subject === option
                          ? 'bg-gray-700 text-white'
                          : 'text-white'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${
                        index === subjectOptions.length - 1
                          ? 'rounded-b-lg'
                          : ''
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message"
              rows={window.innerWidth < 640 ? 4 : 6}
              className={`w-full px-3 py-2 border-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7A900F] focus:border-[#7A900F] resize-none text-sm ${
                errors.message ? 'border-red-500' : 'border-gray-800'
              }`}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-xs mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={e => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-[#7A900F] bg-gray-800 border-gray-600 rounded focus:ring-2 focus:ring-[#7A900F]/80 accent-[#7A900F]"
                aria-describedby="terms-error"
              />
            </div>
            <label htmlFor="terms" className="text-xs text-gray-400 leading-4">
              I agree to Pixsellz{' '}
              <a
                href="#"
                className="text-[#7A900F] hover:text-[#7A900F]/80 underline"
              >
                Terms of Use
              </a>{' '}
              and{' '}
              <a
                href="#"
                className="text-[#7A900F] hover:text-[#7A900F]/80 underline"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#7A900F]/80 hover:bg-[#7A900F] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A900F]/80 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sticky bottom-4 sm:static ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPanel;
