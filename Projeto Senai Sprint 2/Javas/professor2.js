//função de criar botao de editar,excluir e pegar as informações do formulario
function adicionarPost2() {
  var title2 = document.getElementById("materia2").value;
  var content2 = document.getElementById("content2").value;
  var descricao2 = document.getElementById("descricao2").value;
  var dataentrega2 = document.getElementById("dataentrega2").value;
  var horario2 = document.getElementById("hora2").value;
  var postId2 = "post2-" + Date.now();
  var post2 = document.createElement("div");
  post2.id = postId2; 
  post2.classList.add("post2");
  post2.innerHTML = "<h2>Matéria</h2>" + title2 + "<p><h2>Conteudo</h2>" + content2 + "</p><p><h2>Descrição</h2>" + descricao2 + "</p><p><h2>Data de Entrega</h2>" + dataentrega2 + "</p>" + "<p><h2>Horario</h2></p>" + horario2;
  post2.style.marginBottom = "20px";
  post2.style.border = "2px solid " + getRandomColor();
  post2.style.borderRadius = "10px";

  var deleteButton2 = document.createElement("button");
  deleteButton2.innerText = "Excluir";
  deleteButton2.id = postId2;
  deleteButton2.addEventListener("click", function() {
    excluirPost2(this.id);
  });
  post2.appendChild(deleteButton2);

  var editButton2 = document.createElement("button");
  editButton2.innerText = "Editar";
  editButton2.id = postId2;
  editButton2.addEventListener("click", function() {
    editarPost2(this.id);
  });
  post2.appendChild(editButton2);

  var conteudoDiv = document.getElementById("conteudo");
  conteudoDiv.appendChild(post2);

  var posts2 = JSON.parse(localStorage.getItem("posts2")) || [];
  posts2.push({ id: postId2, title2: title2, content2: content2, descricao2: descricao2, dataentrega2: dataentrega2,horario2: horario2 });
  localStorage.setItem("posts2", JSON.stringify(posts2));
}
//função de excluir um post
function excluirPost2(id2) {
  var posts2 = JSON.parse(localStorage.getItem("posts2")) || [];
  posts2 = posts2.filter(function(post2) {
    return post2.id !== id2;
  });
  localStorage.setItem("posts2", JSON.stringify(posts2));

  var postDiv = document.getElementById(id2);
  postDiv.remove();
}
//função de editar um post
function editarPost2(id2) {
  var posts2 = JSON.parse(localStorage.getItem("posts2")) || [];
  var postIndex2 = posts2.findIndex(function(post2) {
    return post2.id === id2;
  });

  if (postIndex2 !== -1) {
    var selectedPost2 = posts2[postIndex2];

    var title2 = prompt("Editar título:", selectedPost2.title2);
    var content2 = prompt("Editar conteúdo:", selectedPost2.content2);
    var descricao2 = prompt("Editar descrição:", selectedPost2.descricao2);
    var dataentrega2 = prompt("Editar data de entrega:", selectedPost2.dataentrega2);
    var horario2 = prompt("Editar Horario:", selectedPost2.horario2);

    selectedPost2.title2 = title2 || selectedPost2.title2;
    selectedPost2.content2 = content2 || selectedPost2.content2;
    selectedPost2.descricao2 = descricao2 || selectedPost2.descricao2;
    selectedPost2.dataentrega2 = dataentrega2 || selectedPost2.dataentrega2;
    selectedPost2.horario2 = horario2 || selectedPost2.horario2;
    
    posts2[postIndex2] = selectedPost2;
    localStorage.setItem("posts2", JSON.stringify(posts2));
    
    var postDiv = document.getElementById(id2);
    postDiv.innerHTML = "<h2>Matéria</h2>" + selectedPost2.title2 + "<p><h2>Conteudo</h2>" + selectedPost2.content2 + "</p><p><h2>Descrição</h2>" + selectedPost2.descricao2 + "</p><p><h2>Data de Entrega</h2>" + selectedPost2.dataentrega2 + "</p><p><h2>Horario</h2></p>" + selectedPost2.horario2;

    // Adicione os botões de "Excluir" e "Editar" novamente
    var deleteButton2 = document.createElement("button");
    deleteButton2.innerText = "Excluir";
    deleteButton2.id = id2;
    deleteButton2.addEventListener("click", function() {
      excluirPost2(this.id);
    });
    postDiv.appendChild(deleteButton2);

    var editButton2 = document.createElement("button");
    editButton2.innerText = "Editar";
    editButton2.id = id2;
    editButton2.addEventListener("click", function() {
      editarPost2(this.id);
    });
    postDiv.appendChild(editButton2);
  }
}
  //essa função cria cores para ficar na borda de cada cor
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  //essa função faz com que crie cores para o postRepre
  function getRandomColor1() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  //e a função que ao abrir o menu,ele faça uma animação para que ele siga ou nao siga a borda do menu
  function toggleMenu() {
    var conteudo = document.getElementById("conteudo");
    var formulario = document.getElementById("form-container")
    var habilitarMenu = document.getElementById("habilitarmenu");
  
    if (habilitarMenu.classList.contains("menu-aberto")) {
      conteudo.style.marginLeft = "0";
      formulario.style.marginLeft="0";
      habilitarMenu.classList.remove("menu-aberto");
    } else {
      conteudo.style.marginLeft = "250px";
      formulario.style.marginLeft= "250px";
      habilitarMenu.classList.add("menu-aberto");
    }
  }
