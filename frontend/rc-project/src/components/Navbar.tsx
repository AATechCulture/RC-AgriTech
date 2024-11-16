import React from 'react';
import { Sprout, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">RC AgriTech</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;