//adiciona um formulario para enviar tarefa,cria um botao de editar,excluir e cola o codigo na página
function editarPostRepre(id) {
  var postsRepre = JSON.parse(localStorage.getItem("postsRepre")) || [];
  var postIndex = postsRepre.findIndex(function(postRepre) {
    return postRepre.id === id;
  });

  if (postIndex !== -1) {
    var selectedPostRepre = postsRepre[postIndex];

    var title = prompt("Editar título:", selectedPostRepre.title);
    var content = prompt("Editar conteúdo:", selectedPostRepre.content);
    var descricao = prompt("Editar descrição:", selectedPostRepre.descricao);
    var dataentrega = prompt("Editar data de entrega:", selectedPostRepre.dataentrega);
    var horario = prompt("Editar Horario:", selectedPostRepre.horario);

    selectedPostRepre.title = title || selectedPostRepre.title;
    selectedPostRepre.content = content || selectedPostRepre.content;
    selectedPostRepre.descricao = descricao || selectedPostRepre.descricao;
    selectedPostRepre.dataentrega = dataentrega || selectedPostRepre.dataentrega;
    selectedPostRepre.horario = horario || selectedPostRepre.horario;

    postsRepre[postIndex] = selectedPostRepre;
    localStorage.setItem("postsRepre", JSON.stringify(postsRepre));

    var postRepreDiv = document.getElementById(id);
    postRepreDiv.innerHTML =
      "<h2>Matéria</h2>" +
      selectedPostRepre.title +
      "<p><h2>Conteudo</h2>" +
      selectedPostRepre.content +
      "</p><p><h2>Descrição</h2>" +
      selectedPostRepre.descricao +
      "</p><p><h2>Data de Entrega</h2>" +
      selectedPostRepre.dataentrega +
      "</p><p><h2>Horario</h2></p>" +
      selectedPostRepre.horario;

    // Adicione os botões de "Excluir" e "Editar" novamente
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.id = id;
    deleteButton.addEventListener("click", function() {
      excluirPostRepre(this.id);
    });
    postRepreDiv.appendChild(deleteButton);

    var editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.id = id;
    editButton.addEventListener("click", function() {
      editarPostRepre(this.id);
    });
    postRepreDiv.appendChild(editButton);
  }
}

function excluirPost(id) {
  var postsRepre = JSON.parse(localStorage.getItem("postsRepre")) || [];
  postsRepre = postsRepre.filter(function (postRepre) {
    return postRepre.id !== id;
  });
  localStorage.setItem("postsRepre", JSON.stringify(postsRepre));

  var postRepreDiv = document.getElementById(id);
  postRepreDiv.remove();
}
function adicionarPostRepre() {
  var title = document.getElementById("materia").value;
  var content = document.getElementById("content").value;
  var descricao = document.getElementById("descricao").value;
  var dataentrega = document.getElementById("dataentrega").value;
  var horario = document.getElementById("hora").value;
  var postRepreId = "postRepre-" + Date.now();

  var postRepre = document.createElement("div");
  postRepre.id = postRepreId;
  postRepre.classList.add("postRepre");
  postRepre.innerHTML =
    "<h2>Matéria</h2>" +
    title +
    "<p><h2>Conteúdo</h2>" +
    content +
    "</p><p><h2>Descrição</h2>" +
    descricao +
    "</p><p><h2>Data de Entrega</h2>" +
    dataentrega +
    "</p><p><h2>Horario</h2></p>" +
    horario;
  postRepre.style.marginBottom = "20px";
  postRepre.style.border = "2px solid " + getRandomColor1();
  postRepre.style.borderRadius = "10px";

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Excluir";
  deleteButton.id = postRepreId;
  deleteButton.addEventListener("click", function() {
    excluirPost(this.id);
  });
  postRepre.appendChild(deleteButton);

  var editButton = document.createElement("button");
  editButton.innerText = "Editar";
  editButton.id = postRepreId;
  editButton.addEventListener("click", function() {
    editarPostRepre(this.id);
  });
  postRepre.appendChild(editButton);

  var conteudoDiv = document.getElementById("conteudo");
  conteudoDiv.appendChild(postRepre);

  var postsRepre = JSON.parse(localStorage.getItem("postsRepre")) || [];
  postsRepre.push({
    id: postRepreId,
    title: title,
    content: content,
    descricao: descricao,
    dataentrega: dataentrega,
    horario: horario
  });
  localStorage.setItem("postsRepre", JSON.stringify(postsRepre));
}

