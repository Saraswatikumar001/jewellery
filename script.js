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
  { menu: 'bracelets-menu', dropdown: 'bracelets-dropdown' },
  { menu: 'Solitaires-menu', dropdown: 'Solitaires-dropdown' }
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

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Hamburger Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle("hidden");

    // Change hamburger icon to close icon
    menuBtn.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Offer Modal Logic (you had this too)
  const offerBtn = document.getElementById('offer-button');
  const offerModal = document.getElementById('offer-modal');
  const closeOfferModal = document.getElementById('close-offer-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (offerBtn) {
    offerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      offerModal.classList.remove('hidden');
    });
  }

  closeOfferModal.addEventListener('click', () => {
    offerModal.classList.add('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    offerModal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === offerModal) {
      offerModal.classList.add('hidden');
    }
  });
});




