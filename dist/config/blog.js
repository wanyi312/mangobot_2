window.Blog = {
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
    // image 图片
    // date 日期
    // fileName 文件名
    // isPinned 是否置顶
    // tag 标签对应filters过滤项
    events: [
        {
            title: 'Mangobot at GITEX GLOBAL 2025:',
            subtitle : 'Meet the Future of Robotics',
            description: 'The X2 Ultra holds a permanent, high-visibility position on The Arsenale\'s floor, a living centerpiece that draws customers in and keeps them engaged.',
            image: '',
            date : '2025-10-06',
            fileName : 'test',
            isPinned : true,
            tag : [],
            keysword : ['GITEX', 'Mangobot', 'Robotics', 'Future', 'AI']
        },
        {
            title: 'In-Store Showcase',
            description: 'The X2 Ultra holds a permanent, high-visibility position on The Arsenale\'s floor, a living centerpiece that draws customers in and keeps them engaged.',
            image: '',
            date : '2026-3-27',
            fileName : 'X2',
            isPinned : false,
            tag : [1,4],
            keysword : ['']
        },
        {
            title: 'In-Store Showcase',
            description: 'The X2 Ultra holds a permanent, high-visibility position on The Arsenale\'s floor, a living centerpiece that draws customers in and keeps them engaged.',
            image: '',
            date : '2026-3-27',
            fileName : 'X2',
            isPinned : false,
            tag : [1,3],
            keysword : ['']
        },
        {
            title: 'In-Store Showcase',
            description: 'The X2 Ultra holds a permanent, high-visibility position on The Arsenale\'s floor, a living centerpiece that draws customers in and keeps them engaged.',
            image: '',
            date : '2026-3-27',
            fileName : 'X2',
            isPinned : false,
            tag : [1,3],
            keysword : ['']
        },
        {
            title: 'In-Store Showcase',
            description: 'The X2 Ultra holds a permanent, high-visibility position on The Arsenale\'s floor, a living centerpiece that draws customers in and keeps them engaged.',
            image: '',
            date : '2026-3-27',
            fileName : 'X2',
            isPinned : false,
            tag : [1],
            keysword : ['']
        },
        {
            title: 'In-Store Showcase',
            description: 'The X2 Ultra holds a permanent, high-visibility position on The Arsenale\'s floor, a living centerpiece that draws customers in and keeps them engaged.',
            image: '',
            date : '2026-3-27',
            fileName : 'X2',
            isPinned : false,
            tag : [1],
            keysword : ['']
        },
        {
            title: 'In-Store Showcase',
            description: 'The X2 Ultra holds a permanent, high-visibility position on The Arsenale\'s floor, a living centerpiece that draws customers in and keeps them engaged.',
            image: '',
            date : '2026-3-27',
            fileName : 'X2',
            isPinned : false,
            tag : [1],
            keysword : ['']
        }
    ],
}


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