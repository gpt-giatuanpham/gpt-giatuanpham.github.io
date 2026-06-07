const activePage = window.location;
console.log(activePage)
const navLinks = document.querySelectorAll('.navButton a')
console.log(navLinks)
navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
});

// GSAP for achievement card animations
gsap.from(".achievement-card", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.3
});