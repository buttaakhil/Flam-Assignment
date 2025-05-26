
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import EmployeeCard from '@/components/EmployeeCard';
import SearchAndFilter from '@/components/SearchAndFilter';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { users, loading, searchTerm, selectedDepartments, selectedRatings } = useApp();

  const filteredUsers = users.filter(user => {
    const matchesSearch = !searchTerm || 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment = selectedDepartments.length === 0 || 
      selectedDepartments.includes(user.company.department);

    const matchesRating = selectedRatings.length === 0 || 
      selectedRatings.includes(user.rating);

    return matchesSearch && matchesDepartment && matchesRating;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="animate-spin text-blue-500" size={48} />
          <p className="text-slate-600 dark:text-slate-400">Loading employee data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Employee Performance Dashboard
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Track performance, manage bookmarks, and gain insights into your team's success.
        </p>
      </div>

      {/* Search and Filter */}
      <SearchAndFilter />

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-slate-600 dark:text-slate-400">
          Showing {filteredUsers.length} of {users.length} employees
        </p>
      </div>

      {/* Employee Grid */}
      {filteredUsers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-2">No employees found</p>
          <p className="text-slate-400 dark:text-slate-500">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUsers.map(user => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
