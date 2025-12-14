import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Github, Linkedin, Twitter, Coffee, Instagram } from 'lucide-react'

function ContactPage() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'Not sure yet'
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
      await emailjs.sendForm(
        'service_ymtk20z',
        'template_8t1o7sm',
        form.current,
        'Hxjp4uKPZdDPrBejq'
      )
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      })
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'Not sure yet'
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@novanex.dev',
      description: 'We check this more than we check our grades',
      link: 'mailto:hello@novanex.dev'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+94 (77) 325 0137',
      description: 'Available during reasonable hours (and some unreasonable ones)',
      link: 'tel:+94773250137'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      description: 'Usually in the nearest coffee shop',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '24-36 hours',
      description: 'Unless we\'re in finals week, then give us a bit more time',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/company/novanex-it/', target: '_blank', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/novanex_digital/', target: '_blank', color: 'hover:text-pink-400' },
    { icon: Twitter, label: 'Twitter', link: '#', color: 'hover:text-sky-400' },
  ]

  const quickQuestions = [
    {
      question: "How much does it cost?",
      answer: "Depends on what you need. We're flexible and work with different budgets. Student startup = student-friendly pricing."
    },
    {
      question: "How long will it take?",
      answer: "Most projects: 2-8 weeks. We'll give you a realistic timeline after understanding your needs. No overpromising."
    },
    {
      question: "Can you handle my project while studying?",
      answer: "Yes. We're good at time management (had to be). Plus, we work as a team, so there's always someone available."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Absolutely. We take confidentiality seriously. Your idea is safe with us."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">Let's Talk</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Got an Idea?
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Let's Build It</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
              No corporate forms. No waiting weeks for a response. Just shoot us a message and let's see if we're a good fit.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              (We promise to reply even if we can't take the project. Basic human decency, you know?)
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-800 p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">Send Us a Message</h2>
                  <p className="text-gray-400">Fill this out, or just email us directly. Whatever works for you.</p>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      What kind of project?
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option>Not sure yet</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Custom Software</option>
                      <option>IoT Project</option>
                      <option>Something else entirely</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Tell us about it
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="The more details, the better. But even a rough idea works."
                    />
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <div
                      className={`p-4 rounded-xl ${
                        status.type === 'success'
                          ? 'bg-green-900/30 border border-green-700 text-green-400'
                          : 'bg-red-900/30 border border-red-700 text-red-400'
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-400 mb-1">{info.title}</h3>
                          <p className="text-white font-semibold mb-1">{info.value}</p>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-4">Find Us Online</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className={`p-3 bg-gray-800 rounded-xl text-gray-400 ${social.color} transition-colors`}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Fun Note */}
              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-400/10 rounded-2xl border border-purple-500/20">
                <div className="flex items-start gap-3 mb-3">
                  <Coffee className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Coffee Chat?</h3>
                    <p className="text-sm text-gray-400">
                      If you're local, we're always up for meeting over coffee to discuss your project. Our treat if your idea is really cool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pb-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Quick Questions</h2>
            <p className="text-xl text-gray-400">The stuff people usually ask us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quickQuestions.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800"
              >
                <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Have a different question?</p>
            <p className="text-gray-500">
              Just ask in the form above or email us directly. We don't bite (much).
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Reading?
              </h2>
              <p className="text-lg text-purple-100 mb-6">
                Most people just scroll to the form. But since you're thorough (we like that), here's the deal: 
                we're real people who actually care about building good software. Send us a message. Let's make something cool.
              </p>
              <p className="text-sm text-purple-200">
                — The Novanex Team
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
