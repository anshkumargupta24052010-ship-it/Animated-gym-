// 1. Preloader Screen Controller
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const heroContent = document.querySelector('.hero-content');
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 1000);
});

// 2. Smooth Trigger for Hero Button
function scrollToJoin() {
    document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
}

// 3. Dynamic Interactive Plan Card Switcher Setup
const planCards = document.querySelectorAll('.plan-card');

planCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Remove featured highlight from all options
        planCards.forEach(c => c.classList.remove('featured-card'));
        // Assign spotlight glow layout to the active hovered target
        card.classList.add('featured-card');
    });
});


// 4. Navigation Dynamic Tracker + Scroll Reveal Logic
const targetSections = document.querySelectorAll('.target-section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let currentElement = '';

    // Advanced offset validation loop 
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
        currentElement = 'contact';
    } else {
        targetSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 180)) {
                currentElement = section.getAttribute('id');
            }
        });
    }

    navItems.forEach(item => {
        item.classList.remove('active-link');
        if(item.getAttribute('href') === `#${currentElement}`) {
            item.classList.add('active-link');
        }
    });

    // Lazy Elements Reveal Core Loop
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(card => {
        const viewportHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;
        const triggerMargin = 100;

        if (cardTop < viewportHeight - triggerMargin) {
            card.classList.add('active');
        }
    });
});

// 5. WhatsApp API Outbound Links
function joinPack(planName, planPrice) {
    const gymContactNumber = "918109944185"; // Put your number here
    const boldTextMsg = `Hello IronPulse Gym! 🏋️‍♂️🔥\n\nI am ready to transform and want to subscribe to:\n💪 *Selected Plan:* ${planName}\n💳 *Pricing Details:* ${planPrice}\n\nPlease share the payment portal link and batch availability timings.`;
    
    const formattedURL = `https://wa.me/${gymContactNumber}?text=${encodeURIComponent(boldTextMsg)}`;
    window.open(formattedURL, '_blank');
}