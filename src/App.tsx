import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import RegisterCompany from "./pages/RegisterCompany";
import RequestDemo from "./pages/RequestDemo";
import HRDashboard from "./pages/HRDashboard";
import HRSettings from "./pages/HRSettings";
import HRInterviewRecording from "./pages/HRInterviewRecording";
import CandidateDashboard from "./pages/CandidateDashboard";
import CandidateSettings from "./pages/CandidateSettings";
import MyInterviews from "./pages/MyInterviews";
import ProctoredInterview from "./pages/ProctoredInterview";
import NotFound from "./pages/NotFound";
import HRCreateJobRole from "./pages/HRCreateJobRole";
import HRSkillAnalyzer from "./pages/HRSkillAnalyzer";
import HRInterviewRecordings from "./pages/HRInterviewRecordings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Index />} />
          <Route path="/register-company" element={<RegisterCompany />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/hr-settings" element={<HRSettings />} />
          <Route path="/hr-interview-recording" element={<HRInterviewRecording />} />
          <Route path="/hr/create-job-role" element={<HRCreateJobRole />} />
          <Route path="/hr/skill-analyzer" element={<HRSkillAnalyzer />} />
          <Route path="/hr/interview-recordings" element={<HRInterviewRecordings />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/candidate-settings" element={<CandidateSettings />} />
          <Route path="/my-interviews" element={<MyInterviews />} />
          <Route path="/proctored-interview" element={<ProctoredInterview />} />
          <Route path="/candidate/proctored-interview" element={<ProctoredInterview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;