//ao clicar exibe a div conteudo, de adicionar tarefa e de esconder o carrosel se uma das div forem abertas
function toggleCarousel() {
  const carousel = document.querySelector(".carousel");
  carousel.classList.toggle("hidden");
}

function exibirConteudo() {
  const conteudo = document.getElementById("conteudo");
  const formContainer = document.getElementById("form-container");
  const carousel = document.querySelector(".carousel");

  conteudo.classList.toggle("hidden");

  if (conteudo.classList.contains("hidden") && formContainer.classList.contains("hidden1")) {
    carousel.classList.remove("hidden");
  } else {
    carousel.classList.add("hidden");
  }
}

function exibirtarefa() {
  const formContainer = document.getElementById("form-container");
  const conteudo = document.getElementById("conteudo");
  const carousel = document.querySelector(".carousel");

  formContainer.classList.toggle("hidden1");

  if (formContainer.classList.contains("hidden1") && conteudo.classList.contains("hidden")) {
    carousel.classList.remove("hidden");
  } else {
    carousel.classList.add("hidden");
  }
}
//recarrega todas as funções ao abrir o site,tanto quanto carrega tudo que o representante adiciona
  window.onload = function() {
    var posts2 = JSON.parse(localStorage.getItem("posts2")) || [];
    var conteudoDiv = document.getElementById("conteudo");
    conteudoDiv.innerHTML = "";
  
    for (var i = 0; i < posts2.length; i++) {
      var post2 = document.createElement("div");
      post2.id = posts2[i].id;
      post2.classList.add("post2");
      post2.innerHTML =
        "<h2>Matéria</h2>" +
        posts2[i].title2 +
        "<p><h2>Conteudo</h2>" +
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
  
      var deleteButton2 = document.createElement("button");
      deleteButton2.innerText = "Excluir";
      deleteButton2.id = posts2[i].id;
      deleteButton2.addEventListener("click", function() {
        excluirPost2(this.id);
      });
      post2.appendChild(deleteButton2);
  
      var editButton2 = document.createElement("button");
      editButton2.innerText = "Editar";
      editButton2.id = posts2[i].id;
      editButton2.addEventListener("click", function() {
        editarPost2(this.id);
      });
      post2.appendChild(editButton2);
  
      conteudoDiv.appendChild(post2);
    }
  
    var postsRepre = JSON.parse(localStorage.getItem("postsRepre")) || [];
  
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
        "</p>";
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
  };


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
      postsRepre = postsRepre.filter(function(postRepre) {
        return postRepre.id !== id;
      });
      localStorage.setItem("postsRepre", JSON.stringify(postsRepre));

      var postRepreDiv = document.getElementById(id);
      postRepreDiv.remove();
    }