/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navbarMenu = document.getElementById('navbarMenu');

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });

    /* ============================================
       FAQ ACCORDION
       ============================================ */

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqId = this.getAttribute('data-faq');
            const answer = document.getElementById(`faq-${faqId}`);

            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.classList.remove('active');
                    const otherAnswer = document.getElementById(`faq-${otherQuestion.getAttribute('data-faq')}`);
                    if (otherAnswer) {
                        otherAnswer.classList.remove('active');
                    }
                }
            });

            // Toggle current FAQ
            this.classList.toggle('active');
            if (answer) {
                answer.classList.toggle('active');
            }
        });
    });

    /* ============================================
       SMOOTH SCROLL ENHANCEMENT
       ============================================ */

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* ============================================
       SCROLL ANIMATIONS
       ============================================ */

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe benefit cards, showcase cards, and pricing cards
    document.querySelectorAll('.benefit-card, .showcase-card, .pricing-card, .stat-card').forEach(el => {
        observer.observe(el);
    });

    /* ============================================
       ACTIVE NAV LINK ON SCROLL
       ============================================ */

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    /* ============================================
       NAVBAR BACKGROUND ON SCROLL
       ============================================ */

    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 20) {
            navbar.style.backdropFilter = 'blur(15px)';
            navbar.style.backgroundColor = 'rgba(13, 75, 130, 0.08)';
        } else {
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.backgroundColor = 'rgba(13, 75, 130, 0.05)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    /* ============================================
       PARALLAX EFFECT
       ============================================ */

    const heroSection = document.querySelector('.hero-right');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const heroOffset = document.querySelector('.hero').offsetTop;
            const distance = scrollPosition - heroOffset;

            if (distance > -window.innerHeight && distance < window.innerHeight) {
                heroSection.style.transform = `translateY(${distance * 0.1}px)`;
            }
        });
    }

    /* ============================================
       PREVENT LAYOUT SHIFT FROM SCROLLBAR
       ============================================ */

    document.documentElement.style.scrollPaddingTop = '80px';

});

/* ============================================
   PAGE LOAD ANIMATIONS
   ============================================ */

window.addEventListener('load', function() {
    // Add fade-in animation to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.animation = 'fadeInUp 0.6s ease-out';
    }
});
