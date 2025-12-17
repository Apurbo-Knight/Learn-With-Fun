import React from "react";
import { NavLink } from "react-router-dom";


const Tutorials = () => {
  const videos = [
    "https://www.youtube.com/embed/MLpvXcR4g_4?si=8ElttduPgBGpV-2Y",
    "https://www.youtube.com/embed/FracDV3yuqs?si=FnD26nYa143IhBlF",
    "https://www.youtube.com/embed/6T0NWKiXe4Y?si=7XkTk8yP21XOGX2l",
    "https://www.youtube.com/embed/gGh9uKKcDRw?si=rycdpLct5iBeTHVm",
    "https://www.youtube.com/embed/ogRk5dbT8q0?si=QMNOnkEci0jqt5ga",
    "https://www.youtube.com/embed/OvIrPzuvIfE?si=O-ro0D36kp_hIOWV",
  ];

  return (
    <div className="w-11/12 mx-auto pt-24 pb-10">
      {/* Page Header */}
      <div className="flex flex-col items-center mb-10">
        
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center animate__animated animate__fadeIn">
          Tutorials
        </h2>
        <p className="text-gray-600 mt-2 text-center max-w-xl animate__animated animate__fadeIn">
          Explore our hand-picked tutorial videos to improve your language learning journey.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((src, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <iframe
              className="w-full h-60 md:h-64 lg:h-60"
              src={src}
              title={`YouTube video ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-10">
        <NavLink to="/startLearning">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold shadow-md transition-all duration-300">
            Learn Vocabularies
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Tutorials;
