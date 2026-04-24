const data = {
    en: {
        // 分类
        filters: [
            {
                label: 'All Events',
                value: 1,
            },
            {
                label: 'Tech & Expo',
                value: 2,
            },
            {
                label: 'Sport & Charity',
                value: 3,
            },
            {
                label: 'Art & Culture',
                value: 4,
            },
            {
                label: 'Corporate',
                value: 5,
            },
            {
                label: 'Medical',
                value: 6,
            },
        ],
        // 文章内容

        // title 标题
        // subtitle 副标题
        // description 描述
        // category 分类
        // image 图片
        // date 日期
        // fileName 文件名
        // isPinned 是否置顶
        // tags 标签对应filters过滤项
        // headerTitle 左上角标题
        // titleTag 标题标签
        // keysword 关键词

        events: [
            {
                title: 'Mangobot at GITEX GLOBAL 2025:',
                subtitle: 'Meet the Future of Robotics',
                titleTag: '',
                description: 'The countdown has begun for one of the world’s most influential technology events, GITEX GLOBAL 2025.',
                image: '/config/images/blob_example_flame.jpg',
                date: '2025-10-06',
                fileName: 'mangobot-at-gitex-global',
                isPinned: true,
                category: 'X2 Ultra',
                tags: [],
                keysword: ['GITEX', 'Mangobot', 'Robotics', 'Future', 'AI']
            },
            {
                title: 'Mangobot at AGIBOT Partner Conference 2026:A \nMilestone for Humanoid Robotics in the GCC',
                subtitle: '',
                titleTag: "Mangobot at AGIBOT Partner Conference 2026 | Strategic Partner Award",
                description: "Mangobot's CEO attended APC 2026 in Shanghai, receiving the Strategic Partner Award and reinforcing our partnership with AGIBOT as humanoid robots enter large-scale commercial deployment across the GCC.",
                image: '/config/images/blog-01.jpg',
                date: '2026-4-21',
                fileName: 'mangobot-agibot-partner-conference-2026',
                isPinned: false,
                headerTitle: 'In-Store',
                category: 'Tech',
                tags: [1, 2],
                keysword: [
                    "Mangobot",
                    "AGIBOT",
                    "Partner",
                    "Conference",
                    "2026",
                    "Strategic",
                    "Partner",
                    "Award",
                    "CEO",
                    "APC",
                    "Shanghai",
                    "partnership",
                    "humanoid",
                    "robots",
                    "commercial",
                    "deployment",
                    "GCC",
                    "robotics",
                    "embodied",
                    "AI",
                    "Middle East",
                    "UAE"
                ]
            },
            {
                title: "How Mangobot's Humanoid Robots Are Changing Events in the UAE",
                subtitle: '',
                titleTag: "How Mangobot's Humanoid Robots Are Changing Events in the UAE",
                description: "Mangobot's humanoid robot rental service gives UAE event companies and brands a powerful new tool, from AI-powered MCs and brand ambassadors to synchronised flash mob performances, fully managed by Mangobot's team.",
                image: '/config/images/blog-02.jpg',
                date: '2026-4-21',
                fileName: 'humanoid-robots-for-events-uae',
                isPinned: false,
                headerTitle: 'In-Store',
                category: 'Art&Culture ',
                tags: [1, 4],
                keysword: [
                    "Mangobot",
                    "Humanoid",
                    "Robots",
                    "Events",
                    "UAE",
                    "rental",
                    "service",
                    "companies",
                    "brands",
                    "AI",
                    "MCs",
                    "brand",
                    "ambassadors",
                    "synchronised",
                    "flash",
                    "mob",
                    "performances",
                    "team",
                    "robot",
                    "hire",
                    "Dubai",
                    "activation",
                    "GCC",
                    "entertainment",
                    "technology"
                ]
            },
            {
                title: "The Mangobot Channel Partner Program: Build a Robotics Business Without the Complexity",
                subtitle: '',
                titleTag: "Mangobot Channel Partner Programme - Robot Business Opportunity UAE",
                description: "Partner with Mangobot and offer the world's most advanced humanoid robots to your clients. Three flexible models: from profit sharing to full asset ownership. Open to event, hospitality, and corporate businesses across the UAE and GCC.",
                image: '/config/images/blog-03.png',
                video: 'https://www.youtube.com/watch?v=4fMmY7Bs0_g',
                date: '2026-04-23',
                fileName: 'mangobot-channel-partner-program',   
                isPinned: false,
                headerTitle: 'In-Store',
                category: 'Art&Culture ',
                tags: [1, 4],
                keysword: [
                    "Mangobot",
                    "Channel",
                    "Partner",
                    "Programme",
                    "Robot",
                    "Business",
                    "Opportunity",
                    "UAE",
                    "robotics",
                    "humanoid",
                    "reseller",
                    "GCC",
                    "Middle East",
                    "partnership",
                    "revenue",
                    "model",
                    "profit",
                    "sharing",
                    "asset",
                    "ownership",
                    "event",
                    "hospitality",
                    "corporate",
                    "clients"
                ],
            },
            {
                title: "Meet Mangobot: Deploying the Future of Humanoid Robotics Across the UAE and Beyond",
                subtitle: '',
                titleTag: "Meet Mangobot - Humanoid Robot Deployment in the UAE & GCC",
                description: "Mangobot is the UAE's leading humanoid robotics operator. Discover our advanced robots, from AI-powered hospitality humanoids to industrial quadrupeds, deployed across the GCC and globally.",
                image: '/config/images/blog-04.jpeg',
                date: '2026-04-23',
                fileName: 'meet-mangobot-humanoid-robotics-uae',
                isPinned: false,
                headerTitle: 'In-Store',
                category: 'Corporate',
                tags: [1, 5],
                keysword: [
                    "Mangobot",
                    "Humanoid",
                    "Robot",
                    "UAE",
                    "GCC",
                    "Robotics",
                    "Operator",
                    "AI",
                    "Hospitality",
                    "Industrial",
                    "Quadrupeds",
                    "Dubai",
                    "Solutions",
                    "Company"
                ],
            }
        ],
    },
    ar: {
        filters: [
            { label: 'جميع الفعاليات', value: 1 },
            { label: 'التقنية والمعرض', value: 2 },
            { label: 'الرياضة والخيرية', value: 3 },
            { label: 'الفن والثقافة', value: 4 },
            { label: 'الشركات', value: 5 },
            { label: 'الطبي', value: 6 },
        ],
        events: [
            {
                title: 'Mangobot في GITEX GLOBAL 2025:',
                subtitle: 'لقاء مستقبل الروبوتات',
                description: 'بدأ العد التنازلي لواحد من أكثر الأحداث التكنولوجية تأثيرًا في العالم، GITEX GLOBAL 2025.',
                image: '',
                date: '2025-10-06',
                fileName: 'test',
                isPinned: true,
                category: 'X2 Ultra',
                tags: [],
                keysword: ['GITEX', 'Mangobot', 'الروبوتات', 'المستقبل', 'الذكاء الاصطناعي']
            }
        ],
    },
}

const language = localStorage.getItem('language') || 'en';

window.Blog = data[language];


function deepFreeze(obj) {
    if (!obj || typeof obj !== 'object' || Object.isFrozen(obj)) {
        return obj;
    }

    Object.getOwnPropertyNames(obj).forEach((key) => {
        deepFreeze(obj[key]);
    });

    return Object.freeze(obj);
}

Object.defineProperties(window.Blog, {
    filters: {
        writable: false,
        configurable: false,
    },
    events: {
        writable: false,
        configurable: false,
    },
});

deepFreeze(window.Blog);