const slider = document.querySelectorAll(".slide");
let count = 0;
const totalSlides = slider.length;
let interval;

const startAutoSlide = () => {
  clearInterval(interval);
  interval = setInterval(next, 3000);
};

slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});


const imageSlider = () => {
  if (count >= totalSlides) count = 0;
  else if (count < 0) count = totalSlides - 1;

  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });

  startAutoSlide();
};

const prev = () => {
  count--;
  imageSlider();
};

const next = () => {
  count++;
  imageSlider();
};

startAutoSlide();

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuClose = document.getElementById("menuClose");

  // Open menu
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
  });

  // Close menu
  menuClose.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});
const productSection = [
  {
    id: 1,
    img: "./assets/images/steel_tank.jpg",
    alt: "steel_tank",
    text: "Steel Water Tanks",
  },
  {
    id: 2,
    img: "./assets/images/Aquatabs.jpg",
    alt: "Aquatabs",
    text: "Aquatabs Inline Water Purification",
  },
  {
    id: 3,
    img: "./assets/images/incubators.jpg",
    alt: "incubators",
    text: "Incubators & Brooders",
  },
  {
    id: 4,
    img: "./assets/images/feeders.jpg",
    alt: "feeders",
    text: "Feeders & Drinkers",
  },
  {
    id: 5,
    img: "./assets/images/nests.jpg",
    alt: "nests",
    text: "Nests & Slats",
  },
  {
    id: 6,
    img: "./assets/images/Measurement.jpg",
    alt: "Measurement",
    text: "Measurement",
  },
  {
    id: 7,
    img: "./assets/images/hatchery.jpg",
    alt: "hatchery",
    text: "Hatchery Equipment",
  },
  {
    id: 8,
    img: "./assets/images/gen_equipment.jpg",
    alt: "gen_equipment",
    text: "General Industrial Equipment",
  },
  {
    id: 9,
    img: "./assets/images/accessories.jpg",
    alt: "accessories",
    text: "Accessories",
  },
];



const productList = document.getElementById("productList");


productList.innerHTML = productSection
  .map(
    (item) => `<div class="bg-[url(${item.img})] bg-contain bg-no-repeat bg-center w-[110px] sm:w-[200px] md:w-[260px] lg:w-[380px] h-[100] sm:h-[180px] md:h-[240px] md:h-[270px] lg:h-[360px] relative z-10">

            <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-[#050505]/10 via-[#050505b3] to-[#000000]/30 bg-opacity-50"></div>
            <div class="h-full w-full flex items-end justify-between" >
              <h5 class="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-bold p-4 md:mb-4 lg:mb-10 z-30">${item.text}</h5>
              <button
            class="z-30 size-4 sm:size-6 md:size-8 lg:size-12 mb-1 md:mb-4 lg:mb-10 mr-3"
          >
            <img
              src="B5EA0010-59C4-4A68-AD4F-FD315DAD9A83.svg"
              alt="SVG Image"
              class="z-30 size-4 sm:size-6 md:size-8 lg:size-12"
            />
          </button>
            </div>
            
            
          </div>`
  )
  .join("");

  const adsLogo = [
    {
      id: 1,
      img: "./assets/images/evenprod.png",
      alt: "evenprod",
    },
    {
      id: 2,
      img: "./assets/images/aquatabs.png",
      alt: "aquatabs",
    },
    {
      id: 3,
      img: "./assets/images/lodiuk.png",
      alt: "lodiuk",
    },
    {
      id: 4,
      img: "./assets/images/kilco.png",
      alt: "kilco",
    },
    {
      id: 5,
      img: "./assets/images/kersia.png",
      alt: "kersia",
    },
    {
      id: 6,
      img: "./assets/images/kilco.png",
      alt: "kilco",
    },
  ];

  const adsLogoList = document.getElementById("adsLogoList");

adsLogoList.innerHTML = adsLogo
  .map(
    (item) => `<div class="w-full h-full" > <img src=${item.img} class="object-cover w-12 sm:w-18 md:w-24 lg:w-28 " alt=${item.alt} /> </div>`
  )
  .join("");
