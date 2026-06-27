import { Briefcase, Users, Star, Bot, CalendarDays, BarChart3, Trophy } from "lucide-react";

export const heroContent = {
  titleMain: "Scrum Master & Product Owner",
  titleHighlight: "Career Accelerator",
  description: "Real-World Execution. Hands-On Jira. Applied AI. Job-Ready in 5 Weeks.",
  enquireText: "Enquire Now",
  demoText: "Watch Demo",
  imageAlt: "Team collaborating on agile project",
};

export const audienceCardsData = [
  {
    icon: Briefcase,
    title: "Career Transitioners",
    description: "Professionals moving into Agile, Product, or Scrum roles seeking practical skills and industry knowledge.",
  },
  {
    icon: Users,
    title: "Interview Preparation",
    description: "Candidates preparing for Product Owner, Product Manager, or Scrum Master job interviews.",
  },
  {
    icon: Star,
    title: "Future Agile Leaders",
    description: "Aspiring leaders aiming to sharpen facilitation and leadership skills for high-impact roles.",
  },
];

export const whyChooseData = [
  {
    icon: Bot,
    title: "Hands-On AI & Jira Learning",
    description: "Learn by doing with real projects using AI and Jira, not just watching demos.",
  },
  {
    icon: CalendarDays,
    title: "Daily Interview Q&A",
    description: "Master tough real-world situational Scrum Master and Product Owner interview questions.",
  },
  {
    icon: BarChart3,
    title: "Real-World Project",
    description: "Work through real Agile project, navigating its challenges and solutions.",
  },
  {
    icon: Trophy,
    title: "Career-Focused Curriculum",
    description: "Designed to make you job-ready with practical skills employers demand.",
  },
];

export const alumniStoriesData = [
  {
    name: "Rachit",
    role: "Associate Manager",
    company: "Tredence",
    headline: "Landed a Role at Tredence",
    quote: "Huge thanks to my coach for an impactful Scrum Master Bootcamp. It went beyond frameworks—real-world insights, mindset shifts, and lessons I could apply instantly.",
  },
  {
    name: "Nelson",
    role: "Scrum Master",
    company: "New Role",
    headline: "Secured Scrum Master Role",
    quote: "Recently attended a Scrum Bootcamp that turned out to be a real game-changer. It not only deepened my understanding of Scrum but also gave me practical insights that helped me crack my new role.",
  },
  {
    name: "Biswajit Rajkumar",
    role: "Scrum Master",
    company: "Top MNC",
    headline: "Got Hired by a Top MNC",
    quote: "I'm thrilled to share that I've now secured a Scrum Master role at a top MNC — a milestone made possible by expert mentorship during the Bootcamp.",
  },
  {
    name: "Gaurav",
    role: "Senior Scrum Master",
    company: "Netlink Software",
    headline: "Started Role at Netlink",
    quote: "It wasn't just a Scrum Master refresher—it gave me practical insights and confidence for my new role. Truly grateful for the mentorship and support!",
  },
];

export const weeklyContentData = [
  {
    week: "Week 1",
    title: "Product Strategy & Foundation",
    topics: [
      "Career Branding & Networking — Optimizing LinkedIn and profiles to stand out to recruiters.",
      "Design Thinking & Discovery — Applying Design Thinking principles alongside AI prompts for rapid personas.",
      "Resume Building — Create ATS-friendly, keyword-optimized resumes with live expert review.",
      "Process Optimization — Utilizing AI to analyze Value Stream Maps and identify waste patterns.",
    ],
  },
  {
    week: "Week 2",
    title: "Operational Excellence",
    topics: [
      "Conflict & Flow Management — Navigating interpersonal friction while optimizing Kanban flow.",
      "Metrics & Governance — Implementing essential metrics and management dashboards using Jira.",
      "Financial & Release Planning — Aligning project budgeting with realistic release timelines.",
      "Agile Maturity — Assessing team growth through Agile Maturity Models with AI-generated coaching roadmaps.",
    ],
  },
  {
    week: "Week 3",
    title: "Scaled Planning & Backlog Readiness",
    topics: [
      "SAFe PI Preparation — Prioritizing Epics and creating a healthy, high-readiness ART backlog.",
      "PI Planning Execution — Conducting PI Planning events, crafting PI Objectives and the Program Board.",
      "Backlog Refinement — Leveraging AI to draft User Stories and Acceptance Criteria meeting DoR and DoD.",
      "Strategic Alignment — Synchronizing team objectives with the broader Program Board.",
    ],
  },
  {
    week: "Week 4",
    title: "Mastery of Execution & Growth",
    topics: [
      "Risk & Dependency Management — Using AI to identify hidden dependencies and predict project risks.",
      "Feedback & Retrospectives — Sprint Reviews, Inspect & Adapt sessions, and data-driven Retrospectives.",
      "The Execution Cycle — Facilitating Sprint Planning, Daily Scrums, ART Syncs, and PI System Demos.",
      "Continuous Improvement — Observing anti-patterns and coaching teams toward high performance.",
    ],
  },
];

