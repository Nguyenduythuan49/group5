// ===== MODERN CV5 JAVASCRIPT =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Modern CV5 - Hoàng Văn Em - Initializing...');
    
    initializeModernEffects();
    initializeNavigation();
    initializeSkillsSystem();
    initializePortfolioSystem();
    initializeScrollAnimations();
    initializeFormHandling();
    initializeInteractiveElements();
    initializePerformanceOptimization();
    initializeAccessibility();
    
    console.log('✅ Modern CV5 - All systems operational!');
});

// ===== MODERN EFFECTS INITIALIZATION =====
function initializeModernEffects() {
    initializeHeaderAnimations();
    initializeGeometricPatterns();
    initializeModernHovers();
    initializeGradientAnimations();
    
    console.log('🎨 Modern effects initialized');
}

// ===== HEADER ANIMATIONS =====
function initializeHeaderAnimations() {
    const profileImage = document.querySelector('.profile-image');
    const imageWrapper = document.querySelector('.image-wrapper');
    
    if (profileImage && imageWrapper) {
        imageWrapper.addEventListener('mouseenter', function() {
            profileImage.style.transform = 'scale(1.1) rotate(5deg)';
            profileImage.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        imageWrapper.addEventListener('mouseleave', function() {
            profileImage.style.transform = '';
            profileImage.style.filter = '';
        });
    }
    
    // Animate stats on load
    animateStatsCounters();
    
    // Animate profile info on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProfileInfo();
            }
        });
    }, { threshold: 0.5 });
    
    const profileInfo = document.querySelector('.profile-info');
    if (profileInfo) {
        observer.observe(profileInfo);
    }
}

function animateStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        animateCounter(stat, 0, finalValue, 2000);
    });
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const suffix = element.textContent.replace(/[0-9]/g, '');
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function animateProfileInfo() {
    const elements = document.querySelectorAll('.modern-name, .modern-title, .modern-subtitle, .university-info');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// ===== GEOMETRIC PATTERNS =====
function initializeGeometricPatterns() {
    const patterns = document.querySelectorAll('.pattern');
    
    patterns.forEach((pattern, index) => {
        // Add interactive hover effects
        pattern.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        pattern.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.background = '';
        });
        
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            pattern.style.transform += ` translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                pattern.style.transform = pattern.style.transform.replace(/translate\([^)]*\)/g, '');
            }, 3000);
        }, 5000 + index * 1000);
    });
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        patterns.forEach((pattern, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrollTop * speed);
            pattern.style.transform += ` translateY(${yPos}px)`;
        });
    });
}

// ===== MODERN HOVERS =====
function initializeModernHovers() {
    const hoverElements = document.querySelectorAll('.info-item, .hobby-item, .contact-item, .cert-card, .social-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            createModernRipple(e, this);
            addModernGlow(this);
        });
        
        element.addEventListener('mouseleave', function() {
            removeModernGlow(this);
        });
    });
}

function createModernRipple(e, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: modernRipple 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    // Add ripple animation
    if (!document.querySelector('#modern-ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'modern-ripple-animation';
        style.textContent = `
            @keyframes modernRipple {
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

function addModernGlow(element) {
    element.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.2), 0 0 0 1px rgba(255, 107, 53, 0.1)';
}

function removeModernGlow(element) {
    element.style.boxShadow = '';
}

// ===== GRADIENT ANIMATIONS =====
function initializeGradientAnimations() {
    const gradientElements = document.querySelectorAll('.image-glow, .image-border');
    
    gradientElements.forEach(element => {
        let animationSpeed = element.classList.contains('image-glow') ? '30s' : '20s';
        
        element.addEventListener('mouseenter', () => {
            element.style.animationDuration = '2s';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animationDuration = animationSpeed;
        });
    });
}

// ===== NAVIGATION SYSTEM =====
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Smooth scrolling navigation
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
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('mobile-open')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Active section detection on scroll
    window.addEventListener('scroll', throttle(updateActiveNavOnScroll, 50));
    
    // Navbar scroll effect
    const navbar = document.querySelector('.modern-nav');
    if (navbar) {
        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(255, 107, 53, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '';
            }
        }, 50));
    }
}

function updateActiveNavItem(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    activeItem.classList.add('active');
}

