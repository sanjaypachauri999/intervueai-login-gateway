
import React from 'react';
import HRSidebar from '@/components/HRSidebar';
import HRInterviewRecordingsView from '@/components/HRInterviewRecordingsView';

const HRInterviewRecordings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <HRSidebar />
      <div className="flex-1 ml-64">
        <HRInterviewRecordingsView />
      </div>
    </div>
  );
};

export default HRInterviewRecordings;