export const pricingPlansData = [
  {
    name: "Self-Learning Pack",
    price: "₹9,999",
    type: "Self-Paced",
    features: [
      { text: "PDF Interview Questions", included: true },
      { text: "PDF Course Notes & Templates", included: true },
      { text: "Certificate of Completion", included: true },
      { text: "Live Project Work", included: false },
      { text: "Personal Feedback", included: false },
      { text: "Community Access", included: false },
      { text: "Free Future Batch Access", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Core Bootcamp",
    price: "₹34,999",
    type: "Guided Learning",
    features: [
      { text: "30-Hr Live Project Bootcamp", included: true },
      { text: "6 Group Interview Sessions", included: true },
      { text: "PDF Notes + Study Resources", included: true },
      { text: "Certificate of Completion", included: true },
      { text: "Group Feedback Only", included: true },
      { text: "Limited Community Access", included: false },
      { text: "Free Future Batch Access", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Premium Bootcamp",
    price: "₹38,599",
    originalPrice: "₹45,999",
    type: "Full Mentorship & Support",
    features: [
      { text: "30-Hr Live Project + Jira Execution", included: true },
      { text: "Individual Review of Assignments", included: true },
      { text: "6 Group + 2 Personal Interview Sessions", included: true },
      { text: "Lifetime Community Access", included: true },
      { text: "PDF Notes + Bonus Templates + Career Resources", included: true },
      { text: "PSM-I, PSPO-I, PSM-II Prep + Cert", included: true },
      { text: "Join Future Batches for Free", included: true },
    ],
    highlighted: true,
  },
];

export const faqsData = [
  {
    question: "What if I miss a session? How do I catch up?",
    answer: "We have a built-in catch-up structure. Weekday sessions include a 30-minute catch-up slot before the main session. Weekend sessions repeat the same weekday topics so you can re-attend and stay aligned with the cohort.",
  },
  {
    question: "How does this bootcamp help with job placement?",
    answer: "Our program transforms learning into real career opportunities through hands-on Scrum practice, live mock interviews with feedback, resume optimization, LinkedIn profile guidance, and access to our alumni and hiring manager network.",
  },
  {
    question: "How is the payment done?",
    answer: "We offer a weekly installment plan — the total fee is split into 4 manageable weekly payments. A secure payment link is shared after enrollment, making the program accessible as you progress.",
  },
  {
    question: "Do I need prior experience in Agile or Scrum?",
    answer: "No prior experience needed! This is a structured, beginner-friendly cohort that guides you step by step from fundamentals to job-ready expertise.",
  },
];

export const extraSectionsContent = {
  launchpad: {
    title: "This is NOT just training — it's your career launchpad!",
    subtitle: "Ready to secure your dream Scrum Master or Product Owner role? Limited seats available!",
    batches: [
      { name: "Weekend Batch", schedule: "Sat & Sun · 6:45 PM – 9:45 PM IST" },
      { name: "Weekday Batch", schedule: "Mon – Fri · 7:30 PM – 9:30 PM IST" }
    ]
  },
  certification: {
    title: "Certification & Intern Badge",
    description: "Upon program completion, participants receive a certificate and an intern badge to showcase practical experience and job readiness across various industries.",
    badge: "No prior experience needed!"
  },
  contact: {
    title: "Still Not Sure?",
    description: "We're here to help answer your questions and guide you to the perfect solution."
  }
};