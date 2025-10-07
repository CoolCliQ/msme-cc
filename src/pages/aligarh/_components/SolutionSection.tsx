const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-6 font-inter bg-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Your All-in-One Solution for Business Growth
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Coolcliq provides a centralized, always-updated knowledge hub for
          MSMEs. Simply select your industry to access everything you need in
          one place.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Solution Points */}
          <div className="flex flex-col space-y-8">
            {/* Guides & Playbooks */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-lg border-2 border-transparent hover:border-indigo-300 transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13.5m0-13.5c-4.446 0-7.922 1.34-10 4.75m10-4.75c4.446 0 7.922 1.34 10 4.75M12 6.253C8.554 6.253 5.078 7.593 3 11m9-4.75c-3.446 0-6.922 1.34-9 4.75M12 6.253c3.446 0 6.922 1.34 9 4.75m-9-4.75V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Guides & Playbooks
                </h3>
                <p className="mt-1 text-gray-600">
                  Get step-by-step playbooks for common scenarios like handling
                  GST notices and filing taxes with confidence.
                </p>
              </div>
            </div>

            {/* Industry-Specific Tools */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-lg border-2 border-transparent hover:border-purple-300 transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-.217.795-.494 1.144-.817-.426-.217-.795-.494-1.144-.817a12.025 12.025 0 01-1.396-.949c-.29-.24-.62-.426-.96-.547a1.5 1.5 0 00-1.25-.084c-.34.121-.67.307-.96.547-1.42 1.15-2.73 2.53-3.8 4.09l-.49 1.18c-.46.81-.88 1.63-1.26 2.45-.19.41-.36.81-.5.98-.38.45-.7.84-1.02 1.25-.3.39-.59.79-.87 1.19-.28.4-.55.8-.82 1.19a4 4 0 00-.77 1.25c-.24.38-.45.74-.6 1.05-.15.31-.27.6-.36.84-.09.24-.16.45-.18.66-.02.21-.02.4-.02.58a1 1 0 00.55.89l.9.4a1 1 0 00.83.21l1.1-.56c.14-.07.28-.15.42-.21l1.1-.56c.3-.15.6-.26.9-.35.3-.09.6-.16.9-.21.3-.05.6-.08.9-.09.3-.01.6-.01.9.01.3.01.6.04.9.08.3.04.6.09.9.15.3.06.6.14.9.22a10.05 10.05 0 001.38.74c.26.1.5.21.72.32l1.1.56c.14.07.28.15.42-.21"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Industry-Specific Tools
                </h3>
                <p className="mt-1 text-gray-600">
                  Discover and compare the best tools for your industry with
                  benefits and pricing recommendations all in one place.
                </p>
              </div>
            </div>

            {/* Strategic Advice */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-lg border-2 border-transparent hover:border-pink-300 transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.045A9.956 9.956 0 0112 2c-5.405 0-10.04 4.093-10.994 9.479a.95.95 0 001.218 1.096l2.365-.985m-1.218 1.096c-.46.81-.88 1.63-1.26 2.45-.19.41-.36.81-.5.98-.38.45-.7.84-1.02 1.25-.3.39-.59.79-.87 1.19-.28.4-.55.8-.82 1.19a4 4 0 00-.77 1.25c-.24.38-.45.74-.6 1.05-.15.31-.27.6-.36.84-.09.24-.16.45-.18.66-.02.21-.02.4-.02.58a1 1 0 00.55.89l.9.4a1 1 0 00.83.21l1.1-.56c.14-.07.28-.15.42-.21l1.1-.56c.3-.15.6-.26.9-.35.3-.09.6-.16.9-.21.3-.05.6-.08.9-.09.3-.01.6-.01.9.01.3.01.6.04.9.08.3.04.6.09.9.15.3.06.6.14.9.22a10.05 10.05 0 001.38.74c.26.1.5.21.72.32l1.1.56c.14.07.28.15.42-.21"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Strategic Advice
                </h3>
                <p className="mt-1 text-gray-600">
                  Access short, evidence-backed tips and fresh insights to help
                  you make smarter business decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="flex justify-center items-center relative py-12 px-6 rounded-3xl">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Industry Tabs */}
              <div className="flex justify-center space-x-4 mb-8 z-10">
                <span className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full shadow-inner">
                  Restaurant
                </span>
                <span className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full shadow-lg">
                  Clothing
                </span>
                <span className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full shadow-inner">
                  Real Estate
                </span>
              </div>

              {/* Rings + Hub */}
              <div className="relative flex items-center justify-center mb-12 mt-10">
                {/* Dotted Rings (smaller now) */}
                <div className="absolute w-64 h-64 rounded-full border border-dashed border-gray-500 animate-spin-slow"></div>
                <div className="absolute w-80 h-80 rounded-full border border-dashed border-gray-500 animate-spin-slow-reverse"></div>

                {/* Central Hub */}
                <div className="relative flex flex-col items-center justify-center w-50 h-50 bg-white rounded-full shadow-xl z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 ml-1 mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.75 6.75a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-1.5zM3.75 13.5a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-1.5zM10.5 6.75a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-1.5zM10.5 13.5a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="mt-2 text-lg font-bold text-gray-800">
                    Your Industry Hub
                  </span>
                </div>
              </div>

              {/* What's New Today Card */}
              <div className="mt-[-4px] z-999 w-72 bg-yellow-50 p-5 rounded-xl shadow-md border-t-4 border-yellow-300 text-center">
                <div className="flex items-center space-x-2 mb-2 justify-center">
                  <span className="text-xl">💡</span>
                  <h4 className="font-bold text-gray-800">What's New Today</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Fresh, relevant insights delivered each time you login to keep
                  your business ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinSlowReverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 40s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spinSlowReverse 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;
