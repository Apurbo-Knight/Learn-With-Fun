import React from "react";

const DataCard = ({ d }) => {
  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "hi-IN";
    window.speechSynthesis.speak(utterance);
  }

  const modalId = `modal_${d.word}`; // unique modal id per word

  // Dynamic gradient based on difficulty
  const bgGradient =
    d.difficulty === "easy"
      ? "from-green-200 to-green-100"
      : d.difficulty === "medium"
      ? "from-blue-200 to-blue-100"
      : "from-red-200 to-red-100";

  return (
    <div
      className={`card rounded-2xl shadow-lg shadow-${d.difficulty}-200 hover:-translate-y-1 hover:shadow-${d.difficulty}-400 transition-transform duration-300 bg-gradient-to-br ${bgGradient} p-5`}
    >
      <div className="card-body space-y-2">
        <h2
          onClick={() => pronounceWord(d.word)}
          className="card-title text-2xl font-bold cursor-pointer text-gray-800 hover:text-gray-900 transition-colors"
        >
          {d.word}
        </h2>
        <p className="font-medium text-gray-700"><span className="text-lg font-semibold text-gray-800">Meaning:</span> {d.meaning}</p>
        <p className="font-medium text-gray-700"><span className="text-lg font-semibold text-gray-800">Pronunciation:</span> {d.pronunciation}</p>
        <p className="font-medium text-gray-700 capitalize"><span className="text-lg font-semibold text-gray-800">Part Of Speech:</span> {d.part_of_speech}</p>

        {/* Open modal with new styled button */}
        <button
          className="w-full py-2 px-4 rounded-full bg-pink-500/80 hover:bg-pink-500/100 text-white font-semibold shadow-md transition-all duration-300 mt-3"
          onClick={() => document.getElementById(modalId).showModal()}
        >
          When To Say
        </button>

        {/* Modal */}
        <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-xl">
            <h3 className="font-bold text-2xl mb-3 text-gray-800">{d.word}</h3>
            <p className="font-medium text-gray-700 mb-2">Meaning: {d.meaning}</p>
            <p className="font-medium text-gray-700 mb-2">When To Say: {d.when_to_say}</p>
            <p className="font-medium text-gray-700 mb-4">Example: {d.example}</p>

            <div className="modal-action">
              <form method="dialog" className="w-full flex justify-center">
                <button className="w-40 py-2 rounded-full bg-pink-500/80 hover:bg-pink-500/100 text-white font-semibold shadow-md transition-all duration-300">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DataCard;
