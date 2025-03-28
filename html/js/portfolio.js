// ------------ Navigation Functions -----------
function Sidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    
    if (sidebar.style.display === 'flex' && 
        !sidebar.contains(event.target) && 
        event.target !== menuButton && 
        !menuButton.contains(event.target)) {
        hideSidebar();
    }
});

// ------------ About Page Functions -----------
function closeEducation(){
    const education = document.querySelector('.Education');
    education.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

function openEducation(){
    const education = document.querySelector('.Education');
    education.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close education modal when clicking outside
document.addEventListener('click', function(event) {
    const education = document.querySelector('.Education');
    const educationButton = document.querySelector('.buttone');
    
    if (education && education.style.display === 'flex' && 
        !education.contains(event.target) && 
        event.target !== educationButton && 
        !educationButton.contains(event.target)) {
        closeEducation();
    }
});

// ------------ Contact Form Validation -----------
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.formBox');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            const errorSpans = contactForm.querySelectorAll('span');
            errorSpans.forEach(span => span.style.display = 'none');
            
            // Get form elements
            const fullName = document.getElementById('FullName');
            const email = document.getElementById('Email');
            const message = document.getElementById('Message');
            let isValid = true;
            
            // Validate Full Name
            if (!fullName.value.trim()) {
                fullName.nextElementSibling.textContent = 'Full Name is required';
                fullName.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            // Validate Email
            if (!email.value.trim()) {
                email.nextElementSibling.textContent = 'Email is required';
                email.nextElementSibling.style.display = 'block';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.nextElementSibling.textContent = 'Please enter a valid email';
                email.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            // Validate Message
            if (!message.value.trim()) {
                message.nextElementSibling.textContent = 'Message is required';
                message.nextElementSibling.style.display = 'block';
                isValid = false;
            } else if (message.value.trim().length < 10) {
                message.nextElementSibling.textContent = 'Message should be at least 10 characters';
                message.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            // If form is valid, submit it (in a real app, you would send to server)
            if (isValid) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Close sidebar if open
            hideSidebar();
            
            // For same-page links
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Add smooth transition to all elements
document.addEventListener('DOMContentLoaded', function() {
    // Add transition to all elements
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        el.style.transition = 'all 0.3s ease';
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add hover effects to nav items
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});