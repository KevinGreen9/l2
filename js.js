const burger = document.querySelector('.burger')
const mobilMenu = document.querySelector('.mobile-menu')
const body = document.body

burger.addEventListener('click', (e) => {
    mobilMenu.classList.toggle('open')
    body.classList.toggle('no-scroll')
    burger.classList.toggle('active')
})

// Находим все ссылки внутри мобильного меню
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Для каждой ссылки добавляем обработчик
mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // отменяем стандартный переход

        // Получаем ID секции из атрибута href (например, "#home")
        const targetId = link.getAttribute('href');

        // Находим секцию на странице
        const targetSection = document.querySelector(targetId);

        // Плавно прокручиваем к секции
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Закрываем меню
        mobilMenu.classList.remove('open');
        body.classList.remove('no-scroll');
        burger.classList.remove('active'); // убираем крестик, возвращаем бургер
    });
});