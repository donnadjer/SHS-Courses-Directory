import React from 'react';
import { School } from '../types';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SchoolCardProps {
  school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  return (
    <Link 
      to={`/school/${school.id}`}
      className="block h-full group"
    >
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img 
            src={school.imageUrl} 
            alt={school.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 shadow-sm">
            {school.region}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-gh-green transition-colors" title={school.name}>
            {school.name}
          </h3>
          <div className="flex items-center text-gray-500 mb-3 text-sm">
            <MapPin size={14} className="mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{school.location}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {school.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {school.courses.slice(0, 3).map((course) => (
                <span key={course} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                  {course}
                </span>
              ))}
              {school.courses.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-500">
                  +{school.courses.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SchoolCard;