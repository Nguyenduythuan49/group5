// ===== CREATIVE CV4 JAVASCRIPT =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Creative CV4 - Phạm Thị Dung - Initializing...');
    
    initializeCreativeEffects();
    initializeNavigation();
    initializeSkillsAnimation();
    initializePortfolioFilters();
    initializeScrollAnimations();
    initializeInteractiveElements();
    initializeArtisticAnimations();
    initializeKeyboardShortcuts();
    
    console.log('✨ Creative CV4 - All systems ready!');
});

// ===== CREATIVE EFFECTS INITIALIZATION =====
function initializeCreativeEffects() {
    createFloatingParticles();
    initializeGradientAnimations();
    initializeCreativeHovers();
    
    console.log('🌟 Creative effects initialized');
}

// ===== FLOATING PARTICLES =====
function createFloatingParticles() {
    const banner = document.querySelector('.creative-banner');
    if (!banner) return;
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    banner.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'creative-particle';
    
    const size = Math.random() * 6 + 2;
    const startX = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%);
        border-radius: 50%;
        left: ${startX}%;
        bottom: -10px;
        animation: floatUp ${duration}s linear infinite;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
    
    // Add CSS animation if not exists
    if (!document.querySelector('#particle-animations')) {
        const style = document.createElement('style');
        style.id = 'particle-animations';
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== GRADIENT ANIMATIONS =====
function initializeGradientAnimations() {
    const gradientElements = document.querySelectorAll('.creative-glow, .artistic-border');
    
    gradientElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animationDuration = '5s';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animationDuration = '30s';
        });
    });
}

// ===== CREATIVE HOVERS =====
function initializeCreativeHovers() {
    const creativeCards = document.querySelectorAll('.highlight-card, .hobby-creative-card, .specialty-creative-card');
    
    creativeCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            createRippleEffect(e, this);
            addCreativeGlow(this);
        });
        
        card.addEventListener('mouseleave', function() {
            removeCreativeGlow(this);
        });
    });
}

function createRippleEffect(e, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = 100;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    // Add ripple animation if not exists
    if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function addCreativeGlow(element) {
    element.style.boxShadow = '0 0 30px rgba(124, 58, 237, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)';
    element.style.transform = 'translateY(-5px) scale(1.02)';
}

function removeCreativeGlow(element) {
    element.style.boxShadow = '';
    element.style.transform = '';
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-artistic-item');
    const sections = document.querySelectorAll('.creative-section, .content-creative-section');
    
    // Smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                updateActiveNavItem(this);
                addNavClickEffect(this);
            }
        });
    });
    
    // Active section detection
    window.addEventListener('scroll', updateActiveNavOnScroll);
}

function updateActiveNavItem(activeItem) {
    document.querySelectorAll('.nav-artistic-item').forEach(item => {
        item.classList.remove('active');
    });
    activeItem.classList.add('active');
}

function addNavClickEffect(item) {
    const icon = item.querySelector('.nav-icon-wrapper');
    if (icon) {
        icon.style.transform = 'scale(1.3) rotate(360deg)';
        setTimeout(() => {
            icon.style.transform = '';
        }, 300);
    }
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('[id]');
    const navItems = document.querySelectorAll('.nav-artistic-item');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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

// ===== SKILLS ANIMATION =====
function initializeSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-creative-fill');
    const observer = createIntersectionObserver();
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

function createIntersectionObserver() {
    return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBar(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px'
    });
}

function animateSkillBar(skillBar) {
    const percent = skillBar.getAttribute('data-percent');
    if (percent) {
        setTimeout(() => {
            skillBar.style.width = percent + '%';
            addSkillAnimation(skillBar, percent);
        }, 200);
    }
}

function addSkillAnimation(skillBar, percent) {
    // Add percentage indicator
    const indicator = document.createElement('div');
    indicator.className = 'skill-percentage';
    indicator.textContent = percent + '%';
    indicator.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 0.8rem;
        font-weight: 600;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        z-index: 10;
    `;
    
    skillBar.style.position = 'relative';
    skillBar.appendChild(indicator);
    
    // Animate percentage
    animateCounter(indicator, 0, parseInt(percent), 1500);
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ===== PORTFOLIO FILTERS =====
function initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-creative-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            updateActiveFilter(this);
            filterPortfolioItems(portfolioItems, filter);
            addFilterClickEffect(this);
        });
    });
    
    // Initialize masonry layout
    initializeMasonryLayout();
}

function updateActiveFilter(activeButton) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeButton.classList.add('active');
}

function filterPortfolioItems(items, filter) {
    items.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        
        setTimeout(() => {
            if (shouldShow) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease forwards';
                item.style.animationDelay = (index * 0.1) + 's';
            } else {
                item.style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        }, index * 50);
    });
}

function addFilterClickEffect(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }, 100);
}

function initializeMasonryLayout() {
    // Add fadeOut animation if not exists
    if (!document.querySelector('#filter-animations')) {
        const style = document.createElement('style');
        style.id = 'filter-animations';
        style.textContent = `
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: scale(0.8);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.creative-section, .content-creative-section, .achievement-creative-card, .contact-creative-card');
    const scrollObserver = createScrollObserver();
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        scrollObserver.observe(element);
    });
    
    initializeParallaxEffects();
}

