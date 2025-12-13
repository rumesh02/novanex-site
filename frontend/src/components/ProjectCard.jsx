import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ name, description, technologies, index }) => {
  // Alternate layout for visual interest
  const isEven = index % 2 === 0;
  
  return (
    <article className="group relative border-t border-gray-800 pt-12">
      <div className={`grid md:grid-cols-12 gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        {/* Project Number & Name */}
        <div className={`md:col-span-5 ${isEven ? '' : 'md:col-start-8'}`}>
          <div className="text-6xl font-thin text-gray-800 mb-4">
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {name}
          </h3>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors group-hover:gap-3 duration-300"
          >
            <span className="font-light">View project</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
        
        {/* Description & Tech */}
        <div className={`md:col-span-7 ${isEven ? 'md:col-start-6' : 'md:col-start-1 md:row-start-1'}`}>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 font-light">
            {description}
          </p>
          
          {/* Technology Stack - Minimal */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="text-sm text-gray-600 font-light tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
