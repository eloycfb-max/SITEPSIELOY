/* Menu mobile — JavaScript mínimo, sem dependências */
(function () {
  "use strict";

  var botao = document.getElementById("menu-botao");
  var menu = document.getElementById("nav-mobile");

  if (!botao || !menu) return;

  function fecharMenu() {
    botao.setAttribute("aria-expanded", "false");
    menu.setAttribute("data-aberto", "false");
  }

  function abrirMenu() {
    botao.setAttribute("aria-expanded", "true");
    menu.setAttribute("data-aberto", "true");
  }

  botao.addEventListener("click", function () {
    var aberto = botao.getAttribute("aria-expanded") === "true";
    if (aberto) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  // Fecha ao navegar para uma âncora ou página
  menu.addEventListener("click", function (evento) {
    if (evento.target.closest("a")) {
      fecharMenu();
    }
  });

  // Fecha ao pressionar Esc
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
      fecharMenu();
      botao.focus();
    }
  });
})();

/* Ano atual no rodapé */
(function () {
  var alvo = document.getElementById("ano-atual");
  if (alvo) {
    alvo.textContent = new Date().getFullYear();
  }
})();
