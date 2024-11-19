import React from "react";
import { NavLink } from "react-router-dom";

const StartLearning = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-600  text-center mt-8">
        Start Learning
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
        <NavLink to="/lesson/1">
          <div className="card bg-blue-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 1</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/2">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 2</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/3">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 3</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/4">
          <div className="card bg-blue-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 4</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/5">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 5</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/6">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 6</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/7">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 7</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/8">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 8</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink className="col-span-2" to="/lesson/9">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 9</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink className="col-span-2" to="/lesson/10">
          <div className="card bg-blue-100  shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lesson 10</h2>
              <p>Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="">
      <h2 className="font-bold text-3xl text-blue-500 mb-5 text-center">Tutorial</h2>
      <div>
      <iframe className="rounded-xl w-full" width="560" height="315" src="https://www.youtube.com/embed/1lrz11BbqCA?si=DCSO5KXUKp490bhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>

      <button className='btn bg-blue-400 mx-auto block my-6'><NavLink to="/tutorials">View More</NavLink></button>

    </div>
  );
};

export default StartLearning;
