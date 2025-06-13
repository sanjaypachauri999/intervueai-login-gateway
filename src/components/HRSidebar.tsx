import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Video, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Brain
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const HRSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/hr-dashboard' },
    { icon: Plus, label: 'Create Job Role', path: '/hr/create-job-role' },
    { icon: Users, label: 'Candidates', path: '/hr/candidates' },
    { icon: Calendar, label: 'Interviews', path: '/hr/interviews' },
    { icon: Video, label: 'Recordings', path: '/hr/interview-recordings' },
    { icon: Brain, label: 'Skill Analyzer', path: '/hr/skill-analyzer' },
    { icon: BarChart3, label: 'Analytics', path: '/hr/analytics' },
    { icon: Settings, label: 'Settings', path: '/hr-settings' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-ai-blue">IntervueAI</h2>
        <p className="text-sm text-gray-600">HR Portal</p>
      </div>
      
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={location.pathname === item.path ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleNavigation(item.path)}
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default HRSidebar;