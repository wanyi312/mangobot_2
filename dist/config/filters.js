// 产品页搜索
const data = {
    en : {
        filters: [
            {
                label: 'A2 ultra',
                url : '/product/a2',
                keysword: []
            },
            {
                label: 'X2 ultra',
                url : '/product/x2',
                keysword: []
            },
            {
                label: 'D1 ultra',
                url : '/product/d1',
                keysword: []
            },
            {
                label: 'D1 max',
                url : '/product/d1max',
                keysword: []
            },
            {
                label: 'D1 max pro',
                url : '/product/d1promax',
                keysword: []
            },
            {
                label: 'G1 ultra',
                url : '/product/g1',
                keysword: []
            },
            {
                label : 'Home',
                url : '/',
                keysword: []
            },
            {
                label : 'Blog',
                url : '/blog',
                keysword: []
            },
            {
                label : 'Events',
                url : '/events',
                keysword: ['rent']
            },
            {
                label : 'Partnerships',
                url : '/partnerships',
                keysword: ['rent']
            },
            {
                label : 'About',
                url : '/aboutus',
                keysword: []
            },
            {
                label : 'Contact',
                url : '/contactus',
                keysword: ['rent']
            },
            {
                label : 'Products',
                url : '/products',
                keysword: []
            }
        ]
    },
    ar : {
        filters: [
            {
                label: 'A2',
                url : '/product/a2'
            },
            {
                label: 'X2',
                url : '/product/x2'
            },
            {
                label: 'D1 ultra',
                url : '/product/d1'
            },
            {
                label: 'D1 max',
                url : '/product/d1max'
            },
            {
                label: 'D1 pro max',
                url : '/product/d1promax'
            },
            {
                label: 'G1',
                url : '/product/g1'
            }
        ]
    }
}

const language = localStorage.getItem('language') || 'en';

window.Filters = data[language];



function deepFreeze(obj) {
    if (!obj || typeof obj !== 'object' || Object.isFrozen(obj)) {
        return obj;
    }

    Object.getOwnPropertyNames(obj).forEach((key) => {
        deepFreeze(obj[key]);
    });

    return Object.freeze(obj);
}

Object.defineProperties(window.Filters, {
    filters: {
        writable: false,
        configurable: false,
    },
});

deepFreeze(window.Filters);

Object.defineProperty(window, 'Filters', {
    value: window.Filters,
    writable: false,
    configurable: false,
});

