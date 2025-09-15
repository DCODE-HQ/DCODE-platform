import { React, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const feedbacks = [
    {
      initial: "V",
      name: "Ved Pawar",
      role: "DCODE Mentor",
      comment: "Loved the structure of your PRs — makes reviewing so easy!",
    },
    {
      initial: "R",
      name: "Rishik",
      role: "DCODE Maintainer",
      comment: "Great job — can you add more test coverage?",
    },
    {
      initial: "A",
      name: "Aditya Kumar",
      role: "DCODE Mentor, DCODE",
      comment:
        "Your refactor reduced the codebase size by 15%. That's pro-level thinking.",
    },
  ];

  const phases = [
    {
      name: "Fork",
      merged: 0,
      open: 0,
      leaderboard: [
        { name: "Ved", score: 600 },
        { name: "Rohan Singh", score: 500 },
        { name: "Aryan Vibhuti", score: 400 },
      ],
    },
    {
      name: "Spec",
      merged: 0,
      open: 0,
      leaderboard: [
        { name: "Ved", score: 800 },
        { name: "Rohan Singh", score: 700 },
        { name: "Aryan Vibhuti", score: 600 },
      ],
    },
    {
      name: "Merge",
      merged: 0,
      open: 0,
      leaderboard: [
        { name: "Ved", score: 1270 },
        { name: "Rohan Singh", score: 1000 },
        { name: "Aryan Vibhuti", score: 920 },
      ],
    },
  ];

  const [activePhase, setActivePhase] = useState(phases[2]);
  const [index, setIndex] = useState(0);
  const mergedTotal = 40;
  const openTotal = 40;
  const mergedPercent = 2;
  const openPercent = 2;
  const weeks = 26;
  const days = 5;
  const levels = [1, 2, 3, 4];

  const data = useMemo(
    () =>
      Array.from(
        { length: weeks * days },
        () => levels[Math.floor(Math.random() * levels.length)]
      ),
    []
  );

  const getColor = (level) => {
    switch (level) {
      case 1:
        return "#1d4428";
      case 2:
        return "#3fa14d";
      case 3:
        return "#56d364";
      case 4:
        return "#6fe87a";
      default:
        return "#1d4428";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 md:px-16 bg-[#121212] text-start mb-24 p-16">
      {/* Hero */}
      <motion.div
        className="max-w-xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-green-500 text-sm tracking-widest mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          MADE ACCESSIBLE
        </motion.h3>
        <motion.h2
          className="text-4xl md:text-3xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Open-Source That Levels You Up
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Build, learn, and grow in the world of real open-source. Ship
          production-ready code, get mentored by industry pros, and craft a
          portfolio that gets noticed.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Real-World Experience */}
        <motion.div
          className="bg-[#768529]/5 border-[1px] border-[#768529]/20 rounded-2xl p-6 flex flex-col text-left h-full w-full max-w-sm mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="text-white font-bold text-md mb-2">
            Real-World Experience
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            Contribute to high-impact repos and write code that ships to
            production.
          </p>
          <motion.div
            className="bg-[#768529]/11 border border-[#768529]/20 rounded-xl p-4 text-left flex flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-2">
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400 mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              <span className="bg-[#1D261D] text-[#BCDD19] text-xs px-2 py-1 rounded">
                MERGED
              </span>
            </div>
            <p className="text-white mb-1 flex items-center">
              <span className="mr-2"></span> feat: Add user authentication
            </p>
            <p className="text-gray-400 text-sm mb-3">
              +127 -43 • 3 files changed
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex-1 h-2 bg-red-800 rounded-full">
                <motion.div
                  className="h-2 bg-green-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Industry Mentorship */}
        <motion.div
          className="bg-[#768529]/5 border-[1px] border-[#768529]/20 rounded-2xl p-6 flex flex-col h-full w-full max-w-sm mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="text-white font-bold text-md mb-2">
            <span className="text-[#BCDD19] mr-2"></span> Industry Mentorship
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            Learn from seniors, get code reviews, and follow workflows used in
            real-world teams.
          </p>
          <motion.div
            className="bg-[#768529]/11 border border-[#768529]/20 rounded-xl p-4 flex flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden h-[120px] mb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col"
                >
                  <div className="flex items-center mb-3">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center mr-3 text-sm font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {feedbacks[index].initial}
                    </motion.div>
                    <div>
                      <motion.p
                        className="text-white text-sm font-semibold leading-tight"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {feedbacks[index].name}
                      </motion.p>
                      <motion.p
                        className="text-gray-400 text-xs"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {feedbacks[index].role}
                      </motion.p>
                    </div>
                  </div>
                  <motion.div
                    className="bg-[#1D261D] text-white text-sm px-4 py-2 rounded-lg border-l-2 border-[#BCDD19]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    "{feedbacks[index].comment}"
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Build Portfolio */}
        <motion.div
          className="bg-[#768529]/5 border-[1px] border-[#768529]/20 rounded-2xl p-6 flex flex-col h-full w-full max-w-sm mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="text-white font-bold text-md mb-2">
            <span className="text-[#BCDD19] mr-2"></span> Build Your Portfolio
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            Turn every commit, pull request, and feature into a story worth
            showing off.
          </p>
          <motion.div
            className="bg-[#768529]/11 border border-[#768529]/20 rounded-xl p-4 flex flex-col scrollbar-hide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-white mb-4">Contributions</p>
            <motion.div
              className="overflow-x-auto scrollbar-hide"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex space-x-1">
                {Array.from({ length: weeks }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col space-y-1">
                    {Array.from({ length: days }).map((_, dayIdx) => {
                      const index = weekIdx * days + dayIdx;
                      const level = data[index];
                      return (
                        <motion.div
                          key={dayIdx}
                          className="w-2.5 h-2.5 rounded-[2px]"
                          style={{ backgroundColor: getColor(level) }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.7 + weekIdx * 0.01 + dayIdx * 0.002,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.2 }}
                        ></motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="flex space-x-3 text-gray-400 text-xs mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              <span>Less</span>
              <div className="flex space-x-1">
                {levels.map((level) => (
                  <div
                    key={level}
                    className="w-2.5 h-2.5 rounded-[2px]"
                    style={{ backgroundColor: getColor(level) }}
                  ></div>
                ))}
              </div>
              <span>More</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Collaborative Learning */}
        <motion.div
          className="bg-[#768529]/5 border-[1px] border-[#768529]/20 rounded-2xl p-4 md:col-span-2 h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-white font-bold mb-1 ml-2 mt-2 flex items-center pb-2">
                Collaborative Learning
              </h3>
              <p className="text-gray-400 text-sm pl-2 pb-2">
                Master professional Git workflows, peer reviews, and dev
                practices that top teams rely on.
              </p>
            </div>
          </div>

          <motion.div
            className="bg-[#768529]/11 border border-[#768529]/20 rounded p-5 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-wrap gap-3 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {phases.map((phase, idx) => (
                <motion.button
                  key={phase.name}
                  onClick={() => setActivePhase(phase)}
                  className={`px-6 py-1 rounded-lg p-3 text-2xs border-[1px] transition-all duration-200 cursor-pointer
                    ${
                      activePhase.name === phase.name
                        ? "bg-[#768529]/30  border-[#768529] text-white"
                        : "bg-[#768529]/6 text-gray-300 border-[#768529]/10 hover:border-[#768529]/15"
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {phase.name.split(" ")[0]}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-5 gap-[1rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="col-span-2 bg-[#768529]/6 px-4 py-2 rounded-lg border border-[#768529]/6">
                <h4 className="text-white font-medium text-2xs mb-1">
                  Pull Requests
                </h4>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-gray-400 pb-2 text-xs">
                      <span>Merged</span>
                      <span className="text-white">{activePhase.merged}</span>
                    </div>
                    <div className="w-full bg-[#1D261D] rounded-full h-1 overflow-hidden mt-0.5">
                      <motion.div
                        className="h-[6px] bg-[#37CD5A] rounded-full"
                        animate={{ width: `${mergedPercent}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-gray-400 pb-2 text-xs">
                      <span>Open</span>
                      <span className="text-white">{activePhase.open}</span>
                    </div>
                    <div className="w-full bg-[#1D261D] rounded-full h-1 overflow-hidden mt-0.5">
                      <motion.div
                        className="h-[6px] bg-yellow-400 rounded-full"
                        animate={{ width: `${openPercent}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-span-3 bg-[#768529]/6 px-4 py-2 rounded-lg border border-[#768529]/6">
                <h4 className="text-white font-medium text-2xs mb-1">
                  Leaderboard
                </h4>
                <div className="space-y-1">
                  {activePhase.leaderboard.slice(0, 3).map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex justify-between"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <span className="text-white text-2xs flex">
                        {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}{" "}
                        {item.name.split(" ")[0]}
                      </span>
                      <span className="text-white text-2xs px-1.5 py-0.5 rounded">
                        {item.score}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div> */}

              <div className="col-span-3 bg-[#768529]/6 px-4 py-2 rounded-lg border border-[#768529]/6">
                <h4 className="text-white font-medium text-2xs mb-1">
                  Leaderboard
                </h4>
                <div className=" p-5 mt-1 flex-grow flex items-center justify-center">
                  <span className="text-gray-300 font-semibold text-md tracking-wider">To Be Anounced - Stay Tuned</span>
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Career Opportunities */}
        <motion.div
          className="bg-[#768529]/5 border-[1px] border-[#768529]/20 rounded-2xl p-6 flex flex-col items-start h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-1">
              <span className="text-[#BCDD19]"></span>Career Opportunities
            </h3>
            <p className="text-gray-400 text-sm">
              Unlock internships, opportunities, and industry connections.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#768529]/11 border border-[#768529]/20 rounded-xl p-4 flex flex-col items-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-3 text-left"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-[#BCDD19] text-xs text-bold">Top Performers</p>
            </motion.div>

            <ul className="space-y-2 w-full text-left">
              {[
                // "Direct internship interviews",
                "An expoerience like no other",
                "1-on-1 industry mentorship",
                "Strong letters of recommendation",
                "Exclusive dev resources & toolkits",
                
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center text-white text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 bg-[#BCDD19] rounded-full mr-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 1.1 + idx * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
