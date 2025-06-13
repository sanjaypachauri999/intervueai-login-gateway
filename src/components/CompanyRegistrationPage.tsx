import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building, Users, Globe, Mail } from 'lucide-react';

const CompanyRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Register Your Company</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join IntervueAI and transform your hiring process with AI-powered interviews
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input id="companyName" placeholder="Acme Corporation" />
              </div>
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <select id="industry" className="w-full p-2 border rounded-md">
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companySize">Company Size *</Label>
                <select id="companySize" className="w-full p-2 border rounded-md">
                  <option value="">Select Size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div>
                <Label htmlFor="website">Company Website</Label>
                <Input id="website" placeholder="https://www.acme.com" />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Company Description</Label>
              <Textarea 
                id="description" 
                placeholder="Tell us about your company..."
                className="min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Country *</Label>
                <select id="country" className="w-full p-2 border rounded-md">
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="in">India</option>
                  <option value="au">Australia</option>
                </select>
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input id="city" placeholder="San Francisco" />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Primary Contact Information</h3>
              
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@acme.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input id="jobTitle" placeholder="HR Manager" />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Hiring Needs</h3>
              
              <div>
                <Label htmlFor="hiringVolume">Expected Monthly Hiring Volume</Label>
                <select id="hiringVolume" className="w-full p-2 border rounded-md">
                  <option value="">Select Volume</option>
                  <option value="1-5">1-5 hires</option>
                  <option value="6-15">6-15 hires</option>
                  <option value="16-50">16-50 hires</option>
                  <option value="50+">50+ hires</option>
                </select>
              </div>

              <div className="mt-4">
                <Label htmlFor="roles">Primary Roles You Hire For</Label>
                <Textarea 
                  id="roles" 
                  placeholder="e.g., Software Engineers, Sales Representatives, Customer Support..."
                  className="min-h-[80px]"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="rounded" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <a href="/terms-of-service" className="text-ai-blue hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-ai-blue hover:underline">Privacy Policy</a>
              </Label>
            </div>

            <Button className="w-full" size="lg">
              Register Company
            </Button>

            <p className="text-center text-sm text-gray-600">
              Already have an account? <a href="/login" className="text-ai-blue hover:underline">Sign in here</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyRegistrationPage;