import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Bootcamp from "./pages/Bootcamp";
import CourseDetail from "./pages/CourseDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReferralProgram from "./pages/ReferralProgram";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import InterviewQuestions from "./pages/InterviewQuestions";
import Quizzes from "./pages/Quizzes";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/referral-program" element={<ReferralProgram />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/interview-questions" element={<InterviewQuestions />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
