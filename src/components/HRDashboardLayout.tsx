import React from 'react';
import HRSidebar from './HRSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, TrendingUp, Clock, Plus, Eye } from 'lucide-react';

const HRDashboardLayout = () => {
  const stats = [
    { title: 'Total Interviews', value: '156', change: '+12%', icon: Users },
    { title: 'Scheduled Today', value: '8', change: '+2', icon: Calendar },
    { title: 'Success Rate', value: '78%', change: '+5%', icon: TrendingUp },
    { title: 'Avg Duration', value: '32m', change: '-3m', icon: Clock },
  ];

  const recentInterviews = [
    { id: 1, candidate: 'John Smith', role: 'Senior Developer', time: '10:00 AM', status: 'completed' },
    { id: 2, candidate: 'Sarah Johnson', role: 'Product Manager', time: '2:00 PM', status: 'scheduled' },
    { id: 3, candidate: 'Mike Chen', role: 'UX Designer', time: '4:00 PM', status: 'in-progress' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <HRSidebar />
      <div className="flex-1 ml-64 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">HR Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your interviews today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-ai-blue" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Interviews */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInterviews.map((interview) => (
                  <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{interview.candidate}</h4>
                      <p className="text-sm text-gray-600">{interview.role}</p>
                      <p className="text-sm text-gray-500">{interview.time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        interview.status === 'completed' ? 'bg-green-100 text-green-800' :
                        interview.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {interview.status}
                      </span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Schedule New Interview
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Users className="mr-2 h-5 w-5" />
                View All Candidates
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <TrendingUp className="mr-2 h-5 w-5" />
                Analytics Report
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Calendar View
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HRDashboardLayout;