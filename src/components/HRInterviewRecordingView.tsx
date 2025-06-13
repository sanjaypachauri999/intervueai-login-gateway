import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, FileText, Clock, User, Briefcase, Calendar } from 'lucide-react';

interface HRInterviewRecordingViewProps {
  interviewId: string;
  candidateName: string;
  jobRole: string;
  interviewDate: string;
  status: 'completed' | 'in-progress' | 'scheduled';
}

const HRInterviewRecordingView: React.FC<HRInterviewRecordingViewProps> = ({
  interviewId,
  candidateName,
  jobRole,
  interviewDate,
  status
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Interview Recording</h1>
        <p className="text-gray-600 mt-2">Review and analyze interview recordings</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">Interview Details</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge className={getStatusColor(status)}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              ID: {interviewId}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Candidate</p>
                <p className="font-medium">{candidateName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Position</p>
                <p className="font-medium">{jobRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Date & Time</p>
                <p className="font-medium">{interviewDate}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Video Recording</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interview Recording</p>
                <p className="text-sm text-gray-500">Duration: 45:32</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">
                <Play className="h-4 w-4 mr-2" />
                Play Recording
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interview Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Overall Score</h4>
              <div className="text-2xl font-bold text-blue-600">8.5/10</div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Technical Skills</span>
                  <span>9/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Communication</span>
                  <span>8/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Problem Solving</span>
                  <span>8.5/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              <FileText className="h-4 w-4 mr-2" />
              View Detailed Report
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interview Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-gray-500" />
              <div className="flex-1">
                <p className="font-medium">Introduction & Warm-up</p>
                <p className="text-sm text-gray-600">00:00 - 05:30</p>
              </div>
              <Button variant="ghost" size="sm">Jump to</Button>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-gray-500" />
              <div className="flex-1">
                <p className="font-medium">Technical Questions</p>
                <p className="text-sm text-gray-600">05:30 - 25:15</p>
              </div>
              <Button variant="ghost" size="sm">Jump to</Button>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-gray-500" />
              <div className="flex-1">
                <p className="font-medium">Behavioral Questions</p>
                <p className="text-sm text-gray-600">25:15 - 40:00</p>
              </div>
              <Button variant="ghost" size="sm">Jump to</Button>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-gray-500" />
              <div className="flex-1">
                <p className="font-medium">Q&A & Closing</p>
                <p className="text-sm text-gray-600">40:00 - 45:32</p>
              </div>
              <Button variant="ghost" size="sm">Jump to</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRInterviewRecordingView;