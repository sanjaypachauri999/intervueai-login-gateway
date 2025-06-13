import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Video, FileText, CheckCircle } from 'lucide-react';

const MyInterviewsLayout = () => {
  const interviews = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Senior React Developer',
      date: '2024-03-20',
      time: '2:00 PM',
      status: 'scheduled',
      type: 'video',
      location: 'Online',
      interviewer: 'Sarah Johnson'
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Engineer',
      date: '2024-03-18',
      time: '10:30 AM',
      status: 'completed',
      type: 'video',
      location: 'Online',
      interviewer: 'Mike Chen',
      score: '8.5/10'
    },
    {
      id: 3,
      company: 'Enterprise Solutions',
      position: 'Frontend Developer',
      date: '2024-03-25',
      time: '3:30 PM',
      status: 'scheduled',
      type: 'video',
      location: 'Online',
      interviewer: 'Emily Davis'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'scheduled': return <Calendar className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Interviews</h1>
        <p className="text-gray-600 mt-2">Track and manage your interview schedule</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">3</p>
                <p className="text-sm text-gray-600">Total Interviews</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-600">1</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-orange-600">2</p>
                <p className="text-sm text-gray-600">Upcoming</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {interviews.map((interview) => (
          <Card key={interview.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{interview.position}</CardTitle>
                  <p className="text-gray-600 font-medium">{interview.company}</p>
                </div>
                <Badge className={getStatusColor(interview.status)}>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(interview.status)}
                    {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                  </div>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{interview.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{interview.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{interview.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Video Call</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span>Interviewer: </span>
                  <span className="font-medium">{interview.interviewer}</span>
                  {interview.score && (
                    <span className="ml-4 text-green-600 font-medium">
                      Score: {interview.score}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {interview.status === 'scheduled' && (
                    <Button size="sm">
                      <Video className="h-4 w-4 mr-2" />
                      Join Interview
                    </Button>
                  )}
                  {interview.status === 'completed' && (
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Report
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {interviews.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No interviews scheduled</h3>
            <p className="text-gray-600 mb-4">You don't have any interviews scheduled at the moment.</p>
            <Button>Browse Job Opportunities</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MyInterviewsLayout;