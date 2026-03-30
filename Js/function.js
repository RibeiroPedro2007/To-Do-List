const botao = document.querySelector("#btn");

botao.onclick = function() {
  const input = document.querySelector("#tarefa");
  const lista = document.querySelector("#lista");

  // trim tira os espaços das pontas (funciona pra caso o baguo tiver vazio)
  const valor = input.value.trim();

  // não deixa vazio ou só espaço
  if (valor === ""){
    input.value = "";
    return;//return pra sair da função
  }

  // cria o item
  const li = document.createElement("li");
  li.innerText = valor;

  // adiciona ele na lista
  lista.appendChild(li);

  // limpa o input
  input.value = "";

  // risca a tarefa ao clicar
  li.onclick = function() {
    li.style.textDecoration = "line-through";

    // se clicar de novo remove
     li.onclick = function() {
        li.remove();
    }
  }
 
};
