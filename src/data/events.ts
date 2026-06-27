import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "upcoming" | "past";
  image: string;
  tags: string[];
  registrationLink: string;
  recordingLink?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "navigating-pm-careers",
    title: "Navigating Careers in Product Management",
    description:
      "Join us for a LIVE session with industry leaders as we deep-dive into the career journey of a PM — the challenges, the skills, and the roadmap to success.",
    date: "April 12, 2026",
    time: "08:00 PM – 09:00 PM IST",
    location: "Online (Zoom)",
    type: "upcoming",
    image: event1,
    tags: ["Webinar", "Product Management"],
    registrationLink: "#",
  },
  {
    id: "scrum-master-workshop",
    title: "Scrum Master Certification Prep Workshop",
    description:
      "A hands-on workshop to prepare for the PSM-I certification. Practice with real exam questions, learn key Scrum concepts, and get tips from certified trainers.",
    date: "April 26, 2026",
    time: "10:00 AM – 12:00 PM IST",
    location: "Online (Zoom)",
    type: "upcoming",
    image: event2,
    tags: ["Workshop", "Scrum"],
    registrationLink: "#",
  },
  {
    id: "agile-transformation",
    title: "Agile Transformation: Leadership Perspectives",
    description:
      "Hear from senior leaders who have driven enterprise-level agile transformations. Learn strategies, pitfalls to avoid, and how to build an agile culture.",
    date: "May 10, 2026",
    time: "07:00 PM – 08:30 PM IST",
    location: "Online (Zoom)",
    type: "upcoming",
    image: event3,
    tags: ["Webinar", "Leadership"],
    registrationLink: "#",
  },
  {
    id: "safe-deep-dive",
    title: "SAFe Framework Deep Dive",
    description:
      "An in-depth session covering the Scaled Agile Framework (SAFe) — roles, events, artifacts, and how to implement SAFe in large organisations.",
    date: "February 15, 2026",
    time: "06:00 PM – 07:30 PM IST",
    location: "Online (Zoom)",
    type: "past",
    image: event4,
    tags: ["Webinar", "SAFe"],
    registrationLink: "#",
    recordingLink: "#",
  },
  {
    id: "kanban-best-practices",
    title: "Kanban Methodology: Best Practices",
    description:
      "Explore how Kanban can streamline your team's workflow. Covers WIP limits, flow metrics, and real-world case studies from successful Kanban adoptions.",
    date: "January 22, 2026",
    time: "08:00 PM – 09:00 PM IST",
    location: "Online (Zoom)",
    type: "past",
    image: event5,
    tags: ["Webinar", "Kanban"],
    registrationLink: "#",
    recordingLink: "#",
  },
  {
    id: "sprint-planning-retro",
    title: "Sprint Planning & Retrospective Workshop",
    description:
      "Master the art of sprint planning and running effective retrospectives. Interactive exercises and templates included for your team to use immediately.",
    date: "December 10, 2025",
    time: "10:00 AM – 11:30 AM IST",
    location: "Online (Zoom)",
    type: "past",
    image: event6,
    tags: ["Workshop", "Scrum"],
    registrationLink: "#",
    recordingLink: "#",
  },
];
