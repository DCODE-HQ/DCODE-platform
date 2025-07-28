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
    <div className="text-white flex flex-col justify-center h-full w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">
            CONTACT US
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get in Touch with Us
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            We're here to help. Whether you're interested in learning more about
            our initiative or need support, we're happy to assist you.
          </p>
        </div>

        {/* Features List */}
        <div className="mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-5">
              <div className="w-5 h-5 bg-[#7A900F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Check className="w-3 h-3 text-white font-bold" />
              </div>
              <span className="text-white font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            General Contact Info
          </h3>
          <div className="space-y-6 text-sm">
            <div>
              <span className="text-white">Phone: </span>
              <span className="text-gray-400">
                +91 92500 21256 (Rohan Singh)
              </span>
            </div>
            <div>
              <span className="text-white">Email: </span>
              <span className="text-gray-400">dcode.codes@gmail.com</span>
            </div>
            <div>
              <span className="text-white">Location: </span>
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
