function colorSubmit() {
    alert('My Favorite Color is Blue')
}
function placeSubmit() {
    alert('My Favorite Place is Hawaii')
}
function ritualSubmit() {
    alert('My Favorite Ritual is Golfing')
}


let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', colorSubmit);
place.addEventListener('click', placeSubmit);
ritual.addEventListener('click', ritualSubmit);