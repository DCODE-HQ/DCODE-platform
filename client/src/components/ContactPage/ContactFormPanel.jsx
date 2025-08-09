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
      setToast({
        show: true,
        message: 'Please agree to the terms and conditions.',
        isError: true
      });
      setTimeout(
        () => setToast({ show: false, message: '', isError: false }),
        3000
      );
      return;
    }
    setIsSubmitting(true);
    try {
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
    } catch {
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

  // Fixed input class logic with proper border styling
  const inputClasses = hasError =>
    `w-full px-3 py-2 border-2 rounded-lg text-white bg-transparent focus:outline-none text-sm transition-colors ${
      hasError
        ? 'border-red-500 focus:border-red-500'
        : 'border-gray-800 focus:border-[#7A900F]'
    }`;

  return (
    <div className="text-white flex flex-col justify-center h-full w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[calc(100vh-80px)]">
      <div className="relative z-10 max-w-lg w-full mx-auto md:max-w-md">
        {toast.show && (
          <div
            role="alert"
            aria-live="polite"
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-opacity duration-300 text-sm sm:text-base z-50 ${
              toast.isError
                ? 'bg-red-500/90 text-white'
                : 'bg-[#7A900F] text-white'
            }`}
          >
            {toast.message}
          </div>
        )}

        <div className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['firstName', 'lastName'].map(field => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-300 mb-2 capitalize"
                >
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  id={field}
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={field.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  className={inputClasses(errors[field])}
                />
                {errors[field] && (
                  <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Email */}
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
              className={inputClasses(errors.email)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
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
                className={`${inputClasses(errors.subject)} flex items-center justify-between`}
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
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
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
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message */}
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
              rows={4}
              className={`${inputClasses(errors.message)} resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-3">
            <input
              id="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={e => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 text-[#7A900F] bg-gray-800 border-gray-600 rounded focus:ring-2 focus:ring-[#7A900F] accent-[#7A900F]"
            />
            <label htmlFor="terms" className="text-xs text-gray-400 leading-4">
              I agree to DCODE's{' '}
              <a href="#" className="text-[#7A900F] hover:underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#7A900F] hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className={`w-full bg-[#7A900F] hover:bg-[#7A900F] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A900F] focus:ring-offset-2 focus:ring-offset-gray-900 text-sm ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPanel;
