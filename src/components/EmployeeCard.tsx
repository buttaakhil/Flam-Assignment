
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { Star, Bookmark, TrendingUp, Eye } from 'lucide-react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  company: {
    department: string;
    title: string;
  };
  image: string;
  rating: number;
}

interface EmployeeCardProps {
  user: User;
}

const EmployeeCard = ({ user }: EmployeeCardProps) => {
  const { bookmarks, toggleBookmark, promoteUser } = useApp();
  const isBookmarked = bookmarks.includes(user.id);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-slate-300 dark:text-slate-600'
        }`}
      />
    ));
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
    if (rating >= 3) return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
    return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-slate-200 dark:border-slate-700 overflow-hidden group">
      <div className="relative">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={() => toggleBookmark(user.id)}
            className={`p-2 rounded-full backdrop-blur-md transition-colors duration-200 ${
              isBookmarked
                ? 'bg-blue-500 text-white'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <Bookmark size={16} />
          </button>
        </div>
        <div className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(user.rating)}`}>
          {user.rating}/5 Stars
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{user.email}</p>
            <p className="text-xs text-slate-500 dark:text-slate-500">Age: {user.age}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-1 mb-2">
            {renderStars(user.rating)}
            <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">
              ({user.rating}/5)
            </span>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p className="font-medium">{user.company.title}</p>
            <p>{user.company.department}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            to={`/employee/${user.id}`}
            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <Eye size={16} />
            <span>View</span>
          </Link>
          <button
            onClick={() => promoteUser(user.id)}
            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <TrendingUp size={16} />
            <span>Promote</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
