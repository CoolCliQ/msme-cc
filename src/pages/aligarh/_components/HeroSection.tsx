import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden flex flex-col font-inter">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

      {/* Interactive Background Orbs */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${
            mousePosition.y
          }%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
          `,
        }}
      ></div>

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <header className="w-full p-4 md:p-6 lg:p-8 flex justify-between items-center  bg-[#bg-gray-900]/80 backdrop-blur-md shadow-sm border-b border-white/20 fixed top-0 left-0 z-50  h-18">
        <div className="flex items-center space-x-3">
          {/* Enhanced Logo */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Coolcliq
          </span>
        </div>

        {/* Enhanced CTA Button */}
        <button
          onClick={() => scrollToSection("cta")}
          className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center space-x-2">
            <span>Get Started for Free</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </header>

      {/* Enhanced Hero Content */}
      <main className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-left p-6 md:p-12 lg:p-16 pt-24">
        {/* Text & CTA Block */}
        <div
          className={`flex-1 max-w-2xl lg:max-w-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 10,000+ MSMEs
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight md:leading-snug mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
              Grow Your MSME.
            </span>
            <br />
            <span className="text-gray-900">Stress-Free.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            End the endless search. Access a centralized, always-updated hub for
            industry-specific guides, tools, and tips to take your business to
            the next level.
          </p>

          {/* Enhanced CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("cta")}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
                <span>Access Your Free Account</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <button className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border-2 border-gray-200 rounded-full hover:border-indigo-300 hover:bg-indigo-50">
              <span className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 011.414.586L14.828 14.828M9 10V6a2 2 0 012-2h2a2 2 0 012 2v4m-6 4v10a1 1 0 001 1h4a1 1 0 001-1V14a1 1 0 00-1-1H9z"
                  />
                </svg>
                <span>Watch Demo</span>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by leading MSMEs across India
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
              {["Restaurant", "Clothing", "Real Estate", "Retail"].map(
                (industry, index) => (
                  <div key={industry} className="text-center">
                    <div className="text-2xl mb-1">
                      {index === 0 && "🍽️"}
                      {index === 1 && "👕"}
                      {index === 2 && "🏠"}
                      {index === 3 && "🛒"}
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {industry}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Visual Element */}
        <div
          className={`relative flex-1 mt-12 lg:mt-0 lg:ml-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-full max-w-md lg:max-w-xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto relative z-10"
              viewBox="0 0 600 400"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient
                  id="centralGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#6366f1", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#a955f7", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>

              {/* Enhanced Central Hub */}
              <circle
                cx="300"
                cy="200"
                r="120"
                fill="url(#centralGradient)"
                filter="url(#glow)"
                className="animate-pulse-slow"
              />
              <circle
                cx="300"
                cy="200"
                r="100"
                fill="rgba(255,255,255,0.9)"
                className="animate-pulse-slow"
              ></circle>
              <defs>
                <clipPath id="circleClip">
                  <circle cx="0" cy="0" r="60" />
                </clipPath>
              </defs>

              {/* Central Icon */}
              <g transform="translate(300, 200)">
                <circle r="40" fill="#6366f1" opacity="0.1" />
                {/* Image inside central circle */}
              </g>

              {/* Enhanced Business Icons with Better Animation */}
              <g transform="translate(150, 120)">
                <g className="animate-float-1">
                  <circle
                    r="30"
                    fill="#f59e0b"
                    opacity="0.9"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="8"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    🍔
                  </text>
                  <text
                    x="0"
                    y="-50"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#6366f1"
                    fontWeight="bold"
                  >
                    Restaurant
                  </text>
                </g>
              </g>

              <g transform="translate(450, 120)">
                <g className="animate-float-2">
                  <circle
                    r="30"
                    fill="#ec4899"
                    opacity="0.9"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="8"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    👗
                  </text>
                  <text
                    x="0"
                    y="-50"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#6366f1"
                    fontWeight="bold"
                  >
                    Fashion
                  </text>
                </g>
              </g>

              <g transform="translate(150, 280)">
                <g className="animate-float-3">
                  <circle
                    r="30"
                    fill="#10b981"
                    opacity="0.9"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="8"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    🏠
                  </text>
                  <text
                    x="0"
                    y="45"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#6366f1"
                    fontWeight="bold"
                  >
                    Real Estate
                  </text>
                </g>
              </g>

              <g transform="translate(450, 280)">
                <g className="animate-float-4">
                  <circle
                    r="30"
                    fill="#8b5cf6"
                    opacity="0.9"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="8"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    🛒
                  </text>
                  <text
                    x="0"
                    y="45"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#6366f1"
                    fontWeight="bold"
                  >
                    Retail
                  </text>
                </g>
              </g>

              {/* Enhanced Connection Lines with Gradient */}
              <defs>
                <linearGradient
                  id="lineGradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#f59e0b", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#6366f1", stopOpacity: 0.8 }}
                  />
                </linearGradient>
                <linearGradient
                  id="lineGradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ec4899", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#6366f1", stopOpacity: 0.8 }}
                  />
                </linearGradient>
                <linearGradient
                  id="lineGradient3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#10b981", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#6366f1", stopOpacity: 0.8 }}
                  />
                </linearGradient>
                <linearGradient
                  id="lineGradient4"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#8b5cf6", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#6366f1", stopOpacity: 0.8 }}
                  />
                </linearGradient>
              </defs>

              <path
                d="M180 120 Q 240 160, 300 200"
                stroke="url(#lineGradient1)"
                strokeWidth="3"
                fill="none"
                className="animate-draw-1"
              />
              <path
                d="M420 120 Q 360 160, 300 200"
                stroke="url(#lineGradient2)"
                strokeWidth="3"
                fill="none"
                className="animate-draw-2"
              />
              <path
                d="M180 280 Q 240 240, 300 200"
                stroke="url(#lineGradient3)"
                strokeWidth="3"
                fill="none"
                className="animate-draw-3"
              />
              <path
                d="M420 280 Q 360 240, 300 200"
                stroke="url(#lineGradient4)"
                strokeWidth="3"
                fill="none"
                className="animate-draw-4"
              />

              {/* Data Flow Particles */}
              {[1, 2, 3, 4].map((i) => (
                <circle
                  key={i}
                  r="3"
                  fill="#6366f1"
                  opacity="0.8"
                  className={`animate-particle-${i}`}
                >
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <path
                      d={`M${
                        i === 1
                          ? "180 120"
                          : i === 2
                          ? "420 120"
                          : i === 3
                          ? "180 280"
                          : "420 280"
                      } Q ${
                        i <= 2
                          ? i === 1
                            ? "240 160"
                            : "360 160"
                          : i === 3
                          ? "240 240"
                          : "360 240"
                      }, 300 200`}
                    />
                  </animateMotion>
                </circle>
              ))}
            </svg>
          </div>
        </div>
      </main>

      {/* Enhanced Animations & Styles */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s infinite ease-in-out;
        }

        @keyframes floatBusiness {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
        }
        .animate-float-1 {
          animation: floatBusiness 3s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: floatBusiness 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-float-3 {
          animation: floatBusiness 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-4 {
          animation: floatBusiness 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 1000;
            stroke-dasharray: 1000;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
        }
        .animate-draw-1 {
          animation: drawLine 2s ease-out forwards;
          animation-delay: 1s;
        }
        .animate-draw-2 {
          animation: drawLine 2s ease-out forwards;
          animation-delay: 1.3s;
        }
        .animate-draw-3 {
          animation: drawLine 2s ease-out forwards;
          animation-delay: 1.6s;
        }
        .animate-draw-4 {
          animation: drawLine 2s ease-out forwards;
          animation-delay: 1.9s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
