import { Check } from 'lucide-react';

const ContactInfoPanel = () => {
  const features = [
    'Student-Led Innovation',
    'Collaborative Community',
    'Open Source Friendly',
    'Hands-On Projects',
    'Transparent & Supportive'
  ];

  return (
    <div className="text-white flex flex-col justify-center h-full w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto">
      <div className="relative z-10 max-w-lg mx-auto md:max-w-md">
        {/* Header Section */}
        <div className="space-y-6 mb-10">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">
            CONTACT US
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get in Touch with Us
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            We're here to help. Whether you're interested in learning more about
            our initiative or need support, we're happy to assist you.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-5 h-5 bg-[#7A900F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Check className="w-3 h-3 text-white font-bold" />
              </div>
              <span className="text-white font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white">
            General Contact Info
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-white font-medium">Phone: </span>
              <a
                href="tel:+919250021256"
                className="text-gray-400 hover:text-[#7A900F] transition-colors"
              >
                +91 92500 21256 (Rohan Singh)
              </a>
            </div>
            <div>
              <span className="text-white font-medium">Email: </span>
              <a
                href="mailto:dcode.codes@gmail.com"
                className="text-gray-400 hover:text-[#7A900F] transition-colors"
              >
                dcode.codes@gmail.com
              </a>
            </div>
            <div>
              <span className="text-white font-medium">Location: </span>
              <span className="text-gray-400">
                Rishihood University, NH44, Chowk, Bahalgarh, Sonipat, Kishora,
                Haryana 131001
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPanel;
