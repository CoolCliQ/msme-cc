const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 px-6 bg-gray-100 font-inter">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          The Information Crisis Facing Indian MSMEs
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Finding reliable, industry-specific information is a challenge. Advice
          is scattered, generic, and often outdated, leading to wasted time and
          poor decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Wasted Time */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-600 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Wasted Time
            </h3>
            <p className="text-gray-600 text-center">
              Endless hours searching for relevant information across countless
              blogs and platforms.
            </p>
          </div>

          {/* Excessive Spending */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-100 text-purple-600 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8h6m-5 0a3 3 0 110-6m-9 6h16a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V10a2 2 0 012-2zm0 0l-1-2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Excessive Spending
            </h3>
            <p className="text-gray-600 text-center">
              Overspending on agencies and experts for simple tasks and outdated
              advice.
            </p>
          </div>

          {/* Poor Decisions */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-pink-100 text-pink-600 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Poor Decisions
            </h3>
            <p className="text-gray-600 text-center">
              Making critical business decisions based on irrelevant or outdated
              information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
