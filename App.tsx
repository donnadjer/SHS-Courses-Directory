import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Search, MapPin, Filter, X } from 'lucide-react';
import Navbar from './components/Navbar';
import CategoryCard from './components/CategoryCard';
import SchoolCard from './components/SchoolCard';
import AddSchoolForm from './components/AddSchoolForm';
import SchoolDetails from './components/SchoolDetails';
import AdPlaceholder from './components/AdPlaceholder';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import { INITIAL_SCHOOLS, CATEGORIES, REGIONS } from './constants';
import { School, CourseCategory } from './types';

// Home Component
const Home: React.FC<{ schools: School[] }> = ({ schools }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const filteredSchools = schools.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? s.region === selectedRegion : true;
    const matchesCourse = selectedCourse ? s.courses.includes(selectedCourse as CourseCategory) : true;
    
    return matchesSearch && matchesRegion && matchesCourse;
  });

  const isFiltering = searchTerm || selectedRegion || selectedCourse;
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedRegion('');
    setSelectedCourse('');
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative bg-gh-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/kente.png')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Find the Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-gh-red via-gh-yellow to-gh-green">Senior High Schools</span> in Ghana
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Explore courses, locations, and details of SHS institutions across the country. 
            From General Science to Visual Arts, discover your future.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for a school or city..."
                className="block w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-2xl focus:ring-2 focus:ring-gh-yellow text-gray-900 placeholder-gray-400 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="relative group">
                 <select 
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="block w-full pl-4 pr-10 py-3 rounded-xl border-none shadow-lg focus:ring-2 focus:ring-gh-yellow text-gray-700 font-medium appearance-none bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                 >
                    <option value="">All Regions</option>
                    {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                 </select>
                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                   <MapPin className="h-4 w-4 text-gray-400 group-hover:text-gh-red transition-colors" />
                 </div>
              </div>

              <div className="relative group">
                 <select 
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="block w-full pl-4 pr-10 py-3 rounded-xl border-none shadow-lg focus:ring-2 focus:ring-gh-yellow text-gray-700 font-medium appearance-none bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                 >
                    <option value="">All Courses</option>
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                 </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                   <Filter className="h-4 w-4 text-gray-400 group-hover:text-gh-green transition-colors" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {isFiltering ? (
          <div className="bg-white rounded-3xl p-8 shadow-xl min-h-[400px]">
             <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">
                    {filteredSchools.length} Result{filteredSchools.length !== 1 && 's'} Found
                </h2>
                <button 
                    onClick={clearFilters}
                    className="text-sm text-gh-red hover:text-red-700 hover:underline font-medium flex items-center gap-1"
                >
                    <X size={14} /> Clear Filters
                </button>
             </div>
             
             {/* Ad Placeholder inside search results */}
             <AdPlaceholder className="w-full h-24 mb-8" slotName="Search Results Top Banner" />

             {filteredSchools.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredSchools.map(school => (
                   <SchoolCard key={school.id} school={school} />
                 ))}
               </div>
             ) : (
               <div className="text-center py-20">
                    <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                        <Search className="h-10 w-10 text-gray-300" />
                    </div>
                    <p className="text-gray-500 text-lg">No schools found matching your criteria.</p>
                    <button 
                        onClick={clearFilters}
                        className="mt-4 text-gh-green font-semibold hover:underline"
                    >
                        Reset Filters
                    </button>
               </div>
             )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12">
            
            {/* Categories Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Browse by Course</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CATEGORIES.map(cat => (
                  <CategoryCard key={cat.id} category={cat} />
                ))}
              </div>
            </section>

            {/* Ad Placeholder between sections */}
            <AdPlaceholder className="w-full h-32" slotName="Home Middle Banner" />

            {/* Featured Schools Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Schools</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schools.slice(0, 6).map(school => (
                  <SchoolCard key={school.id} school={school} />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

// Category View Component
const CategoryView: React.FC<{ schools: School[] }> = ({ schools }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = CATEGORIES.find(c => c.id === categoryId);
  
  if (!category) return <div>Category not found</div>;

  const categorySchools = schools.filter(s => s.courses.includes(category.id as CourseCategory));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`bg-gradient-to-r ${category.gradient.replace('border-', 'from-').replace('50', '500').replace('100', '600')} py-16 px-4`}>
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <Filter size={16} className="mr-1" /> Back to Directory
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.name}</h1>
          <p className="text-xl text-gray-800 opacity-90">{category.description}</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Ad Placeholder Top of Category */}
        <AdPlaceholder className="w-full h-24 mb-8" slotName="Category Top Banner" />

        <h2 className="text-xl font-semibold text-gray-700 mb-8 flex items-center gap-2">
          Schools offering {category.name} 
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">{categorySchools.length}</span>
        </h2>
        
        {categorySchools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorySchools.map(school => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">No schools currently listed for this category.</p>
            <Link to="/add" className="text-blue-600 font-medium hover:underline mt-2 inline-block">Add a school to this category</Link>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [schools, setSchools] = useState<School[]>(() => {
    const saved = localStorage.getItem('gh_shs_data');
    return saved ? JSON.parse(saved) : INITIAL_SCHOOLS;
  });

  useEffect(() => {
    localStorage.setItem('gh_shs_data', JSON.stringify(schools));
  }, [schools]);

  const addSchool = (newSchool: School) => {
    setSchools(prev => [newSchool, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home schools={schools} />} />
            <Route path="/category/:categoryId" element={<CategoryView schools={schools} />} />
            <Route path="/school/:schoolId" element={<SchoolDetails schools={schools} />} />
            <Route path="/add" element={<AddSchoolForm onAddSchool={addSchool} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Ghana SHS Directory</h3>
                <p className="text-gray-500 text-sm">
                  Connecting students to their future. The comprehensive guide to senior high schools in Ghana.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="font-bold text-gray-900 mb-2">Links</h3>
                <Link to="/" className="text-gray-500 hover:text-gh-red text-sm">Home</Link>
                <Link to="/about" className="text-gray-500 hover:text-gh-red text-sm">About Us</Link>
                <Link to="/contact" className="text-gray-500 hover:text-gh-red text-sm">Contact Us</Link>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="font-bold text-gray-900 mb-2">Legal</h3>
                <Link to="/privacy" className="text-gray-500 hover:text-gh-red text-sm">Privacy Policy</Link>
                <span className="text-gray-400 text-sm cursor-not-allowed">Terms of Service</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-8 text-center">
              <p className="text-gray-500 text-sm">© 2024 Ghana SHS Directory. Promoting Education in Ghana.</p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="w-3 h-3 rounded-full bg-gh-red"></div>
                <div className="w-3 h-3 rounded-full bg-gh-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-gh-green"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;