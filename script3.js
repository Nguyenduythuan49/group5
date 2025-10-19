// ========== JAVASCRIPT CV LÊ VĂN CƯỜNG - PROFESSIONAL THEME ==========

document.addEventListener('DOMContentLoaded', function() {
    console.log('💼 CV Lê Văn Cường - Professional theme đã được tải thành công!');
    
    // Khởi tạo toàn bộ ứng dụng
    initializeProfessionalCV();
});

// ========== KHỞI TẠO ỨNG DỤNG CHUYÊN NGHIỆP ==========
function initializeProfessionalCV() {
    initializeNavigation();
    initializeAnimations();
    initializeProgressBars();
    initializeScrollEffects();
    initializeIntersectionObserver();
    initializeProfessionalInteractions();
    initializePerformanceTracking();
    initializeKeyboardShortcuts();
    initializeAdvancedFeatures();
    
    console.log('✅ Professional CV system đã được khởi tạo hoàn tất');
}

// ========== NAVIGATION SYSTEM ==========
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active state từ tất cả buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active state cho button được click
            this.classList.add('active');
            
            // Smooth scroll with professional offset
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 120;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Professional feedback
                createNavigationFeedback(this);
            }
            
            console.log(`🎯 Professional navigation to ${targetId}`);
        });
    });
    
    console.log('🧭 Professional navigation system initialized');
}

// ========== PROFESSIONAL ANIMATIONS ==========
function initializeAnimations() {
    // Staggered animation cho các cards
    const cards = document.querySelectorAll('.info-section, .content-section');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) scale(0.95)';
        
        setTimeout(() => {
            card.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    });
    
    // Professional entry animation cho stats
    animateStats();
    
    // Animate professional elements
    animateProfessionalElements();
    
    console.log('🎨 Professional animations initialized');
}

// ========== ANIMATE STATISTICS ==========
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue);
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                stat.textContent = Math.floor(currentValue) + (finalValue.includes('+') ? '+' : '');
                
                if (currentValue >= numericValue) {
                    stat.textContent = finalValue;
                    clearInterval(timer);
                }
            }, 40);
        }
    });
}

// ========== PROFESSIONAL ELEMENTS ANIMATION ==========
function animateProfessionalElements() {
    // Animate hobby cards
    const hobbyCards = document.querySelectorAll('.hobby-card');
    hobbyCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add('fade-in-up');
    });
    
    // Animate tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
}

// ========== PROGRESS BARS SYSTEM ==========
function initializeProgressBars() {
    const languageProgress = document.querySelectorAll('.progress-fill');
    const skillProgress = document.querySelectorAll('.skill-progress');
    
    // Language progress observer
    const languageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.getAttribute('data-percent');
                
                setTimeout(() => {
                    bar.style.width = percent + '%';
                    
                    // Add number animation
                    animateProgressNumber(bar, percent);
                }, 300);
                
                languageObserver.unobserve(bar);
                console.log(`📊 Language progress animated: ${percent}%`);
            }
        });
    }, { threshold: 0.3 });
    
    // Skill progress observer
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 400);
                
                skillObserver.unobserve(bar);
                console.log(`🛠️ Skill progress animated: ${width}%`);
            }
        });
    }, { threshold: 0.4 });
    
    languageProgress.forEach(bar => languageObserver.observe(bar));
    skillProgress.forEach(bar => skillObserver.observe(bar));
    
    console.log('📈 Professional progress bars system initialized');
}

// ========== ANIMATE PROGRESS NUMBERS ==========
function animateProgressNumber(bar, targetPercent) {
    const parentItem = bar.closest('.language-item');
    const levelElement = parentItem?.querySelector('.language-level');
    
    if (levelElement) {
        let currentPercent = 0;
        const increment = targetPercent / 30;
        
        const timer = setInterval(() => {
            currentPercent += increment;
            
            if (currentPercent >= targetPercent) {
                currentPercent = targetPercent;
                clearInterval(timer);
            }
            
            // Update visual feedback
            if (currentPercent === targetPercent) {
                bar.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.5)';
                setTimeout(() => {
                    bar.style.boxShadow = 'none';
                }, 1000);
            }
        }, 50);
    }
}

// ========== ADVANCED SCROLL EFFECTS ==========
function initializeScrollEffects() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.professional-navbar');
    const header = document.querySelector('.header-banner');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Professional navbar behavior
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
            navbar.style.boxShadow = '0 4px 30px rgba(37, 99, 235, 0.2)';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 4px 30px rgba(37, 99, 235, 0.1)';
        }
        
        lastScrollTop = scrollTop;
        
        // Parallax effect cho header
        if (header) {
            const parallaxSpeed = scrollTop * 0.3;
            header.style.transform = `translateY(${parallaxSpeed}px)`;
        }
        
        // Update active navigation
        updateProfessionalNavigation();
        
        // Professional scroll indicator
        updateScrollIndicator(scrollTop);
    });
    
    navbar.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    
    console.log('📜 Advanced scroll effects initialized');
}

