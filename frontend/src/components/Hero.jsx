const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-24">
      {/* Minimal abstract grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-900" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gray-900" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Headline - Left aligned, massive typography */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12">
          <span className="block text-white">We build</span>
          <span className="block text-white">software that</span>
          <span className="block text-white">matters<span className="text-purple-500">.</span></span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed mb-16">
          Premium digital solutions for ambitious companies
        </p>

        {/* CTA - Minimal */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-white hover:text-purple-400 transition-colors text-lg"
          >
            <span className="font-light">Start a project</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
