import { Calendar, HelpCircle, MessageSquareText } from "lucide-react";

export const resourceItems = [
  { 
    label: "Events", 
    description: "Join our upcoming agile workshops and webinars.", 
    to: "/events", 
    icon: Calendar 
  },
  { 
    label: "Quiz", 
    description: "Test your knowledge with our industry-standard agile quizzes.", 
    to: "/quizzes", 
    icon: HelpCircle 
  },
  { 
    label: "Interview Questions", 
    description: "Master your next interview with our curated question bank.", 
    to: "/interview-questions", 
    icon: MessageSquareText 
  },
];

export const navItems = [
  { label: "Courses", hasDropdown: true, to: "#" },
  { label: "Resources", hasDropdown: true, to: "#" },
  { label: "Bootcamp", hasDropdown: false, to: "/bootcamp" },
  { label: "Referral Program", hasDropdown: false, to: "/referral-program" },
  { label: "Blog", hasDropdown: false, to: "/blog" },
  { label: "Careers", hasDropdown: false, to: "/careers" },
  { label: "About Us", hasDropdown: false, to: "/about" },
];