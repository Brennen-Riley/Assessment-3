console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function hoverImg(e) {
	e.preventDefault();
	alert("You're the best!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

img.addEventListener('mouseover', hoverImg);