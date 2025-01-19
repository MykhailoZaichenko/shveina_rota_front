document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
  
    carousels.forEach((carousel, index) => {
      // Зміна набору фото для кожної каруселі
      const photoUrls = (index === 0) ? [  // Медіа
        'static/img/pronas1.jpg',
        'static/img/pronas2.jpg',
        'static/img/pronas3.jpg',
        'static/img/pronas4.jpg',
        'static/img/pronas5.jpg',
      ] : (index === 1) ? [  // Наші партнери
        'static/img/partner.jpg',
        'static/img/partner2.jpg',
        'static/img/partner3.jpg',
        'static/img/partner4.jpg',
        'static/img/partner5.jpg'
      ] : [  // Наша команда
        'static/img/member1.jpg',
        'static/img/member2.jpg',
        'static/img/member3.jpg',
        'static/img/member4.jpg',
        'static/img/member5.jpg',
      ];
  
      let currentIndex = 0;
      const carouselImages = carousel.querySelector('.carousel-images');
      const indicatorsContainer = carousel.querySelector('.carousel-indicators');
      const prevButton = carousel.querySelector('.carousel-control-prev');
      const nextButton = carousel.querySelector('.carousel-control-next');
      let autoSlideInterval;
      let interactionTimeout;
  
      // Оновлення каруселі
      const updateCarousel = () => {
        carouselImages.innerHTML = '';
        for (let i = 0; i < 3; i++) {
          const imgIndex = (currentIndex + i) % photoUrls.length;
          const img = document.createElement('img');
          img.src = photoUrls[imgIndex];
          img.alt = `Image ${imgIndex + 1}`;
          carouselImages.appendChild(img);
        }
        updateIndicators();
      };
  
      // Оновлення індикаторів
      const updateIndicators = () => {
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < photoUrls.length; i++) {
          const indicator = document.createElement('li');
          indicator.dataset.index = i;
          if (i === currentIndex) indicator.classList.add('active');
          indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetAutoSlide();
          });
          indicatorsContainer.appendChild(indicator);
        }
      };
  
      // Перехід на наступний слайд
      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % photoUrls.length;
        updateCarousel();
      };
  
      // Запуск автоматичної прокрутки
      const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 3000);
      };
  
      // Зупинка автоматичної прокрутки
      const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
      };
  
      // Перезапуск авто-прокрутки після взаємодії
      const resetAutoSlide = () => {
        stopAutoSlide();
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
          startAutoSlide();
        }, 5000); // 5 секунд без натискання – карусель знову починає автоматично перемикатися
      };
  
      // Обробники подій для кнопок
      nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
  
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + photoUrls.length) % photoUrls.length;
        updateCarousel();
        resetAutoSlide();
      });
  
      // Запуск
      updateCarousel();
      startAutoSlide();
    });
  });
  
// Map
// Ініціалізація карти
const map = L.map('map').setView([50.4501, 30.5234], 2); // Координати Києва, масштаб 10

// Підключення OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Дані про точки
const locations = [
    { lat: 50.464409586655876, lng: 30.408642730187026, city: "Україна", place: "Київ(Нивки)", coordinator: "*****", contact: "******"},
    { lat: 48.4629145042679, lng: 35.03231123318331, city: "Україна", place: "Дніпро", coordinator: "****" , contact: "*****" },

    { lat: 48.45715157471457, lng:  36.434280827806695, city: "Україна", place: "Пертропавлівка", coordinator: "*****", contact: "*****" },
    { lat: 50.26171227989312, lng: 28.668564747403927, city: "Україна", place: "Житомир", coordinator: "****" , contact: "*****" },
    { lat: 49.5893307644574, lng: 34.55826551439933, city: "Україна", place: "Полтава", coordinator: "****" , contact: "*****" },
    { lat: 50.00683274695361, lng: 36.316025274727856, city: "Україна", place: "Харків", coordinator: "****" , contact: "*****" },
    { lat: 43.664501449817145, lng: -79.38287796105261, city: "Канада", place: "Торонто", coordinator: "*****", contact: "******"},
    { lat: 54.32088075341648, lng: 10.120173177214555, city: "Німеччина", place: "Кіль", coordinator: "*****", contact: "******"},
    { lat: 46.794787703341406, lng: 8.031491504945318, city: "Швейцарія", place: "", coordinator: "*****", contact: "******"},
    { lat: 52.80249825027309, lng: 19.041066071223405, city: "Польша", place: "", coordinator: "*****", contact: "******"},
];  

// Додавання точок на карту
locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);

    // Інформаційне вікно
    marker.bindPopup(`<h3>${location.city}</h3><p>Підрозділ: ${location.place}</p><p>Координатор: ${location.coordinator}</p><p>Як зв'язатись: ${location.contact}</p>`);
});
  