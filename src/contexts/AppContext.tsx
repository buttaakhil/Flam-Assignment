
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  address: {
    address: string;
    city: string;
    state: string;
  };
  company: {
    department: string;
    title: string;
  };
  image: string;
  rating: number;
  projects: string[];
  feedback: string[];
}

interface AppContextType {
  users: User[];
  bookmarks: number[];
  loading: boolean;
  searchTerm: string;
  selectedDepartments: string[];
  selectedRatings: number[];
  darkMode: boolean;
  setSearchTerm: (term: string) => void;
  setSelectedDepartments: (departments: string[]) => void;
  setSelectedRatings: (ratings: number[]) => void;
  toggleBookmark: (userId: number) => void;
  toggleDarkMode: () => void;
  promoteUser: (userId: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Design'];
const projectsList = [
  'Project Alpha', 'Project Beta', 'Project Gamma', 'Project Delta',
  'Website Redesign', 'Mobile App', 'Data Migration', 'Security Audit'
];
const feedbackList = [
  'Excellent team player and communicator',
  'Shows great initiative in problem-solving',
  'Consistently meets deadlines',
  'Strong technical skills and attention to detail',
  'Mentors junior team members effectively',
  'Innovative approach to challenges'
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchUsers();
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem('hr-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('hr-darkmode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users?limit=20');
      const data = await response.json();
      
      const enhancedUsers = data.users.map((user: any) => ({
        ...user,
        company: {
          department: departments[Math.floor(Math.random() * departments.length)],
          title: user.company?.title || 'Software Developer'
        },
        rating: Math.floor(Math.random() * 5) + 1,
        projects: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () => 
          projectsList[Math.floor(Math.random() * projectsList.length)]
        ),
        feedback: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
          feedbackList[Math.floor(Math.random() * feedbackList.length)]
        )
      }));
      
      setUsers(enhancedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleBookmark = (userId: number) => {
    const newBookmarks = bookmarks.includes(userId)
      ? bookmarks.filter(id => id !== userId)
      : [...bookmarks, userId];
    
    setBookmarks(newBookmarks);
    localStorage.setItem('hr-bookmarks', JSON.stringify(newBookmarks));
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('hr-darkmode', JSON.stringify(newDarkMode));
  };

  const promoteUser = (userId: number) => {
    // This would typically make an API call
    console.log(`User ${userId} promoted!`);
  };

  return (
    <AppContext.Provider value={{
      users,
      bookmarks,
      loading,
      searchTerm,
      selectedDepartments,
      selectedRatings,
      darkMode,
      setSearchTerm,
      setSelectedDepartments,
      setSelectedRatings,
      toggleBookmark,
      toggleDarkMode,
      promoteUser
    }}>
      {children}
    </AppContext.Provider>
  );
};
