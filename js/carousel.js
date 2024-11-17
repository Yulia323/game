function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const items = document.getElementsByClassName('carousel-item');
    const carouselTrack = document.getElementById('carousel-track');
    const margin = 10;

    let currentIndex = 0;
    rightArrow.addEventListener('click', () => {
        const lastIndex = items.length - 9;
        if (currentIndex < track.children.length - 1 && currentIndex <= lastIndex) {
            currentIndex++;
            updateTrack();
        }
    });

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTrack();
        }
    });

    dataFriends.forEach((item) => {
        const row = document.createElement('div');
        row.classList.add('carousel-row');

        const photoCell = document.createElement('p');

        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        const photo = document.createElement('img');
        photo.src = './assets/img/' + item.img;
        photo.alt = 'Photo';
        carouselItem.appendChild(photo);

        photoCell.appendChild(carouselItem);

        row.appendChild(photoCell);
        row.appendChild(carouselItem);

        carouselTrack.appendChild(row);
    });

    function updateTrack() {
        const itemWidth = document.querySelector('.carousel-item').offsetWidth + margin;
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
    }
}

initCarousel();