//ao recarregar a pagina ele cria novamente o botao de editar,excluir e adicionar o post a pagina
window.onload = function() {
  var posts = JSON.parse(localStorage.getItem("posts")) || [];
  var postsRepre = JSON.parse(localStorage.getItem("postsRepre")) || [];

  var conteudoDiv1 = document.getElementById("conteudo1");
  conteudoDiv1.innerHTML = "";

  var conteudoDiv = document.getElementById("conteudo");
  conteudoDiv.innerHTML = "";

  for (var i = 0; i < posts.length; i++) {
    var postContent = document.createElement("div");
    postContent.setAttribute("id", "post-" + i);

    postContent.innerHTML =
      "<h2>Matéria</h2>" +
      posts[i].title +
      "<p><h2>Conteudo</h2>" +
      posts[i].content +
      "</p><p><h2>Descrição</h2>" +
      posts[i].descricao +
      "</p><p><h2>Data de Entrega</h2>" +
      posts[i].dataentrega +
      "</p><p><h2>Horario</h2></p>"+
      posts[i].horario;

    postContent.style.marginBottom = "20px";
    postContent.style.border = "2px solid " + getRandomColor();
    postContent.style.borderRadius = "10px";

    conteudoDiv1.appendChild(postContent);
  }

  for (var i = 0; i < postsRepre.length; i++) {
    var postRepre = document.createElement("div");
    postRepre.id = postsRepre[i].id;
    postRepre.classList.add("postRepre");
    postRepre.innerHTML =
      "<h2>Matéria</h2>" +
      postsRepre[i].title +
      "<p><h2>Conteudo</h2>" +
      postsRepre[i].content +
      "</p><p><h2>Descrição</h2>" +
      postsRepre[i].descricao +
      "</p><p><h2>Data de Entrega</h2>" +
      postsRepre[i].dataentrega +
      "</p><p><h2>Horario</h2></p>"+
      postsRepre[i].horario;
    postRepre.style.marginBottom = "20px";
    postRepre.style.border = "2px solid " + getRandomColor();
    postRepre.style.borderRadius = "10px";

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.id = postsRepre[i].id;
    deleteButton.addEventListener("click", function() {
      excluirPost(this.id);
    });
    postRepre.appendChild(deleteButton);

    var editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.id = postsRepre[i].id;
    editButton.addEventListener("click", function() {
      editarPostRepre(this.id);
    });
    postRepre.appendChild(editButton);

    conteudoDiv.appendChild(postRepre);
  }

  exibirPosts2();
};

function exibirPosts2() {
  var posts2 = JSON.parse(localStorage.getItem("posts2")) || [];
  var conteudoDiv = document.getElementById("conteudo");

  for (var i = 0; i < posts2.length; i++) {
    var post2 = document.createElement("div");
    post2.classList.add("post2");
    post2.setAttribute("id", "post2-" + i);
    post2.innerHTML =
      "<h2>Matéria</h2>" +
      posts2[i].title2 +
      "<p><h2>Conteúdo</h2>" +
      posts2[i].content2 +
      "</p><p><h2>Descrição</h2>" +
      posts2[i].descricao2 +
      "</p><p><h2>Data de Entrega</h2>" +
      posts2[i].dataentrega2 +
      "</p><p><h2>Horario</h2></p>" +
      posts2[i].horario2;
    post2.style.marginBottom = "20px";
    post2.style.border = "2px solid " + getRandomColor();
    post2.style.borderRadius = "10px";

    conteudoDiv.appendChild(post2);
  }
}
//função de gerar cor
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//função de gerar cor
function getRandomColor1() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//exibe o menu ao ser pressionado
  function toggleMenu() {
    var conteudo = document.getElementById("conteudo");
    var conteudo1 = document.getElementById("conteudo1");
    var formulario = document.getElementById("form-container")
    var habilitarMenu = document.getElementById("habilitarmenu");
  
    if (habilitarMenu.classList.contains("menu-aberto")) {
      conteudo.style.marginLeft = "0";
      formulario.style.marginLeft="0";
      conteudo1.style.marginLeft = "0";
      habilitarMenu.classList.remove("menu-aberto");
    } else {
      conteudo.style.marginLeft = "250px";
      conteudo1.style.marginLeft = "250px";
      formulario.style.marginLeft= "250px";
      habilitarMenu.classList.add("menu-aberto");
    }
  }
  //exibe a div de tarefas,de adicionar tarefa,e esconde o carrosel se uma das divs estiverem abertas
  function toggleCarousel() {
    const conteudoDiv = document.getElementById("conteudo");
    const conteudoDiv1 = document.getElementById("conteudo1");
    const formContainer = document.getElementById("form-container");
    const carousel = document.querySelector(".carousel");
  
    formContainer.classList.toggle("hidden1");
    conteudoDiv.classList.add("hidden");
    conteudoDiv1.classList.add("hidden");
  
    if (!conteudoDiv.classList.contains("hidden") || !conteudoDiv1.classList.contains("hidden") || !formContainer.classList.contains("hidden1")) {
      carousel.classList.add("hidden");
    } else {
      carousel.classList.remove("hidden");
    }
  }
  
  function exibirConteudo() {
    const conteudoDiv = document.getElementById("conteudo");
    const conteudoDiv1 = document.getElementById("conteudo1");
    const formContainer = document.getElementById("form-container");
    const carousel = document.querySelector(".carousel");
  
    conteudoDiv.classList.toggle("hidden");
    conteudoDiv1.classList.toggle("hidden");
    formContainer.classList.add("hidden1");
  
    if (!conteudoDiv.classList.contains("hidden") || !conteudoDiv1.classList.contains("hidden") || !formContainer.classList.contains("hidden1")) {
      carousel.classList.add("hidden");
    } else {
      carousel.classList.remove("hidden");
    }
  }
  
  function exibirtarefa() {
    const formContainer = document.getElementById("form-container");
    const carousel = document.querySelector(".carousel");
    const conteudoDiv = document.getElementById("conteudo");
    const conteudoDiv1 = document.getElementById("conteudo1");
  
    formContainer.classList.toggle("hidden1");
  
    if (formContainer.classList.contains("hidden1")) {
      if (!conteudoDiv.classList.contains("hidden") || !conteudoDiv1.classList.contains("hidden")) {
        carousel.classList.add("hidden");
      } else {
        carousel.classList.remove("hidden");
      }
    } else {
      carousel.classList.add("hidden");
    }
  }