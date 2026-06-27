export interface InterviewGuide {
  id: string;
  title: string;
  description: string;
  category: "scrum-master" | "product-owner" | "agile-coach";
  comingSoon?: boolean;
}

export const interviewGuides: InterviewGuide[] = [
  {
    id: "scrum-master-guide",
    title: "Scrum Master Interview Guide",
    description:
      "Complete preparation guide covering Scrum framework, facilitation techniques, team dynamics, and real-world scenarios.",
    category: "scrum-master",
  },
  {
    id: "estimation-guide",
    title: "Estimation Interview Guide",
    description:
      "A practical interview guide using storytelling answers to address common estimation challenges like team disagreements and building team alignment through real-world scenarios.",
    category: "scrum-master",
  },
  {
    id: "team-collaboration-guide",
    title: "Team Collaboration Interview Guide",
    description:
      "A practical interview guide using storytelling answers to address common team collaboration challenges like resistance to cross-training, fear of losing expertise, and building true team ownership.",
    category: "scrum-master",
  },
  {
    id: "hybrid-teams-guide",
    title: "Collaboration in Hybrid Teams Guide",
    description:
      "Turn hybrid chaos into connection. Master 10 real interview questions on hybrid collaboration with refined, storytelling answers that impress.",
    category: "scrum-master",
  },
  {
    id: "saying-not-yet",
    title: "How to Say 'Not Yet' Without Saying No",
    description:
      "Practical questions that test how Scrum Masters and Agile Coaches handle leadership-set deadlines before estimation.",
    category: "agile-coach",
  },
  {
    id: "remote-scrum-master",
    title: "Remote Scrum Master Visibility",
    description:
      "This guide dives into real challenges faced by remote Scrum Masters and how to turn invisibility into influence.",
    category: "scrum-master",
  },
  {
    id: "enterprise-scale",
    title: "Scrum Masters in Enterprise-Scale Agility",
    description:
      "10 real-world scenarios where Scrum Masters navigate scaled agility — balancing autonomy with alignment, coaching under pressure, and influencing without authority.",
    category: "scrum-master",
  },
  {
    id: "product-owner-guide",
    title: "Product Owner Interview Guide",
    description:
      "Comprehensive guide covering product vision, backlog management, stakeholder communication, and value delivery strategies.",
    category: "product-owner",
    comingSoon: true,
  },
  {
    id: "agile-coach-guide",
    title: "Agile Coach Interview Guide",
    description:
      "Advanced guide for coaching roles covering organisational transformation, mentoring teams, and driving cultural change.",
    category: "agile-coach",
    comingSoon: true,
  },
];
