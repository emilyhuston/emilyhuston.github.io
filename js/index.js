(function () {
  "use strict";

  window.onload = () => { document.body.style.opacity = 1; };

  /* photo carousel */
  const photos = [
    "assets/39856859883_cef8b83fcd_z.jpg",
    "assets/5550620402_56f2250c94_z.jpg", 
    "assets/46821937061_4a6daeae90_z.jpg",
    "assets/46096906674_b10c912d1c_z.jpg", 
    "assets/46096802854_63774cea54_z.jpg",
  ];
  const [left, photoContainer, right] = document.querySelector("#photo-carousel").children;
  const breadcrumbs = [];
  let currentPhoto = ~~(photos.length / 2);
  photoContainer.style.backgroundImage = `url(${photos[currentPhoto]})`;

  photos.forEach((e, i) => {
    const crumb = document.createElement("div");
    crumb.className = "breadcrumb" + (i === currentPhoto ? "-active" : "");
    document.querySelector("#breadcrumbs").appendChild(crumb);
    breadcrumbs.push(crumb);
  });

  left.addEventListener("click", e => { 
    e.preventDefault();
    breadcrumbs[currentPhoto].className = "breadcrumb";

    if (--currentPhoto < 0) {
      currentPhoto = photos.length - 1;
    }

    breadcrumbs[currentPhoto].className = "breadcrumb-active";
    photoContainer.style.backgroundImage = `url(${photos[currentPhoto]})`;
  });

  right.addEventListener("click", e => { 
    e.preventDefault();
    breadcrumbs[currentPhoto].className = "breadcrumb";

    if (++currentPhoto >= photos.length) {
      currentPhoto = 0;
    }

    breadcrumbs[currentPhoto].className = "breadcrumb-active";
    photoContainer.style.backgroundImage = `url(${photos[currentPhoto]})`;
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
  ["writing", "photography", "contact"].forEach(e => {
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
})();
