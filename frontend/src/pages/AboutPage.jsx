import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Novanex
          </h1>
          <p className="text-xl text-gray-400">
            Learn more about our team, our mission, and what drives us forward.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
