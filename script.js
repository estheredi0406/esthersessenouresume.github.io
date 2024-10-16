// Toggle Navbar
const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.navigation');
toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Greeting Based on Time of Day
const greeting = document.getElementById('greeting');
const hours = new Date().getHours();

if (hours < 12) {
    greeting.innerText = 'Good Morning,';
} else if (hours < 18) {
    greeting.innerText = 'Good Afternoon,';
} else {
    greeting.innerText = 'Good Evening,';
}
