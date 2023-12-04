// Header bg parallax
const parallaxElements = document.querySelectorAll(".main-container__bg");

window.addEventListener("scroll", function () {
  parallaxElements.forEach(function (element) {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const yOffset = window.pageYOffset * speed;
    element.style.backgroundPositionY = +yOffset + "px";
  });
});

// Header on top
const header = document.querySelector(".header");
let isHeaderMoved = false;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    if (scrollPosition >= 100 && !isHeaderMoved) {
      header.style.top = "0";
      header.style.animationName = "none";
      isHeaderMoved = true;
    } else if (scrollPosition < 100 && isHeaderMoved) {
      header.style.top = "0";
      header.style.animationName = "header";
      isHeaderMoved = false;
    }
  }
});

// AOS OFF MOBILE
const elements = document.querySelectorAll("[data-aos]");
function removeAosAttributes() {
  if (window.innerWidth <= 768) {
    elements.forEach((element) => {
      element.removeAttribute("data-aos");
      element.removeAttribute("data-aos-offset");
      element.removeAttribute("data-aos-easing");
    });
  } else {
    elements.forEach((element) => {
      element.setAttribute("data-aos", element.dataset.aos);
      element.setAttribute("data-aos-offset", element.dataset.aosOffset);
      element.setAttribute("data-aos-easing", element.dataset.aosEasing);
    });
  }
}

window.addEventListener("resize", removeAosAttributes);
removeAosAttributes();
