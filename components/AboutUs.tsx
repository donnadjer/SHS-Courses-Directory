import React from 'react';
import { CheckCircle2, Database, Search, Users } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-gh-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/kente.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ghana SHS Directory</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering students and parents with the most comprehensive information on Senior High Schools across Ghana.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Education is the bedrock of development. Our mission is to bridge the information gap in the Ghanaian education sector by providing a centralized, easy-to-use platform where students can find detailed information about Senior High Schools.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are looking for schools offering specific courses like <span className="font-semibold text-gh-red">Visual Arts</span> or <span className="font-semibold text-gh-green">General Science</span>, or searching for schools in a specific region, we make the process seamless.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students studying" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <AdPlaceholder className="w-full h-32 mb-16" slotName="About Page Banner" />

          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Data</h3>
              <p className="text-gray-600">Access detailed profiles of schools, including history, courses, and location data.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-gray-600">Filter by region, course, or name to find exactly what you are looking for in seconds.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">We allow the community to add and update school information to keep data fresh.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;