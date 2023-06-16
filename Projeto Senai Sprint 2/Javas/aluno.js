//função de abrir o menu como na do professor
  function toggleMenu1() {
    var conteudo = document.getElementById("conteudo");
    var habilitarMenu = document.getElementById("habilitarmenu");
  
    if (habilitarMenu.classList.contains("menu-aberto")) {
      conteudo.style.marginLeft = "0";
      habilitarMenu.classList.remove("menu-aberto");
    } else {
      conteudo.style.marginLeft = "250px";
      habilitarMenu.classList.add("menu-aberto");
    }
  }
  //exibir a div conteudo ao ser pressionado
  function exibirConteudo() {
    const conteudoDiv = document.getElementById("conteudo");
    const carousel = document.querySelector(".carousel");
  
    conteudoDiv.classList.toggle("hidden3");
  
    if (conteudoDiv.classList.contains("hidden3")) {
      carousel.classList.remove("hidden");
    } else {
      carousel.classList.add("hidden");
    }
  }