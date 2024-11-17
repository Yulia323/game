const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const mapImage = new Image();
mapImage.src = 'assets/img/map-path.png';

const heroImage = new Image();
heroImage.src = 'assets/img/svg/icon.svg';

const pathPoints = [
    {x: 446, y: 505},
    {x: 350, y: 477},
    {x: 277, y: 519},
    {x: 189, y: 538},
    {x: 110, y: 507},
    {x: 123, y: 444},
];

let currentPointIndex = 0;
const character = {x: pathPoints[0].x, y: pathPoints[0].y};

function loadImage(image) {
    return new Promise((resolve) => {
        image.onload = resolve;
    });
}

Promise.all([loadImage(mapImage), loadImage(heroImage)]).then(() => {
    drawBackground();
    drawPathPoints();
    drawCharacter();
});

function drawBackground() {
    ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
}

function drawPathPoints() {
    pathPoints.forEach((point, index) => {
        ctx.save();
        ctx.translate(point.x, point.y);

        const isPassed = index <= currentPointIndex;
        const isFirst = index === 0;
        const isFifth = index % 5 === 0 && index !== 0;

        ctx.fillStyle = isPassed ? "black" : "gray";
        ctx.strokeStyle = isPassed ? "gray" : "";
        ctx.lineWidth = 1;

        if (isFirst) {
            ctx.fillStyle = "red";
            ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            ctx.shadowBlur = 10;
            drawOval(8, true);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.stroke();
        } else if (isFifth) {
            ctx.fillStyle = "red";
            drawOval(6, true);
            ctx.arc(0, 0, 10, 0, Math.PI * 2);
            ctx.strokeStyle = "red";
            ctx.lineWidth = 1.5;
            ctx.stroke();
        } else {
            drawOval(5, !isPassed);
        }

        ctx.restore();
    });

    function drawOval(radius, shouldStroke) {
        ctx.scale(1.5, 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        if (shouldStroke) ctx.stroke();
    }
}

function drawCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawPathPoints();

    const iconWidth = 21;
    const iconHeight = 70;
    ctx.drawImage(
        heroImage,
        character.x - iconWidth / 2,
        character.y - iconHeight,
        iconWidth,
        iconHeight
    );
}

function moveCharacter() {
    if (currentPointIndex < pathPoints.length - 1) {
        currentPointIndex++;
        character.x = pathPoints[currentPointIndex].x;
        character.y = pathPoints[currentPointIndex].y;
        drawCharacter();
    }
}

document.getElementById('moveButton').addEventListener('click', moveCharacter);
