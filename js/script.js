var enterButton, input, ul;

function init(){
enterButton = document.getElementsByClassName("enterButton");
input = document.getElementById("userinput");
ul = document.querySelector("ul");

}


function inputLength(){
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field

	//add toggle, to highlight green when clicked and mark as done
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

	// addition of delete button in front of each list
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	//addition of class delete to markup
	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}


 function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.which===13) { 
		// to see if "enter" is clicked on the keyboard
		 //the 13 is the enter's key keycode.
 		createListElement();
 	} 
 }

