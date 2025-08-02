document.addEventListener('DOMContentLoaded', function() {
    // Add particles to background
    createParticles();
    
    // Add hover effect to card
    const card = document.querySelector('.card');
    card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset card position when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
    
    // Add ripple effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Get click position
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Position ripple
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
                // Open link after animation
                window.open(this.href, '_blank');
            }, 1000);
        });
    });
});

function createParticles() {
    const container = document.querySelector('.container');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = opacity;
        
        // Random color
        const colors = ['#00f0ff', '#ff00e4', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        
        container.appendChild(particle);
    }
}

// Add styles for particles dynamically
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        background-color: #00f0ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        animation: float-particle linear infinite;
    }
    
    @keyframes float-particle {
        0% {
            transform: translateY(0) translateX(0);
        }
        50% {
            transform: translateY(-100px) translateX(20px);
        }
        100% {
            transform: translateY(0) translateX(0);
        }
    }
    
    .ripple {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple 1s ease-out;
    }
    
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);