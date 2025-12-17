import React from "react";

import { BiMessageSquare, BiPlanet, BiWorld } from "react-icons/bi";

const Importance = () => {
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 md:px-10">
      <h2 className="text-center text-4xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
        Benefits of Learning a New Language
      </h2>

      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur-lg border border-pink-100 rounded-2xl shadow-lg shadow-pink-100/50 hover:shadow-pink-300/50 transition duration-300 p-6">
          <div className="flex items-center gap-3 mb-2">
            <BiMessageSquare className="text-pink-500 w-7 h-7" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Improves Communication Skills
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Learning another language enhances your ability to communicate — not
            only in the foreign language but also in your native one. It
            strengthens your vocabulary, grammar, and empathy by understanding
            diverse cultures and perspectives.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg border border-yellow-100 rounded-2xl shadow-lg shadow-yellow-100/50 hover:shadow-yellow-300/50 transition duration-300 p-6">
          <div className="flex items-center gap-3 mb-2">
            <BiWorld className="text-yellow-500 w-7 h-7" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Expands Global Job Opportunities
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            In a globalized economy, multilingual professionals stand out.
            Knowing multiple languages opens doors to international business,
            tourism, translation, and diplomacy—showing adaptability and
            initiative.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-lg shadow-blue-100/50 hover:shadow-blue-300/50 transition duration-300 p-6">
          <div className="flex items-center gap-3 mb-2">
            <BiPlanet className="text-blue-500 w-7 h-7" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Enhances Travel Experiences
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Knowing the local language makes your travel more immersive and
            enjoyable. It helps you connect with locals, explore hidden spots,
            and understand the country’s culture, traditions, and stories more
            deeply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Importance;
