// ===== PORTFOLIO JAVASCRIPT - THE MOST AMAZING IN THE WORLD =====

class PortfolioApp {
  constructor() {
    this.currentTheme = 'dark';
    this.isLoading = true;
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeAnimations();
    this.setupIntersectionObserver();
    this.handleLoadingScreen();
    this.initializeParticles();
    this.initializeSkillBars();
    this.initializeCounterAnimation();
    this.initializeSmoothScrolling();
    this.initializeMobileMenu();
    this.initializeContactForm();
    this.initializeScrollEffects();
    this.initializeNewFeatures();
  }

  // ===== LOADING SCREEN =====
  handleLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Simulate loading time
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      this.isLoading = false;
      
      // Start entrance animations
      setTimeout(() => {
        this.startEntranceAnimations();
      }, 100);
    }, 2000);
  }

  // ===== EVENT LISTENERS =====
  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Scroll to top
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => this.scrollToTop());
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavigation(e));
    });

    // Window events
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());
    window.addEventListener('load', () => this.handlePageLoad());
  }

  // ===== THEME MANAGEMENT =====
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = this.currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
      }
    }

    // Save theme preference
    localStorage.setItem('portfolio-theme', this.currentTheme);
    
    // Add theme transition effect
    this.addThemeTransitionEffect();
  }

  addThemeTransitionEffect() {
    document.body.style.transition = 'all 0.5s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 500);
  }

  // ===== ANIMATIONS =====
  initializeAnimations() {
    // Add CSS animation classes
    this.addAnimationClasses();
    
    // Initialize AOS-like animations
    this.initializeScrollAnimations();
  }

  addAnimationClasses() {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
      element.classList.add('animate-on-scroll');
    });
  }

  initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
      const animationType = element.getAttribute('data-aos');
      const delay = element.getAttribute('data-aos-delay') || 0;
      
      element.style.animationDelay = `${delay}ms`;
      element.classList.add(`aos-${animationType}`);
    });
  }

  startEntranceAnimations() {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons');
    
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
      }, index * 200);
    });
  }

  // ===== INTERSECTION OBSERVER =====
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.handleElementVisible(entry.target);
        }
      });
    }, this.observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-aos], .project-card, .timeline-item, .skill-item');
    animatedElements.forEach(element => observer.observe(element));
  }

  handleElementVisible(element) {
    if (element.classList.contains('project-card')) {
      element.classList.add('visible');
    } else if (element.classList.contains('timeline-item')) {
      element.classList.add('visible');
    } else if (element.classList.contains('skill-item')) {
      this.animateSkillBar(element);
    }
  }

  // ===== SKILL BARS =====
  initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = '0%';
    });
  }

  animateSkillBar(skillItem) {
    const skillBar = skillItem.querySelector('.skill-bar');
    if (skillBar && !skillBar.classList.contains('animate')) {
      const level = skillBar.getAttribute('data-level');
      
      skillBar.classList.add('animate');
      skillBar.style.width = `${level}%`;
    }
  }

  // ===== COUNTER ANIMATION =====
  initializeCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  }

  // ===== PARTICLES SYSTEM =====
  initializeParticles() {
    const particlesContainer = document.getElementById('heroParticles');
    if (!particlesContainer) return;

    // Create floating particles
    for (let i = 0; i < 30; i++) {
      this.createParticle(particlesContainer);
    }
  }

  createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(0, 212, 255, 0.2);
      border-radius: 50%;
      left: ${x}%;
      top: ${y}%;
      animation: float ${duration}s ease-in-out infinite;
      animation-delay: ${delay}s;
      pointer-events: none;
    `;
    
    container.appendChild(particle);
  }

  // ===== SMOOTH SCROLLING =====
  initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Update active navigation
          this.updateActiveNavigation(targetId);
        }
      });
    });
  }

  updateActiveNavigation(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === targetId) {
        link.classList.add('active');
      }
    });
  }

  // ===== MOBILE MENU =====
  initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
      });
    }
  }

  toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (navMenu && mobileMenuToggle) {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    }
  }

  // ===== CONTACT FORM =====
  initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show success message
    this.showNotification('Message sent successfully!', 'success');
    
    // Reset form
    e.target.reset();
    
    // Simulate form submission
    this.simulateFormSubmission(name, email, message);
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 1rem 2rem;
      background: ${type === 'success' ? '#10b981' : '#3b82f6'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  simulateFormSubmission(name, email, message) {
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // You could integrate with services like:
    // - EmailJS
    // - Formspree
    // - Netlify Forms
    // - Custom backend API
  }

  // ===== SCROLL EFFECTS =====
  initializeScrollEffects() {
    // Parallax effect for hero section
    this.initializeParallax();
    
    // Sticky navigation
    this.initializeStickyNav();
  }

  initializeParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.hero-particles, .avatar-glow');
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('hero-particles') ? 0.3 : 0.2;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

  initializeStickyNav() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  }

  // ===== NEW FEATURES =====
  initializeNewFeatures() {
    // Add typing effect to hero title
    this.initializeTypingEffect();
    
    // Add magnetic effect to buttons
    this.initializeMagneticEffect();
    
    // Add scroll-triggered animations
    this.initializeScrollAnimations();
    
    // Add hover effects
    this.initializeHoverEffects();
    
    // Add performance optimization
    this.optimizePerformance();
  }

  // ===== TYPING EFFECT =====
  initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
      }
    };
    
    // Start typing effect after loading
    setTimeout(typeWriter, 1000);
  }

  // ===== MAGNETIC EFFECT =====
  initializeMagneticEffect() {
    const magneticElements = document.querySelectorAll('.btn, .nav-link, .project-card');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ===== SCROLL ANIMATIONS =====
  initializeScrollAnimations() {
    const elements = document.querySelectorAll('.skill-item, .project-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => observer.observe(element));
  }

  // ===== HOVER EFFECTS =====
  initializeHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.createRippleEffect(e, button);
      });
    });
    
    // Add glow effect to cards
    const cards = document.querySelectorAll('.project-card, .skill-item, .timeline-content');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 30px rgba(0, 212, 255, 0.2)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
      });
    });
  }

  createRippleEffect(event, element) {
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
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // ===== PERFORMANCE OPTIMIZATION =====
  optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        this.handleScrollOptimized();
      }, 16); // 60fps
    });
  }

  handleScrollOptimized() {
    // Optimized scroll handling
    this.handleScrollToTop();
    this.handleNavbarBackground();
  }

  // ===== SCROLL HANDLERS =====
  handleScroll() {
    this.handleScrollToTop();
    this.handleNavbarBackground();
    this.handleParallaxEffects();
  }

  handleScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  handleNavbarBackground() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 7, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
      } else {
        navbar.style.background = 'rgba(5, 5, 7, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
      }
    }
  }

  handleParallaxEffects() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      const opacity = 1 - (scrolled / heroHeight);
      heroSection.style.opacity = Math.max(opacity, 0.3);
    }
  }

  // ===== UTILITY FUNCTIONS =====
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  handleResize() {
    // Handle responsive adjustments
    this.adjustLayoutForScreenSize();
  }

  adjustLayoutForScreenSize() {
    const isMobile = window.innerWidth <= 768;
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
      if (isMobile) {
        navbar.classList.add('mobile');
      } else {
        navbar.classList.remove('mobile');
      }
    }
  }

  handlePageLoad() {
    // Page is fully loaded
    document.body.classList.add('loaded');
    
    // Initialize any additional features
    this.initializeAdditionalFeatures();
  }

  initializeAdditionalFeatures() {
    // Add smooth reveal animations
    this.initializeRevealAnimations();
    
    // Add interactive elements
    this.initializeInteractiveElements();
  }

  // ===== REVEAL ANIMATIONS =====
  initializeRevealAnimations() {
    const revealElements = document.querySelectorAll('.section-title, .project-card, .skill-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => revealObserver.observe(element));
  }

  // ===== INTERACTIVE ELEMENTS =====
  initializeInteractiveElements() {
    // Add tilt effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }

  // ===== EASTER EGGS =====
  addEasterEggs() {
    // Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
      konamiCode.push(e.keyCode);
      
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (konamiCode.join(',') === konamiSequence.join(',')) {
        this.activateEasterEgg();
      }
    });
  }

  activateEasterEgg() {
    // Create a fun particle explosion
    const colors = ['#00d4ff', '#4ecdc4', '#ff6b6b', '#feca57', '#48dbfb'];
    
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        this.createExplosionParticle(colors[Math.floor(Math.random() * colors.length)]);
      }, i * 20);
    }
    
    // Show secret message
    this.showNotification('🎉 You found the secret! You\'re awesome! 🎉', 'success');
  }

  createExplosionParticle(color) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: ${Math.random() * window.innerWidth}px;
      top: ${Math.random() * window.innerHeight}px;
      animation: explode 1s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      document.body.removeChild(particle);
    }, 1000);
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the portfolio app
  const portfolioApp = new PortfolioApp();
  
  // Make it globally accessible for debugging
  window.portfolioApp = portfolioApp;
  
  // Add some fun Easter eggs
  portfolioApp.addEasterEggs();
});

// ===== CSS ANIMATIONS FOR JAVASCRIPT =====
const style = document.createElement('style');
style.textContent = `
  @keyframes explode {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .notification {
    animation: slideInRight 0.3s ease;
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  .nav-menu.active {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    border-top: 1px solid var(--border);
    padding: 1rem;
    box-shadow: var(--shadow);
  }
  
  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .aos-fade-up {
    transform: translateY(50px);
  }
  
  .aos-fade-up.visible {
    transform: translateY(0);
  }
  
  .aos-fade-left {
    transform: translateX(-50px);
  }
  
  .aos-fade-left.visible {
    transform: translateX(0);
  }
  
  .aos-fade-right {
    transform: translateX(50px);
  }
  
  .aos-fade-right.visible {
    transform: translateX(0);
  }
  
  .revealed {
    animation: reveal 0.8s ease forwards;
  }
  
  @keyframes reveal {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-in {
    animation: slideInUp 0.6s ease forwards;
  }
  
  @keyframes slideInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

document.head.appendChild(style);

// ===== EXPORT FOR MODULE SYSTEMS =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PortfolioApp;
}
