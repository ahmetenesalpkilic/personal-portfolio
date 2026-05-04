function tikla() {
  alert("Butona basıldı!");
}

// Spiral döndürme animasyonu
document.addEventListener('DOMContentLoaded', function() {
  const spiral = document.querySelector('.spiral-wrapper');
  if (spiral) {
    const rotateSpiral = () => {
      const rotate = window.scrollY * 0.15;
      spiral.style.setProperty('--spiral-rotate', `${rotate}deg`);
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