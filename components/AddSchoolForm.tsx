import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseCategory, School } from '../types';
import { REGIONS } from '../constants';
import { generateSchoolDetails, generateSchoolImage } from '../services/gemini';
import { Sparkles, Loader2, Save, X, Upload, Image as ImageIcon } from 'lucide-react';

interface AddSchoolFormProps {
  onAddSchool: (school: School) => void;
}

const AddSchoolForm: React.FC<AddSchoolFormProps> = ({ onAddSchool }) => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  
  const [formData, setFormData] = useState<Partial<School>>({
    name: '',
    location: '',
    region: 'Greater Accra',
    description: '',
    courses: [],
    imageUrl: '',
    website: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCourseToggle = (course: CourseCategory) => {
    setFormData(prev => {
      const currentCourses = prev.courses || [];
      if (currentCourses.includes(course)) {
        return { ...prev, courses: currentCourses.filter(c => c !== course) };
      } else {
        return { ...prev, courses: [...currentCourses, course] };
      }
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateImage = async () => {
    if (!formData.name) {
      alert("Please enter a school name first.");
      return;
    }

    // Check if API key is selected, if not, prompt user
    if (window.aistudio) {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
      }
    }

    setIsGeneratingImage(true);
    try {
      const imageBase64 = await generateSchoolImage(formData.name, formData.region || 'Ghana');
      if (imageBase64) {
        setFormData(prev => ({ ...prev, imageUrl: imageBase64 }));
      } else {
        alert("Could not generate an image. Please try again or upload one.");
      }
    } catch (error) {
      console.error(error);
      alert("Error generating image.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleAutoFill = async () => {
    if (!formData.name) {
      alert("Please enter a school name first.");
      return;
    }
    
    // Check if API key is selected, if not, prompt user
    if (window.aistudio) {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
      }
    }
    
    setIsGenerating(true);
    try {
      const details = await generateSchoolDetails(formData.name);
      if (details) {
        setFormData(prev => ({
          ...prev,
          description: details.description,
          location: details.location,
          region: details.region,
          courses: details.courses,
          website: details.website || ''
        }));
      } else {
        alert("Could not generate details. Please fill manually.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to AI service. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.courses || formData.courses.length === 0) {
      alert("Please fill in the school name and select at least one course.");
      return;
    }

    const newSchool: School = {
      id: Date.now().toString(),
      name: formData.name!,
      location: formData.location || 'Unknown',
      region: formData.region || 'Greater Accra',
      description: formData.description || '',
      courses: formData.courses!,
      imageUrl: formData.imageUrl || `https://picsum.photos/seed/${formData.name}/800/600`, // Fallback if no image uploaded
      website: formData.website
    };

    onAddSchool(newSchool);
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-gh-black to-gray-800 px-8 py-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Add New School</h2>
          <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          {/* Section 1: Basic Info */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4">
              <div className="flex-grow">
                <label className="block text-sm font-semibold text-gray-700 mb-1">School Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Achimota School"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gh-red focus:border-transparent transition-all outline-none"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleAutoFill}
                disabled={isGenerating || !formData.name}
                className={`px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all whitespace-nowrap ${
                  isGenerating 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                {isGenerating ? 'Thinking...' : 'Auto-fill Details'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Region</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gh-green focus:border-transparent outline-none"
                >
                  {REGIONS.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">City / Town</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gh-green focus:border-transparent outline-none"
                  placeholder="e.g. Cape Coast"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gh-yellow focus:border-transparent outline-none resize-none"
                placeholder="Brief history or description..."
              />
            </div>
          </div>

          <hr className="border-gray-100" />

           {/* Section 2: Image Upload/Generation */}
           <div>
            <label className="block text-base font-semibold text-gray-800 mb-4">School Image</label>
            <div className="space-y-4">
              {formData.imageUrl ? (
                <div className="relative h-64 w-full rounded-xl overflow-hidden bg-gray-100 group shadow-md">
                  <img src={formData.imageUrl} alt="School preview" className="w-full h-full object-cover" />
                  <button 
                     type="button"
                     onClick={() => setFormData(p => ({...p, imageUrl: ''}))}
                     className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-red-600 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                     title="Remove Image"
                  >
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    Preview
                  </div>
                </div>
              ) : (
                <div className="h-48 w-full rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 bg-gray-50/50">
                   <ImageIcon size={48} className="mb-2 opacity-30" />
                   <span className="text-sm">No image selected</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                 <label className="flex-1 cursor-pointer bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 shadow-sm">
                   <Upload size={18} />
                   Upload Photo
                   <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                 </label>
                 
                 <button
                   type="button"
                   onClick={handleGenerateImage}
                   disabled={isGeneratingImage || !formData.name}
                   className={`flex-1 px-4 py-3 rounded-xl font-medium hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${
                     isGeneratingImage 
                      ? 'bg-gray-100 text-gray-500' 
                      : 'bg-gradient-to-r from-gh-yellow to-orange-400 text-white'
                   }`}
                 >
                   {isGeneratingImage ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                   {isGeneratingImage ? 'Generating...' : 'Generate with AI'}
                 </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3: Courses */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-4">Courses Offered <span className="text-red-500 text-sm font-normal">* Required</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.values(CourseCategory).map((category) => (
                <label 
                  key={category} 
                  className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.courses?.includes(category) 
                      ? 'bg-blue-50 border-blue-200 shadow-sm' 
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.courses?.includes(category)}
                    onChange={() => handleCourseToggle(category)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className={`text-sm ${formData.courses?.includes(category) ? 'text-blue-800 font-medium' : 'text-gray-600'}`}>
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-8 py-3 bg-gh-black text-white rounded-xl font-semibold shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              <Save size={18} />
              Add School to Directory
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddSchoolForm;