// DOM元素
const audioFile = document.getElementById('audioFile');
const fileName = document.getElementById('fileName');
const processBtn = document.getElementById('processBtn');
const progressFill = document.getElementById('progressFill');
const recognizedText = document.getElementById('recognizedText');
const vesselName = document.getElementById('vesselName');
const intentInfo = document.getElementById('intentInfo');
const interactionContent = document.getElementById('interactionContent');
const playBtn = document.getElementById('playBtn');

// 主步骤和子步骤元素
const mainSteps = {
    1: document.getElementById('mainStep1'),
    2: document.getElementById('mainStep2'),
    3: document.getElementById('mainStep3')
};

const subSteps = {
    '1-1': document.getElementById('subStep1-1'),
    '1-2': document.getElementById('subStep1-2'),
    '1-3': document.getElementById('subStep1-3'),
    '3-1': document.getElementById('subStep3-1'),
    '3-2': document.getElementById('subStep3-2'),
    '3-3': document.getElementById('subStep3-3')
};

// 状态元素
const statusElements = {
    'main1': document.getElementById('statusMain1'),
    'main2': document.getElementById('statusMain2'),
    'main3': document.getElementById('statusMain3'),
    'sub1-1': document.getElementById('statusSub1-1'),
    'sub1-2': document.getElementById('statusSub1-2'),
    'sub1-3': document.getElementById('statusSub1-3'),
    'sub3-1': document.getElementById('statusSub3-1'),
    'sub3-2': document.getElementById('statusSub3-2'),
    'sub3-3': document.getElementById('statusSub3-3')
};

// 音频文件选择
 audioFile.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        fileName.textContent = e.target.files[0].name;
        processBtn.disabled = false;
    } else {
        fileName.textContent = '未选择文件';
        processBtn.disabled = true;
    }
});

// 处理按钮点击
processBtn.addEventListener('click', function() {
    // 重置状态
    resetProcess();
    
    // 开始处理流程
    startProcess();
});

// 重置处理状态
function resetProcess() {
    // 重置主步骤
    Object.values(mainSteps).forEach(step => {
        if (step) step.classList.remove('active');
    });
    
    // 重置子步骤
    Object.values(subSteps).forEach(step => {
        if (step) step.classList.remove('active');
    });
    
    progressFill.style.width = '0%';
    recognizedText.textContent = '--';
    vesselName.textContent = '--';
    intentInfo.textContent = '--';
    interactionContent.textContent = '--';
    playBtn.disabled = true;
    processBtn.disabled = true;
    
    // 重置状态显示
    Object.values(statusElements).forEach(element => {
        if (element) {
            element.textContent = '准备中';
            element.className = 'step-status ready';
        }
    });
}

