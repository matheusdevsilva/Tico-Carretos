const cards = document.querySelectorAll('.card');
const containerImgs = document.querySelector(".fotos")
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const imagens = [
    "./midias/foto1.jpeg",
    "./midias/foto2.jpeg",
    "./midias/foto3.jpeg",
    "./midias/foto4.jpeg",
    "./midias/foto5.jpeg",
    "./midias/foto6.jpeg",
    "./midias/foto7.jpeg",
    "./midias/foto8.jpeg",
    "./midias/foto9.jpeg",
    "./midias/foto10.jpeg",
    "./midias/foto11.jpeg",
    "./midias/foto12.jpeg",
    "./midias/foto13.jpeg",
    "./midias/foto14.jpeg",
]
const viewer = document.getElementById("viewer")
const viewerImg = document.getElementById("viewerImg")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let currentIndex = 0


document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener('load', () => {
    document.getElementById('hero').classList.add('visible');
});


viewer.addEventListener("click", () => {
    viewer.classList.remove("active")
})
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

imagens.forEach(src => {
    const img = document.createElement("img")
    img.src = src
    img.style.width = "300px"
    img.style.margin = "10px"
    img.style.borderRadius = "10px"
    img.style.cursor = "pointer"

    img.addEventListener("click", () => {
        viewer.classList.add("active")
        viewerImg.src = img.src
        currentIndex = index
    })
    containerImgs.appendChild(img)
})
prev.addEventListener("click", (e) => {
    e.stopPropagation()
    currentIndex--

    if (currentIndex < 0) {
        currentIndex = imagens.length - 1
    }

    viewerImg.src = imagens[currentIndex]
})
next.addEventListener("click", (e) => {
    e.stopPropagation()

    currentIndex++

    if (currentIndex >= imagens.length) {
        currentIndex = 0
    }

    viewerImg.src = imagens[currentIndex]
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

cards.forEach((card, index) => {
    card.style.transitionDelay = `0.05s`;
    observer.observe(card);
});
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});