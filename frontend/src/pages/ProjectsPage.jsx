import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Custom Software', 'IoT']

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Started as "just a simple store" and evolved into a full platform. Real-time inventory, payment processing, analytics—the works. Learned a lot about scale on this one.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      date: 'November 2025',
      link: '#',
      github: '#',
      highlights: [
        'Real-time inventory tracking',
        'Multi-vendor support',
        'Advanced analytics dashboard',
        'Payment gateway integration'
      ]
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'Mobile Apps',
      description: 'Built this while trying to get in shape ourselves (ironic, right?). Tracks workouts, nutrition, integrates with wearables. Actually use it daily.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      date: 'October 2025',
      link: '#',
      github: '#',
      highlights: [
        'Workout tracking & planning',
        'Nutrition calculator',
        'Social sharing features',
        'Wearable device integration'
      ]
    },
    {
      id: 3,
      title: 'Smart Home Automation',
      category: 'IoT',
      description: 'Started in a dorm room, now controls lights, AC, and security. Voice commands, energy monitoring, the whole smart home package. Our proudest IoT project.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
      technologies: ['Arduino', 'MQTT', 'React', 'AWS IoT', 'Alexa'],
      date: 'September 2025',
      link: '#',
      github: '#',
      highlights: [
        'Voice assistant integration',
        'Energy consumption monitoring',
        'Automated schedules',
        'Remote device control'
      ]
    },
    {
      id: 4,
      title: 'CRM System',
      category: 'Custom Software',
      description: 'Client hated their bloated CRM. We built them a lean, mean, customer-tracking machine. Does exactly what they need, nothing they don\'t.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
      date: 'August 2025',
      link: '#',
      github: '#',
      highlights: [
        'Lead management & tracking',
        'Sales pipeline visualization',
        'Team collaboration tools',
        'Custom reporting & analytics'
      ]
    },
    {
      id: 5,
      title: 'Educational Learning Platform',
      category: 'Web Development',
      description: 'Online learning should be better. Built this with WebRTC for live classes, quizzes that actually help, and tracking that makes sense. Students actually like using it.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      technologies: ['Next.js', 'WebRTC', 'MongoDB', 'Stripe', 'AWS S3'],
      date: 'July 2025',
      link: '#',
      github: '#',
      highlights: [
        'Live video streaming',
        'Interactive quizzes',
        'Progress tracking',
        'Certificate generation'
      ]
    },
    {
      id: 6,
      title: 'Restaurant Ordering App',
      category: 'Mobile Apps',
      description: 'Local restaurant needed an app fast. Built in Flutter, deployed in weeks. Order food, book tables, earn rewards. Simple, fast, works.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'Google Maps API'],
      date: 'June 2025',
      link: '#',
      github: '#',
      highlights: [
        'Online ordering & delivery',
        'Table reservation system',
        'Loyalty rewards program',
        'Real-time order tracking'
      ]
    },
    {
      id: 7,
      title: 'Industrial Monitoring System',
      category: 'IoT',
      description: 'Sensors → Data → Predictions → Fewer breakdowns. This project got us into machine learning. Now it predicts equipment failures before they happen. Pretty cool.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      technologies: ['Python', 'InfluxDB', 'Grafana', 'MQTT', 'Machine Learning'],
      date: 'May 2025',
      link: '#',
      github: '#',
      highlights: [
        'Real-time sensor monitoring',
        'Predictive maintenance alerts',
        'Historical data analysis',
        'Custom dashboard & reports'
      ]
    },
    {
      id: 8,
      title: 'Project Management Tool',
      category: 'Custom Software',
      description: 'Built this because existing tools had too many features nobody used. Kanban boards, real-time updates, time tracking. Clean, focused, actually useful.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io', 'Redis'],
      date: 'April 2025',
      link: '#',
      github: '#',
      highlights: [
        'Kanban & Gantt views',
        'Real-time collaboration',
        'Resource management',
        'Time tracking & reporting'
      ]
    },
    {
      id: 9,
      title: 'Social Media Dashboard',
      category: 'Web Development',
      description: 'Manage multiple social accounts from one place. Schedule posts, track what\'s working, see competitor activity. Made for people who live in DMs.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Twitter API', 'Instagram API'],
      date: 'March 2025',
      link: '#',
      github: '#',
      highlights: [
        'Multi-platform management',
        'Post scheduling',
        'Engagement analytics',
        'Competitor analysis'
      ]
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Github className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold">Proof We Can Actually Code</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stuff We've
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Actually Built</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-4">
            These aren't mockups or "case studies." These are real projects that real people use. Some broke in production. We fixed them. That's how you learn.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl">
            (Most of these started as "should be easy" and ended up teaching us way more than we expected)
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-6 text-gray-400">
            Showing <span className="text-white font-semibold">{filteredProjects.length}</span> projects
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.link}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Tag className="w-4 h-4" />
                    <span>{project.category}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Add Your Project Here?
              </h2>
              <p className="text-xl text-purple-100 mb-4 max-w-2xl mx-auto">
                These are just the beginning. We're always looking for the next challenge, the next idea that makes us go "wait, that's actually really cool."
              </p>
              <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
                (Bonus points if your project teaches us something new)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Let's Talk
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
                  See What We Can Do
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

export default ProjectsPage
