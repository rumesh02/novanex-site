function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-sm uppercase tracking-widest text-purple-500 mb-16">
          Why Novanex
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Headline */}
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              We build solutions that drive real impact.
            </h3>
          </div>

          {/* Right Column - Description */}
          <div className="flex items-center">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We are a software-focused team dedicated to building scalable, 
              real-world solutions that matter. Quality, trust, and long-term 
              partnerships define how we work. We don't just deliver projects—we 
              create lasting value for businesses ready to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
