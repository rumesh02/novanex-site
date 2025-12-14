import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Replace these with your EmailJS credentials
      // Get them from https://www.emailjs.com/
      await emailjs.sendForm(
        'service_ymtk20z',     // Replace with your EmailJS service ID
        'template_8t1o7sm',    // Replace with your EmailJS template ID
        form.current,
        'Hxjp4uKPZdDPrBejq'      // Replace with your EmailJS public key
      )
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Let's Build Something Together
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Fill out the form below and 
            we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:border-purple-600 transition-colors resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          {/* Status Message */}
          {status.message && (
            <div
              className={`p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-900/30 border border-green-700 text-green-400'
                  : 'bg-red-900/30 border border-red-700 text-red-400'
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-3 bg-purple-700 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-12 pt-12 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Or email us directly at{' '}
            <a href="mailto:hello@novanex.com" className="text-purple-400 hover:text-purple-500 transition-colors">
              hello@novanex.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
