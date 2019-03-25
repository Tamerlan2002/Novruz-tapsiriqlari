"use strict"

let myTasks = [];
let wrapper = document.getElementById("writings");


function addToList() {
    let newAct = document.getElementById("listInput").value;

    myTasks.push(newAct);
    displayTask();
}x
function displayTask() {
    let myList = "<ul>";
    for (let i = 0; i < myTasks.length; i++){
		myList += 
		"<li>" + 
	    myTasks[i] +
		"<button style='float:right' onclick = this.parentNode.remove();myTasks.pop(this)>" 
		+ ' delete' + 
		"</button>" 
		+"</li>"; 
	}
    myList += "</ul>";
	wrapper.innerHTML = myList;
}
