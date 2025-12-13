function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Discover & Understand',
      description: 'We dive deep into your goals, challenges, and vision to build a clear roadmap.'
    },
    {
      number: '02',
      title: 'Design & Plan',
      description: 'Strategic planning meets thoughtful design to create solutions that work.'
    },
    {
      number: '03',
      title: 'Build & Test',
      description: 'Clean code, rigorous testing, and continuous feedback shape the final product.'
    },
    {
      number: '04',
      title: 'Launch & Scale',
      description: 'We deploy with confidence and support your growth every step of the way.'
    }
  ]

  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-sm uppercase tracking-widest text-purple-500 mb-20">
          How We Work
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-7xl font-bold text-purple-500 mb-6 leading-none">
                {step.number}
              </div>

              {/* Separator Line */}
              <div className="w-12 h-px bg-gray-800 mb-6"></div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
