import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400">
            Ready to start your next project? Let's connect and build something great together.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
