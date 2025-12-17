import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Success = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <div className="pt-20 px-10 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate__animated animate__bounce">
          Success
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Our milestones reflect our learners’ progress
        </p>
      </div>

      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)} 
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-center">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-pink-200/50 border border-pink-100 py-10 transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-5xl font-bold text-pink-600">
              {counterState && <CountUp start={0} end={500} duration={2} />}+
            </h2>
            <p className="font-semibold text-gray-600 mt-2">Users</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-yellow-200/50 border border-yellow-100 py-10 transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-5xl font-bold text-yellow-600">
              {counterState && <CountUp start={0} end={10} duration={2} />}+
            </h2>
            <p className="font-semibold text-gray-600 mt-2">Lessons</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-blue-200/50 border border-blue-100 py-10 transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-5xl font-bold text-blue-600">
              {counterState && <CountUp start={0} end={1000} duration={2.5} />}+
            </h2>
            <p className="font-semibold text-gray-600 mt-2">Vocabulary</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-green-200/50 border border-green-100 py-10 transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-5xl font-bold text-green-600">
              {counterState && <CountUp start={0} end={60} duration={2} />}+
            </h2>
            <p className="font-semibold text-gray-600 mt-2">Tutorials</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Success;