function addNavClickEffect(item) {
    const icon = item.querySelector('.nav-icon');
    if (icon) {
        icon.style.transform = 'scale(1.2) rotate(360deg)';
        setTimeout(() => {
            icon.style.transform = '';
        }, 400);
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navMenu && navToggle) {
        navMenu.classList.toggle('mobile-open');
        navToggle.classList.toggle('active');
        
        // Add mobile menu styles if not exists
        if (!document.querySelector('#mobile-menu-styles')) {
            const style = document.createElement('style');
            style.id = 'mobile-menu-styles';
            style.textContent = `
                @media (max-width: 768px) {
                    .nav-menu {
                        position: fixed;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.98);
                        backdrop-filter: blur(20px);
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 10px 30px rgba(255, 107, 53, 0.1);
                        transform: translateY(-100%);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s ease;
                    }
                    
                    .nav-menu.mobile-open {
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                        display: flex;
                    }
                    
                    .nav-toggle.active span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    
                    .nav-toggle.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .nav-toggle.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(7px, -6px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
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

// ===== SKILLS SYSTEM =====
function initializeSkillsSystem() {
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillGroups = document.querySelectorAll('.skills-group');
    const skillBars = document.querySelectorAll('.skill-progress');
    const languageBars = document.querySelectorAll('.language-progress');
    
    // Category switching
    skillCategories.forEach(category => {
        category.addEventListener('click', function() {
            const targetGroup = this.getAttribute('data-category');
            switchSkillCategory(targetGroup);
            updateActiveCategory(this);
            addCategoryClickEffect(this);
        });
    });
    
    // Animate skill bars on scroll
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBar(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
    languageBars.forEach(bar => skillObserver.observe(bar));
    
    // Initialize first category
    const firstCategory = document.querySelector('.skill-category.active');
    if (firstCategory) {
        const targetGroup = firstCategory.getAttribute('data-category');
        switchSkillCategory(targetGroup);
    }
}

function switchSkillCategory(targetGroup) {
    const skillGroups = document.querySelectorAll('.skills-group');
    
    skillGroups.forEach(group => {
        group.classList.remove('active');
        if (group.getAttribute('data-group') === targetGroup) {
            group.classList.add('active');
        }
    });
}

function updateActiveCategory(activeCategory) {
    document.querySelectorAll('.skill-category').forEach(category => {
        category.classList.remove('active');
    });
    activeCategory.classList.add('active');
}

function addCategoryClickEffect(category) {
    category.style.transform = 'scale(0.95)';
    setTimeout(() => {
        category.style.transform = 'scale(1.05)';
        setTimeout(() => {
            category.style.transform = '';
        }, 150);
    }, 100);
}

function animateSkillBar(skillBar) {
    const level = skillBar.getAttribute('data-level') || skillBar.getAttribute('data-width');
    if (level) {
        setTimeout(() => {
            skillBar.style.width = level + '%';
            
            // Add percentage animation
            const parentCard = skillBar.closest('.skill-card, .language-item');
            if (parentCard) {
                const percentage = parentCard.querySelector('.skill-percentage');
                if (percentage) {
                    animatePercentage(percentage, 0, parseInt(level), 1500);
                }
            }
        }, 300);
    }
}

function animatePercentage(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ===== PORTFOLIO SYSTEM =====
function initializePortfolioSystem() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            updateActiveFilter(this);
            filterPortfolioItems(portfolioItems, filter);
            addFilterEffect(this);
        });
    });
    
    // Add hover effects to portfolio items
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            addPortfolioHoverEffect(this);
        });
        
        item.addEventListener('mouseleave', function() {
            removePortfolioHoverEffect(this);
        });
    });
}

function updateActiveFilter(activeButton) {
    document.querySelectorAll('.filter-button').forEach(btn => {
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
                item.style.animation = 'fadeInScale 0.6s ease forwards';
                item.style.animationDelay = (index * 0.1) + 's';
            } else {
                item.style.animation = 'fadeOutScale 0.3s ease forwards';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        }, index * 50);
    });
    
    // Add filter animations if not exists
    if (!document.querySelector('#portfolio-filter-animations')) {
        const style = document.createElement('style');
        style.id = 'portfolio-filter-animations';
        style.textContent = `
            @keyframes fadeInScale {
                from {
                    opacity: 0;
                    transform: scale(0.8) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }
            
            @keyframes fadeOutScale {
                from {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: scale(0.8) translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function addFilterEffect(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }, 100);
}

function addPortfolioHoverEffect(item) {
    const overlay = item.querySelector('.portfolio-overlay');
    if (overlay) {
        overlay.style.transform = 'translateY(0)';
        overlay.style.opacity = '1';
    }
}

function removePortfolioHoverEffect(item) {
    const overlay = item.querySelector('.portfolio-overlay');
    if (overlay) {
        overlay.style.transform = 'translateY(100%)';
        overlay.style.opacity = '0';
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.content-section, .timeline-item, .cert-card');
    const scrollObserver = createScrollObserver();
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        scrollObserver.observe(element);
    });
    
    // Initialize stagger animations
    initializeStaggerAnimations();
    
    // Initialize parallax effects
    initializeParallaxEffects();
    
    // Initialize scroll progress indicator
    initializeScrollProgress();
}

function createScrollObserver() {
    return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElementOnScroll(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
}

function animateElementOnScroll(element) {
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    // Add stagger effect for child elements
    const children = element.querySelectorAll('.info-item, .hobby-item, .skill-card, .cert-card');
    children.forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            child.style.transition = 'all 0.6s ease';
            child.style.opacity = '1';
            child.style.transform = 'translateX(0)';
        }, index * 100 + 200);
    });
}

