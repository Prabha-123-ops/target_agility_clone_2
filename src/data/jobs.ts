export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  link: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Agile Coach Remote master",
    location: "Remote",
    type: "Full-Time",
    department: "Consulting",
    description: "Guide enterprise teams through Agile transformations and coach leadership on best practices.",
    link: "#",
  },
  {
    id: "2",
    title: "Scrum Master",
    location: "Bangalore, India",
    type: "Full-Time",
    department: "Delivery",
    description: "Facilitate Scrum ceremonies, remove impediments, and drive continuous improvement across squads.",
    link: "#",
  },
  {
    id: "3",
    title: "Product Owner",
    location: "Hyderabad, India",
    type: "Full-Time",
    department: "Product",
    description: "Own the product backlog, define user stories, and collaborate with stakeholders to maximize value.",
    link: "#",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    location: "Remote",
    type: "Contract",
    department: "Engineering",
    description: "Build and maintain CI/CD pipelines, automate infrastructure, and ensure high availability.",
    link: "#",
  },
  {
    id: "5",
    title: "Corporate Trainer – Agile & SAFe",
    location: "Mumbai, India",
    type: "Full-Time",
    department: "Training",
    description: "Deliver instructor-led training sessions on Agile, Scrum, and SAFe frameworks to corporate clients.",
    link: "#",
  },
  {
    id: "6",
    title: "Business Development Manager",
    location: "Remote",
    type: "Full-Time",
    department: "Sales",
    description: "Drive new client acquisition, manage partnerships, and grow the training business pipeline.",
    link: "#",
  },
];
