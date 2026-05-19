export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Golang",
      "Rust",
      "PHP",
      "SQL",
      "Bash",
      "Java",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Django",
      "FastAPI",
      "Flask",
      "Node.js",
      "Nest.js",
      "Express.js",
      "Golang",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "ClickHouse",
      "Pinecone (vector)",
    ],
  },
  {
    id: "aws",
    label: "AWS",
    skills: [
      "EC2",
      "S3",
      "RDS",
      "CloudFront",
      "Lambda",
      "Lambda@Edge",
      "SageMaker",
      "Glue",
      "KMS",
      "Nitro Enclave",
      "Textract",
      "Route53",
      "Amplify",
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Nginx",
      "GitHub Actions",
      "Turborepo",
      "Nx",
      "pnpm",
    ],
  },
  {
    id: "data-streaming",
    label: "Data / Streaming",
    skills: [
      "Redpanda (Kafka)",
      "Apache Spark",
      "AWS Glue",
      "ETL pipelines",
    ],
  },
  {
    id: "blockchain",
    label: "Blockchain / Web3",
    skills: [
      "Solidity",
      "Ether.js",
      "Hyperledger Fabric",
      "ERC-721",
      "MetaMask",
      "Safe Wallet",
      "AWS Managed Blockchain",
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: [
      "OpenAI API",
      "Anthropic Claude API",
      "Pinecone",
      "RAG",
      "AI agent architectures",
      "Botpress",
    ],
  },
  {
    id: "trading",
    label: "Trading / Finance",
    skills: [
      "FIX Protocol",
      "Smart Order Routing",
      "VWAP/TWAP",
      "TCA",
      "Plaid",
      "Stripe",
    ],
  },
];
