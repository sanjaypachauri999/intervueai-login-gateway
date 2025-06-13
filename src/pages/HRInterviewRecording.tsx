
import React from 'react';
import HRSidebar from '@/components/HRSidebar';
import HRInterviewRecordingView from '@/components/HRInterviewRecordingView';

const HRInterviewRecording = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <HRSidebar />
      <div className="flex-1 ml-64">
        <HRInterviewRecordingView
          interviewId="INT-2024-001"
          candidateName="John Smith"
          jobRole="Senior React Developer"
          interviewDate="March 15, 2024, 2:00 PM"
          status="completed"
        />
      </div>
    </div>
  );
};

export default HRInterviewRecording;
