function tikla() {
  alert("Butona basıldı!");
}

// Referans kartlarına hover efekti ekle
document.addEventListener('DOMContentLoaded', function() {
  const referenceCards = document.querySelectorAll('.reference-card');
  
  referenceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Diğer tüm kartlara 'faded' sınıfı ekle
      referenceCards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.classList.add('faded');
        }
      });
    });
    
    card.addEventListener('mouseleave', function() {
      // Tüm kartlardan 'faded' sınıfını kaldır
      referenceCards.forEach(otherCard => {
        otherCard.classList.remove('faded');
      });
    });
  });
});