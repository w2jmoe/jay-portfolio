export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

export type Project = {
  id: string;
  name: LocalizedText;
  logo: string;
  screenshot: string;
  description: LocalizedText;
  results: LocalizedText;
  impact: LocalizedText;
  links: {
    live?: string;
    github?: string;
    video?: string;
    crowdfund?: string;
  };
  wechatHint?: LocalizedText;
};

export const siteUrl = "https://w2jmoe.github.io/jay-portfolio";

export const metrics = [
  {
    value: {
      en: "8",
      zh: "8"
    },
    label: {
      en: "Products Built",
      zh: "已构建产品"
    }
  },
  {
    value: {
      en: "2 Years",
      zh: "2 年"
    },
    label: {
      en: "Building Solo",
      zh: "独立构建"
    }
  },
  {
    value: {
      en: "400+",
      zh: "400+"
    },
    label: {
      en: "Registered Users",
      zh: "注册用户"
    }
  },
  {
    value: {
      en: "1000+",
      zh: "1000+"
    },
    label: {
      en: "Product Recommendations",
      zh: "产品推荐"
    }
  }
] satisfies Array<{ value: LocalizedText; label: LocalizedText }>;

export const projects: Project[] = [
  {
    id: "ai-native-standard",
    name: {
      en: "AI Native Standard",
      zh: "AI 时代工作能力评估"
    },
    logo: "/projects/ai-native-standard-logo.svg",
    screenshot: "/projects/8.0.jpg",
    description: {
      en: "Evaluate AI work capability with real tasks.",
      zh: "用真实任务评估 AI 工作能力。"
    },
    results: {
      en: "Early Validation",
      zh: "早期验证中"
    },
    impact: {
      en: "A standards-style assessment product that evaluates AI-era work capability through real tasks, not quizzes.",
      zh: "用真实任务而非问卷，评估 AI 时代的工作能力，形成可验证的能力标准。"
    },
    links: {
      live: "https://ai-native-standard-demo.vercel.app/"
    },
    wechatHint: {
      en: "Early demo · Mainland China may need a proxy",
      zh: "早期验证 · 中国大陆地区需开启代理访问"
    }
  },
  {
    id: "wisepick-api",
    name: {
      en: "WisePick API",
      zh: "智选 API"
    },
    logo: "/projects/wisepick-api-logo.svg",
    screenshot: "/projects/6.0.jpg",
    description: {
      en: "Reduce Agent trial-and-error by selecting the right execution capability.",
      zh: "通过选择正确的能力路径，降低 Agent 试错成本。"
    },
    results: {
      en: "17 GitHub Stars · 177 ECU Recommendations",
      zh: "17 GitHub 星标 · 177 次 ECU 推荐"
    },
    impact: {
      en: "An open-source API that helps AI Agents choose better capability and tool paths before execution.",
      zh: "面向 Agent 的开源 API，帮助 Agent 在执行任务前选择更合适的能力与工具路径。"
    },
    links: {
      github: "https://github.com/w2jmoe/WisePick",
      video: "https://www.bilibili.com/video/BV1BXLb6WE77"
    }
  },
  {
    id: "wisepick",
    name: {
      en: "WisePick",
      zh: "智选"
    },
    logo: "/projects/wisepick-logo.svg",
    screenshot: "/projects/5.0.jpg",
    description: {
      en: "Choose the right AI tool with one goal.",
      zh: "输入目标，一步选对工具。"
    },
    results: {
      en: "38 Users · 1000+ Tool Recommendations",
      zh: "38 位用户 · 1000+ 次工具推荐"
    },
    impact: {
      en: "An AI tool discovery platform that helps people quickly find the best tool for a specific task.",
      zh: "一个面向人类的 AI 工具决策网站，帮助用户快速找到适合当前任务的工具。"
    },
    links: {
      live: "https://zx.wishweaver.top/",
      video: "https://www.bilibili.com/video/BV1TfQ7BtExC"
    }
  },
  {
    id: "wishweaver",
    name: {
      en: "WishWeaver",
      zh: "心愿编织者"
    },
    logo: "/projects/wishweaver-logo.svg",
    screenshot: "/projects/4.0.jpg",
    description: {
      en: "Care for important people with less pressure and more transparency.",
      zh: "低压力、高透明地关怀与了解重要的人。"
    },
    results: {
      en: "260+ Users · 17.24% Retention · ¥150+ Revenue",
      zh: "260+ 用户 · 17.24% 留存 · ¥150+ 收入"
    },
    impact: {
      en: "A relationship-focused product that helps people understand the mood, wishes and ongoing activities of those they care about.",
      zh: "帮助用户了解重要之人的心情、愿望与正在做的事情，建立更温暖的人际关系。"
    },
    links: {
      video: "https://www.bilibili.com/video/BV1oLPLzwEsC"
    },
    wechatHint: {
      en: "Search in WeChat: 心愿编织者",
      zh: "在微信搜索：心愿编织者"
    }
  },
  {
    id: "time-bracelet",
    name: {
      en: "Time bracelet",
      zh: "时间环"
    },
    logo: "/projects/time-bracelet-logo.svg",
    screenshot: "/projects/3.0.jpg",
    description: {
      en: "Complete mobile tasks with one sentence.",
      zh: "用一句话自动完成 APP 操作。"
    },
    results: {
      en: "640 Crowdfunding Followers · ¥1,398 Crowdfunded",
      zh: "640 人看好 · 众筹金额 ¥1,398"
    },
    impact: {
      en: "An AI wearable that lets users control everyday mobile actions through natural language.",
      zh: "一款 AI 智能穿戴设备，通过自然语言即可完成常见手机操作。"
    },
    links: {
      video: "https://www.bilibili.com/video/BV17yYszKEGR",
      crowdfund: "https://zhongchou.modian.com/item/148743"
    }
  }
];

