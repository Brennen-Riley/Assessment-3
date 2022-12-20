function getRecommendation() {
    let restaurants = ["Chilis", "Betos", "Olive Garden"];
    let recommendation = restaurants[Math.floor(Math.random() * restaurants.length)];

    alert(`How about trying ${recommendation}`);
}

let recommended = document.querySelector('#restaurantbtn')
recommended.addEventListener('click', getRecommendation)