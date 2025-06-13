import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, Zap, Shield } from 'lucide-react';

const RequestDemoLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request a Demo</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See IntervueAI in action. Schedule a personalized demo with our team and discover how AI can transform your hiring process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Demo Request Form */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Demo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Acme Corporation" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input id="jobTitle" placeholder="HR Manager" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div>
                <Label htmlFor="companySize">Company Size *</Label>
                <select id="companySize" className="w-full p-2 border rounded-md">
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div>
                <Label htmlFor="industry">Industry</Label>
                <select id="industry" className="w-full p-2 border rounded-md">
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="hiringNeeds">Tell us about your hiring needs</Label>
                <Textarea 
                  id="hiringNeeds" 
                  placeholder="What roles are you hiring for? What challenges are you facing with your current process?"
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="preferredTime">Preferred Demo Time</Label>
                <select id="preferredTime" className="w-full p-2 border rounded-md">
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <Button className="w-full" size="lg">
                Schedule Demo
              </Button>

              <p className="text-sm text-gray-600 text-center">
                We'll contact you within 24 hours to confirm your demo time
              </p>
            </CardContent>
          </Card>

          {/* Demo Benefits */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What You'll See in the Demo</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-ai-blue mt-1" />
                    <div>
                      <h4 className="font-medium">AI-Powered Interviews</h4>
                      <p className="text-gray-600 text-sm">See how our AI conducts natural, engaging interviews</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-ai-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Candidate Assessment</h4>
                      <p className="text-gray-600 text-sm">Real-time analysis and scoring of candidate responses</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-6 w-6 text-ai-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Scheduling & Management</h4>
                      <p className="text-gray-600 text-sm">Streamlined interview scheduling and tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-ai-blue mt-1" />
                    <div>
                      <h4 className="font-medium">Security & Compliance</h4>
                      <p className="text-gray-600 text-sm">Enterprise-grade security and data protection</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose IntervueAI?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                    <span className="text-sm">Reduce time-to-hire by 60%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                    <span className="text-sm">Eliminate scheduling conflicts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                    <span className="text-sm">Consistent, bias-free evaluations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                    <span className="text-sm">Detailed candidate insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                    <span className="text-sm">24/7 interview availability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-ai-blue text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-4">
                  Join 500+ companies already using IntervueAI to revolutionize their hiring process.
                </p>
                <Button variant="secondary" className="bg-white text-ai-blue hover:bg-gray-100">
                  View Customer Stories
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoLayout;