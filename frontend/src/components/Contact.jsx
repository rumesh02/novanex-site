function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Let's Build Something Together
        </h2>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your vision to life? We're here to help you build 
          scalable solutions that drive real results.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition-colors duration-200"
        >
          Contact Novanex
        </a>
      </div>
    </section>
  )
}

export default Contact
