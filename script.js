const storySteps = [
  "Gagan quietly enters the kitchen, his heart fluttering as he searches for Yashi. 💛",
  "He tries to light the gas, but it flickers like his heart did before Yashi's love ignited it. ✨",
  "Yashi glides in, her saree flowing like a dream, stealing Gagan's breath away. 💃",
  "Gagan wraps his arms around her, holding her close, their warmth blending like chai and milk. 😘",
  "And then... the chai simmers, but their love is the true magic brewing. ☕💖"
];

let currentStep = 0;

document.getElementById('love-story-btn').addEventListener('click', () => {
  document.getElementById('romantic-overlay').classList.add('visible');
  document.getElementById('overlay-text').textContent = storySteps[0];
  currentStep = 0;
});

document.getElementById('next-step-btn').addEventListener('click', () => {
  currentStep++;
  if (currentStep < storySteps.length) {
    document.getElementById('overlay-text').textContent = storySteps[currentStep];
  } else {
    document.getElementById('romantic-overlay').classList.remove('visible');
    currentStep = 0;
  }
});

document.getElementById('close-overlay-btn').addEventListener('click', () => {
  document.getElementById('romantic-overlay').classList.remove('visible');
  currentStep = 0;
});