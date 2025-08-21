import Button from '../ui/Button/Button';

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between h-screen px-6 py-10 overflow-hidden bg-black select-none md:px-14">
      {/* Top Heading Section */}
      <div className="z-10 w-full mb-6 animate-fadeInUp">
        <h1
          className="max-w-[70rem] text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          style={{ fontFamily: 'poppins' }}
        >
          The{' '}
          <span className="text-[#BCDD19] animate-gradient">Open Source</span>{' '}
          Platform Where
          <br />
          {`Builders Shape`}
          <span className="text-[#BCDD19] animate-gradient">{` Tomorrow’s `}</span>
          {`World`}
        </h1>

        <p className="max-w-2xl mt-3 text-base text-gray-300 sm:text-md">
          Work on <span className="text-[#BCDD19]">large projects</span>, ship
          code that matters, and{' '}
          <span className="text-[#BCDD19]">
            build a public track record of your skills.
          </span>{' '}
          DCODE is where you start small, level up fast, and make <br /> your
          mark in the <span className="text-[#BCDD19]">open source world</span>.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="z-10 py-6 mt-1 space-y-5 md:py-10 md:mb-[2rem] md:space-y-6 md:w-5/12 animate-fadeInUp">
        <p className="mb-2 text-lg text-white sm:text-md md:text-md">
          From first commit to maintainer.
          <br />
          Learn, build, and inspire.
          <br />
          <span className="text-[#BCDD19] font-semibold">That's DCODE.</span>
        </p>
        <div className="flex flex-col pt-3 space-y-3 sm:pt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button className="w-full sm:w-auto !py-2 !px-4">
            <a href="/waitlist">Waitlist</a>
          </Button>
        </div>
      </div>

      {/* Floating Image */}
      <div className="absolute right-0 z-0 bottom-[5.2rem] animate-float hidden sm:block">
        <img
          src="/images/Hero.png"
          alt="Hero graphic"
          className="w-[600px] sm:w-[800px] md:w-[850px] max-w-none"
        />
      </div>
    </section>
  );
};

export default Hero;
