
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Search, Filter, X } from 'lucide-react';

const SearchAndFilter = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    users
  } = useApp();

  const departments = Array.from(new Set(users.map(user => user.company.department)));
  const ratings = [1, 2, 3, 4, 5];

  const handleDepartmentToggle = (department: string) => {
    setSelectedDepartments(
      selectedDepartments.includes(department)
        ? selectedDepartments.filter(d => d !== department)
        : [...selectedDepartments, department]
    );
  };

  const handleRatingToggle = (rating: number) => {
    setSelectedRatings(
      selectedRatings.includes(rating)
        ? selectedRatings.filter(r => r !== rating)
        : [...selectedRatings, rating]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartments([]);
    setSelectedRatings([]);
  };

  const hasActiveFilters = searchTerm || selectedDepartments.length > 0 || selectedRatings.length > 0;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Search by name, email, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Department Filter */}
          <div className="relative">
            <div className="flex items-center space-x-2 mb-2">
              <Filter size={16} className="text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Department</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map(department => (
                <button
                  key={department}
                  onClick={() => handleDepartmentToggle(department)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                    selectedDepartments.includes(department)
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-600'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="relative">
            <div className="flex items-center space-x-2 mb-2">
              <Filter size={16} className="text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Rating</span>
            </div>
            <div className="flex gap-2">
              {ratings.map(rating => (
                <button
                  key={rating}
                  onClick={() => handleRatingToggle(rating)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                    selectedRatings.includes(rating)
                      ? 'bg-yellow-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-yellow-100 dark:hover:bg-slate-600'
                  }`}
                >
                  {rating}★
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="flex items-end">
            <button
              onClick={clearFilters}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200"
            >
              <X size={16} />
              <span className="text-sm">Clear</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