function initializeStaggerAnimations() {
    const staggerGroups = document.querySelectorAll('.social-grid, .cert-grid, .hobbies-grid');
    
    staggerGroups.forEach(group => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerChildrenAnimation(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(group);
    });
}

function staggerChildrenAnimation(container) {
    const children = container.children;
    
    Array.from(children).forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            child.style.transition = 'all 0.6s ease';
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.timeline-marker, .cert-icon');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index % 3) * 0.05;
            const yPos = scrollTop * speed;
            element.style.transform += ` translateY(${yPos}px)`;
        });
    }, 16));
}

function initializeScrollProgress() {
    // Create scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #FF6B35, #FF8F65);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    }, 16));
}

// ===== FORM HANDLING =====
function initializeFormHandling() {
    const form = document.querySelector('.modern-form');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        
        // Add real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
        
        // Add character counter for textarea
        const textarea = form.querySelector('textarea');
        if (textarea) {
            addCharacterCounter(textarea);
        }
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (validateForm(e.target)) {
        showFormLoading();
        
        // Simulate form submission
        setTimeout(() => {
            hideFormLoading();
            showFormSuccess();
            e.target.reset();
        }, 2000);
    }
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showFieldError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showFieldError(input, 'Please enter a valid email address');
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const input = e.target;
    
    if (input.hasAttribute('required') && !input.value.trim()) {
        showFieldError(input, 'This field is required');
    } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
        showFieldError(input, 'Please enter a valid email address');
    } else {
        clearFieldError(input);
    }
}

function showFieldError(input, message) {
    clearFieldError(input);
    
    input.style.borderColor = '#EF4444';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #EF4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        animation: slideInUp 0.3s ease;
    `;
    
    input.parentElement.appendChild(errorElement);
}

function clearFieldError(input) {
    const errorElement = input.parentElement.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    input.style.borderColor = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function addCharacterCounter(textarea) {
    const maxLength = 500;
    const counter = document.createElement('div');
    counter.className = 'character-counter';
    counter.style.cssText = `
        text-align: right;
        font-size: 0.875rem;
        color: var(--gray-500);
        margin-top: 0.25rem;
    `;
    
    function updateCounter() {
        const currentLength = textarea.value.length;
        counter.textContent = `${currentLength}/${maxLength}`;
        
        if (currentLength > maxLength * 0.9) {
            counter.style.color = '#EF4444';
        } else {
            counter.style.color = 'var(--gray-500)';
        }
    }
    
    textarea.addEventListener('input', updateCounter);
    textarea.parentElement.appendChild(counter);
    updateCounter();
}

function showFormLoading() {
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <div class="loading-spinner"></div>
            <span>Sending...</span>
        `;
        
        // Add loading spinner styles
        if (!document.querySelector('#loading-spinner-styles')) {
            const style = document.createElement('style');
            style.id = 'loading-spinner-styles';
            style.textContent = `
                .loading-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

function hideFormLoading() {
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = `
            <i class="fas fa-paper-plane"></i>
            <span>Send Message</span>
        `;
    }
}

function showFormSuccess() {
    showNotification('Message sent successfully! Thank you for reaching out.', 'success');
}

// ===== INTERACTIVE ELEMENTS =====
function initializeInteractiveElements() {
    initializeButtonEffects();
    initializeSocialLinks();
    initializeTooltips();
    initializeKeyboardShortcuts();
}

function initializeButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .submit-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createButtonRipple(e, this);
        });
        
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

function createButtonRipple(e, button) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${x - 50}px;
        top: ${y - 50}px;
        transform: scale(0);
        animation: buttonRipple 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    // Add button ripple animation
    if (!document.querySelector('#button-ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'button-ripple-animation';
        style.textContent = `
            @keyframes buttonRipple {
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

function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link, .social-card');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        link.addEventListener('click', function(e) {
            if (this.href === '#') {
                e.preventDefault();
                showNotification('Social link demo - would open in real implementation', 'info');
            }
        });
    });
}

