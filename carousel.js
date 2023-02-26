// 選取元素
const interestsTitle = document.querySelector('.interestsTitle');
const sliderWrapper = document.querySelector('.slider-wrapper');
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderDots = document.querySelector('.slider-dots');

// 設定初始值
let currentSlide = 0;
let sliderInterval;

// 建立點點元素
sliderItems.forEach((item, index) => {
    const dot = document.createElement('li');
    dot.classList.add('slider-dot');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.setAttribute('data-slide', index);
    sliderDots.appendChild(dot);
});

// 取得點點元素並加上 click 事件
const sliderDotsItems = document.querySelectorAll('.slider-dot');

sliderDotsItems.forEach((item) => {
    item.addEventListener('click', () => {
        const slideIndex = item.getAttribute('data-slide');
        currentSlide = slideIndex;
        moveSlider();
    });
});

// 滑鼠事件
sliderWrapper.addEventListener('mouseover', stopSlider);
sliderWrapper.addEventListener('mouseout', startSlider);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 函式
function moveSlider() {
    const slideWidth = sliderItems[0].offsetWidth;
    slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    updateDots();
}

function updateDots() {
    sliderDotsItems.forEach((dot) => dot.classList.remove('active'));
    sliderDotsItems[currentSlide].classList.add('active');
}

function startSlider() {
    sliderInterval = setInterval(() => {
        if (currentSlide === 0) {
            interestsTitle.innerHTML = 'Interests - 旅遊';
        }
        if (currentSlide === 1) {
            interestsTitle.innerHTML = 'Interests - 繪畫';
        }
        if (currentSlide === 2) {
            interestsTitle.innerHTML = 'Interests - 手球';
        }
        currentSlide++;
        if (currentSlide >= sliderItems.length) {
            currentSlide = 0;
        }
        moveSlider();
    }, 3000);
}

function stopSlider() {
    clearInterval(sliderInterval);
}

function prevSlide() {
    if (currentSlide === 0) {
        interestsTitle.innerHTML = 'Interests - 繪畫';
    }
    if (currentSlide === 1) {
        interestsTitle.innerHTML = 'Interests - 手球';
    }
    if (currentSlide === 2) {
        interestsTitle.innerHTML = 'Interests - 旅遊';
    }
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliderItems.length - 1;
    }
    moveSlider();
}

function nextSlide() {
    if (currentSlide === 0) {
        interestsTitle.innerHTML = 'Interests - 旅遊';
    }
    if (currentSlide === 1) {
        interestsTitle.innerHTML = 'Interests - 繪畫';
    }
    if (currentSlide === 2) {
        interestsTitle.innerHTML = 'Interests - 手球';
    }
    currentSlide++;
    if (currentSlide >= sliderItems.length) {
        currentSlide = 0;
    }
    moveSlider();
}

// 啟動輪播
startSlider();
