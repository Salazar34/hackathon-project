function randomHoverColor() {
  const colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "teal",
    "sky",
    "blue",
    "indigo",
    "fuchsia",
    "rose",
  ];

  const gradients = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  const navbarBrand = document.querySelector(".navbar-brand");

  const color = colors[Math.floor(Math.random() * 13)];
  const gradient = gradients[Math.floor(Math.random() * 11)];

  navbarBrand.addEventListener("mouseover", (e) => {
    e.classList.toggle(`hover:text-${color}-${gradient}`);
  });
}

export default randomHoverColor;