function createScrollObserver() {
    return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
}

function animateElement(element) {
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    // Add stagger animation for child elements
    const children = element.querySelectorAll('.info-artistic-item, .hobby-creative-card, .skill-creative-item');
    children.forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            child.style.transition = 'all 0.6s ease';
            child.style.opacity = '1';
            child.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== INTERACTIVE ELEMENTS =====
function initializeInteractiveElements() {
    initializeAchievementCards();
    initializeContactCards();
    initializeCreativeButtons();
    initializeTooltips();
}

function initializeAchievementCards() {
    const achievementCards = document.querySelectorAll('.achievement-creative-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #E9D5FF 0%, #F3E8FF 100%)';
            
            const icon = this.querySelector('.achievement-creative-icon');
            if (icon) {
                icon.style.transform = 'rotate(360deg) scale(1.1)';
                icon.style.transition = 'transform 0.6s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '';
            
            const icon = this.querySelector('.achievement-creative-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
}

function initializeContactCards() {
    const contactCards = document.querySelectorAll('.contact-creative-card');
    
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('a');
            if (link) {
                addClickEffect(this);
                setTimeout(() => {
                    window.open(link.href, '_blank');
                }, 200);
            }
        });
    });
}

function addClickEffect(element) {
    element.style.transform = 'scale(0.95)';
    element.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        element.style.transform = 'scale(1.05)';
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    }, 100);
}

function initializeCreativeButtons() {
    const ctaButton = document.querySelector('.creative-cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)';
            this.style.boxShadow = '0 20px 40px rgba(124, 58, 237, 0.4)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.boxShadow = '';
        });
        
        ctaButton.addEventListener('click', function(e) {
            createClickParticles(e, this);
        });
    }
}

function createClickParticles(e, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 6; i++) {
        createClickParticle(centerX, centerY, i);
    }
}

function createClickParticle(x, y, index) {
    const particle = document.createElement('div');
    const angle = (360 / 6) * index;
    const distance = 50;
    
    particle.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #7C3AED, #A855F7);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
        animation: particleExplode 0.8s ease-out forwards;
        transform-origin: center;
    `;
    
    particle.style.setProperty('--angle', angle + 'deg');
    particle.style.setProperty('--distance', distance + 'px');
    
    document.body.appendChild(particle);
    
    // Add particle animation if not exists
    if (!document.querySelector('#click-particle-animation')) {
        const style = document.createElement('style');
        style.id = 'click-particle-animation';
        style.textContent = `
            @keyframes particleExplode {
                0% {
                    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(var(--distance) * -1)) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        particle.remove();
    }, 800);
}

function initializeTooltips() {
    const portfolioItems = document.querySelectorAll('.portfolio-creative-item');
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-creative-overlay');
        if (overlay) {
            overlay.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
}

// ===== ARTISTIC ANIMATIONS =====
function initializeArtisticAnimations() {
    initializeProfileAnimation();
    initializeLanguageAnimations();
    initializeHobbyAnimations();
}

function initializeProfileAnimation() {
    const avatar = document.querySelector('.creative-avatar');
    const frame = document.querySelector('.artistic-frame');
    
    if (avatar && frame) {
        frame.addEventListener('mouseenter', function() {
            avatar.style.transform = 'scale(1.1) rotate(5deg)';
            avatar.style.filter = 'brightness(1.1) contrast(1.1)';
        });
        
        frame.addEventListener('mouseleave', function() {
            avatar.style.transform = '';
            avatar.style.filter = '';
        });
    }
}

function initializeLanguageAnimations() {
    const languageItems = document.querySelectorAll('.language-creative-item');
    
    languageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const dots = this.querySelectorAll('.level-dot.active');
            dots.forEach((dot, index) => {
                setTimeout(() => {
                    dot.style.transform = 'scale(1.5)';
                    dot.style.boxShadow = '0 0 10px rgba(124, 58, 237, 0.6)';
                }, index * 100);
            });
        });
        
        item.addEventListener('mouseleave', function() {
            const dots = this.querySelectorAll('.level-dot.active');
            dots.forEach(dot => {
                dot.style.transform = '';
                dot.style.boxShadow = '';
            });
        });
    });
}

