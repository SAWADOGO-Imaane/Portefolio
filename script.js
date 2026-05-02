// ===== Navigation Menu Toggle =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Active Navigation Link =====
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-category, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Skills Progress Animation =====
const skillsSection = document.getElementById('competences');
let skillsAnimated = false;

const animateSkills = () => {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    skillProgressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

window.addEventListener('scroll', () => {
    if (!skillsAnimated && skillsSection) {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            animateSkills();
            skillsAnimated = true;
        }
    }
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close');
const sendEmailBtn = document.getElementById('sendEmail');
const sendWhatsAppBtn = document.getElementById('sendWhatsApp');

let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.subject = document.getElementById('subject').value;
        formData.message = document.getElementById('message').value;
        
        // Validation simple
        if (formData.name && formData.email && formData.subject && formData.message) {
            // Ouvrir le modal
            modal.style.display = 'block';
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
}

// Fermer le modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Fermer le modal en cliquant en dehors
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Envoyer par Email
if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', () => {
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Bonjour Imaane,\n\n` +
            `Je m'appelle ${formData.name}.\n\n` +
            `${formData.message}\n\n` +
            `Cordialement,\n${formData.name}\n${formData.email}`
        );
        
        // Ouvrir le client email par défaut
        window.location.href = `mailto:imaane.sawadogo@2ie-edu.org?subject=${subject}&body=${body}`;
        
        // Fermer le modal et réinitialiser le formulaire
        modal.style.display = 'none';
        contactForm.reset();
        
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir avec le message pré-rempli.');
        }, 500);
    });
}

// Envoyer par WhatsApp
if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
        // Numéro WhatsApp (remplacez par votre numéro avec l'indicatif pays sans +)
        // Format: 226XXXXXXXX (pour le Burkina Faso)
        const whatsappNumber = '226XXXXXXXX'; // À REMPLACER par votre vrai numéro
        
        const message = encodeURIComponent(
            `Bonjour Imaane,\n\n` +
            `Je m'appelle ${formData.name}.\n\n` +
            `*Sujet:* ${formData.subject}\n\n` +
            `${formData.message}\n\n` +
            `Mon email: ${formData.email}`
        );
        
        // Ouvrir WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        
        // Fermer le modal et réinitialiser le formulaire
        modal.style.display = 'none';
        contactForm.reset();
        
        setTimeout(() => {
            alert('WhatsApp va s\'ouvrir avec le message pré-rempli.');
        }, 500);
    });
}

// ===== Typing Effect for Hero Title =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after page load
    setTimeout(typeWriter, 500);
}

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Project Cards Hover Effect =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Scroll to Top Button =====
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 999;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });
};

// Create scroll to top button when page loads
window.addEventListener('load', createScrollToTopButton);

// ===== Particles Background (Optional Enhancement) =====
// Uncomment if you want to add a particle effect to the hero section
/*
const createParticles = () => {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.style.position = 'relative';
    hero.insertBefore(particlesContainer, hero.firstChild);
};

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-20px) translateX(20px); }
    }
`;
document.head.appendChild(style);

window.addEventListener('load', createParticles);
*/

// ===== Console Message =====
console.log('%c👋 Bienvenue sur mon portfolio !', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Développé avec passion', 'color: #10b981; font-size: 14px;');
console.log('%c📧 Contactez-moi : votre.email@2ie-edu.org', 'color: #6b7280; font-size: 12px;');
