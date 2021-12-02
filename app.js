const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector(".container");
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

function changeSlide(direction) {
    if (direction === 'up') {
        if (activeSlideIndex < slidesCount - 1) {
            activeSlideIndex++;
        } else {
            activeSlideIndex = 0;
        };
    } else if (direction === 'down') {
        if (activeSlideIndex > 0) {
            activeSlideIndex--;
        } else {
            activeSlideIndex = slidesCount - 1;
        };
    };

    const height = container.clientHeight;

    mainSlide.style.transform = `
        translateY(-${activeSlideIndex * height}px)
    `;

    sidebar.style.transform = `
        translateY(${activeSlideIndex * height}px)
    `;
};

upButton.addEventListener('click', () => {
    changeSlide('up');
});

downButton.addEventListener('click', () => {
    changeSlide('down');
});