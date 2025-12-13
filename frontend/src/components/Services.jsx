import React from 'react';
import ServiceCard from './ServiceCard';
import { Globe, Smartphone, Code2, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build stunning, high-performance web applications with modern frameworks and cutting-edge technologies. From responsive designs to complex web platforms.',
      icon: Globe
    },
    {
      id: 2,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences. iOS and Android solutions tailored to your business needs.',
      icon: Smartphone
    },
    {
      id: 3,
      title: 'Custom Software Solutions',
      description: 'Bespoke software engineered to solve your unique challenges. Scalable, secure, and designed to grow with your business.',
      icon: Code2
    },
    {
      id: 4,
      title: 'IoT & Smart Systems',
      description: 'Connect the physical and digital worlds with intelligent IoT solutions. From smart devices to industrial automation systems.',
      icon: Cpu
    }
  ];

  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Minimal abstract background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-800/40 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header - Editorial Style */}
        <div className="mb-32">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-none">
            What We<br />Do
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            End-to-end software development services
          </p>
        </div>

        {/* Services List - Minimal Layout */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
