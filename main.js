// Typed.js for Typing Animation
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "UI/UX Designer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Smooth Scroll & Highlight Active Navigation Link
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Smooth scrolling
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Highlight active link
        document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


// Highlight Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
            document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add('active');
        }
    });
});