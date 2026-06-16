document.addEventListener("DOMContentLoaded", () => {
  const botaoMenu = document.querySelector(".hamburger");
  const menuPrincipal = document.querySelector(".main-nav");
  if (!botaoMenu || !menuPrincipal) return;
  const spans = botaoMenu.querySelectorAll("span");
  const [s1, s2, s3] = spans;

  const CLOSED = ["max-md:invisible", "max-md:opacity-0", "max-md:translate-y-[-10px]", "max-md:pointer-events-none"];
  const OPENED = ["max-md:visible", "max-md:opacity-100", "max-md:translate-y-0", "max-md:pointer-events-auto"];

  function fecharMenu() {
    menuPrincipal.classList.remove(...OPENED);
    menuPrincipal.classList.add(...CLOSED);
    botaoMenu.classList.remove("active");
    botaoMenu.setAttribute("aria-expanded", "false");
    if (s1) { s1.classList.remove("rotate-45", "translate-y-[8px]"); }
    if (s2) { s2.classList.remove("opacity-0"); }
    if (s3) { s3.classList.remove("-rotate-45", "-translate-y-[8px]"); }
  }

  function abrirMenu() {
    menuPrincipal.classList.remove(...CLOSED);
    menuPrincipal.classList.add(...OPENED);
    botaoMenu.classList.add("active");
    botaoMenu.setAttribute("aria-expanded", "true");
    if (s1) { s1.classList.add("rotate-45", "translate-y-[8px]"); }
    if (s2) { s2.classList.add("opacity-0"); }
    if (s3) { s3.classList.add("-rotate-45", "-translate-y-[8px]"); }
  }

  botaoMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    if (botaoMenu.classList.contains("active")) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  menuPrincipal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });

  document.addEventListener("click", (event) => {
    if (botaoMenu.classList.contains("active")) {
      const clicouDentroMenu = menuPrincipal.contains(event.target);
      const clicouNoBotao = botaoMenu.contains(event.target);
      if (!clicouDentroMenu && !clicouNoBotao) {
        fecharMenu();
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      fecharMenu();
    }
  });
});
