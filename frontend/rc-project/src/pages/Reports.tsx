import React from 'react';
import { FileText, Download } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      date: '2024-03-15',
      title: 'Weekly Field Health Report',
      status: 'Healthy',
      details: 'All fields showing normal growth patterns',
    },
    {
      id: 2,
      date: '2024-03-14',
      title: 'Infection Alert Report',
      status: 'Action Required',
      details: 'Section B2 showing signs of pesticide damage',
    },
    {
      id: 3,
      date: '2024-03-13',
      title: 'Treatment Effectiveness Report',
      status: 'Improving',
      details: 'Previous treatment showing positive results',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analysis Reports</h1>
        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Download className="h-4 w-4 mr-2" />
          Export All
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FileText className="h-8 w-8 text-gray-400" />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{report.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      report.status === 'Healthy'
                        ? 'bg-green-100 text-green-800'
                        : report.status === 'Action Required'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{report.details}</p>
                  <p className="text-xs text-gray-500 mt-1">Generated on {report.date}</p>
                </div>
                <button className="ml-4 p-2 text-gray-400 hover:text-gray-600">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Scans</span>
              <span className="font-medium text-gray-900">47</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Infections Detected</span>
              <span className="font-medium text-red-600">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Treatment Success Rate</span>
              <span className="font-medium text-green-600">94%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              • Increase monitoring frequency in Section B2
            </p>
            <p className="text-sm text-gray-600">
              • Schedule preventive treatment for adjacent fields
            </p>
            <p className="text-sm text-gray-600">
              • Update treatment protocols based on latest analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;