var addButton = document.querySelector("#addButton");

addButton.addEventListener("click", function(event){
	//Função que adiciona um card a primeira coluna do quadro kanban.
	event.preventDefault();

	var form = document.querySelector("#addCard");

	var attributedUser = form.user.value;
	var task = form.contentCard.value;

	var cardDiv = document.createElement("div");
	cardDiv.classList.add('dragCard');

	var attributedUserDiv = document.createElement("div");
	attributedUserDiv.classList.add('assigned');
	var taskDiv = document.createElement("div");
	taskDiv.classList.add('content');

	attributedUserDiv.textContent = attributedUser;
	taskDiv.textContent=task;

	cardDiv.appendChild(attributedUserDiv);
	cardDiv.appendChild(taskDiv);

	var card =document.querySelector("#toDo");
	card.appendChild(cardDiv);
	}
);