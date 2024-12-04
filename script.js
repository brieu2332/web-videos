// script.js
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = '#555';
        } else {
            n// Seleciona o botão
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Monitora o scroll da página
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        scrollToTopBtn.classList.add('show'); // Exibe o botão
    } else {
        scrollToTopBtn.classList.remove('show'); // Esconde o botão
    }
});

// Adiciona evento de clique ao botão
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});
av.style.background = '#333';
        }
    });
});

// Botão "Voltar ao Topo"
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Monitora o scroll da página
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        scrollToTopBtn.classList.add('show'); // Exibe o botão
    } else {
        scrollToTopBtn.classList.remove('show'); // Esconde o botão
    }
});

// Adiciona evento de clique ao botão
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});

