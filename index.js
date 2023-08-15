const animaTION = document.querySelector(".animation");
const allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => {
  li.addEventListener("click", () => {
    animaTION.querySelector(".active-icon").classList.remove("active-icon");
    li.classList.add("active-icon");

    const wave = document.querySelector(".wave");
    wave.style.transform = `translateX(calc(${index * 80}px))`;
  });
});
