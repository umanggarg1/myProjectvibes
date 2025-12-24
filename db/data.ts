// All products data - matches schema.ts structure
export const allProducts = [
  
  {
    id: 1,
    name: "Vidify",
    slug: "vidify",
    tagline: "Transform your videos into marketing assets",
    description:
      "Easily create and edit professional marketing videos with pre-built templates, stock footage, and powerful editing tools. Perfect for ads, social media, and websites.",
    websiteUrl: "https://vidify.example.com",
    tags: ["Video Editing", "Marketing", "SaaS"],
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    approvedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "vidify11@example.com",
    voteCount: 452,
  },

  {
    id: 2,
    name: "LinkShare",
    slug: "linkshare",
    tagline: "Simplify link sharing and tracking",
    description:
      "Share links with ease and track clicks, conversions, and user engagement. Perfect for marketers and content creators looking to optimize their campaigns.",
    websiteUrl: "https://linkshare.example.com",
    tags: ["Marketing", "Analytics", "SaaS"],
    createdAt: new Date("2024-02-05"),
    approvedAt: new Date("2024-02-06"),
    status: "approved" as const,
    submittedBy: "linkshare12@example.com",
    voteCount: 210,
  },

  {
    id: 3,
    name: "CodeConnect",
    slug: "codeconnect",
    tagline: "A social network for developers and coders",
    description:
      "Connect with developers worldwide, share projects, and collaborate on coding challenges. CodeConnect is the hub for professional networking and skill development.",
    websiteUrl: "https://codeconnect.example.com",
    tags: ["Developer Tools", "Community", "Networking"],
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    approvedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "codeconnect13@example.com",
    voteCount: 128,
  },

  {
    id: 4,
    name: "SwiftDocs",
    slug: "swiftdocs",
    tagline: "Create, manage, and share documents with speed",
    description:
      "Create beautiful, fully editable documents with our simple-to-use platform. Collaborate in real-time and share with anyone instantly, all within a secure environment.",
    websiteUrl: "https://swiftdocs.example.com",
    tags: ["Productivity", "SaaS", "Collaboration"],
    createdAt: new Date("2024-02-07"),
    approvedAt: new Date("2024-02-08"),
    status: "approved" as const,
    submittedBy: "swiftdocs14@example.com",
    voteCount: 376,
  },
  {
    id: 5,
    name: "Parity-pro",
    slug: "parity-pro",
    tagline: "Price parity for global SaaS products",
    description:
      "Maximize your global revenue with intelligent price localization. Automatically adjust pricing based on purchasing power parity to increase conversions worldwide.",
    websiteUrl: "https://paritykit.example.com",
    tags: ["SaaS", "Pricing", "Global"],
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    approvedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "parity05@example.com",
    voteCount: 612,
  },
  {
    id: 6,
    name: "DataViz Pro",
    slug: "dataviz-pro",
    tagline: "Turn your data into beautiful visualizations",
    description:
      "Create interactive charts, graphs, and dashboards from any data source. Perfect for presentations, reports, and data analysis.",
    websiteUrl: "https://datavizpro.example.com",
    tags: ["Analytics", "Design", "SaaS"],
    createdAt: new Date("2024-01-28"),
    approvedAt: new Date("2024-01-29"),
    status: "approved" as const,
    submittedBy: "data06@example.com",
    voteCount: 234,
  },
  {
    id: 7,
    name: "EmailCraft",
    slug: "emailcraft",
    tagline: "Email marketing made simple and powerful",
    description:
      "Design, send, and track beautiful email campaigns with our intuitive drag-and-drop editor and powerful automation tools.",
    websiteUrl: "https://emailcraft.example.com",
    tags: ["Marketing", "Email", "SaaS"],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    approvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "email07@example.com",
    voteCount: 378,
  },
  {
    id: 8,
    name: "APIHub",
    slug: "apihub",
    tagline: "Manage and monitor all your APIs in one place",
    description:
      "Centralized API management platform with real-time monitoring, documentation, and testing tools. Keep all your APIs organized and secure.",
    websiteUrl: "https://apihub.example.com",
    tags: ["Developer Tools", "API", "Infrastructure"],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    approvedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "apihub08@example.com",
    voteCount: 445,
  },
  {
    id: 9,
    name: "Developer to Leader Course",
    slug: "developer-to-leader-course",
    tagline: "Learn to lead a team of developers",
    description:
      "Learn to lead a team of developers and become a leader in your field. This course is designed for developers who want to take the next step in their career and become a leader in their field.",
    websiteUrl: "https://developertoleader.example.com",
    tags: ["Leadership", "Management", "Development"],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    approvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "pending" as const,
    submittedBy: "example09@gmail.com",
    voteCount: 340,
  },
  {
    id: 10,
    name: "AI Chatbot Builder",
    slug: "ai-chatbot-builder",
    tagline: "Create custom AI chatbots without any coding",
    description:
      "Build AI-powered chatbots that can handle customer support, lead generation, and more. Easy to set up and fully customizable with no coding required.",
    websiteUrl: "https://aichatbotbuilder.example.com",
    tags: ["AI", "Chatbot", "SaaS", "Automation"],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "aichatbot10@example.com",
    voteCount: 315,
  },
  {
    id: 11,
    name: "Modern Full Stack Next.js Course",
    slug: "modern-full-stack-nextjs-course",
    tagline: "Learn to build modern full stack applications with Next.js",
    description:
      "Learn to build modern full stack applications with Next.js 16.",
    websiteUrl: "https://nextjscourse.example.dev",
    tags: ["Next.js", "Tailwind CSS", "Full Stack"],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    approvedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "nextjs01@example.com",
    voteCount: 120,
  },
  { 
    id: 12,
    name: "TaskFlow Pro",
    slug: "taskflow-pro",
    tagline: "Manage projects like never before",
    description:
      "Streamline your team's workflow with intelligent task management, automated notifications, and real-time collaboration features.",
    websiteUrl: "https://taskflowpro.example.com",
    tags: ["Productivity", "SaaS"],
    createdAt: new Date("2024-01-18"),
    approvedAt: new Date("2024-01-19"),
    status: "approved" as const,
    submittedBy: "task02@example.com",
    voteCount: 87,
  },
  {
    id: 13,
    name: "CodeSnap-pro",
    slug: "codesnap-pro",
    tagline: "Beautiful code screenshots for developers",
    description:
      "Create stunning code screenshots with customizable themes, syntax highlighting, and export options. Perfect for documentation and social media.",
    websiteUrl: "https://codesnap.example.com",
    tags: ["Developer Tools", "Design"],
    createdAt: new Date("2024-01-20"),
    approvedAt: new Date("2024-01-21"),
    status: "approved" as const,
    submittedBy: "codeSnap03@example.com",
    voteCount: 56,
  },
  {
    id: 14,
    name: "Proofy-pro",
    slug: "proofy-pro",
    tagline: "Social proof notifications that convert visitors",
    description:
      "Boost your website conversions with real-time social proof notifications. Show recent purchases, sign-ups, and user activity to build trust and credibility.",
    websiteUrl: "https://proofybubble.example.com",
    tags: ["Marketing", "SaaS", "Conversion"],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "approved" as const,
    submittedBy: "proofy04@example.com",
    voteCount: 523,
  },
  

];