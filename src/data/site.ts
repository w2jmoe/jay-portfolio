export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

export type Project = {
  id: string;
  name: LocalizedText;
  logo: string;
  screenshot: string;
  description: LocalizedText;
  impact: LocalizedText;
  links: {
    live?: string;
    github?: string;
    video?: string;
  };
  wechatHint?: LocalizedText;
};

export const siteUrl = "https://jaywu.dev";

export const metrics = [
  {
    value: {
      en: "7",
      zh: "7"
    },
    label: {
      en: "Products Built",
      zh: "已构建产品"
    }
  },
  {
    value: {
      en: "400+",
      zh: "400+"
    },
    label: {
      en: "Users",
      zh: "用户"
    }
  },
  {
    value: {
      en: "17",
      zh: "17"
    },
    label: {
      en: "GitHub Stars",
      zh: "GitHub 星标"
    }
  },
  {
    value: {
      en: "2+",
      zh: "2+ 年"
    },
    label: {
      en: "Years Building",
      zh: "持续构建"
    }
  }
] satisfies Array<{ value: LocalizedText; label: LocalizedText }>;

export const projects: Project[] = [
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
      en: "TimeRing",
      zh: "时间环"
    },
    logo: "/projects/time-bracelet-logo.svg",
    screenshot: "/projects/3.0.jpg",
    description: {
      en: "Complete mobile tasks with one sentence.",
      zh: "用一句话自动完成 APP 操作。"
    },
    impact: {
      en: "An AI wearable that lets users control everyday mobile actions through natural language.",
      zh: "一款 AI 智能穿戴设备，通过自然语言即可完成常见手机操作。"
    },
    links: {
      video: "https://www.bilibili.com/video/BV17yYszKEGR"
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
      github: "GitHub"
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
      copiedMessage: "WeChat ID copied.\nPlease mention where you found me.",
      copyFailed: "Could not copy. WeChat ID: bestyoucando"
    },
    footer: "Independent AI product builder. Useful products, real outcomes."
  },
  zh: {
    meta: {
      title: "Jay Wu | AI 原生构建者",
      description: "Jay Wu 独立完成 AI 产品从想法到上线、验证与持续迭代。"
    },
    nav: {
      projects: "项目",
      journey: "历程",
      contact: "联系",
      github: "GitHub"
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

// Resume PDF paths — change filenames here when you update files in /public
export const resumePaths = {
  en: "/Jay_Wu_Resume_EN.pdf",
  zh: "/Jay_Wu_Resume_CN.pdf"
} as const satisfies Record<Locale, string>;

// Suggested download names shown in the browser/OS save dialog
export const resumeDownloadNames = {
  en: "Jay_Wu_Resume_EN.pdf",
  zh: "Jay_Wu_Resume_CN.pdf"
} as const satisfies Record<Locale, string>;
