// 产品页搜索
window.Filters = {
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

