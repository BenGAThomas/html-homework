var settingsMenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle(){
	settingsMenu.classList.toggle('settings-menu-height');
}

darkBtn.onclick = function(){
	darkBtn.classList.toggle('dark-btn-on');
	document.body.classList.toggle('dark-theme');
}

function userPosting() {
	let userInput = document.querySelector("#userInput");
	let userMessage = document.querySelector("#userMessage");

	userMessage.innerHTML = userInput.value;
}

let loadFile = function(event) {
	let image = document.getElementById('output');
	image.src=URL.createObjectURL(event.target.files[0]);
};