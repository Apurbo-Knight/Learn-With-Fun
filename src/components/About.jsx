import React from "react";

const About = () => {
  return (
    <div className="mb-10">
      <section id="mission" className=" p-6  ">
        <h2 className="animate__animated animate__fadeIn animate__repeat-2 text-3xl font-bold mb-4 text-blue-600 text-center">
          Our Mission
        </h2>
        <p className="text-lg text-justify">
          Our mission is to empower individuals worldwide to master new
          languages by making learning engaging, accessible, and personalized.
          We aim to inspire curiosity and foster confidence in communication,
          connecting people through the power of language. <br />
          We believe that language learning should be a journey of discovery,
          blending culture, creativity, and technology to unlock new
          possibilities. By offering innovative tools and immersive experiences,
          we strive to break barriers and build bridges between communities.{" "}
          <br />
          Our goal is to create a global community where learners feel
          supported, inspired, and connected. Through collaboration and
          continuous improvement, we are committed to transforming the way
          people engage with languages, one word at a time.
        </p>
      </section>

      {/* Vocabulary Learning Section  */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 text-blue-600  text-center animate__animated animate__fadeIn animate__repeat-2">
          We Can Learn Vocabulary In The Following Ways
        </h2>
        <ul className="space-y-4 text-lg text-center">
          <li>
            <span className="font-semibold">Interactive Exercises:</span> Engage
            with quizzes, flashcards, and matching games with real-time
            feedback.
          </li>
          <li>
            <span className="font-semibold">Daily Word Challenges:</span>{" "}
            Discover a new "Word of the Day" with examples and audio
            pronunciation.
          </li>
          <li>
            <span className="font-semibold">Contextual Learning:</span> Learn
            words through real-life scenarios like stories, conversations, and
            videos.
          </li>
          <li>
            <span className="font-semibold">Spaced Repetition:</span> Strengthen
            memory with reminders at optimal intervals.
          </li>
          <li>
            <span className="font-semibold">Personalized Word Lists:</span> Save
            and practice custom word lists with progress tracking.
          </li>
          <li>
            <span className="font-semibold">Gamification:</span> Earn rewards,
            unlock badges, and compete with others to stay motivated.
          </li>
          <li>
            <span className="font-semibold">Immersive Practice:</span> Practice
            vocabulary in interactive dialogues and role-playing exercises.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
