function createHeart() {
  const heart = document.createElement('div');
  const colors = ['#a8334c', '#d17842', '#ff9999', '#ffcccc'];
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.fontSize = `${Math.random() * 25 + 15}px`;
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.top = `${Math.random() * 100}vh`;
  heart.style.opacity = '0.8';
  heart.style.zIndex = '1000';
  heart.style.animation = `float ${2 + Math.random() * 2}s ease-in-out forwards`;
  heart.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function startChaiLoveStory() {
  // Play romantic audio
  const audio = document.getElementById('romantic-audio');
  audio.volume = 0.3;
  audio.play().catch(() => console.log('Audio playback was prevented'));

  // Create multiple hearts at intervals
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 80);
  }
}

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
    50% { transform: translateY(-50vh) translateX(${Math.random() * 50 - 25}px) rotate(10deg); opacity: 0.9; }
    100% { transform: translateY(-100vh) translateX(${Math.random() * 50 - 25}px) rotate(20deg); opacity: 0; }
  }
`;
document.head.appendChild(style);