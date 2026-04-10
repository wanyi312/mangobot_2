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
    /** Events 页 Hero 背景视频（MP4 等）；替换为你的正式地址 */
    heroVideo: 'https://media.mangobot.org/Events-bg-hero.mp4',
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
        keysword: ["rent"],
      },
      {
        category: "Sport & Luxury",
        season: "2026 Season",
        location: "Abu Dhabi",
        name: "Abu Dhabi Equestrian Club - Longines League of Nations 2026",
        description:
          "The world's most prestigious equestrian competition. Sport, luxury, and humanoid robotics converged for an audience that expects the extraordinary.",
        role: "Guest Engagement",
        image: '/config/images/event-01.jpg ',
        tags: [1, 3],
        keysword: ["rent"]
      },
      {
        category: "Sport & Charity",
        season: "2026 Season",
        location: "Abu Dhabi",
        name: "Cancer Awareness Run",
        description:
          "Mangobot robots participated in the Abu Dhabi Cancer Awareness Run, cheering runners and showing how humanoids can play a role in community moments that matter.",
        role: "Community Engagement",
        image: '/config/images/event-02.jpg',
        tags: [1],
        keysword: ["rent"]
      },
      {
        category: "Art & Culture",
        season: "2026 Season",
        location: "Dubai",
        name: "TODA — Immersive Art Activations",
        description:
          "Dubai's premier immersive art venue. Humanoid robots are deployed at multiple TODA events, where 360-degree projection art meets humanoid robotics performance.",
        role: "Guest Engagement",
        image: '/config/images/event-06.jpg',
        tags: [1, 4],
        keysword: ["rent"]
      },
      {
        category: "Education",
        season: "2026 Season",
        location: "Dubai",
        name: "GEMS — SRI School",
        description:
          "Mangobot brought humanoid robotics into education at GEMS SRI, inspiring the next generation with a live humanoid robotics demonstration.",
        role: "Educational Showcase",
        image: '/config/images/event-03.jpg',
        tags: [1],
        keysword: ["rent"]
      },
      {
        category: "Medical & Health",
        season: "2026 Season",
        location: "Dubai",
        name: "Intco Medical — World Health Expo",
        description:
          "Intco Medical brought X2 Ultra to the World Health Expo, which became the centrepiece of their booth, drawing attention across a competitive floor.",
        role: "Exhibition Showcase",
        image: '/config/images/event-04.jpg',
        tags: [1, 6],
        keysword: ["rent"]
      },
      {
        category: "Brand & Social",
        season: "2026 Season",
        location: "Dubai",
        name: "Fred's Coffee Party",
        description:
          "Even intimate brand gatherings are transformed by Mangobot's presence. A conversation-starter, content creator, and the life of the party.",
        role: "Brand Activation",
        image: '/config/images/event-05.jpg',
        tags: [1],
        keysword: ["rent"]
      }
    ]
  },
  ar: {
    // 分类
    filters: [
      {
        label: 'جميع الفعاليات',
        value: 1,
      },
      {
        label: 'التقنية والمعرض',
        value: 2,
      },
      {
        label: 'الرياضة والفخامة',
        value: 3,
      },
      {
        label: 'الفن والثقافة',
        value: 4,
      },
      {
        label: 'الشركات والضيافة',
        value: 5,
      },
      {
        label: 'الطبي والصحة',
        value: 6,
      },
    ],
    heroVideo: 'https://media.mangobot.org/Events-bg-hero.mp4',
    // 文章内容
    events: [
      {
        category: 'التقنية والمعرض',
        season: 'موسم 2025',
        location: 'دبي',
        name: 'GITEX Global',
        description:
          'أكبر معرض تقني في العالم. روبوتات Mangobot البشرية أوقفت الزوار في منتصف القاعة وسط جمهور من أكثر المتخصصين معرفة بالمستقبل.',
        role: 'عرض العلامة التجارية',
        image: '/config/images/Events-filter-bg.png',
        isPinned: true,
        tags: [1, 2],
        keysword: [],
      },
      {
        category: 'الرياضة والفخامة',
        season: 'موسم 2026',
        location: 'أبوظبي',
        name: 'Abu Dhabi Equestrian Club - Longines League of Nations 2026',
        description:
          'أرقى مسابقات الفروسية في العالم. الرياضة، الفخامة، والروبوتات البشرية تجتمع أمام جمهور يتوقع ما هو استثنائي.',
        role: 'تفاعل الضيوف',
        image: '/config/images/Events-card-2.png ',
        tags: [1, 3],
        keysword: [''],
      },
      {
        category: 'الرياضة والخيرية',
        season: 'موسم 2026',
        location: 'أبوظبي',
        name: 'Cancer Awareness Run',
        description:
          'شاركت روبوتات Mangobot في سباق التوعية بسرطان أبوظبي، لتشجيع العدائين وإظهار كيف يمكن للروبوتات البشرية أن تلعب دورًا في اللحظات المجتمعية الهامة.',
        role: 'المشاركة المجتمعية',
        image: '/config/images/Events-card-1.png',
        tags: [1],
        keysword: [''],
      },
      {
        category: 'الفن والثقافة',
        season: 'موسم 2026',
        location: 'دبي',
        name: 'TODA — Immersive Art Activations',
        description:
          'أبرز أماكن الفن الغامر في دبي. تم نشر روبوتات بشرية في عدة فعاليات لـ TODA، حيث يلتقي الفن بتقنية العرض 360 درجة مع أداء الروبوتات البشرية.',
        role: 'تفاعل الضيوف',
        image: '/config/images/Events-card.png',
        tags: [1, 4],
        keysword: [''],
      },
      {
        category: 'التعليم',
        season: 'موسم 2026',
        location: 'دبي',
        name: 'GEMS — SRI School',
        description:
          'قدمت Mangobot الروبوتات البشرية في التعليم بمدرسة GEMS SRI، لإلهام الجيل القادم من خلال عرض حي للروبوتات البشرية.',
        role: 'عرض تعليمي',
        image: '/config/images/Events-card-5.png',
        tags: [1],
        keysword: [''],
      },
      {
        category: 'الطبي والصحة',
        season: 'موسم 2026',
        location: 'دبي',
        name: 'Intco Medical — World Health Expo',
        description:
          'أحضرت Intco Medical روبوت X2 Ultra إلى معرض الصحة العالمي، ليصبح القطعة المركزية في جناحها ويجذب الانتباه في أرض معرض تنافسية.',
        role: 'عرض في المعرض',
        image: '/config/images/Events-card-4.png',
        tags: [1, 6],
        keysword: [''],
      },
      {
        category: 'العلامة التجارية والاجتماعي',
        season: 'موسم 2026',
        location: 'دبي',
        name: 'Fred\'s Coffee Party',
        description:
          'حتى التجمعات الصغيرة للعلامات التجارية تتحول بوجود Mangobot. بداية محادثات، صانع محتوى، وروح الحفلة.',
        role: 'تفعيل العلامة التجارية',
        image: '/config/images/Events-card-3.png',
        tags: [1],
        keysword: [''],
      },
    ],
  },
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