// 开始处理流程
function startProcess() {
    let currentStep = 0;
    const totalSteps = 9; // 3个主步骤 + 6个子步骤
    
    // 处理步骤队列
    const processQueue = [
        // 第一步：WUF语音理解
        {
            type: 'main',
            id: 1,
            name: 'WUF语音理解',
            action: () => {
                // 激活主步骤
                mainSteps[1].classList.add('active');
                statusElements['main1'].textContent = '处理中...';
                statusElements['main1'].className = 'step-status processing';
            }
        },
        {
            type: 'sub',
            id: '1-1',
            name: '语音识别',
            action: () => {
                subSteps['1-1'].classList.add('active');
                statusElements['sub1-1'].textContent = '处理中...';
                statusElements['sub1-1'].className = 'step-status processing';
                setTimeout(() => {
                    recognizedText.textContent = '正在接收VHF音频信号...';
                    statusElements['sub1-1'].textContent = '已完成';
                    statusElements['sub1-1'].className = 'step-status completed';
                }, 500);
            }
        },
        {
            type: 'sub',
            id: '1-2',
            name: '语义理解',
            action: () => {
                subSteps['1-2'].classList.add('active');
                statusElements['sub1-2'].textContent = '处理中...';
                statusElements['sub1-2'].className = 'step-status processing';
                setTimeout(() => {
                    recognizedText.textContent = 'This is vessel Alpha calling vessel Bravo, requesting passage information.';
                    statusElements['sub1-2'].textContent = '已完成';
                    statusElements['sub1-2'].className = 'step-status completed';
                }, 500);
            }
        },
        {
            type: 'sub',
            id: '1-3',
            name: '意图结构',
            action: () => {
                subSteps['1-3'].classList.add('active');
                statusElements['sub1-3'].textContent = '处理中...';
                statusElements['sub1-3'].className = 'step-status processing';
                setTimeout(() => {
                    vesselName.textContent = 'Alpha';
                    intentInfo.textContent = '请求通行信息';
                    statusElements['sub1-3'].textContent = '已完成';
                    statusElements['sub1-3'].className = 'step-status completed';
                    statusElements['main1'].textContent = '已完成';
                    statusElements['main1'].className = 'step-status completed';
                }, 500);
            }
        },
        // 第二步：智能航行系统
        {
            type: 'main',
            id: 2,
            name: '智能航行系统',
            action: () => {
                mainSteps[2].classList.add('active');
                statusElements['main2'].textContent = '处理中...';
                statusElements['main2'].className = 'step-status processing';
                setTimeout(() => {
                    intentInfo.textContent = '请求通行信息 - 已分析';
                    statusElements['main2'].textContent = '已完成';
                    statusElements['main2'].className = 'step-status completed';
                }, 1000);
            }
        },
        // 第三步：VHF协商交互系统
        {
            type: 'main',
            id: 3,
            name: 'VHF协商交互系统',
            action: () => {
                mainSteps[3].classList.add('active');
                statusElements['main3'].textContent = '处理中...';
                statusElements['main3'].className = 'step-status processing';
            }
        },
        {
            type: 'sub',
            id: '3-1',
            name: '决策结果',
            action: () => {
                subSteps['3-1'].classList.add('active');
                statusElements['sub3-1'].textContent = '处理中...';
                statusElements['sub3-1'].className = 'step-status processing';
                setTimeout(() => {
                    statusElements['sub3-1'].textContent = '已完成';
                    statusElements['sub3-1'].className = 'step-status completed';
                }, 500);
            }
        },
        {
            type: 'sub',
            id: '3-2',
            name: '对话生成模块',
            action: () => {
                subSteps['3-2'].classList.add('active');
                statusElements['sub3-2'].textContent = '处理中...';
                statusElements['sub3-2'].className = 'step-status processing';
                setTimeout(() => {
                    interactionContent.textContent = 'Vessel Alpha, this is vessel Bravo. You may proceed with caution. Current traffic is light.';
                    statusElements['sub3-2'].textContent = '已完成';
                    statusElements['sub3-2'].className = 'step-status completed';
                }, 500);
            }
        },
        {
            type: 'sub',
            id: '3-3',
            name: '语音生成模块',
            action: () => {
                subSteps['3-3'].classList.add('active');
                statusElements['sub3-3'].textContent = '处理中...';
                statusElements['sub3-3'].className = 'step-status processing';
                setTimeout(() => {
                    playBtn.disabled = false;
                    processBtn.disabled = false;
                    statusElements['sub3-3'].textContent = '已完成';
                    statusElements['sub3-3'].className = 'step-status completed';
                    statusElements['main3'].textContent = '已完成';
                    statusElements['main3'].className = 'step-status completed';
                }, 1000);
            }
        }
    ];
    
    // 模拟处理过程
    const processInterval = setInterval(() => {
        if (currentStep < processQueue.length) {
            const step = processQueue[currentStep];
            step.action();
            
            // 更新进度条
            const progress = ((currentStep + 1) / totalSteps) * 100;
            progressFill.style.width = `${progress}%`;
            
            currentStep++;
        } else {
            clearInterval(processInterval);
        }
    }, 1500);
}

// 播放按钮点击
playBtn.addEventListener('click', function() {
    // 模拟语音播放
    const message = interactionContent.textContent;
    if (message !== '--') {
        // 使用浏览器的语音合成API
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(message);
            speech.lang = 'en-US';
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
        } else {
            alert('您的浏览器不支持语音合成功能');
        }
    }
});

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    console.log('VHF语音处理系统已初始化');
});

// 添加拖放功能
const uploadArea = document.getElementById('uploadArea');

uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#0066cc';
});

uploadArea.addEventListener('dragleave', function() {
    uploadArea.style.borderColor = '#0099ff';
});

uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#0099ff';
    
    if (e.dataTransfer.files.length > 0) {
        audioFile.files = e.dataTransfer.files;
        fileName.textContent = e.dataTransfer.files[0].name;
        processBtn.disabled = false;
    }
});