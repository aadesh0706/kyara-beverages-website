const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('show');
    const links = mobileMenu.querySelectorAll('a');
    if (!expanded) {
        links.forEach(link => link.setAttribute('tabindex', '0'));
    } else {
        links.forEach(link => link.setAttribute('tabindex', '-1'));
    }
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target) && mobileMenu.classList.contains('show')) {
        menuButton.setAttribute('aria-expanded', false);
        mobileMenu.classList.remove('show');
        mobileMenu.querySelectorAll('a').forEach(link => link.setAttribute('tabindex', '-1'));
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all the fields.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
    });
});
