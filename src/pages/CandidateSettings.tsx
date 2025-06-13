
import React from 'react';
import CandidateSettingsLayout from '@/components/CandidateSettingsLayout';
import CandidateSidebar from '@/components/CandidateSidebar';

const CandidateSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 flex">
      <CandidateSidebar />
      <div className="flex-1 p-6 ml-64">
        <CandidateSettingsLayout />
      </div>
    </div>
  );
};

export default CandidateSettings;
