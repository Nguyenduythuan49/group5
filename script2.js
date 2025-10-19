// ========== JAVASCRIPT CV TRẦN THỊ BÌNH - MINIMALIST THEME ==========

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 CV Trần Thị Bình - Minimalist theme đã được tải thành công!');
    
    // Khởi tạo tất cả chức năng
    initializeApp();
});

// ========== KHỞI TẠO ỨNG DỤNG ==========
function initializeApp() {
    initializeAnimations();
    initializeSmoothNavigation();
    initializeProgressBars();
    initializeScrollEffects();
    initializeIntersectionObserver();
    initializeParallaxEffects();
    initializeHoverEffects();
    initializeKeyboardShortcuts();
    
    console.log('✅ Tất cả module đã được khởi tạo thành công');
}

// ========== KHỞI TẠO ANIMATIONS ==========
function initializeAnimations() {
    // Fade in effect cho các cards
    const cards = document.querySelectorAll('.profile-card, .info-card, .content-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Animate hobby tags
    const hobbyTags = document.querySelectorAll('.hobby-tag');
    hobbyTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('fade-in-up');
    });
    
    console.log('🎨 Animations đã được khởi tạo');
}

// ========== SMOOTH NAVIGATION ==========
function initializeSmoothNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class từ tất cả items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class cho item được click
            this.classList.add('active');
            
            // Smooth scroll đến section
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            console.log(`🎯 Điều hướng đến ${targetId}`);
        });
    });
    
    console.log('🧭 Smooth navigation đã được khởi tạo');
}

// ========== PROGRESS BARS ANIMATION ==========
function initializeProgressBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    const languageBars = document.querySelectorAll('.language-progress');
    
    // Tạo observer cho skill bars
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
                
                skillObserver.unobserve(bar);
                console.log(`📊 Skill bar animated: ${width}%`);
            }
        });
    }, { threshold: 0.5 });
    
    // Tạo observer cho language bars
    const languageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                
                setTimeout(() => {
                    bar.style.width = level + '%';
                }, 300);
                
                languageObserver.unobserve(bar);
                console.log(`🌐 Language bar animated: ${level}%`);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
    languageBars.forEach(bar => languageObserver.observe(bar));
    
    console.log('📈 Progress bars animation đã được khởi tạo');
}

// ========== SCROLL EFFECTS ==========
function initializeScrollEffects() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar hide/show effect
        if (scrollTop > lastScrollTop && scrollTop > 150) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Update active navigation
        updateActiveNavigation();
        
        // Parallax effect cho banner shape
        const bannerShape = document.querySelector('.banner-shape');
        if (bannerShape) {
            const parallaxSpeed = scrollTop * 0.3;
            bannerShape.style.transform = `translateY(${parallaxSpeed}px) rotate(${scrollTop * 0.1}deg)`;
        }
    });
    
    navbar.style.transition = 'transform 0.3s ease';
    
    console.log('📜 Scroll effects đã được khởi tạo');
}

// ========== UPDATE ACTIVE NAVIGATION ==========
function updateActiveNavigation() {
    const sections = document.querySelectorAll('[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

// ========== INTERSECTION OBSERVER CHO ANIMATIONS ==========
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation classes based on element type
                if (element.classList.contains('timeline-item')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                } else if (element.classList.contains('achievement-item')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                } else if (element.classList.contains('project-item')) {
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1) translateY(0)';
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.timeline-item, .achievement-item, .project-item');
    
    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transition = 'all 0.6s ease';
        
        if (element.classList.contains('timeline-item')) {
            element.style.transform = 'translateX(-50px)';
        } else if (element.classList.contains('achievement-item')) {
            element.style.transform = 'translateY(30px)';
        } else if (element.classList.contains('project-item')) {
            element.style.transform = 'scale(0.9) translateY(30px)';
        }
        
        observer.observe(element);
    });
    
    console.log('👁️ Intersection Observer đã được khởi tạo');
}

// ========== PARALLAX EFFECTS ==========
function initializeParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.tool-item, .contact-item');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.05 * (index % 3 + 1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    console.log('🌊 Parallax effects đã được khởi tạo');
}

