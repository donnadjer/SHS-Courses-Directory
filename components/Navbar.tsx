import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, PlusCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gh-red via-gh-yellow to-gh-green rounded-lg flex items-center justify-center text-white shadow-lg">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Ghana<span className="text-gh-red">SHS</span>Directory
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
             <Link 
              to="/" 
              className="text-gray-600 hover:text-gh-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Directory
            </Link>
            <Link 
              to="/add" 
              className="inline-flex items-center gap-2 bg-gh-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <PlusCircle size={16} />
              Add School
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
