import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Globe, Smartphone, Code2, Cpu, ChevronDown, ChevronUp, Check } from 'lucide-react'

function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      id: 1,
      number: '01',
      title: 'Web Development',
      description: 'Build stunning, high-performance web applications with modern frameworks and cutting-edge technologies. From responsive designs to complex web platforms.',
      icon: Globe,
      color: 'from-purple-600 to-purple-400',
      details: {
        overview: 'Transform your digital presence with cutting-edge web solutions that combine aesthetics with functionality. Our web development services focus on creating fast, responsive, and scalable applications that deliver exceptional user experiences across all devices.',
        technologies: [
          'React, Vue, Angular - Modern JavaScript frameworks',
          'Next.js, Nuxt.js - Server-side rendering & static generation',
          'Node.js, Express - Backend development',
          'TypeScript - Type-safe development',
          'Tailwind CSS, Styled Components - Modern styling solutions',
          'MongoDB, PostgreSQL, MySQL - Database solutions',
          'GraphQL, REST APIs - API development',
          'AWS, Vercel, Netlify - Cloud deployment'
        ],
        features: [
          'Responsive Design - Perfect on every screen size',
          'Progressive Web Apps (PWA) - App-like experiences',
          'SEO Optimization - Built for search engines',
          'Performance Optimization - Lightning-fast load times',
          'Security Best Practices - Protected from threats',
          'Accessibility Standards - Inclusive for all users',
          'Real-time Features - Live updates and interactions',
          'Analytics Integration - Track and improve performance'
        ],
        deliverables: [
          'Custom web application tailored to your needs',
          'Mobile-responsive design across all devices',
          'Admin dashboard for content management',
          'Documentation and training materials',
          'Source code and deployment guidelines',
          '3 months of post-launch support'
        ]
      }
    },
    {
      id: 2,
      number: '02',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences. iOS and Android solutions tailored to your business needs.',
      icon: Smartphone,
      color: 'from-purple-600 to-purple-400',
      details: {
        overview: 'Reach your audience wherever they are with powerful mobile applications. We create intuitive, feature-rich apps that users love, whether native iOS and Android or cross-platform solutions that work seamlessly across devices.',
        technologies: [
          'React Native - Cross-platform development',
          'Flutter - Google\'s UI toolkit',
          'Swift - Native iOS development',
          'Kotlin - Native Android development',
          'Firebase - Backend & real-time database',
          'Redux, MobX - State management',
          'Push Notifications - Engage users instantly',
          'App Store & Play Store - Deployment expertise'
        ],
        features: [
          'Cross-Platform Compatibility - iOS & Android from single codebase',
          'Offline Functionality - Work without internet',
          'Push Notifications - Keep users engaged',
          'Biometric Authentication - Secure with Face ID/fingerprint',
          'In-App Purchases - Monetization solutions',
          'Social Media Integration - Easy sharing and login',
          'GPS & Location Services - Location-based features',
          'Camera & Media Access - Rich media experiences'
        ],
        deliverables: [
          'Native or cross-platform mobile application',
          'App Store and Google Play deployment',
          'Backend API and database setup',
          'Admin panel for app management',
          'App analytics and crash reporting',
          'User documentation and support',
          'Regular updates and maintenance'
        ]
      }
    },
    {
      id: 3,
      number: '03',
      title: 'Custom Software Solutions',
      description: 'Bespoke software engineered to solve your unique challenges. Scalable, secure, and designed to grow with your business.',
      icon: Code2,
      color: 'from-purple-600 to-purple-400',
      details: {
        overview: 'Every business has unique challenges that require tailored solutions. Our custom software development service delivers enterprise-grade applications designed specifically for your workflows, processes, and goals. From CRM systems to inventory management, we build software that fits like a glove.',
        technologies: [
          'Python, Java, C# - Enterprise languages',
          'Django, Spring Boot, .NET - Robust frameworks',
          'Microservices Architecture - Scalable systems',
          'Docker, Kubernetes - Containerization',
          'Redis, RabbitMQ - Caching & messaging',
          'Elasticsearch - Advanced search capabilities',
          'CI/CD Pipelines - Automated deployment',
          'Cloud Infrastructure - AWS, Azure, GCP'
        ],
        features: [
          'Custom Business Logic - Built for your processes',
          'Role-Based Access Control - Secure permissions',
          'Data Analytics & Reporting - Insightful dashboards',
          'Third-Party Integrations - Connect existing tools',
          'Automated Workflows - Streamline operations',
          'Audit Trails - Track all changes',
          'Multi-Tenancy Support - Serve multiple clients',
          'Scalable Architecture - Grow without limits'
        ],
        deliverables: [
          'Fully customized software solution',
          'Enterprise-grade security implementation',
          'Integration with existing systems',
          'Comprehensive user and admin panels',
          'Training for your team',
          'Complete technical documentation',
          'Ongoing maintenance and support',
          'Future enhancement roadmap'
        ]
      }
    },
    {
      id: 4,
      number: '04',
      title: 'IoT & Smart Systems',
      description: 'Connect the physical and digital worlds with intelligent IoT solutions. From smart devices to industrial automation systems.',
      icon: Cpu,
      color: 'from-purple-600 to-purple-400',
      details: {
        overview: 'Bridge the gap between physical devices and digital intelligence. Our IoT solutions help you collect, analyze, and act on real-time data from connected devices. Whether it\'s smart home automation, industrial monitoring, or fleet management, we create systems that make your world smarter.',
        technologies: [
          'MQTT, CoAP - IoT protocols',
          'Arduino, Raspberry Pi - Hardware platforms',
          'AWS IoT, Azure IoT - Cloud IoT platforms',
          'Time-Series Databases - InfluxDB, TimescaleDB',
          'Edge Computing - Process data locally',
          'WebSockets - Real-time communication',
          'Machine Learning - Predictive analytics',
          'Zigbee, Z-Wave, LoRaWAN - IoT connectivity'
        ],
        features: [
          'Real-Time Monitoring - Live data from devices',
          'Remote Control - Manage devices from anywhere',
          'Data Analytics - Turn sensor data into insights',
          'Predictive Maintenance - Prevent failures before they happen',
          'Energy Management - Optimize resource usage',
          'Alert Systems - Instant notifications',
          'Device Management - Provision and update remotely',
          'Edge Processing - Faster responses, less bandwidth'
        ],
        deliverables: [
          'Custom IoT device firmware',
          'Cloud-based IoT platform',
          'Real-time monitoring dashboard',
          'Mobile app for remote control',
          'Data visualization and analytics',
          'Alert and notification systems',
          'Device provisioning system',
          'Technical support and maintenance'
        ]
      }
    }
  ]

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Services That Drive
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
              From concept to deployment, we deliver comprehensive software solutions that transform businesses and create lasting impact.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {services.map((service) => {
              const Icon = service.icon
              const isExpanded = expandedService === service.id

              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700"
                >
                  {/* Service Header */}
                  <div
                    className="p-8 cursor-pointer"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex gap-6 flex-1">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <span className={`text-6xl font-bold bg-gradient-to-br ${service.color} bg-clip-text text-transparent opacity-50`}>
                              {service.number}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                              {service.title}
                            </h2>
                          </div>
                          <p className="text-lg text-gray-400 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-white transition-colors flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-8 h-8" />
                        ) : (
                          <ChevronDown className="w-8 h-8" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-8 pb-8 border-t border-gray-800">
                      <div className="pt-8 grid md:grid-cols-2 gap-8">
                        {/* Overview */}
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                          <p className="text-gray-400 leading-relaxed">
                            {service.details.overview}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-4">Technologies We Use</h3>
                          <div className="space-y-3">
                            {service.details.technologies.map((tech, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}></div>
                                <span className="text-gray-400">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                          <div className="space-y-3">
                            {service.details.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <Check className={`w-5 h-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-400">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-semibold text-white mb-4">What You Get</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {service.details.deliverables.map((deliverable, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                              >
                                <Check className={`w-5 h-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-300">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="md:col-span-2 mt-4">
                          <button className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}>
                            Get Started with {service.title}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 p-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Schedule a Call
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ServicesPage
