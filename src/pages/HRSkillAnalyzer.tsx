
import React from 'react';
import HRSidebar from '@/components/HRSidebar';
import HRSkillAnalyzerView from '@/components/HRSkillAnalyzerView';

const HRSkillAnalyzer = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <HRSidebar />
      <div className="flex-1 ml-64">
        <HRSkillAnalyzerView />
      </div>
    </div>
  );
};

export default HRSkillAnalyzer;
