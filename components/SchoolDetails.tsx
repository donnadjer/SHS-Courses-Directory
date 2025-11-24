import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { School } from '../types';
import { MapPin, Globe, ArrowLeft, GraduationCap, BookOpen, Calendar, Info } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

interface SchoolDetailsProps {
  schools: School[];
}

const SchoolDetails: React.FC<SchoolDetailsProps> = ({ schools }) => {
  const { schoolId } = useParams<{ schoolId: string }>();
  const navigate = useNavigate();
  const school = schools.find(s => s.id === schoolId);

  if (!school) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">School Not Found</h2>
          <p className="text-gray-600 mb-8">The school you are looking for does not exist in our directory.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gh-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
          >
            <ArrowLeft size={18} />
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <img 
          src={school.imageUrl} 
          alt={school.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        
        <div className="absolute top-0 left-0 p-6 z-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all text-sm font-medium border border-white/20"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between animate-fade-in-up">
            <div className="space-y-3">
              <span className="inline-block bg-gh-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                {school.region} Region
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {school.name}
              </h1>
              <div className="flex items-center gap-3 text-gray-200 text-lg">
                <MapPin size={20} className="text-gh-yellow" />
                <span>{school.location}</span>
              </div>
            </div>
            
            {school.website && (
              <a 
                href={school.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gh-yellow transition-colors shadow-lg"
              >
                <Globe size={18} />
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Info size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">About the School</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {school.description}
              </p>
              
              {/* Mobile Website Button */}
              {school.website && (
                <a 
                  href={school.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 flex md:hidden items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors w-full"
                >
                  <Globe size={18} />
                  Visit Official Website
                </a>
              )}
            </div>

            {/* In-Content Ad Placeholder */}
            <AdPlaceholder className="w-full h-32" slotName="Content Banner" />

            {/* Courses Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gh-green/10 text-gh-green rounded-xl">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Academic Programs</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {school.courses.map((course) => (
                  <div 
                    key={course} 
                    className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-gh-green/30 hover:bg-gh-green/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-white transition-colors">
                      <GraduationCap size={20} className="text-gray-500 group-hover:text-gh-green" />
                    </div>
                    <span className="font-semibold text-gray-800">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-gh-red" />
                Quick Facts
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Region</span>
                  <span className="font-semibold text-gray-900">{school.region}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Location</span>
                  <span className="font-semibold text-gray-900">{school.location}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Programs</span>
                  <span className="font-semibold text-gray-900">{school.courses.length} Courses</span>
                </div>
              </div>
              
              <div className="mt-6">
                 {/* Sidebar Ad Placeholder */}
                 <AdPlaceholder className="w-full h-64" slotName="Sidebar Rectangle" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;