function tikla() {
  alert("Butona basıldı!");
}

// Spiral döndürme ve ölçekleme animasyonu
document.addEventListener('DOMContentLoaded', function() {
  const spiral = document.querySelector('.spiral-wrapper');
  if (spiral) {
    const rotateSpiral = () => {
      const scrollY = window.scrollY;
      const rotate = scrollY * 0.15;
      const scale = Math.max(0.3, 1 - scrollY * 0.0005);
      spiral.style.setProperty('--spiral-rotate', `${rotate}deg`);
      spiral.style.transform = `translateY(-50%) rotate(${rotate}deg) scale(${scale})`;
    };

    rotateSpiral();
    window.addEventListener('scroll', () => {
      window.requestAnimationFrame(rotateSpiral);
    });
  }

  // Referans kartlarına hover efekti ekle
  const referenceCards = document.querySelectorAll('.reference-card');
  
  referenceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      referenceCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.add('faded');
        }
      });
    });
    
    card.addEventListener('mouseleave', () => {
      referenceCards.forEach(otherCard => {
        otherCard.classList.remove('faded');
      });
    });
  });
});