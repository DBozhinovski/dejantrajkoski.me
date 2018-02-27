const bindLinks = () => {
  const links = document.querySelectorAll(".nav a");

  document.querySelector(".logo").addEventListener("click", () => {
    links.forEach((el) => el.classList.remove("active"));
  });

  links.forEach((el) => {
    el.addEventListener("click", () => {
      links.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    });
  });
};

export default bindLinks;
