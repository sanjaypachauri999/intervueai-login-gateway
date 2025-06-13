import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Award, 
  BarChart3,
  Download,
  Eye
} from 'lucide-react';

const HRSkillAnalyzerView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const skillsData = [
    {
      skill: 'React',
      candidates: 45,
      avgScore: 8.2,
      trend: 'up',
      demand: 'high',
      proficiencyLevels: {
        beginner: 15,
        intermediate: 20,
        advanced: 10
      }
    },
    {
      skill: 'JavaScript',
      candidates: 52,
      avgScore: 7.8,
      trend: 'up',
      demand: 'high',
      proficiencyLevels: {
        beginner: 18,
        intermediate: 24,
        advanced: 10
      }
    },
    {
      skill: 'Node.js',
      candidates: 38,
      avgScore: 7.5,
      trend: 'stable',
      demand: 'medium',
      proficiencyLevels: {
        beginner: 12,
        intermediate: 18,
        advanced: 8
      }
    },
    {
      skill: 'Python',
      candidates: 41,
      avgScore: 8.0,
      trend: 'up',
      demand: 'high',
      proficiencyLevels: {
        beginner: 14,
        intermediate: 19,
        advanced: 8
      }
    },
    {
      skill: 'TypeScript',
      candidates: 29,
      avgScore: 8.5,
      trend: 'up',
      demand: 'medium',
      proficiencyLevels: {
        beginner: 8,
        intermediate: 15,
        advanced: 6
      }
    }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗️' : trend === 'down' ? '↘️' : '➡️';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Skill Analyzer</h1>
        <p className="text-gray-600 mt-2">Analyze candidate skills and market trends</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">127</p>
                <p className="text-sm text-gray-600">Total Candidates</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-600">24</p>
                <p className="text-sm text-gray-600">Skills Tracked</p>
              </div>
              <Award className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-600">8.1</p>
                <p className="text-sm text-gray-600">Avg Skill Score</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-orange-600">15%</p>
                <p className="text-sm text-gray-600">Growth Rate</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Skill Analysis Dashboard</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            {skillsData.map((skill) => (
              <Card key={skill.skill} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{skill.skill}</h3>
                        <span className="text-lg">{getTrendIcon(skill.trend)}</span>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge className={getDemandColor(skill.demand)}>
                          {skill.demand} demand
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>{skill.candidates} candidates</p>
                        <p>Avg Score: {skill.avgScore}/10</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="font-medium mb-3">Proficiency Distribution</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Beginner</span>
                            <span>{skill.proficiencyLevels.beginner} candidates</span>
                          </div>
                          <Progress 
                            value={(skill.proficiencyLevels.beginner / skill.candidates) * 100} 
                            className="h-2"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Intermediate</span>
                            <span>{skill.proficiencyLevels.intermediate} candidates</span>
                          </div>
                          <Progress 
                            value={(skill.proficiencyLevels.intermediate / skill.candidates) * 100} 
                            className="h-2"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Advanced</span>
                            <span>{skill.proficiencyLevels.advanced} candidates</span>
                          </div>
                          <Progress 
                            value={(skill.proficiencyLevels.advanced / skill.candidates) * 100} 
                            className="h-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1 flex flex-col justify-center">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {skill.avgScore}
                        </div>
                        <div className="text-sm text-gray-600">Average Score</div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Skills in Demand</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['React', 'JavaScript', 'Python', 'TypeScript', 'Node.js'].map((skill, index) => (
                <div key={skill} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium">{skill}</span>
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Gap Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">Critical Gaps</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Advanced React developers (shortage of 60%)</li>
                  <li>• Senior Python engineers (shortage of 45%)</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">Moderate Gaps</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• TypeScript specialists (shortage of 30%)</li>
                  <li>• DevOps engineers (shortage of 25%)</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Well Covered</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Junior JavaScript developers</li>
                  <li>• HTML/CSS specialists</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HRSkillAnalyzerView;