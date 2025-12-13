import React from 'react';

const ServiceCard = ({ title, description, icon: Icon, index }) => {
  return (
    <article className="group relative border-t border-gray-800 pt-12">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Number & Icon */}
        <div className="md:col-span-2">
          <div className="text-5xl font-thin text-gray-800 mb-4">
            {String(index + 1).padStart(2, '0')}
          </div>
          <Icon className="w-8 h-8 text-gray-700" strokeWidth={1} />
        </div>
        
        {/* Content */}
        <div className="md:col-span-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed font-light max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
