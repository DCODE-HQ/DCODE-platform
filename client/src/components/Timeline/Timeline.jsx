import { FileText, Lightbulb, Rocket, Trophy } from 'lucide-react';
import TimelineLine from './TimelineLine';
import TimelineStep from './TimelineStep';

const DCodeTimeline = () => {
  const phases = [
    {
      id: 1,
      title: 'Fork Phase',
      duration: '70 days',
      description: 'Choose a repository and start to explore with basic issues',
      icon: <FileText className="w-6 h-6" />,
      position: 'left'
    },
    {
      id: 2,
      title: 'Spec Phase',
      duration: '15 days',
      description: 'Understand the problem and plan your fix then propose it',
      icon: <Lightbulb className="w-6 h-6" />,
      position: 'right'
    },
    {
      id: 3,
      title: 'Merge Phase',
      duration: '90 days',
      description: 'Contribute your changes and get merged',
      icon: <Rocket className="w-6 h-6" />,
      position: 'left'
    },
    {
      id: 4,
      title: 'Showcase & Recognition',
      duration: 'Completion ceremony',
      description:
        'Top performers receive internship opportunities, and community recognition',
      icon: <Trophy className="w-6 h-6" />,
      position: 'right'
    }
  ];

  return (
    <div
      className="relative w-full min-h-[200vh] bg-black overflow-hidden"
      id="timeline"
    >
      <div
        className="absolute w-[1200px] h-[1200px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(1, 255, 128, 0.06) 0%, rgba(1, 153, 77, 0) 100%)',
          left: '50%',
          top: '10%',
          transform: 'translateX(-50%)'
        }}
      />

      {/* Header */}
      <div className="text-center pt-8 pb-10 px-4">
        <div className="text-green-500 text-sm tracking-widest mb-4">
          TIMELINE
        </div>
        <h1 className="text-4xl md:text-3xl font-semibold text-white">
          <span className="bg-gradient-to-r from-[#BCDD19] to-[#65770D] bg-clip-text text-transparent">
            DCODE
          </span>
          <span className="text-white"> Program Phases</span>
        </h1>
        <p className="text-gray-400 mt-4 text-base max-w-2xl mx-auto opacity-70">
          A structured journey through open-source contribution, from
          exploration to production-level impact
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative  px-4 min-h-[140vh] flex items-center justify-center">
        {/* haze */}
        <div
          className="absolute w-[1200px] h-[1200px] rounded-full blur-3xl opacity-80 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(1, 255, 128, 0.2) 0%, rgba(1, 153, 77, 0) 100%)',
            left: '50%',
            top: '10%',
            transform: 'translateX(-50%)'
          }}
        />

        {/* Central line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 translate-y-23 z-0 h-full flex items-center justify-center pointer-events-none"
          style={{ top: '20px' }}
        >
          <TimelineLine height={1100} />
        </div>

        <div className="relative w-full max-w-6xl mx-auto min-h-[130vh]">
          {phases.map((phase, index) => (
            <TimelineStep
              key={phase.id}
              phase={phase}
              index={index}
              total={phases.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DCodeTimeline;
