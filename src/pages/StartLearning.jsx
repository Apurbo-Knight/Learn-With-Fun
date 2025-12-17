import React from "react";
import { NavLink } from "react-router-dom";
import book from "../assets/book.png";


const StartLearning = () => {
  const lessons = [
    { id: 1, title: "Lesson 1", description: "Explore Vocabularies", color: "pink" },
    { id: 2, title: "Lesson 2", description: "Explore Vocabularies", color: "yellow" },
    { id: 3, title: "Lesson 3", description: "Explore Vocabularies", color: "blue" },
    { id: 4, title: "Lesson 4", description: "Explore Vocabularies", color: "green" },
    { id: 5, title: "Lesson 5", description: "Explore Vocabularies", color: "pink" },
    { id: 6, title: "Lesson 6", description: "Explore Vocabularies", color: "yellow" },
    { id: 7, title: "Lesson 7", description: "Explore Vocabularies", color: "blue" },
    { id: 8, title: "Lesson 8", description: "Explore Vocabularies", color: "green" },
    { id: 9, title: "Lesson 9", description: "Explore Vocabularies", color: "pink", span: 2 },
    { id: 10, title: "Lesson 10", description: "Explore Vocabularies", color: "yellow", span: 2 },
  ];

  const colorClasses = {
    pink: "shadow-pink-200/50 border-pink-100 text-pink-600",
    yellow: "shadow-yellow-200/50 border-yellow-100 text-yellow-600",
    blue: "shadow-blue-200/50 border-blue-100 text-blue-600",
    green: "shadow-green-200/50 border-green-100 text-green-600",
  };

  return (
    <div className="max-w-7xl px-4 md:px-10 mx-auto my-24">
      {/* Start Learning Header */}
      <div className="flex flex-col items-center ">
        
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-center pb-1 animate__animated animate__fadeIn mb-2">
          Start Learning
        </h2>
        {/* subheading */}
         <p className="animate__animated animate__fadeIn animate__slow animate__delay-1s text-gray-600 text-center max-w-xl mb-10">
            Begin your journey to mastering new words
          </p>
      </div>

      {/* Lesson Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {lessons.map((lesson) => (
          <NavLink
            key={lesson.id}
            to={`/lesson/${lesson.id}`}
            className={`bg-white/70 backdrop-blur-md rounded-2xl shadow ${colorClasses[lesson.color]} border py-8 px-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
              lesson.span ? "lg:col-span-2" : ""
            }`}
          >
            <h2 className={`text-2xl font-bold flex items-center gap-2 ${colorClasses[lesson.color].split(" ")[2]}`}>
              {lesson.title}
              <img className="w-5 h-5" src={book} alt="Book Icon" />
            </h2>
            <p className="text-gray-600 mt-2">{lesson.description}</p>
          </NavLink>
        ))}
      </div>

      {/* Tutorial Section */}
      <div className="mt-16">
        <div className="flex flex-col items-center mt-5">
          
          <h2 className="font-bold text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2 text-center">
            Tutorial
          </h2>
          {/* subheading */}
         <p className="animate__animated animate__fadeIn animate__slow animate__delay-1s text-gray-600 text-center max-w-xl mb-10">
            Follow easy video guides to master new words
          </p>
        </div>
        <div className="w-full">
          <iframe
            className="rounded-2xl w-full aspect-video"
            src="https://www.youtube.com/embed/1lrz11BbqCA?si=DCSO5KXUKp490bhY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <NavLink
          to="/tutorials"
          className="btn hover:bg-pink-500  bg-pink-400 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300"
        >
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default StartLearning;
