const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  toggle.classList.remove("animate");

  void toggle.offsetWidth; // restart animation

  toggle.classList.add("animate");
  toggle.style.backgroundColor = "transparent";

  document.body.classList.toggle("dark");
});