var addButton = document.querySelector("#addButton");

addButton.addEventListener("click", function(event){
	//Função que adiciona um card a primeira coluna do quadro kanban.
	event.preventDefault();

	var form = document.querySelector("#addCard");

	var Responsavel = form.user.value;
	var Tarefa = form.conteudoCartao.value;

	var cartaoDiv = document.createElement("div");
	cartaoDiv.classList.add('cataoSolto');

	var ResponsavelDiv = document.createElement("div");
	var TarefaDiv = document.createElement("div");

	ResponsavelDiv.textContent = Responsavel;
	TarefaDiv.textContent=Tarefa;

	cartaoDiv.appendChild(ResponsavelDiv);
	cartaoDiv.appendChild(TarefaDiv);

	var card =document.querySelector("#aFazer");
	card.appendChild(cartaoDiv);
	}
);