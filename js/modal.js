const modal = document.getElementById('ratingModal');
const overlay = document.getElementById('overlay');
const ratingIcon = document.querySelector('.rating-icon');
const closeBtn = document.querySelector('.close-btn');

ratingIcon.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';

});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});
