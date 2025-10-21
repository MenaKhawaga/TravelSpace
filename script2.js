let show = document.querySelector(".travels-cards")
let userkey = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(userkey));

if (userData.travels.length === 0) {
  document.querySelector(".travel-title").innerText = `My Travels (0)`
  show.innerHTML = "<p><strong>No Travels found. Please book a travel first.</strong></p>"
}

if(userData.travels.length>0){
  document.querySelector(".travel-title").innerText = `My Travels (${userData.travels.length})`

    userData.travels.forEach((travel,index)=>{

        let card = document.createElement("div");
        card.classList.add("travel-card");
        card.innerHTML+=`<h3>Travel ${index+1}: </h3>`
        card.innerHTML+=`<p>Destination: ${travel.destination}</p>`
        card.innerHTML+=`<p>Date: ${travel.date}</p>`
        
        show.appendChild(card);

    })
}else {
  show.innerHTML = "<p><strong>No travels booked yet.</strong></p>";
}