function initializeHobbyAnimations() {
    const hobbyCards = document.querySelectorAll('.hobby-creative-card');
    
    hobbyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.hobby-creative-icon');
            if (icon) {
                icon.style.transform = 'rotate(360deg) scale(1.2)';
                icon.style.background = 'linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.hobby-creative-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.background = '';
            }
        });
    });
}

// ===== KEYBOARD SHORTCUTS =====
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Alt + number keys for quick navigation
        if (e.altKey && !e.ctrlKey && !e.shiftKey) {
            const keyMap = {
                '1': '#about',
                '2': '#career', 
                '3': '#skills',
                '4': '#portfolio',
                '5': '#contact'
            };
            
            const targetId = keyMap[e.key];
            if (targetId) {
                e.preventDefault();
                navigateToSection(targetId);
            }
        }
        
        // Escape key to scroll to top
        if (e.key === 'Escape') {
            scrollToTop();
        }
        
        // Space for creative mode toggle
        if (e.code === 'Space' && e.ctrlKey) {
            e.preventDefault();
            toggleCreativeMode();
        }
    });
}

function navigateToSection(targetId) {
    const section = document.querySelector(targetId);
    if (section) {
        const offsetTop = section.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Update nav
        const navItem = document.querySelector(`a[href="${targetId}"]`);
        if (navItem) {
            updateActiveNavItem(navItem);
            addNavClickEffect(navItem);
        }
        
        // Add focus effect to section
        addSectionFocusEffect(section);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleCreativeMode() {
    const body = document.body;
    body.classList.toggle('creative-mode');
    
    if (body.classList.contains('creative-mode')) {
        addCreativeModeEffects();
        showNotification('🎨 Creative Mode Activated!');
    } else {
        removeCreativeModeEffects();
        showNotification('✨ Normal Mode Activated!');
    }
}

function addCreativeModeEffects() {
    // Add dynamic background
    const style = document.createElement('style');
    style.id = 'creative-mode-styles';
    style.textContent = `
        .creative-mode {
            animation: colorShift 10s ease-in-out infinite;
        }
        
        @keyframes colorShift {
            0%, 100% { filter: hue-rotate(0deg); }
            25% { filter: hue-rotate(90deg); }
            50% { filter: hue-rotate(180deg); }
            75% { filter: hue-rotate(270deg); }
        }
        
        .creative-mode .floating-shapes .shape {
            animation-duration: 5s !important;
        }
        
        .creative-mode .creative-particle {
            animation-duration: 5s !important;
        }
    `;
    document.head.appendChild(style);
}

function removeCreativeModeEffects() {
    const style = document.querySelector('#creative-mode-styles');
    if (style) {
        style.remove();
    }
}

function addSectionFocusEffect(section) {
    section.style.transform = 'scale(1.02)';
    section.style.boxShadow = '0 0 30px rgba(124, 58, 237, 0.3)';
    section.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        section.style.transform = '';
        section.style.boxShadow = '';
    }, 1000);
}

function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.creative-notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'creative-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #7C3AED, #A855F7);
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
        box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Add notification animations if not exists
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== PERFORMANCE OPTIMIZATION =====
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(updateActiveNavOnScroll, 10);
    });
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function enhanceAccessibility() {
    // Add keyboard navigation for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-creative-item');
    portfolioItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `Portfolio item ${index + 1}`);
        
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
    
    // Add aria labels to navigation
    const navItems = document.querySelectorAll('.nav-artistic-item');
    navItems.forEach(item => {
        const text = item.querySelector('.nav-text')?.textContent || 'Navigation item';
        item.setAttribute('aria-label', text);
    });
    
    // Add skip to content link
    addSkipToContentLink();
}

function addSkipToContentLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #7C3AED;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const mainContent = document.querySelector('.creative-content');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
}

// ===== INITIALIZATION =====
// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    optimizePerformance();
    enhanceAccessibility();
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('CV4 Error:', e.error);
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeCreativeEffects,
        initializeNavigation,
        initializeSkillsAnimation,
        initializePortfolioFilters,
        initializeScrollAnimations,
        initializeInteractiveElements,
        initializeArtisticAnimations,
        initializeKeyboardShortcuts
    };
}
