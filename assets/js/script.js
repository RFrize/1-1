const changeBackgroundButton = document.getElementById('changeBackgroundButton');
const body = document.body;

const backgrounds = ['assets/img/background1.jpg', 'assets/img/background2.jpg', 'assets/img/background3.jpg', 'assets/img/background4.jpg'];

let currentBackgroundIndex = 0;

function changeBackgroundImage() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    const newBackground = backgrounds[currentBackgroundIndex];

    body.style.backgroundImage = `url(${newBackground})`;
}

changeBackgroundButton.addEventListener('click', changeBackgroundImage);
