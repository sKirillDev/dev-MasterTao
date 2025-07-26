const selects = document.querySelectorAll('select')
selects.forEach(item => NiceSelect.bind(item))

const searchboxRemove = document.querySelectorAll('.nice-select-search-box')
searchboxRemove.forEach(el => el.remove())


const btnBurger = document.querySelector('.hamburger')
btnBurger.addEventListener('click', ()=> btnBurger.classList.toggle('is-active'))

const swiperBanner = new Swiper('.swiper-banner', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const header = document.querySelector('header');
const banner = document.querySelector('.swiper-banner');
const headerHeight = header.offsetHeight;

banner.setAttribute('style', '--header-height:'+ headerHeight + 'px' );
console.log(header.offsetHeight);

const fileInput = document.querySelectorAll('[type="file"]');

fileInput.forEach(item => {
    item.addEventListener('change', function() {
        let fileName = item.closest('.input-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})
