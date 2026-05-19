const WHATSAPP_NUMBER = "923494855565";

export const whatsappMessage =
  "Hi Zubair, I came across your portfolio and would like to get in touch.";

export const profile = {
  name: "Muhammad Zubair",
  title: "Full Stack AI Engineer & Engineering Lead",
  headline:
    "Full Stack AI Engineer · Engineering Lead · ex-CTO",
  tagline:
    "5+ years building across fintech, Web3, AI, and enterprise SaaS - from founding engineer to CTO.",
  email: "zubairstack@gmail.com",
  whatsapp: `+${WHATSAPP_NUMBER}`,
  whatsappMessage,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
  github: "https://github.com/zubairstack",
  linkedin: "https://linkedin.com/in/zubairstack",
  siteUrl: "https://zubairstack.github.io",
} as const;

export const about = {
  bio: `I started as a freelance web developer shipping client projects across React and Node, then moved into full-stack engineering building NFT marketplaces, Django reporting engines, and Docker-based CI/CD pipelines. Today I lead engineering teams across fintech, Web3, AI, and enterprise SaaS - architecting microservices on AWS, driving monorepo migrations, and building streaming SDKs and data pipelines. As founding engineer and later CTO at Blockhouse, I scaled the org from zero to 40+ engineers across full-stack, DevOps, MLOps, and quant research.`,
  highlight:
    "Managed 40+ engineers and shipped production systems across 4+ industries.",
  education: [
    "B.Sc. Information Technology - University of Gujrat",
    "DevOps on AWS Specialization",
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;
