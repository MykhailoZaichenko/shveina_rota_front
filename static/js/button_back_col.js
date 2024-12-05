const toggleButton = document.getElementById('toggle-theme');
const bodyElement = document.body;
const navElement = document.querySelector('nav');
const headerElement = document.querySelector('.header');

// Отримання збереженої теми
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    bodyElement.classList.add(savedTheme);
    navElement.classList.add(savedTheme);
    headerElement.classList.add(savedTheme);
}

toggleButton.addEventListener('click', () => {
    const currentTheme = bodyElement.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    // Зміна теми на всіх елементах
    bodyElement.classList.remove(currentTheme);
    bodyElement.classList.add(newTheme);

    navElement.classList.remove(currentTheme);
    navElement.classList.add(newTheme);

    headerElement.classList.remove(currentTheme);
    headerElement.classList.add(newTheme);

    // Збереження теми в localStorage
    localStorage.setItem('theme', newTheme);
});
