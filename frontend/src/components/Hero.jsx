const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-dark/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-white">Building the Future</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-accent to-purple-light">
            One Solution at a Time
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We craft premium software solutions that transform businesses and 
          elevate digital experiences to new heights.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-purple-accent hover:bg-purple-light text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-accent/50 hover:shadow-purple-light/50 hover:scale-105 w-full sm:w-auto"
          >
            Start Your Project
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-transparent border-2 border-purple-accent hover:border-purple-light text-purple-accent hover:text-purple-light font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            View Our Work
          </a>
        </div>

        {/* Optional: Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
