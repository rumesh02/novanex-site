import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-24 overflow-hidden">
      <style>{`
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 2200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { opacity: 0; }
        }

        .glow-line-1 {
          animation: drawLine 7s ease-in-out 1s infinite,
                     fadeInOut 7s ease-in-out 1s infinite;
          will-change: stroke-dashoffset, opacity;
        }

        .glow-line-2 {
          animation: drawLine 8.5s ease-in-out 4.2s infinite,
                     fadeInOut 8.5s ease-in-out 4.2s infinite;
          will-change: stroke-dashoffset, opacity;
        }
        
        /* Mobile-optimized blur using drop-shadow instead of SVG filter */
        @media (max-width: 768px) {
          .glow-line-1, .glow-line-2 {
            filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
          }
        }
      `}</style>

      {/* Animated curved lines background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static subtle curves */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-200 200 C 200 280, 600 350, 1000 420 C 1300 480, 1500 540, 1640 600"
            stroke="#1f2937"
            strokeWidth="1"
          />
          <path
            d="M-200 700 C 200 620, 600 550, 1000 480 C 1300 420, 1500 360, 1640 300"
            stroke="#1f2937"
            strokeWidth="1"
          />
        </svg>

        {/* Glowing animated light */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="glow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="glow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
            </linearGradient>

            <filter id="glow-filter">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M-200 200 C 200 280, 600 350, 1000 420 C 1300 480, 1500 540, 1640 600"
            stroke="url(#glow1)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2200"
            strokeDashoffset="2200"
            className="glow-line-1 hidden md:block md:[filter:url(#glow-filter)]"
            vectorEffect="non-scaling-stroke"
          />

          <path
            d="M-200 700 C 200 620, 600 550, 1000 480 C 1300 420, 1500 360, 1640 300"
            stroke="url(#glow2)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2200"
            strokeDashoffset="2200"
            className="glow-line-2 hidden md:block md:[filter:url(#glow-filter)]"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Mobile-optimized versions without SVG filter */}
          <path
            d="M-200 200 C 200 280, 600 350, 1000 420 C 1300 480, 1500 540, 1640 600"
            stroke="url(#glow1)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="2200"
            strokeDashoffset="2200"
            className="glow-line-1 md:hidden"
            vectorEffect="non-scaling-stroke"
          />

          <path
            d="M-200 700 C 200 620, 600 550, 1000 480 C 1300 420, 1500 360, 1640 300"
            stroke="url(#glow2)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="2200"
            strokeDashoffset="2200"
            className="glow-line-2 md:hidden"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12">
          <span className="block text-white">We build</span>
          <span className="block text-white">software that</span>
          <span className="block text-white">
            matters<span className="text-purple-500">.</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed mb-16">
          Premium digital solutions for ambitious companies
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-white hover:text-purple-400 transition-colors text-lg"
          >
            <span className="font-light">Start a project</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-lg"
          >
            <span className="font-light">View work</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
