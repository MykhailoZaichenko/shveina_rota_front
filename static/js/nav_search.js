// Ком'ютерний пошк
function toggleSearchBar() {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');

    // Якщо поле пошуку вже видиме, нічого не робимо
    if (!searchBar.classList.contains('d-none')) return;

    // Сховати іконку лупи, показати поле вводу
    searchIcon.classList.add('d-none');
    searchBar.classList.remove('d-none');
    searchBar.classList.add('active');

    // Автоматично фокусувати курсор на полі вводу
    searchInput.focus();
}
// Обробка натискання Enter
document.getElementById('search-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Запобігти стандартній поведінці
        event.target.form.submit(); // Надіслати форму
    }
});
// Закриття пошукового поля після втрати фокуса
document.getElementById('search-input').addEventListener('blur', (event) => {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');

    // Перевірка, чи клік був поза межами пошукового поля або іконки
    if (!searchBar.contains(event.relatedTarget) && !searchIcon.contains(event.relatedTarget)) {
        // Ховати поле пошуку, очищувати його, показувати лупу
        searchBar.classList.add('d-none');
        searchBar.classList.remove('active');
        searchIcon.classList.remove('d-none');
        searchInput.value = ''; // Очищаємо поле пошуку
    }
});
// Очищення поля пошуку після подання форми
function clearSearchInput() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = ''; // Очистити поле після відправки форми
}

// Мобільний поук
// function toggleSearchBar() {
//     const searchBar = document.getElementById('search-bar-mobile');
//     const searchInput = document.getElementById('search-input-mobile');

//     // Якщо поле пошуку вже видиме, нічого не робимо
//     if (!searchBar.classList.contains('d-none')) return;

//     // Сховати іконку лупи, показати поле вводу
//     searchIcon.classList.add('d-none-mobile');
//     searchBar.classList.remove('d-none-mobile');
//     searchBar.classList.add('active');

//     // Автоматично фокусувати курсор на полі вводу
//     searchInput.focus();
// }
// // Обробка натискання Enter
// document.getElementById('search-input-mobile').addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Запобігти стандартній поведінці
//         event.target.form.submit(); // Надіслати форму
//     }
// });
// // Закриття пошукового поля після втрати фокуса
// document.getElementById('search-input-mobile').addEventListener('blur', (event) => {
//     const searchBar = document.getElementById('search-bar-mobile');
//     const searchInput = document.getElementById('search-input-mobile');

//     // Перевірка, чи клік був поза межами пошукового поля або іконки
//     if (!searchBar.contains(event.relatedTarget) && !searchIcon.contains(event.relatedTarget)) {
//         // Ховати поле пошуку, очищувати його, показувати лупу
//         searchBar.classList.add('d-none-mobile');
//         searchBar.classList.remove('active');
//         searchIcon.classList.remove('d-none-mobile');
//         searchInput.value = ''; // Очищаємо поле пошуку
//     }
// });
// // Очищення поля пошуку після подання форми
// function clearSearchInput() {
//     const searchInput = document.getElementById('search-input');
//     searchInput.value = ''; // Очистити поле після відправки форми
// }