// ========== UPDATE PROFESSIONAL NAVIGATION ==========
function updateProfessionalNavigation() {
    const sections = document.querySelectorAll('[id]');
    const navButtons = document.querySelectorAll('.nav-button');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('href') === `#${currentSection}`) {
            button.classList.add('active');
        }
    });
}

// ========== SCROLL INDICATOR ==========
function updateScrollIndicator(scrollTop) {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / documentHeight) * 100;
    
    // Create or update scroll indicator
    let indicator = document.querySelector('.scroll-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(45deg, #2563eb, #1d4ed8);
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(indicator);
    }
    
    indicator.style.width = scrollProgress + '%';
}

// ========== INTERSECTION OBSERVER CHO ADVANCED ANIMATIONS ==========
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Professional animation based on element type
                if (element.classList.contains('roadmap-item')) {
                    animateRoadmapItem(element);
                } else if (element.classList.contains('achievement-card')) {
                    animateAchievementCard(element);
                } else if (element.classList.contains('project-card')) {
                    animateProjectCard(element);
                } else if (element.classList.contains('contact-card')) {
                    animateContactCard(element);
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe professional elements
    const professionalElements = document.querySelectorAll('.roadmap-item, .achievement-card, .project-card, .contact-card');
    
    professionalElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) scale(0.9)';
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        observer.observe(element);
    });
    
    console.log('👁️ Advanced intersection observer initialized');
}

// ========== ANIMATE SPECIFIC ELEMENTS ==========
function animateRoadmapItem(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
    
    // Special effect for roadmap year
    const yearElement = element.querySelector('.roadmap-year');
    if (yearElement) {
        setTimeout(() => {
            yearElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                yearElement.style.transform = 'scale(1)';
            }, 300);
        }, 500);
    }
}

function animateAchievementCard(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
    
    // Icon animation
    const icon = element.querySelector('.achievement-icon');
    if (icon) {
        setTimeout(() => {
            icon.style.transform = 'rotate(360deg) scale(1.1)';
            setTimeout(() => {
                icon.style.transform = 'rotate(360deg) scale(1)';
            }, 600);
        }, 400);
    }
}

function animateProjectCard(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
    
    // Stagger animation for tech tags
    const techTags = element.querySelectorAll('.tech-tag');
    techTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            tag.style.transition = 'all 0.4s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function animateContactCard(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
    
    // Professional pulse effect
    setTimeout(() => {
        element.style.boxShadow = '0 20px 60px rgba(37, 99, 235, 0.3)';
        setTimeout(() => {
            element.style.boxShadow = '0 15px 40px rgba(37, 99, 235, 0.15)';
        }, 800);
    }, 300);
}

// ========== PROFESSIONAL INTERACTIONS ==========
function initializeProfessionalInteractions() {
    // Enhanced project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
            this.style.boxShadow = '0 30px 80px rgba(37, 99, 235, 0.25)';
            
            // Animate project stats
            const stats = this.querySelectorAll('.stat');
            stats.forEach((stat, index) => {
                setTimeout(() => {
                    stat.style.transform = 'translateX(10px)';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.08)';
            
            const stats = this.querySelectorAll('.stat');
            stats.forEach(stat => {
                stat.style.transform = 'translateX(0)';
            });
        });
    });
    
    // Professional hover effects cho tools
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            createToolTip(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            removeToolTip();
        });
    });
    
    console.log('✨ Professional interactions initialized');
}

// ========== TOOLTIP SYSTEM ==========
function createToolTip(element) {
    const tooltip = document.createElement('div');
    const toolName = element.querySelector('span').textContent;
    
    tooltip.className = 'professional-tooltip';
    tooltip.textContent = `Professional experience with ${toolName}`;
    tooltip.style.cssText = `
        position: absolute;
        background: #1e293b;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = (rect.bottom + 10) + 'px';
    
    setTimeout(() => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
    }, 100);
}

function removeToolTip() {
    const tooltip = document.querySelector('.professional-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// ========== NAVIGATION FEEDBACK ==========
function createNavigationFeedback(button) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        border: 2px solid #2563eb;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.7;
        pointer-events: none;
        animation: navigationPulse 0.6s ease-out;
    `;
    
    button.style.position = 'relative';
    button.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 600);
}

