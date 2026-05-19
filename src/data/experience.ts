export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    role: "Freelance Web Developer",
    company: "Independent",
    location: "Remote",
    period: "Jun 2020 – Nov 2021",
    highlights: [
      "Delivered 15+ client projects using React, Node.js, and MongoDB",
    ],
  },
  {
    id: "fabtechsol",
    role: "Full Stack Engineer",
    company: "Fabtechsol",
    location: "Sialkot, PK",
    period: "Dec 2021 – Dec 2022",
    highlights: [
      "Built NFT marketplace with Solidity and Ether.js",
      "Developed Django reporting engines and Docker CI/CD pipelines",
      "Reduced deployment times by 25%",
    ],
  },
  {
    id: "flexlab",
    role: "Tech Lead & Engineering Manager",
    company: "Flexlab",
    location: "Remote",
    period: "Jan 2023 – Present",
    highlights: [
      "Led multi-client engagements across fintech, Web3, AI, and SaaS",
      "Architected microservices with Next.js and Django on AWS",
      "Built streaming SDKs, monorepo migrations, and data pipelines",
    ],
  },
  {
    id: "blockhouse",
    role: "Founding Engineer → Engineering Manager → CTO",
    company: "Blockhouse",
    location: "blockhouse.app",
    period: "Apr 2024 – Apr 2025",
    highlights: [
      "Built system design from scratch; scaled to 40+ engineers",
      "Monorepo migration (Turborepo + Nx): 2 weeks, zero downtime",
      "Quant trading infra: FIX protocol ingestion, backtesting, Spark on SageMaker",
      "Raised $300K in funding",
    ],
  },
  {
    id: "hack-for-la",
    role: "Open-Source Contributor",
    company: "Hack For LA",
    location: "Volunteer",
    period: "May 2024 – Present",
    highlights: [
      "Contributing to civic-tech open-source initiatives",
    ],
  },
];
