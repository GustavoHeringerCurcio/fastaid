document.addEventListener("DOMContentLoaded", () => {
  const botaoMenu = document.querySelector(".hamburger");
  const menuPrincipal = document.querySelector(".main-nav");

  if (!botaoMenu || !menuPrincipal) return;

  const fecharMenu = () => {
    menuPrincipal.classList.remove("nav-open");
  };

  botaoMenu.addEventListener("click", () => {
    menuPrincipal.classList.toggle("nav-open");
  });

  menuPrincipal.querySelectorAll("a").forEach((linkMenu) => {
    linkMenu.addEventListener("click", fecharMenu);
  });

  document.addEventListener("click", (event) => {
    const clicouDentroMenu = menuPrincipal.contains(event.target);
    const clicouNoBotao = botaoMenu.contains(event.target);

    if (!clicouDentroMenu && !clicouNoBotao && menuPrincipal.classList.contains("nav-open")) {
      fecharMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      fecharMenu();
    }
  });
});