function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            showTooltip(e, this.getAttribute('data-tooltip'));
        });
        
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'modern-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: fixed;
        background: var(--gray-800);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        z-index: 10000;
        pointer-events: none;
        animation: fadeIn 0.2s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = tooltip.getBoundingClientRect();
    tooltip.style.left = (e.clientX - rect.width / 2) + 'px';
    tooltip.style.top = (e.clientY - rect.height - 10) + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.modern-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Alt + number keys for navigation
        if (e.altKey && !e.ctrlKey && !e.shiftKey) {
            const keyMap = {
                '1': '#about',
                '2': '#experience',
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
        
        // Ctrl + Enter to submit form
        if (e.ctrlKey && e.key === 'Enter') {
            const form = document.querySelector('.modern-form');
            if (form) {
                e.preventDefault();
                form.dispatchEvent(new Event('submit'));
            }
        }
        
        // Escape to scroll to top
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
        
        // Update nav and add focus effect
        const navItem = document.querySelector(`a[href="${targetId}"]`);
        if (navItem) {
            updateActiveNavItem(navItem);
            addNavClickEffect(navItem);
        }
        
        addSectionFocusEffect(section);
    }
}

function addSectionFocusEffect(section) {
    section.style.transform = 'scale(1.02)';
    section.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.2)';
    section.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        section.style.transform = '';
        section.style.boxShadow = '';
    }, 1000);
}

// ===== PERFORMANCE OPTIMIZATION =====
function initializePerformanceOptimization() {
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
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize scroll events
    optimizeScrollEvents();
}

function preloadCriticalResources() {
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

function optimizeScrollEvents() {
    let scrollTimer = null;
    
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        scrollTimer = setTimeout(() => {
            updateActiveNavOnScroll();
        }, 10);
    });
}

// ===== ACCESSIBILITY =====
function initializeAccessibility() {
    // Add keyboard navigation
    addKeyboardNavigation();
    
    // Add ARIA labels
    addAriaLabels();
    
    // Add focus management
    addFocusManagement();
    
    // Add skip links
    addSkipLinks();
}

function addKeyboardNavigation() {
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA') {
                element.click();
            }
        });
    });
}

function addAriaLabels() {
    // Add aria labels to navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const text = item.querySelector('.nav-text')?.textContent || 'Navigation item';
        item.setAttribute('aria-label', text);
    });
    
    // Add aria labels to buttons
    const buttons = document.querySelectorAll('button, .cta-button');
    buttons.forEach(button => {
        if (!button.hasAttribute('aria-label')) {
            const text = button.textContent.trim();
            if (text) {
                button.setAttribute('aria-label', text);
            }
        }
    });
}

function addFocusManagement() {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
        *:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
        
        .focus-visible {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

function addSkipLinks() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
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
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
}

// ===== UTILITY FUNCTIONS =====
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.modern-notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'modern-notification';
    notification.textContent = message;
    
    const colors = {
        info: '#3B82F6',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 4.7s;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Add notification animations
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
    }, 5000);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('CV5 Error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeModernEffects,
        initializeNavigation,
        initializeSkillsSystem,
        initializePortfolioSystem,
        initializeScrollAnimations,
        initializeFormHandling,
        initializeInteractiveElements,
        initializePerformanceOptimization,
        initializeAccessibility
    };
}
