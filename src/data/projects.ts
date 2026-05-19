export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  external?: boolean;
}

export const projects: Project[] = [
  {
    id: "consortia",
    title: "Consortia",
    description:
      "NFT-based real-world property tokenization platform connecting on-chain assets with physical real estate.",
    stack: [
      "Next.js",
      "Solidity",
      "Golang",
      "Hyperledger Fabric",
      "MetaMask",
    ],
    href: "https://consortia-ax.com",
    external: true,
  },
  {
    id: "blockhouse",
    title: "Blockhouse",
    description:
      "Quant trading infrastructure for asset managers — market data ingestion, backtesting, and execution pipelines.",
    stack: [
      "Next.js",
      "Golang",
      "Django",
      "FastAPI",
      "AWS",
      "Redpanda",
      "Spark",
    ],
    href: "https://blockhouse.app",
    external: true,
  },
  {
    id: "on-foundation",
    title: "On.foundation",
    description:
      "Q&A platform with SEO via Lambda@Edge — pre-rendered HTML for bots without SSR infrastructure costs.",
    stack: [
      "React",
      "AWS CloudFront",
      "Lambda@Edge",
      "S3",
      "GitHub Actions",
    ],
    href: "https://on.foundation",
    external: true,
  },
  {
    id: "parryai",
    title: "ParryAI",
    description:
      "Chrome extension and AI agents for autonomous crypto transactions inside AWS Nitro Enclave (TEE).",
    stack: [
      "Chrome Extension",
      "Nest.js",
      "Flask",
      "AWS Nitro Enclave",
      "KMS",
    ],
    href: "#achievements",
    external: false,
  },
  {
    id: "cryptoket",
    title: "Cryptoket",
    description: "Full-featured NFT marketplace with wallet integration and on-chain listings.",
    stack: ["React", "Solidity", "Ether.js"],
    href: "https://github.com/izubaire/Cryptoket-NFT-Marketplace",
    external: true,
  },
  {
    id: "form-builder",
    title: "Form Builder",
    description:
      "Dynamic form builder with EJS templating for rapid client-facing form generation.",
    stack: ["Node.js", "EJS"],
    href: "https://github.com/izubaire/form-builder",
    external: true,
  },
];
