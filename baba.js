document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for the 3D scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Son to Father specific celebration
    window.celebrate = function() {
        alert("बाबा, वाढदिवसाच्या खूप शुभेच्छा! मी तुमचा मुलगा असल्याचा मला सार्थ अभिमान आहे. ❤️");
        
        // Add a small console surprise
        console.log("Happy Birthday to the world's best father!");
    };

    // Parallax effect for the hero image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Opening the Surprise Gift
    window.celebrate = function() {
        const surprisePage = document.getElementById('surprise-page');
        const nav = document.getElementById('main-nav');
        
        surprisePage.classList.remove('hidden');
        nav.style.display = 'none'; // Hide nav for full immersion
        
        // Disable scrolling on background
        document.body.style.overflow = 'hidden';
    };

    // Closing the Surprise Gift
    window.closeSurprise = function() {
        const surprisePage = document.getElementById('surprise-page');
        const nav = document.getElementById('main-nav');
        
        surprisePage.classList.add('hidden');
        nav.style.display = 'flex';
        document.body.style.overflow = 'auto';
    };
});
document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal for the main page
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Simple fade-in effect when page loads
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});