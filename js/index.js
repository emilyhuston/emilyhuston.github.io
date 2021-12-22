(function () {
  "use strict";

  window.onload = () => { document.body.style.opacity = 1; };

  /* photo carousel */
  const photos = [
    "assets/portraits/Portfolio-28_small.jpg",
    "assets/portraits/Portfolio-44_small.jpg",
    "assets/portraits/Portfolio-34_small.jpg",
    "assets/portraits/Portfolio-23_small.jpg",
    "assets/portraits/Portfolio-39_small.jpg",
    "assets/portraits/Portfolio-45_small.jpg",
    "assets/portraits/Portfolio-43_small.jpg",
    "assets/portraits/Portfolio-52_small.jpg",
    "assets/portraits/Portfolio-12_small.jpg",
    "assets/portraits/Portfolio-32_small.jpg",
    "assets/portraits/Portfolio-10_small.jpg",
    "assets/portraits/Portfolio-43_small.jpg",
    "assets/portraits/Portfolio-12_small.jpg",
    "assets/portraits/Portfolio-29_small.jpg",
    "assets/portraits/Portfolio-31_small.jpg",
    "assets/portraits/Portfolio-47_small.jpg",
    "assets/portraits/Portfolio-59_small.jpg",
    "assets/portraits/Portfolio-42_small.jpg",
    "assets/portraits/Portfolio-38_small.jpg",
    "assets/portraits/Portfolio-25_small.jpg",
    "assets/portraits/Portfolio-36_small.jpg",
    "assets/portraits/Portfolio-20_small.jpg",
    "assets/portraits/Portfolio-48_small.jpg",
    "assets/portraits/Portfolio-41_small.jpg",
    "assets/portraits/Portfolio-16_small.jpg",
    "assets/portraits/Portfolio-49_small.jpg",
    "assets/portraits/Portfolio-11_small.jpg",
    "assets/portraits/Portfolio-53_small.jpg",
    "assets/portraits/Portfolio-35_small.jpg",
    "assets/portraits/Portfolio-18_small.jpg",
    "assets/portraits/Portfolio-04_small.jpg",
    "assets/portraits/Portfolio-58_small.jpg",
  ];
  const [
    left, photoContainer, spinner, right
  ] = document.querySelector("#photo-carousel").children;
  const carousel = document.querySelector("#photo-carousel");
  carousel.style.height = photoContainer.clientWidth * 0.67 + "px";
  spinner.style.height = photoContainer.clientWidth * 0.67 + "px";
  spinner.style.width = photoContainer.clientWidth + "px";
  const breadcrumbs = [];
  let currentPhoto = 0;
  let timeout;
  
  const loadImage = () => {
    const image = new Image();
    let loaded = false;
    photoContainer.style.display = "none";
    setTimeout(() => {
      if (!loaded) {
        spinner.style.display = "flex";
      }
    }, 500);
    image.onload = () => {
      loaded = true;
      photoContainer.style.backgroundImage = `url(${photos[currentPhoto]})`;
      spinner.style.display = "none";
      photoContainer.style.display = "flex";
    };
    image.src = photos[currentPhoto];
  };
  
  loadImage();
    
  photos.forEach((e, i) => {
    const crumb = document.createElement("div");
    crumb.className = "breadcrumb" + (i === currentPhoto ? "-active" : "");
    document.querySelector("#breadcrumbs").appendChild(crumb);
    breadcrumbs.push(crumb);
  });
  
  document.addEventListener("keydown", e => {
    if (e.keyCode === 37) {
      e.preventDefault();
      slideLeft();
    }
    else if (e.keyCode === 39) {
      e.preventDefault();
      slideRight();
    }
  });

  addEventListener("resize", e => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      carousel.style.height = photoContainer.clientWidth * 0.67 + "px";
    }, 100);
  });
  
  const slideLeft = () => {
    breadcrumbs[currentPhoto].className = "breadcrumb";

    if (--currentPhoto < 0) {
      currentPhoto = photos.length - 1;
    }

    breadcrumbs[currentPhoto].className = "breadcrumb-active";
    loadImage();
  };

  const slideRight = () => {
    breadcrumbs[currentPhoto].className = "breadcrumb";

    if (++currentPhoto >= photos.length) {
      currentPhoto = 0;
    }

    breadcrumbs[currentPhoto].className = "breadcrumb-active";
    loadImage();
  };

  left.addEventListener("click", e => { 
    e.preventDefault();
    slideLeft();
  });

  right.addEventListener("click", e => { 
    e.preventDefault();
    slideRight();
  });

  /* set email address -- still easily scrapeable by dynamic crawlers */
  const addr = [
    100, 108, 104, 107, 120, 103, 116, 114, 115, 110, 109, 48, 
    47, 48, 63, 102, 108, 96, 104, 107, 45, 98, 110, 108
  ].map(e => String.fromCharCode(e + 1)).join("");
  const contactElems = document.querySelectorAll(".contact");
  const contactElemsNoInner = document.querySelectorAll(".contact-no-inner");

  for (let i = 0; i < contactElems.length; i++) {
    contactElems[i].innerText = addr;
    contactElems[i].href = "mailto:" + addr;
  }

  for (let i = 0; i < contactElemsNoInner.length; i++) {
    contactElemsNoInner[i].href = "mailto:" + addr;
  }

  /* set smooth scrolling */
  ["photography", "contact"].forEach(e => {
    document.querySelector(`#link-${e}`).addEventListener("click", event => { 
      event.preventDefault();
      const destination = document.querySelector(`#${e}`)
                                  .getBoundingClientRect().top + window.scrollY;
      window.scrollTo({top: destination, behavior: "smooth"});
    });
    document.querySelector(`#top-${e}`).addEventListener("click", event => {
      event.preventDefault();
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  });
  
  document.querySelector(`#link-portfolio`).addEventListener("click", event => { 
    event.preventDefault();
    const destination = document.querySelector(`#portfolio`)
                                .getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top: destination, behavior: "smooth"});
  });
})();