export const dictionary = {
  en: {
    meta: {
      title: "Jay Wu | AI Native Builder",
      description:
        "Jay Wu independently builds AI products from idea to launch, validation, and iteration."
    },
    nav: {
      projects: "Projects",
      journey: "Journey",
      contact: "Contact",
      github: "GitHub",
      ariaLabel: "Primary navigation"
    },
    hero: {
      name: "Jay Wu · 武文杰",
      title: "AI Native Builder",
      subtitle: "Building AI products from idea to validation.",
      proof:
        "I handle product thinking, building, launch, and iteration — focused on shipping useful AI products end to end.",
      primaryCta: "View Projects",
      githubCta: "GitHub",
      contactCta: "Contact"
    },
    sections: {
      projectsEyebrow: "Featured Projects",
      projectsTitle: "Real products. Real users. Real validation.",
      projectsDescription:
        "Each project was independently designed, built, launched and iterated.",
      journeyEyebrow: "Journey",
      journeyTitle: "How my products evolved over time.",
      journeyDescription:
        "From early experiments to AI-native products and Agent systems.",
      contactEyebrow: "Contact",
      contactTitle: "Let's build something useful together.",
      contactDescription:
        "Open to AI product, engineering and founder opportunities."
    },
    projectActions: {
      live: "Live Demo",
      github: "GitHub",
      video: "Video",
      crowdfund: "Crowdfunding",
      builtIndependently: "Built independently"
    },
    journey: [
      {
        year: "2024",
        title: "Product Experiments",
        description: "Started with early AI product experiments and quick validation."
      },
      {
        year: "2025",
        title: "Reusable Systems",
        description: "Turned validated ideas into APIs, workflows, and reusable foundations."
      },
      {
        year: "2026",
        title: "AI-Native Products",
        description: "Building AI-native products and Agent systems with continuous iteration."
      }
    ],
    contact: {
      github: "GitHub",
      linkedin: "LinkedIn",
      x: "X",
      email: "Email",
      wechat: "WeChat",
      resume: "Resume PDF"
    },
    wechat: {
      ariaLabel: "Copy WeChat ID",
      copiedMessage: "WeChat ID copied.\nPlease mention where you found me.",
      copyFailed: "Could not copy. WeChat ID: bestyoucando"
    },
    footer: "Independent AI product builder. Useful products, real outcomes."
  },
  zh: {
    meta: {
      title: "文杰 | AI 原生构建者",
      description: "Jay Wu 独立完成 AI 产品从想法到上线、验证与持续迭代。"
    },
    nav: {
      projects: "项目",
      journey: "历程",
      contact: "联系",
      github: "GitHub",
      ariaLabel: "主导航"
    },
    hero: {
      name: "Jay Wu · 武文杰",
      title: "AI 原生构建者",
      subtitle: "从想法到验证，构建 AI 产品。",
      proof:
        "从产品判断到开发、上线与迭代，都由我独立完成，专注做出真正有用的 AI 产品。",
      primaryCta: "查看项目",
      githubCta: "GitHub",
      contactCta: "联系我"
    },
    sections: {
      projectsEyebrow: "精选项目",
      projectsTitle: "真正上线、验证过的产品。",
      projectsDescription: "从想法到开发、上线与持续迭代，全部由我独立完成。",
      journeyEyebrow: "历程",
      journeyTitle: "我的产品成长路径。",
      journeyDescription: "从最初的产品实验，到 AI Native 产品与 Agent 系统。",
      contactEyebrow: "联系",
      contactTitle: "欢迎交流。",
      contactDescription:
        "如果你正在寻找 AI 产品、Agent、全栈开发或创业合作，欢迎联系我。"
    },
    projectActions: {
      live: "在线演示",
      github: "GitHub",
      video: "视频",
      crowdfund: "众筹",
      builtIndependently: "独立完成"
    },
    journey: [
      {
        year: "2024",
        title: "产品实验",
        description: "从早期 AI 产品实验开始，通过快速验证积累经验。"
      },
      {
        year: "2025",
        title: "可复用系统",
        description: "把验证过的想法沉淀为 API、工作流和可复用基础。"
      },
      {
        year: "2026",
        title: "AI 原生产品",
        description: "专注 AI 原生产品与 Agent 系统的持续构建与迭代。"
      }
    ],
    contact: {
      github: "GitHub",
      linkedin: "LinkedIn",
      x: "X",
      email: "邮箱",
      wechat: "微信",
      resume: "简历 PDF"
    },
    wechat: {
      ariaLabel: "复制微信号",
      copiedMessage: "微信号已复制。\n请注明您在哪里看到我的信息。",
      copyFailed: "无法复制，微信号：bestyoucando"
    },
    footer: "独立 AI 产品构建者。做有用的产品，拿真实的结果。"
  }
} as const;

export const profileLinks = {
  github: "https://github.com/w2jmoe",
  linkedin: "https://www.linkedin.com/in/jaywu1993",
  x: "https://x.com/w2jmoe",
  email: "mailto:w2jmoe@gmail.com",
  wechatId: "bestyoucando"
};

// Resume PDF paths (files live in /public) — change filenames here when updating resumes
export const resumePaths = {
  en: "/Jay_Wu_Resume_EN.pdf",
  zh: "/Jay_Wu_Resume_CN.pdf"
} as const satisfies Record<Locale, string>;

// Suggested download names shown in the browser/OS save dialog
export const resumeDownloadNames = {
  en: "Jay_Wu_Resume_EN.pdf",
  zh: "Jay_Wu_Resume_CN.pdf"
} as const satisfies Record<Locale, string>;
