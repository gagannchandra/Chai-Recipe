function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.fontSize = `${Math.random() * 20 + 20}px`;
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.top = `${Math.random() * 100}vh`;
  heart.style.opacity = '1';
  heart.style.zIndex = '1000';
  heart.style.animation = 'float 3s ease-in-out forwards';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

function startChaiLoveStory() {
  // Create multiple hearts at intervals
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
}

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
