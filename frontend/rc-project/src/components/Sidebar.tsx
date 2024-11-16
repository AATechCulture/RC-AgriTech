import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ImagePlus, FileBarChart } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: ImagePlus, label: 'Image Analysis', path: '/analysis' },
    { icon: FileBarChart, label: 'Reports', path: '/reports' },
  ];

  return (
    <div className="w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200">
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 ${
                isActive ? 'bg-green-50 text-green-700 border-r-4 border-green-600' : ''
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="ml-3">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;