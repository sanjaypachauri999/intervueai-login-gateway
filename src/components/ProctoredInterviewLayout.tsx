import React, { useState } from 'react';
import AadharVerificationPanel from './AadharVerificationPanel';
import InterviewInterface from './InterviewInterface';

const ProctoredInterviewLayout = () => {
  const [verificationComplete, setVerificationComplete] = useState(false);

  const handleVerificationComplete = () => {
    setVerificationComplete(true);
  };

  if (!verificationComplete) {
    return <AadharVerificationPanel onVerificationComplete={handleVerificationComplete} />;
  }

  return <InterviewInterface />;
};

export default ProctoredInterviewLayout;