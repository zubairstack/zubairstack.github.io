export interface Achievement {
  id: string;
  title: string;
  summary: string;
  details: string;
}

export const achievements: Achievement[] = [
  {
    id: "lambda-edge-seo",
    title: "SEO on React SPA via Lambda@Edge",
    summary:
      "Avoided third-party SSR costs with bot-aware pre-rendering at the CDN edge.",
    details:
      "Lambda@Edge intercepts CloudFront requests: bots receive pre-rendered HTML from S3, users get the React app. Each page auto-generates static HTML on publish - no ongoing SSR infrastructure.",
  },
  {
    id: "cto-blockhouse",
    title: "CTO at Blockhouse",
    summary:
      "Scaled from founding engineer to managing 40+ engineers across disciplines.",
    details:
      "Built the engineering org across full-stack, DevOps, MLOps, and quant research. Implemented Linear + GitHub + Slack-integrated ops for delivery at scale.",
  },
  {
    id: "monorepo-migration",
    title: "Monorepo Migration at Blockhouse",
    summary:
      "Consolidated 4–5 repos into Turborepo + Nx in 2 weeks with zero downtime.",
    details:
      "Unified CI/CD, shared packages, and deployment pipelines. Migration completed in 2 weeks with no broken production deployments.",
  },
  {
    id: "tee-parryai",
    title: "TEE Architecture for ParryAI",
    summary:
      "AI agents execute crypto transactions inside AWS Nitro Enclave - keys never leave TEE.",
    details:
      "Private keys never leave the secure environment. KMS handles rotation. Flow: Chrome extension → Nest.js → Flask → TEE.",
  },
  {
    id: "quant-infra",
    title: "Quant Trading Infrastructure",
    summary:
      "FIX protocol ingestion, backtesting, and Spark pipelines on AWS.",
    details:
      "FIX protocol market data ingestion from brokers/exchanges into S3 data lake. Backtesting with alpha signal generation. Spark on SageMaker, AWS Glue ETL.",
  },
];
