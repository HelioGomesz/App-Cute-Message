function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  // Posição horizontal aleatória (largura da janela)
  heart.style.left = Math.random() * window.innerWidth + 'px';

  // Posição vertical inicial (um pouco abaixo da tela)
  heart.style.top = window.innerHeight + 20 + 'px';

  // Duração aleatória da animação (4s a 8s)
  const duration = 4000 + Math.random() * 4000;
  heart.style.animationDuration = duration + 'ms';

  document.body.appendChild(heart);

  // Remove o coração após a animação terminar
  setTimeout(() => {
    heart.remove();
  }, duration);
}

// Gera um coração a cada 500ms
setInterval(createFloatingHeart, 500);
