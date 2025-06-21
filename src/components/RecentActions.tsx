import React from 'react';

const RecentActions: React.FC = () => {
  return (
    <div className="w-full">
      <div className="border-1 surface-border bg-gray-100 p-3">
        <h2 className="text-md mb-3 text-900">Recent actions</h2>
        <div className="font-semibold mb-2">My actions</div>
        <div className="text-600">None available</div>
      </div>
    </div>
  );
};

export default RecentActions;
