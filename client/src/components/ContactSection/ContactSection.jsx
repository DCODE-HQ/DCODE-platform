import { Code, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="flex justify-center items-center pb-12 bg-black relative overflow-hidden">
      <div className="absolute w-[600px] h-[420px] bg-[#01FF80] opacity-10 blur-[100px] rounded-full z-0" />

      <div className="w-[1227px] h-[367px] bg-[#151515] border border-[rgba(25,221,113,0.3)] rounded-[20px] relative z-10 overflow-hidden flex">
        

        <div className="w-[40%] h-full flex items-center justify-center relative">

          <div className="w-[70px] h-[70px] bg-[rgba(1,153,77,0.2)] border border-[rgba(25,221,113,0.3)] rounded-[15px] flex items-center justify-center z-10">
            <Code className="text-lime-400 w-6 h-6" />
          </div>
          <span className="absolute top-[20%] left-[10%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            React
          </span>
          <span className="absolute top-[20%] right-[18%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            AI/ML
          </span>
          <span className="absolute top-[50%] left-[5%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            Open Source
          </span>
          <span className="absolute top-[50%] right-[15%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            JavaScript
          </span>
          <span className="absolute bottom-[25%] left-[25%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            Node.js
          </span>
          <span className="absolute bottom-[25%] right-[25%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            Python
          </span>
          <span className="absolute bottom-[5%] left-[15%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            Vue.js
          </span>
          <span className="absolute bottom-[5%] right-[15%] px-2 py-0.5 text-[#01994D] text-[15px] bg-[rgba(25,221,113,0.05)] border border-[rgba(118,133,41,0.3)] rounded-full">
            Angular
          </span>
        </div>

        
        <div className="w-[60%] h-full flex items-center justify-center text-white px-12">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Ready to boost your{' '}
              <span className="text-[#01FF80]">development?</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-[500px]">
              Interested in becoming a{' '}
              <span className="text-green-400 font-medium">
                Campus Ambassador
              </span>{' '}
              or featuring your repository on{' '}
              <span className="text-green-400 font-medium">DCODE</span>? Feel
              free to reach out!
            </p>

            <div className="flex gap-3">
              <button className="bg-[#BCDD19] text-black font-medium px-5 py-3 rounded text-sm transition-colors duration-200 flex items-center gap-2">
                Contact us
              </button>

              <button className="text-white p-3 rounded border border-[#D5D5D533] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </button>

              <button className="text-white p-3 rounded border border-[#D5D5D533] flex items-center justify-center">
                <FaWhatsapp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
