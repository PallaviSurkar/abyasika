  AOS.init({ duration: 800, once: true });
        
        const burger = document.getElementById("burger");
        const navLinks = document.getElementById("navLinks");

        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            burger.classList.toggle("active");
        });

const links = navLinks.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        burger.classList.remove("active");
    });
});
        let index = 0;
const track = document.querySelector('.gallery-track');
const items = document.querySelectorAll('.gallery-item');

document.querySelector('.next').addEventListener('click', () => {
    index++;
    if (index >= items.length) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index--;
    if (index < 0) index = items.length - 1;
    track.style.transform = `translateX(-${index * 100}%)`;
});