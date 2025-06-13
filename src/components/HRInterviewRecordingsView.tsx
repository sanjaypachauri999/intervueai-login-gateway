import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Search, Filter, Calendar, User } from 'lucide-react';

const HRInterviewRecordingsView = () => {
  const recordings = [
    {
      id: 'INT-2024-001',
      candidate: 'John Smith',
      role: 'Senior React Developer',
      date: '2024-03-15',
      duration: '45:32',
      status: 'completed',
      score: 85,
      thumbnail: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'INT-2024-002',
      candidate: 'Sarah Johnson',
      role: 'Product Manager',
      date: '2024-03-14',
      duration: '38:15',
      status: 'completed',
      score: 92,
      thumbnail: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'INT-2024-003',
      candidate: 'Mike Chen',
      role: 'UX Designer',
      date: '2024-03-13',
      duration: '42:08',
      status: 'completed',
      score: 78,
      thumbnail: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'INT-2024-004',
      candidate: 'Emily Davis',
      role: 'Data Scientist',
      date: '2024-03-12',
      duration: '51:22',
      status: 'completed',
      score: 88,
      thumbnail: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Interview Recordings</h1>
        <p className="text-gray-600 mt-2">Review and analyze completed interview recordings</p>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search by candidate name or role..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recordings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {recordings.map((recording) => (
          <Card key={recording.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={recording.thumbnail} 
                alt={recording.candidate}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button size="lg" className="rounded-full">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className={getScoreColor(recording.score)}>
                  Score: {recording.score}%
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                {recording.duration}
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{recording.candidate}</h3>
                  <p className="text-gray-600">{recording.role}</p>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(recording.date).toLocaleDateString()}
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  Interview ID: {recording.id}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Play className="h-4 w-4 mr-1" />
                    Watch
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Recordings
        </Button>
      </div>
    </div>
  );
};

export default HRInterviewRecordingsView;