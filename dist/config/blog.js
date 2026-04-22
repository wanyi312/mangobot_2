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
        events: [
            {
                title: 'Mangobot at GITEX GLOBAL 2025:',
                subtitle: 'Meet the Future of Robotics',
                description: 'The countdown has begun for one of the world’s most influential technology events, GITEX GLOBAL 2025.',
                image: '',
                date: '2025-10-06',
                fileName: 'Mangobot-at-GITEX-GLOBAL',
                isPinned: true,
                category: 'X2 Ultra',
                tags: [],
                keysword: ['GITEX', 'Mangobot', 'Robotics', 'Future', 'AI']
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