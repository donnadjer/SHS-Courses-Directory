import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryDetails } from '../types';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: CategoryDetails;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically render icon
  const IconComponent = (Icons as any)[category.iconName] || Icons.Book;

  return (
    <Link 
      to={`/category/${category.id}`}
      className={`group block p-6 rounded-2xl bg-gradient-to-br ${category.gradient} border transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 ${category.color}`}>
          <IconComponent size={28} />
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-700">
        {category.name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {category.description}
      </p>
    </Link>
  );
};

export default CategoryCard;
