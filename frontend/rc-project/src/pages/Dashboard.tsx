import React from 'react';
import { ArrowUp, Leaf, AlertTriangle, Droplet } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Field Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Fields</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Infected Areas</p>
              <p className="text-2xl font-semibold text-red-600">3</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Healthy Fields</p>
              <p className="text-2xl font-semibold text-green-600">21</p>
            </div>
            <Droplet className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Recent Scans</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
            <ArrowUp className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Analysis</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <img
                  src={`https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&auto=format&fit=crop&q=60`}
                  alt={`Field ${i}`}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Field Section {i}</p>
                  <p className="text-sm text-gray-600">Analyzed 2 hours ago</p>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
                  i === 2 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {i === 2 ? 'Infected' : 'Healthy'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Action Items</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-medium text-yellow-800">Field Section 2 Requires Attention</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Pesticide infection detected. Recommended action: Apply organic fungicide within 48 hours.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-800">Scheduled Drone Scan</h3>
              <p className="text-sm text-green-700 mt-1">
                Next automated scan scheduled for tomorrow at 10:00 AM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;