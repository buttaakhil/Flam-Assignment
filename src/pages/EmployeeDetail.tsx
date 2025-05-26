
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { ArrowLeft, Star, Bookmark, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

const EmployeeDetail = () => {
  const { id } = useParams();
  const { users, bookmarks, toggleBookmark, promoteUser } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

  const user = users.find(u => u.id === parseInt(id!));
  const isBookmarked = user ? bookmarks.includes(user.id) : false;

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Employee Not Found</h2>
        <Link to="/" className="text-blue-500 hover:text-blue-600">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-slate-300 dark:text-slate-600'
        }`}
      />
    ));
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'feedback', label: 'Feedback' }
  ];

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        <ArrowLeft size={20} />
        <span>Back to Dashboard</span>
      </Link>

      {/* Employee Header */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="relative px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 -mt-12 bg-white dark:bg-slate-800"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-1">{user.company.title}</p>
              <p className="text-slate-500 dark:text-slate-500">{user.company.department}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => toggleBookmark(user.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isBookmarked
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white'
                }`}
              >
                <Bookmark size={16} />
                <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
              <button
                onClick={() => promoteUser(user.id)}
                className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
              >
                <TrendingUp size={16} />
                <span>Promote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Rating */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Performance Rating</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            {renderStars(user.rating)}
          </div>
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">{user.rating}/5</span>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            user.rating >= 4 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              : user.rating >= 3
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
          }`}>
            {user.rating >= 4 ? 'Excellent' : user.rating >= 3 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="flex space-x-8 px-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-slate-400 dark:text-slate-500" size={18} />
                      <span className="text-slate-600 dark:text-slate-400">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-slate-400 dark:text-slate-500" size={18} />
                      <span className="text-slate-600 dark:text-slate-400">{user.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-slate-400 dark:text-slate-500" size={18} />
                      <span className="text-slate-600 dark:text-slate-400">
                        {user.address.address}, {user.address.city}, {user.address.state}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Age:</span>
                      <span className="ml-2 text-slate-600 dark:text-slate-300">{user.age}</span>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Department:</span>
                      <span className="ml-2 text-slate-600 dark:text-slate-300">{user.company.department}</span>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Position:</span>
                      <span className="ml-2 text-slate-600 dark:text-slate-300">{user.company.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Current Projects</h3>
              <div className="grid gap-4">
                {user.projects.map((project, index) => (
                  <div key={index} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">{project}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Status: In Progress
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Recent Feedback</h3>
              <div className="space-y-4">
                {user.feedback.map((feedback, index) => (
                  <div key={index} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <p className="text-slate-700 dark:text-slate-300">"{feedback}"</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                      - Manager Review
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
