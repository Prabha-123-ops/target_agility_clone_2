import { ClipboardCheck, Award, Target, Shield, BarChart3, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Quiz {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  questionCount: number;
  duration: string;
  icon: LucideIcon;
  link: string;
}

export const quizzes: Quiz[] = [
  {
    id: "psm-1",
    title: "PSM-I Practice Assessment",
    shortTitle: "PSM I",
    description:
      "Evaluate your knowledge and preparedness for the Professional Scrum Master (PSM-I) exam with 80 practice questions.",
    questionCount: 80,
    duration: "60 minutes",
    icon: ClipboardCheck,
    link: "#",
  },
  {
    id: "psm-a",
    title: "PSM-A Practice Assessment",
    shortTitle: "PSM II",
    description:
      "Evaluate your advanced Scrum Master knowledge and preparedness for the PSM-A exam with 30 in-depth questions.",
    questionCount: 30,
    duration: "90 minutes",
    icon: Award,
    link: "#",
  },
  {
    id: "pspo-1",
    title: "PSPO-I Practice Assessment",
    shortTitle: "PSPO I",
    description:
      "Test your Product Owner fundamentals and preparedness for the PSPO-I certification exam.",
    questionCount: 80,
    duration: "60 minutes",
    icon: Target,
    link: "#",
  },
  {
    id: "pspo-2",
    title: "PSPO-II Practice Assessment",
    shortTitle: "PSPO II",
    description:
      "Challenge your advanced Product Owner skills and readiness for the PSPO-II certification exam.",
    questionCount: 40,
    duration: "60 minutes",
    icon: BarChart3,
    link: "#",
  },
  {
    id: "safe-sm",
    title: "SAFe Scrum Master Practice Assessment",
    shortTitle: "SAFe SM",
    description:
      "Evaluate your knowledge and preparedness for the SAFe Scrum Master certification exam.",
    questionCount: 45,
    duration: "90 minutes",
    icon: Shield,
    link: "#",
  },
  {
    id: "agile-fundamentals",
    title: "Agile Fundamentals Assessment",
    shortTitle: "Agile",
    description:
      "Test your understanding of core Agile principles, the Agile Manifesto, and common frameworks used in modern teams.",
    questionCount: 50,
    duration: "45 minutes",
    icon: Users,
    link: "#",
  },
];
