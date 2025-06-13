
import React from 'react';
import HRSidebar from '@/components/HRSidebar';
import HRSettingsLayout from '@/components/HRSettingsLayout';

const HRSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <HRSidebar />
      <div className="flex-1 p-6 ml-64">
        <HRSettingsLayout />
      </div>
    </div>
  );
};

export default HRSettings;
