const images = document.querySelectorAll('.showcase-img');
const lightbox = document.getElementById('lightbox');
const lbImage = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lbImage.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.add('hidden'); });