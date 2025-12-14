import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Sparkles, Rocket, Heart, Users, Lightbulb, Code, Coffee, Zap, Target, Mountain } from 'lucide-react'

function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: "We don't just follow trends—we create them. Every project is a chance to push boundaries and try something new."
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: "We code because we love it. Late nights, complex problems, breakthrough moments—this is what gets us out of bed."
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: "The best ideas come from diverse minds working together. We learn from each other, challenge each other, grow together."
    },
    {
      icon: Zap,
      title: 'Move Fast',
      description: "No bureaucracy, no red tape. Just a team that can pivot quickly and ship quality software at startup speed."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section - Story Driven */}
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">Born at University</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                We're Not Your Typical
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Agency</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Novanex started in a university dorm room with three students, too many energy drinks, and one ambitious idea: 
                <span className="text-white font-semibold"> what if we could build software that actually matters?</span>
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We're not here to be another faceless dev shop. We're students who got tired of seeing bad software in the world, 
                so we decided to do something about it. Now we're building solutions that we're proud to put our names on.
              </p>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-3xl p-8 border border-purple-500/30">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <Coffee className="w-8 h-8 text-purple-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">1,247</div>
                      <div className="text-gray-400">Cups of Coffee</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Code className="w-8 h-8 text-purple-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">50,000+</div>
                      <div className="text-gray-400">Lines of Code</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Rocket className="w-8 h-8 text-purple-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">15+</div>
                      <div className="text-gray-400">Projects Shipped</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission - Non-traditional Layout */}
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-800 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-2xl">
                    <Mountain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  To prove that great software doesn't need decades of experience—just the right mix of 
                  <span className="text-purple-400 font-semibold"> curiosity, courage, and caffeine</span>.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We envision a world where innovative solutions come from unexpected places. Where being young and ambitious 
                  is an advantage, not a liability. Where the best code wins, regardless of who wrote it.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-800 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-2xl">
                    <Target className="w-8 h-8 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Build software that makes people say
                  <span className="text-purple-400 font-semibold"> "Wait, students made this?"</span>
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We're on a mission to deliver enterprise-quality solutions while maintaining the agility and creativity of a 
                  startup. We turn complex problems into elegant code, and wild ideas into working products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Drives Us */}
      <div className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're powered by more than just code. These are the principles that wake us up and keep us going.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* The Reality Check Section - Honest & Raw */}
      <div className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="p-10 md:p-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl border-2 border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Let's Be Real
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-purple-400 font-semibold">Yes,</span> we're students. 
                <span className="text-purple-400 font-semibold"> No,</span> that doesn't mean we're amateurs.
              </p>
              <p>
                While others our age are figuring out their majors, we're deploying production code, managing clients, 
                and learning more in one project than we would in a semester of lectures.
              </p>
              <p>
                We pull all-nighters not because we have to, but because we're genuinely excited about solving that one 
                bug or implementing that perfect feature. We debate architectural decisions over lunch. We dream in code.
              </p>
              <p className="text-white font-semibold">
                We might not have decades of experience, but we have something just as valuable: 
                the hunger to prove ourselves, the willingness to learn anything, and zero legacy baggage holding us back.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Timeline */}
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            The Journey So Far
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent mt-2"></div>
              </div>
              <div className="pb-12">
                <div className="text-purple-400 font-semibold mb-2">The Beginning</div>
                <h3 className="text-2xl font-bold text-white mb-3">First Lines of Code</h3>
                <p className="text-gray-400 leading-relaxed">
                  Started as a university project that we couldn't stop thinking about. One idea turned into late-night coding 
                  sessions, which turned into our first real client.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent mt-2"></div>
              </div>
              <div className="pb-12">
                <div className="text-purple-400 font-semibold mb-2">The Pivot</div>
                <h3 className="text-2xl font-bold text-white mb-3">Making It Official</h3>
                <p className="text-gray-400 leading-relaxed">
                  Realized we were onto something when project requests kept coming. Formed Novanex officially, balancing 
                  classes, exams, and building real-world solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent mt-2"></div>
              </div>
              <div className="pb-12">
                <div className="text-purple-400 font-semibold mb-2">The Growth</div>
                <h3 className="text-2xl font-bold text-white mb-3">Building a Portfolio</h3>
                <p className="text-gray-400 leading-relaxed">
                  From web apps to IoT systems, each project taught us something new. Our reputation grew through word of 
                  mouth and solid work, not expensive marketing.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500 border-2 border-purple-400 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-purple-400 font-semibold mb-2">Today</div>
                <h3 className="text-2xl font-bold text-white mb-3">Just Getting Started</h3>
                <p className="text-gray-400 leading-relaxed">
                  We're shipping production code, managing multiple projects, and somehow still passing our classes. 
                  The future is bright, and we're just warming up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Placeholder */}
      <div className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-400">
              The minds behind the code. Students by day, builders by night.
            </p>
          </div>

          {/* Empty team cards - to be filled later */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-gray-800 flex items-center justify-center">
                  <Users className="w-20 h-20 text-gray-700" />
                </div>
                {/* Content placeholder */}
                <div className="p-6">
                  <div className="h-6 bg-gray-700 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Want to Work With Us?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                We're always looking for exciting projects and cool people to work with. 
                Let's build something incredible together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Get In Touch
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
