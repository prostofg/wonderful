document.addEventListener('DOMContentLoaded', function() {
    // Make sure only the hero section is visible initially
    document.querySelectorAll('section:not(.hero)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade in sections on scroll with gentler animation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section:not(.hero)');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transition = 'opacity 1.8s ease, transform 1.8s cubic-bezier(0.23, 1, 0.32, 1)';
            }
        });
    });
    
    // FAQ toggles - improved smooth animation
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            // Find parent .faq-item element
            const faqItem = this.parentElement;
            
            // Close all other open FAQ items
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    const otherArrow = item.querySelector('svg');
                    otherArrow.style.transform = '';
                }
            });
            
            // Smoother toggle with slight delay for effect
            setTimeout(() => {
                // Toggle active class (for styles)
                faqItem.classList.toggle('active');
                
                // Smooth arrow rotation
                const arrow = this.querySelector('svg');
                if (faqItem.classList.contains('active')) {
                    arrow.style.transform = 'rotate(90deg)';
                } else {
                    arrow.style.transform = '';
                }
            }, 100); // Increased delay for smoother effect
        });
    });
    
    // Scroll to top button with smooth appearance
    const scrollBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });
    
    // Click on scroll top button
    scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect for FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'transform 0.5s ease'; // Smoother transition
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(0)';
            }
        });
    });
});