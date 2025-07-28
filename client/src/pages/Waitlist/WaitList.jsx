import { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, Star, Code, Users } from 'lucide-react';
import { MdOutlineRocket } from 'react-icons/md';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL;

export default function WaitList() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [joinedCount, setJoinedCount] = useState(10);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    college: ''
  });
  const [userToken, setUserToken] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/waitlist/count`);
        setJoinedCount(response.data.count);
      } catch (err) {
        console.error('Failed to fetch waitlist count:', err);
      }
    };
    fetchWaitlistCount();
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    if (step === 0) {
      const { data } = await axios.post(`${API_URL}/api/waitlist/join`, {
        email: formData.email
      });

      if (data.token) {
        setUserToken(data.token);
        setStep(1);
        toast[data.type || 'success'](data.message || 'Step 1 complete');
      } else {
        toast.error(data.message || 'No token received!');
      }

    } else if (step === 1) {
      if (!formData.college) {
        toast.error('Please enter your college name!');
        return;
      }
      const { data } = await axios.patch(`${API_URL}/api/waitlist/update`, {
        token: userToken,
        college: formData.college
      });

      toast[data.type || 'success'](data.message || 'Step 2 complete');
      setShowSuccess(true);
      setFormData({ email: '', college: '' });
      setStep(0);
      setUserToken('');
    }

  } catch (err) {
    console.error(err);
    const message = err?.response?.data?.message || "Please try again later";
    toast.error(message);
  } finally {
    setIsSubmitting(false);
  }
};


  const ellipsePositions = [
    { top: '33%', left: '68%', scale: 0.8 },
    { top: '90%', left: '16%', scale: 0.8 },
    { top: '70%', left: '35%', scale: 0.5 },
    { top: '60%', left: '60%', scale: 0.7 },
    { top: '40%', left: '20%', scale: 1 },
    { top: '70%', left: '80%', scale: 0.5 }
  ];

  return (
    <div className="relative flex flex-col justify-start min-h-screen overflow-hidden text-white select-none font-inter bg-[#121212]/20" style={{ fontFamily: 'Inter, sans-serif' }}>

      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/Pattern.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] sm:w-[100vw] sm:h-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsla(70, 80%, 48%, 55%) 0%, hsla(0, 0%, 7%, 0%) 100%)'
          }}
        />
      </div>


      {ellipsePositions.map((ellipse, i) => (
        <img
          key={i}
          src="/images/Ellipse 18.svg"
          alt=""
          className="absolute"
          style={{
            top: ellipse.top,
            left: ellipse.left,
            transform: `scale(${ellipse.scale})`,
            filter: 'blur(6px) drop-shadow(0 0 8px #37CD5A)',
          }}
        />
      ))}


      {/* <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            `linear-gradient(rgba(18,18,18, 0%) 1px, transparent 1px),
             linear-gradient(90deg, rgba(18,18,18, 80%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      /> */}


      <main className="relative z-10 flex flex-col items-center w-full max-w-4xl px-8 py-10 mx-auto">

        <div className="inline-flex items-center px-6 py-2 mt-6 text-sm font-bold text-[#BCDD19]/70 bg-[#BCDD19]/10 rounded-full mb-6">
          Join Today
        </div>


        <h2 className="mb-4 text-4xl font-bold tracking-tight text-center md:text-5xl">
          Join the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BCDD19] to-[#65770D]">
            DCODE
          </span>{' '}
          waitlist now
        </h2>
        <p className="text-lg font-medium text-[#D5D5D5]/70 md:text-lg text-center mb-8">
          Your gateway to real-world open source
        </p>


        <p className="sm:text-2xl text-xl md:text-md mb-14 text-center text-[#D5D5D5]">
          <span className="mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#BCDD19] to-[#65770D] text-4xl font-bold md:text-5xl">
            {joinedCount.toLocaleString()}
          </span>
          developers have already joined
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-xl border-3 py-8 border-[#7A900F] rounded-full overflow-hidden bg-[#121212]/50"
          style={{ height: '56px' }}
        >
          <div className="relative w-full h-full">

            <div
              className={`absolute inset-0 flex items-center transition-all duration-500 ${step === 0
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-full pointer-events-none'
                }`}
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="flex-grow sm:px-6 sm:pl-12 px-4 pl-6 sm:text-lg text-sm text-[#d5d5d5] placeholder-[#d5d5d5]/70 outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`h-full sm:p-8 px-4 py-8 font-medium cursor-pointer flex items-center justify-center text-white transition-colors sm:text-normal text-sm ${isSubmitting
                  ? 'bg-[#7A900F]/50 cursor-not-allowed'
                  : 'bg-[#7A900F] hover:bg-[#60720c]'
                  }`}
              >
                {isSubmitting ? 'Please wait...' : 'Join Waitlist'}
              </button>
            </div>


            {/* College step */}
            <div
              className={`absolute inset-0 flex items-center transition-all duration-500 ${step === 1
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full pointer-events-none'
                }`}
            >
              <input
                type="text"
                placeholder="Enter Your College"
                value={formData.college}
                onChange={(e) =>
                  setFormData({ ...formData, college: e.target.value })
                }
                className="flex-grow sm:px-6 sm:pl-12 px-4 pl-6 sm:text-lg text-sm text-[#d5d5d5] placeholder-[#d5d5d5]/70 outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`h-full sm:p-8 px-4 py-8 font-medium cursor-pointer flex items-center justify-center text-white transition-colors sm:text-normal text-sm ${isSubmitting
                  ? 'bg-[#7A900F]/50 cursor-not-allowed'
                  : 'bg-[#7A900F] hover:bg-[#60720c]'
                  }`}
              >
                {isSubmitting ? 'Please wait...' : 'Join Waitlist'}
              </button>
            </div>
          </div>
        </form>


        <div className="flex items-center justify-center w-full mt-4 text-base md:text-xs">
          <div className="flex items-center mr-3 space-x-1">
            {[1, 2, 3, 4, 5].map(i => {
              const fillPercent = i <= Math.floor(4.4)
                ? 100
                : i === Math.ceil(4.6)
                  ? (4.6 % 1) * 100
                  : 0;

              return (
                <div key={i} className="relative w-4 h-4">
                  <Star className="absolute w-4 h-4 text-gray-600 fill-gray-600" />
                  <div
                    className="absolute top-0 left-0 h-4 overflow-hidden"
                    style={{ width: `${fillPercent}%` }}
                  >
                    <Star className="w-4 h-4 text-[#7A900F] fill-[#7A900F]" />
                  </div>
                </div>
              );
            })}
          </div>
          <span className="text-[#D5D5D5] sm:text-lg text-sm">
            4.4 Rating based on 600+ students
          </span>
        </div>


        <div className="flex sm:flex-row flex-col justify-between sm:gap-20 gap-10 /w-full /max-w-xl /p-4 sm:mt-24 mt-16">
          {[
            { Icon: Code, label: 'Contributors', value: '500+' },
            { Icon: Users, label: 'Colleges', value: '10+' },
            { Icon: MdOutlineRocket, label: 'Projects', value: '50+' },
            // eslint-disable-next-line no-unused-vars
          ].map(({ Icon, label, value }, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-14 h-14 flex items-center justify-center bg-[#37CD5A]/20 rounded-lg">
                <Icon className="w-7 h-7 text-[#37CD5A]" />
              </div>
              <div>
                <p className="sm:text-xl font-bold text-[#d5d5d5] text-lg">{value}</p>
                <p className="sm:text-lg text-sm text-[#d5d5d5] font-semibold">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-md p-8 mx-4 text-center border shadow-2xl bg-green-500/10 border-green-500/20 rounded-2xl backdrop-blur-sm">
              <CheckCircle className="w-14 h-14 text-[#7A900F] mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-[#7A900F] mb-3">
                You're In!
              </h3>
              <p className="text-lg text-gray-300">
                Welcome to DCODE! We&apos;ll notify you as soon as we launch.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative w-full pb-6 mt-auto sm:text-sm text-xs text-center text-[#d5d5d5]/70">
        <div className="absolute inset-x-0 -bottom-6.5 opacity-30 flex justify-center z-0 pointer-events-none select-none">
          <img src="/images/Waitlist.png" alt="Waitlist Footer" />
        </div>
        <p>* These are expected numbers, they may vary.</p>
        <p>© 2025 DCODE. Open source platform for modern development.</p>
      </footer>
    </div>
  );
}
