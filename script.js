$('.ecardslider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


const menus = [
  { menu: 'rings-menu', dropdown: 'rings-dropdown' },
  { menu: 'earrings-menu', dropdown: 'earrings-dropdown' },
  { menu: 'bracelets-menu', dropdown: 'bracelets-dropdown' }
];

let timer;

menus.forEach(({ menu, dropdown }) => {
  const menuEl = document.getElementById(menu);
  const dropdownEl = document.getElementById(dropdown);

  menuEl.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    dropdownEl.classList.remove('hidden');
    setTimeout(() => dropdownEl.classList.remove('opacity-0'), 10);
  });

  menuEl.addEventListener('mouseleave', () => {
    dropdownEl.classList.add('opacity-0');
    timer = setTimeout(() => dropdownEl.classList.add('hidden'), 200);
  });
});

