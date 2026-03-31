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
        label: 'Sport & Luxury',
        value: 3,
      },
      {
        label: 'Art & Culture',
        value: 4,
      },
      {
        label: 'Corporate & Hospitality',
        value: 5,
      },
      {
        label: 'Medical & Health',
        value: 6,
      },
    ],
    // 文章内容
    // category 分类
    // season 季节
    // location 地点
    // name 名称
    // description 描述
    // role 角色
    // image 图片
    // isPinned 是否置顶
    // tags 标签对应filters过滤项
    // keysword 关键词
    events: [
      {
        category: "Tech & Expo",
        season: "2025 Season",
        location: "Dubai",
        name: "GITEX Global",
        description:
          "The world's largest tech show. Mangobot humanoid robots stopped people mid-hall in a room full of the future's most tech-savvy audience.",
        role: "Brand Showcase",
        image: '/config/images/Events-filter-bg.png',
        isPinned: true,
        tags: [1, 2],
        keysword: [],
      },
      {
        category: "Sport & Luxury",
        season: "2026 Season",
        location: "Abu Dhabi",
        name: "Longines League of Nations™ 2026",
        description:
          "The world's most prestigious equestrian competition. Sport, luxury, and humanoid robotics converged for an audience that expects the extraordinary.",
        role: "Guest Engagement",
        image: '/config/images/Events-card.png',
        tags: [1, 3],
        keysword: ['']
      },
      {
        category: "Sport & Charity",
        season: "2026 Season",
        location: "Abu Dhabi",
        name: "Cancer Awareness Run",
        description:
          "Mangobot robots participated in the Abu Dhabi Cancer Awareness Run, cheering runners and showing how humanoids can play a role in community moments that matter.",
        role: "Community Engagement",
        image: '/config/images/Events-card-1.png',
        tags: [1],
        keysword: ['']
      },
      {
        category: "Art & Culture",
        season: "2026 Season",
        location: "Dubai",
        name: "TODA — Immersive Art Activations",
        description:
          "Dubai's premier immersive art venue. Humanoid robots are deployed at multiple TODA events, where 360-degree projection art meets humanoid robotics performance.",
        role: "Guest Engagement",
        image: '/config/images/Events-card-2.png',
        tags: [1, 4],
        keysword: ['']
      },
      {
        category: "Education",
        season: "2026 Season",
        location: "Dubai",
        name: "GEMS — SRI School",
        description:
          "Mangobot brought humanoid robotics into education at GEMS SRI, inspiring the next generation with a live humanoid robotics demonstration.",
        role: "Educational Showcase",
        image: '/config/images/Events-card-3.png',
        tags: [1],
        keysword: ['']
      },
      {
        category: "Medical & Health",
        season: "2026 Season",
        location: "Dubai",
        name: "Intco Medical — World Health Expo",
        description:
          "Intco Medical brought X2 Ultra to the World Health Expo, which became the centrepiece of their booth, drawing attention across a competitive floor.",
        role: "Exhibition Showcase",
        image: '/config/images/Events-card-4.png',
        tags: [1, 6],
        keysword: ['']
      },
      {
        category: "Brand & Social",
        season: "2026 Season",
        location: "Dubai",
        name: "Fred's Coffee Party",
        description:
          "Even intimate brand gatherings are transformed by Mangobot's presence. A conversation-starter, content creator, and the life of the party.",
        role: "Brand Activation",
        image: '/config/images/Events-card-5.png',
        tags: [1],
        keysword: ['']
      }
    ]
  },
  ar: {
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
        label: 'Sport & Luxury',
        value: 3,
      },
      {
        label: 'Art & Culture',
        value: 4,
      },
      {
        label: 'Corporate & Hospitality',
        value: 5,
      },
      {
        label: 'Medical & Health',
        value: 6,
      },
    ],
    // 文章内容
    // category 分类
    // season 季节
    // location 地点
    // name 名称
    // description 描述
    // role 角色
    // image 图片
    // isPinned 是否置顶
    // tags 标签对应filters过滤项
    // keysword 关键词
    events: [
      {
        category: "Tech & Expo",
        season: "2025 Season",
        location: "Dubai",
        name: "GITEX Global",
        description:
          "The world's largest tech show. Mangobot humanoid robots stopped people mid-hall in a room full of the future's most tech-savvy audience.",
        role: "Brand Showcase",
        image: '/config/images/Events-filter-bg.png',
        isPinned: true,
        tags: [1, 2],
        keysword: [],
      },
      {
        category: "Sport & Luxury",
        season: "2026 Season",
        location: "Abu Dhabi",
        name: "Longines League of Nations™ 2026",
        description:
          "The world's most prestigious equestrian competition. Sport, luxury, and humanoid robotics converged for an audience that expects the extraordinary.",
        role: "Guest Engagement",
        image: '/config/images/Events-card.png',
        tags: [1, 3],
        keysword: ['']
      },
      {
        category: "Sport & Charity",
        season: "2026 Season",
        location: "Abu Dhabi",
        name: "Cancer Awareness Run",
        description:
          "Mangobot robots participated in the Abu Dhabi Cancer Awareness Run, cheering runners and showing how humanoids can play a role in community moments that matter.",
        role: "Community Engagement",
        image: '/config/images/Events-card-1.png',
        tags: [1],
        keysword: ['']
      },
      {
        category: "Art & Culture",
        season: "2026 Season",
        location: "Dubai",
        name: "TODA — Immersive Art Activations",
        description:
          "Dubai's premier immersive art venue. Humanoid robots are deployed at multiple TODA events, where 360-degree projection art meets humanoid robotics performance.",
        role: "Guest Engagement",
        image: '/config/images/Events-card-2.png',
        tags: [1, 4],
        keysword: ['']
      },
      {
        category: "Education",
        season: "2026 Season",
        location: "Dubai",
        name: "GEMS — SRI School",
        description:
          "Mangobot brought humanoid robotics into education at GEMS SRI, inspiring the next generation with a live humanoid robotics demonstration.",
        role: "Educational Showcase",
        image: '/config/images/Events-card-3.png',
        tags: [1],
        keysword: ['']
      },
      {
        category: "Medical & Health",
        season: "2026 Season",
        location: "Dubai",
        name: "Intco Medical — World Health Expo",
        description:
          "Intco Medical brought X2 Ultra to the World Health Expo, which became the centrepiece of their booth, drawing attention across a competitive floor.",
        role: "Exhibition Showcase",
        image: '/config/images/Events-card-4.png',
        tags: [1, 6],
        keysword: ['']
      },
      {
        category: "Brand & Social",
        season: "2026 Season",
        location: "Dubai",
        name: "Fred's Coffee Party",
        description:
          "Even intimate brand gatherings are transformed by Mangobot's presence. A conversation-starter, content creator, and the life of the party.",
        role: "Brand Activation",
        image: '/config/images/Events-card-5.png',
        tags: [1],
        keysword: ['']
      }
    ]
  }
}

const language = localStorage.getItem('language') || 'en';

window.MangobotEvents = data[language];


function deepFreeze(obj) {
  if (!obj || typeof obj !== 'object' || Object.isFrozen(obj)) {
    return obj;
  }

  Object.getOwnPropertyNames(obj).forEach((key) => {
    deepFreeze(obj[key]);
  });

  return Object.freeze(obj);
}

Object.defineProperties(window.MangobotEvents, {
  filters: {
    writable: false,
    configurable: false,
  },
  events: {
    writable: false,
    configurable: false,
  },
});

deepFreeze(window.MangobotEvents);

Object.defineProperty(window, 'MangobotEvents', {
  value: window.MangobotEvents,
  writable: false,
  configurable: false,
});

