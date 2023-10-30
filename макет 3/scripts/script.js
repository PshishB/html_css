let menuBtn = document.querySelector('.hamb');
let menu = document.querySelector('.header__nav');
let menuItems = document.querySelectorAll('.nav__itema'); // Выбираем все элементы меню

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

// Добавляем обработчик события клика на элементы меню
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    menuBtn.classList.remove('active'); // Удаляем класс active с гамбургера
    menu.classList.remove('active'); // Удаляем класс active с меню
  });
});
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}