// ========== KEYBOARD SHORTCUTS ==========
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Professional shortcuts
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('⬆️ Professional scroll to top');
        }
        
        // Number navigation
        if (e.key >= '1' && e.key <= '5') {
            const navButtons = document.querySelectorAll('.nav-button');
            const index = parseInt(e.key) - 1;
            
            if (navButtons[index]) {
                navButtons[index].click();
                console.log(`🎯 Professional keyboard navigation: ${e.key}`);
            }
        }
        
        // Professional presentation mode
        if (e.key === 'F11') {
            togglePresentationMode();
        }
        
        // Professional focus mode
        if (e.key === 'f' && e.ctrlKey) {
            e.preventDefault();
            toggleFocusMode();
        }
    });
    
    console.log('⌨️ Professional keyboard shortcuts initialized');
}

// ========== PRESENTATION MODE ==========
function togglePresentationMode() {
    const body = document.body;
    const isPresentationMode = body.classList.contains('presentation-mode');
    
    if (isPresentationMode) {
        body.classList.remove('presentation-mode');
        console.log('📽️ Exited presentation mode');
    } else {
        body.classList.add('presentation-mode');
        console.log('📽️ Entered presentation mode');
    }
}

// ========== FOCUS MODE ==========
function toggleFocusMode() {
    const body = document.body;
    const isFocusMode = body.classList.contains('focus-mode');
    
    if (isFocusMode) {
        body.classList.remove('focus-mode');
        console.log('🎯 Exited focus mode');
    } else {
        body.classList.add('focus-mode');
        console.log('🎯 Entered focus mode');
    }
}

// ========== PERFORMANCE TRACKING ==========
function initializePerformanceTracking() {
    // Track loading performance
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`⚡ Professional CV loaded in ${loadTime}ms`);
        
        // Professional loading complete effect
        showProfessionalLoadingComplete();
    });
    
    // Track scroll performance
    let scrollCount = 0;
    window.addEventListener('scroll', function() {
        scrollCount++;
        if (scrollCount % 100 === 0) {
            console.log(`📊 Professional scroll interactions: ${scrollCount}`);
        }
    });
    
    console.log('📈 Performance tracking initialized');
}

// ========== PROFESSIONAL LOADING COMPLETE ==========
function showProfessionalLoadingComplete() {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        opacity: 0;
        animation: professionalAlert 2s ease-out;
    `;
    loader.textContent = '✅ Professional CV Ready';
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.remove();
    }, 2000);
}

// ========== ADVANCED FEATURES ==========
function initializeAdvancedFeatures() {
    // Professional print optimization
    initializePrintOptimization();
    
    // Professional theme customization
    initializeProfessionalTheme();
    
    // Professional analytics
    initializeProfessionalAnalytics();
    
    console.log('🚀 Advanced professional features initialized');
}

// ========== PRINT OPTIMIZATION ==========
function initializePrintOptimization() {
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('print-mode');
        console.log('🖨️ Print mode activated');
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('print-mode');
        console.log('🖨️ Print mode deactivated');
    });
}

// ========== PROFESSIONAL THEME ==========
function initializeProfessionalTheme() {
    // Auto dark mode based on time
    const hour = new Date().getHours();
    if (hour >= 19 || hour <= 6) {
        document.body.classList.add('professional-dark');
        console.log('🌙 Professional dark theme activated');
    }
}

// ========== PROFESSIONAL ANALYTICS ==========
function initializeProfessionalAnalytics() {
    // Track section views
    const sections = document.querySelectorAll('[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`📊 Section viewed: ${entry.target.id}`);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
}

// ========== CSS ANIMATIONS VIA JAVASCRIPT ==========
const professionalStyle = document.createElement('style');
professionalStyle.textContent = `
    @keyframes navigationPulse {
        to {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
        }
    }
    
    @keyframes professionalAlert {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
    }
    
    .presentation-mode {
        font-size: 120%;
    }
    
    .focus-mode .left-column {
        opacity: 0.3;
        transition: opacity 0.3s ease;
    }
    
    .focus-mode .left-column:hover {
        opacity: 1;
    }
    
    .print-mode {
        background: white !important;
    }
    
    .print-mode .header-banner {
        background: #2563eb !important;
        -webkit-print-color-adjust: exact;
    }
    
    .professional-dark {
        filter: invert(0.1) hue-rotate(180deg);
    }
`;
document.head.appendChild(professionalStyle);

// ========== ERROR HANDLING ==========
window.addEventListener('error', function(e) {
    console.error('❌ Professional CV Error:', e.error);
});

// ========== EXPORT CHO DEBUGGING ==========
window.ProfessionalCV = {
    initializeProfessionalCV,
    initializeNavigation,
    initializeAnimations,
    updateProfessionalNavigation,
    togglePresentationMode,
    toggleFocusMode
};

console.log('🎉 Professional CV Controller sẵn sàng cho thế giới doanh nghiệp!');
