import Illustration from '../../../public/images/Illustration1.png';

export default function LeftSignup() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-12"
      style={{
        fontFamily: '"Zen Kaku Gothic Antique", sans-serif',
        backgroundColor: '#121212'
      }}
    >
      <h1 className="text-5xl font-extrabold text-white mb-10">
        D<span className="text-[#BCDD19]">CODE</span>
      </h1>
      <div className="relative z-10 w-[350px] h-[480px] overflow-hidden">
        <img
          src={Illustration}
          alt="Illustration"
          className="w-full h-full object-cover"
          style={{
            maskImage:
              'radial-gradient(circle at center, black 50%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black 50%, transparent 100%)'
          }}
        />
        <div
          className="absolute -inset-5 pointer-events-none z-20 w-350"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(0, 0, 0, 0) 50%,
                rgba(18, 18, 18, 1) 100%
              )
            `
          }}
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl text-white font-semibold leading-tight mt-6 mb-3">
        Online Community For <br />
        <span className="text-[#BCDD19]">OPEN SOURCE</span> Developers
      </h2>

      {/* Description */}
      <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  );
}
