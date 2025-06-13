
import React from 'react';
import HRSidebar from '@/components/HRSidebar';
import HRCreateJobRoleView from '@/components/HRCreateJobRoleView';

const HRCreateJobRole = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <HRSidebar />
      <div className="flex-1 ml-64">
        <HRCreateJobRoleView />
      </div>
    </div>
  );
};

export default HRCreateJobRole;