// ========== HOVER EFFECTS ==========
function initializeHoverEffects() {
    // Enhanced hover for project items
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
            this.style.boxShadow = '0 25px 60px rgba(22, 163, 74, 0.25)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.boxShadow = '0 10px 30px rgba(22, 163, 74, 0.1)';
        });
    });
    
    // Ripple effect cho buttons
    const buttons = document.querySelectorAll('.nav-item, .hobby-tag, .tool-item');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    console.log('✨ Hover effects đã được khởi tạo');
}

// ========== RIPPLE EFFECT ==========
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ========== KEYBOARD SHORTCUTS ==========
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // ESC để scroll về top
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('⬆️ Scrolled to top via ESC');
        }
        
        // Number keys để navigate
        if (e.key >= '1' && e.key <= '5') {
            const navItems = document.querySelectorAll('.nav-item');
            const index = parseInt(e.key) - 1;
            
            if (navItems[index]) {
                navItems[index].click();
                console.log(`🎯 Navigated via keyboard: ${e.key}`);
            }
        }
        
        // Space để toggle animations
        if (e.key === ' ' && e.ctrlKey) {
            e.preventDefault();
            toggleAnimations();
        }
    });
    
    console.log('⌨️ Keyboard shortcuts đã được khởi tạo');
}

// ========== TOGGLE ANIMATIONS ==========
function toggleAnimations() {
    const body = document.body;
    const isAnimationDisabled = body.classList.contains('no-animations');
    
    if (isAnimationDisabled) {
        body.classList.remove('no-animations');
        console.log('✅ Animations enabled');
    } else {
        body.classList.add('no-animations');
        console.log('⏸️ Animations disabled');
    }
}

// ========== LAZY LOADING CHO IMAGES ==========
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
                
                console.log('🖼️ Image loaded lazily');
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
}

// ========== SMOOTH REVEAL ANIMATION ==========
function smoothRevealElements() {
    const elements = document.querySelectorAll('.contact-item, .social-link');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ========== TYPING EFFECT ==========
function initializeTypingEffect() {
    const subtitle = document.querySelector('.banner-subtitle');
    const originalText = subtitle.textContent;
    
    subtitle.textContent = '';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        subtitle.textContent += originalText[index];
        index++;
        
        if (index >= originalText.length) {
            clearInterval(typeInterval);
            console.log('⌨️ Typing effect completed');
        }
    }, 80);
}

// ========== THEME CUSTOMIZATION ==========
function initializeThemeCustomization() {
    // Tạo theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-palette"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #16a34a, #15803d);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(22, 163, 74, 0.3);
        transition: all 0.3s ease;
    `;
    
    themeToggle.addEventListener('click', function() {
        // Cycle through different accent colors
        const colors = ['#16a34a', '#dc2626', '#2563eb', '#7c3aed', '#ea580c'];
        const currentIndex = parseInt(localStorage.getItem('colorIndex') || '0');
        const nextIndex = (currentIndex + 1) % colors.length;
        
        document.documentElement.style.setProperty('--accent-color', colors[nextIndex]);
        localStorage.setItem('colorIndex', nextIndex.toString());
        
        console.log(`🎨 Theme color changed to: ${colors[nextIndex]}`);
    });
    
    document.body.appendChild(themeToggle);
    
    // Load saved color
    const savedIndex = parseInt(localStorage.getItem('colorIndex') || '0');
    const colors = ['#16a34a', '#dc2626', '#2563eb', '#7c3aed', '#ea580c'];
    document.documentElement.style.setProperty('--accent-color', colors[savedIndex]);
    
    console.log('🎨 Theme customization đã được khởi tạo');
}

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`⚡ Trang đã load trong ${loadTime}ms`);
    
    // Khởi chạy các effect sau khi load xong
    setTimeout(() => {
        smoothRevealElements();
        initializeLazyLoading();
        initializeThemeCustomization();
    }, 500);
});

// ========== ERROR HANDLING ==========
window.addEventListener('error', function(e) {
    console.error('❌ Lỗi JavaScript:', e.error);
});

// ========== EXPORT CHO DEBUGGING ==========
window.CVMinimalist = {
    initializeApp,
    initializeAnimations,
    initializeProgressBars,
    updateActiveNavigation,
    toggleAnimations,
    createRippleEffect
};

// ========== CSS ANIMATIONS VIA JAVASCRIPT ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .no-animations * {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

console.log('🎉 CV Minimalist Controller đã sẵn sàng hoạt động!');
