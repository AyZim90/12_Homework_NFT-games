const overlay = document.querySelector('.image-overlay');

    overlay.addEventListener('mouseenter', () => {
        // Добавляем класс "hovered" для применения стилей при наведении
        overlay.classList.add('hovered');

        // Задаем случайные смещения для тряски
        const shakeOffset = 10;
        const initialX = parseFloat(getComputedStyle(overlay).getPropertyValue('left'));
        const initialY = parseFloat(getComputedStyle(overlay).getPropertyValue('top'));
        
        // Функция для тряски
        function shake() {
            const randomX = Math.random() * shakeOffset * 2 - shakeOffset;
            const randomY = Math.random() * shakeOffset * 2 - shakeOffset;

            overlay.style.left = `${initialX + randomX}px`;
            overlay.style.top = `${initialY + randomY}px`;
        }

        // Задаем интервал для тряски
        const shakeInterval = setInterval(shake, 100);

        // Устанавливаем таймер для завершения тряски через 1 секунду
        setTimeout(() => {
            overlay.classList.remove('hovered'); // Удаляем класс "hovered" для возвращения к обычному состоянию
            overlay.style.left = `${initialX}px`; // Возвращаем изображение в исходное положение
            overlay.style.top = `${initialY}px`;
            clearInterval(shakeInterval); // Очищаем интервал тряски
        }, 1000);
    });


const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('menu-open');
});

//меню toggle
const menuHamburger = document.getElementById("menu-hamburger");
    menuHamburger.addEventListener("click", () => {
    menuHamburger.classList.toggle("menu-open");
});
//kursor üçün

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});