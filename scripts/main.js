document.addEventListener('DOMContentLoaded', function() {
    // 选项卡切换功能
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有active类
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 添加active类到当前选项卡
            tab.classList.add('active');
            
            // 显示对应的内容
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 滚动动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.team-card, .rule-card, .match-group');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始化元素样式
    const initScrollAnimation = function() {
        const elements = document.querySelectorAll('.team-card, .rule-card, .match-group');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // 触发一次以显示初始可见元素
        animateOnScroll();
    };
    
    initScrollAnimation();
    window.addEventListener('scroll', animateOnScroll);
});