function initTable() {

    const tableContainer = document.getElementById('table-container');

    dataRating.sort((a, b) => b.id - a.id);
    dataRating.forEach((item) => {
        const row = document.createElement('div');
        row.classList.add('table-row');
        for (const friend of dataFriends) {
            if (friend.id === item.id) {
                row.classList.add('row-friend')
            }
        }

        const ratingCell = document.createElement('p');
        ratingCell.classList.add('table-cell', 'rating-cell');
        ratingCell.textContent = item.id;

        const photoCell = document.createElement('p');
        photoCell.classList.add('table-cell', 'photo-cell');

        const photo = document.createElement('img');
        photo.src = './assets/img/' + item.img;
        photo.alt = 'Photo';
        photoCell.appendChild(photo);

        const nameCell = document.createElement('p');
        nameCell.classList.add('table-cell', 'name-cell');
        nameCell.textContent = `${item.name} ${item.lastName}`;

        const experienceCell = document.createElement('p');
        experienceCell.classList.add('table-cell', 'experience-cell');
        experienceCell.textContent = item.points;

        row.appendChild(ratingCell);
        row.appendChild(photoCell);
        row.appendChild(nameCell);
        row.appendChild(experienceCell);

        tableContainer.appendChild(row);
    })
}

initTable();
