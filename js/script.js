// Seleciona os elementos
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const music = document.getElementById('background-music');

// Função de pulo[cite: 2]
const jump = () => {
    // Tenta tocar a música. O navegador só permite após o primeiro clique/tecla[cite: 2]
    if (music) {
        music.play().catch(error => console.log("Erro ao tocar música:", error));
    }

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Loop de colisão[cite: 2]
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Para a música no Game Over[cite: 2]
        if (music) {
            music.pause();
            music.currentTime = 0;
        }

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump); 
document.addEventListener('mousedown', jump);