import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import About from '../components/About'
import HowWeWork from '../components/HowWeWork'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
