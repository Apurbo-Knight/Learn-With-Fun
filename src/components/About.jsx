import React, { useContext } from "react";
import { authContext } from "./AuthProvider";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GoGoal } from "react-icons/go";
import { LuGoal, LuHeartHandshake, LuUsers } from "react-icons/lu";
import { GiBrain, GiProgression, GiTrophyCup } from "react-icons/gi";
import { BsStopwatchFill } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { TbSettingsCode, TbWorld } from "react-icons/tb";
import "animate.css";

const About = () => {
  const [text] = useTypewriter({
    words: ["Let's Learn With Fun"],
    loop: {},
  });
  const { user } = useContext(authContext);

  // Vocabulary boxes data with Tailwind-safe colors
  const vocabItems = [
    { icon: TbSettingsCode, text: "Interactive Exercises", bg: "bg-teal-100", textColor: "text-teal-600" },
    { icon: GiTrophyCup, text: "Daily Word Challenges", bg: "bg-orange-100", textColor: "text-orange-600" },
    { icon: GiBrain, text: "Contextual Learning", bg: "bg-purple-100", textColor: "text-purple-600" },
    { icon: BsStopwatchFill, text: "Spaced Repetition", bg: "bg-rose-100", textColor: "text-rose-600" },
    { icon: FaPenNib, text: "Smart Word Lists", bg: "bg-pink-100", textColor: "text-pink-600" },
    { icon: IoGameController, text: "Gamification", bg: "bg-blue-100", textColor: "text-blue-600" },
    { icon: TbWorld, text: "Immersive Practice", bg: "bg-yellow-100", textColor: "text-yellow-600" },
    { icon: GiProgression, text: "Progress Tracking", bg: "bg-green-100", textColor: "text-green-600" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10">
      {/* Welcome Heading */}
      <h2 className="animate__animated animate__fadeInDown animate__slow font-bold text-center text-4xl py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mt-20 mb-6">
        Welcome {user?.displayName}, <span className="font-bold">{text}</span>
        <span className="text-blue-800">
          <Cursor cursorStyle="_" />
        </span>
      </h2>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto mb-24">
        <div className="animate__animated animate__fadeInLeft animate__delay-1s bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 rounded-xl p-10 space-y-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
          <div className="bg-blue-200 border border-blue-400 w-12 h-12 rounded-full flex justify-center items-center">
            <LuHeartHandshake className="text-3xl text-blue-600" />
          </div>
          <p className="font-semibold text-3xl text-blue-500">What We Believe</p>
          <p className="font-medium">
            Language learning is a journey of discovery—where culture,
            creativity, and technology come together to unlock new
            possibilities.
          </p>
        </div>

        <div className="animate__animated animate__fadeInRight animate__delay-1s bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-10 space-y-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
          <div className="bg-green-200 border border-green-400 w-12 h-12 rounded-full flex justify-center items-center">
            <LuGoal className="text-3xl text-green-600" />
          </div>
          <p className="font-semibold text-3xl text-green-500">Our Mission</p>
          <p className="font-medium">
            We empower people worldwide to master new languages through
            engaging, accessible, and personalized learning.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-10 space-y-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
          <div className="bg-yellow-200 border border-yellow-400 w-12 h-12 rounded-full flex justify-center items-center">
            <GoGoal className="text-3xl text-yellow-600" />
          </div>
          <p className="font-semibold text-3xl text-yellow-500">Our Goal</p>
          <p className="font-medium">
            We’re building a global community where learners feel supported and
            inspired to communicate confidently—connecting people, one word at a
            time.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-10 space-y-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
          <div className="bg-purple-200 border border-purple-400 w-12 h-12 rounded-full flex justify-center items-center">
            <LuUsers className="text-3xl text-purple-600" />
          </div>
          <p className="font-semibold text-3xl text-purple-500">Our Community</p>
          <p className="font-medium">
            We foster an inclusive learning environment where learners connect,
            share experiences, and grow together across cultures and languages.
          </p>
        </div>
      </div>

      {/* Vocabulary Learning Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 className="animate__animated animate__fadeIn animate__slow text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-center mb-2">
            Fun Ways to Master New Words
          </h2>
          {/* Subheading */}
          <p className="animate__animated animate__fadeIn animate__slow animate__delay-1s text-gray-600 text-center max-w-xl mb-6">
            Explore interactive exercises, daily challenges, and gamified
            learning to expand your vocabulary quickly and enjoyably.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vocabItems.map((item, idx) => (
            <div
              key={idx}
              className={`animate__animated animate__fadeInUp ${item.bg} px-5 py-6 rounded-lg font-semibold flex items-center gap-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg shadow-md`}
            >
              <item.icon className={`text-3xl ${item.textColor}`} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
