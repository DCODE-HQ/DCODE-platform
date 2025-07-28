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

  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const subjectOptions = [
    'Select one',
    'General Inquiry',
    'Technical Support',
    'Sales Question',
    'Partnership',
    'Billing Support',
    'Feature Request',
    'Bug Report'
  ];

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectSelect = option => {
    setFormData(prev => ({
      ...prev,
      subject: option
    }));
    setIsSubjectOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to the Terms of Use and Privacy Policy');
      return;
    }
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="ml-30 text-white py-6 px-8 flex flex-col justify-center relative w-full md:w-1/2 p-8 md:p-16 overflow-auto">
      <div className="relative z-10 max-w-lg w-full mx-auto">
        <div className="space-y-8">
          {/* Name Fields Row */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-5">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="first name"
                className="w-full px-3 py-2 border-gray-800 rounded-lg text-white  focus:outline-none focus:border-[#7A900F] border-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-5">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="last name"
                className="w-full px-3 py-2 border-gray-800 rounded-lg text-white  focus:outline-none focus:border-[#7A900F] border-2 text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email"
              className="w-full px-3 py-2 border-gray-800 rounded-lg text-white  focus:outline-none focus:border-[#7A900F] border-2 text-sm"
            />
          </div>

          {/* Subject Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-5">
              Which best describes you?
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                className="w-full px-3 py-2  border-2 border-gray-800 rounded-lg text-left text-white focus:outline-none focus:border-[#7A900F] flex items-center justify-between text-sm"
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

              {isSubjectOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto">
                  {subjectOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSubjectSelect(option)}
                      className={`w-full px-3 py-2 text-left hover:bg-gray-700 transition-colors text-sm ${
                        formData.subject === option
                          ? 'bg-gray-700'
                          : 'text-white'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${index === subjectOptions.length - 1 ? 'rounded-b-lg' : ''}`}
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
            <label className="block text-sm font-medium text-gray-300 mb-5">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message"
              rows={9}
              className="w-full px-3 py-2.5 border-2 border-gray-800 rounded-lg text-white  focus:outline-none focus:border-[#7A900F]  resize-none text-sm"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={e => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-[#7A900F] bg-gray-800 border-gray-600 rounded focus:ring-[#7A900F]/80 focus:ring-2 accent-[#7A900F]"
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
            onClick={handleSubmit}
            className="w-full bg-[#7A900F]/80 hover:bg-[#7A900F] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A900F]/80 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPanel;
