import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'FinTech Dashboard',
      description: 'A comprehensive financial analytics platform with real-time data visualization, automated reporting, and secure payment processing for enterprise clients.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: 2,
      name: 'HealthConnect Mobile',
      description: 'Cross-platform healthcare application connecting patients with medical professionals, featuring appointment scheduling, telemedicine, and health records management.',
      technologies: ['React Native', 'Firebase', 'GraphQL', 'TypeScript']
    },
    {
      id: 3,
      name: 'SmartFactory IoT',
      description: 'Industrial IoT solution for manufacturing automation, monitoring production lines in real-time with predictive maintenance and analytics capabilities.',
      technologies: ['Python', 'MQTT', 'Docker', 'MongoDB', 'Azure IoT']
    }
  ];

  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Minimal abstract background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-800/50 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-800/30 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header - Editorial Style */}
        <div className="mb-32">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-none">
            Selected<br />Work
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            Real-world solutions across industries
          </p>
        </div>

        {/* Projects List - Asymmetric Editorial Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
