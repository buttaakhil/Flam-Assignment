
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import EmployeeCard from '@/components/EmployeeCard';
import { Bookmark as BookmarkIcon } from 'lucide-react';

const Bookmarks = () => {
  const { users, bookmarks } = useApp();
  
  const bookmarkedUsers = users.filter(user => bookmarks.includes(user.id));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <BookmarkIcon className="text-blue-500" size={40} />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bookmarked Employees
          </h1>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Keep track of your starred team members and high performers.
        </p>
      </div>

      {/* Bookmarked Employees */}
      {bookmarkedUsers.length === 0 ? (
        <div className="text-center py-12">
          <BookmarkIcon className="mx-auto text-slate-300 dark:text-slate-600 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">No Bookmarks Yet</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Start bookmarking employees from the dashboard to keep track of your favorites.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400">
              {bookmarkedUsers.length} bookmarked employee{bookmarkedUsers.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookmarkedUsers.map(user => (
              <EmployeeCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
