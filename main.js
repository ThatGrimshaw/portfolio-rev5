let emblaNodes = document.querySelectorAll(".embla");
let bodies = document.getElementsByClassName("project-name");
let i;

emblaNodes.forEach(function (emblaNode, i) {
  let options = { loop: true };
  let embla = EmblaCarousel(emblaNode, options);

  //nav
  let prevBtn = emblaNode.querySelector(".embla__button--prev");
  let nextBtn = emblaNode.querySelector(".embla__button--next");

  // init nav
  let setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    prevBtn.addEventListener("click", embla.scrollPrev, false);
    nextBtn.addEventListener("click", embla.scrollNext, false);
  };
  setupPrevNextBtns(prevBtn, nextBtn, embla);
});

for (i = 0; i < bodies.length; i++) {
  bodies[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight =  content.scrollHeight + "px";
    }
  });
}
