
import React from 'react';
import MyInterviewsLayout from '@/components/MyInterviewsLayout';
import CandidateSidebar from '@/components/CandidateSidebar';

const MyInterviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 flex">
      <CandidateSidebar />
      <div className="flex-1 p-6 ml-64">
        <MyInterviewsLayout />
      </div>
    </div>
  );
};

export default MyInterviews;
