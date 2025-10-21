document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-items').classList.toggle('show');
});
let next_btn =document.querySelector('.next')
let back_btn =document.querySelector('.back')

let planet_name =document.querySelector('.planet-name')
let planet_img =document.querySelector('.planet-img')
let diameter = document.querySelector('.Diameter')
let distance =document.querySelector('.Distance')
let rotation = document.querySelector('.Rotation')
let temperature = document.querySelector('.Temperature')

let book_btn = document.querySelector(".book-btn")
let view_btn = document.querySelector('.view-travels')

let fname = document.querySelector('.name')
let email = document.querySelector('.email')
let phone = document.querySelector('.phone')
let destination = document.querySelector('.destination')
let date = document.querySelector('.travel-date')
let alert_box = document.querySelector('.alertBox')
let userkey

const Planets = ['Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Moon']
const planet_imgs =['images/mercury.png','images/Venus.png','images/mars.png','images/Jupiter.png','images/Saturn.png','images/uranus.png','images/neptune.png','images/Moon.png']
const Diameters = ['4,880','12,104','6,779','139,820','116,460','50,724','49,244',' 3,474']
const Distances = ['77 million km','261 million km','225 million km','628 million km','1.2 billion km','2.6 billion km','4.3 billion km',' 384,400 km']
const Temperature = ['167°C','464°C','-65°C','-110°C','-140°C','-195°C','-200°C','−53°C']
const RotationPeriod = ['58.6 Days ','243 Days','24.6 Hours','9.9 Hours','10.7 Hours','17.2 Hours','16 Hours','27.3 days']
let index = 0

let description = document.querySelector('.desc')
let i =0
const text ="Launch into an unforgettable journey to\n explore worlds beyonds imagination.\nStart your space adenture today "
function type(){
description.textContent = text.slice(0, i);
i = (i+1)%text.length
setTimeout(type, 90);
}
type();

next_btn.addEventListener('click',()=>{
    index = (index+1)% 8

    planet_name.querySelector('h1').innerHTML = Planets[index]
    planet_img.querySelector("img").src = planet_imgs[index]
    diameter.querySelector('h2').innerHTML = Diameters[index]
    distance.querySelector('h2').innerHTML = Distances[index]
    rotation.querySelector('h2').innerHTML = RotationPeriod[index]
    temperature.querySelector('h2').innerHTML=Temperature[index]

 


})

back_btn.addEventListener('click',()=>{
    index = (index-1+8)% 8
    planet_name.querySelector('h1').innerHTML = Planets[index]
    planet_img.querySelector("img").src = planet_imgs[index]
    diameter.querySelector('h2').innerHTML = Diameters[index]
    distance.querySelector('h2').innerHTML = Distances[index]
    rotation.querySelector('h2').innerHTML = RotationPeriod[index]
    temperature.querySelector('h2').innerHTML=Temperature[index]
})

book_btn.addEventListener('click',(e) => {
    e.preventDefault(); 
    let fnameVal = fname.value.trim()
    let emailVal = email.value.trim()
    let phoneVal = phone.value.trim()
    let destinationVal = destination.value.trim() 
    let dateVal = date.value.trim()
    if (
        fnameVal === "" ||
        emailVal === "" ||
        phoneVal === "" ||
        destinationVal === "" ||
        destinationVal === "--- Choose your Destination ---" ||
        dateVal === ""
    ) {
      alert_box.innerHTML=`
        <div class="alert alert-warning" role="alert">
             Please fill in all fields before booking!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

        </div>`
        return; 
    }

    userkey = "user_" + email.value;
    let userdata =JSON.parse(localStorage.getItem(userkey))
        if(!userdata){
            userdata={
            'userid':userkey,
            'fullname': fnameVal,
            'email':emailVal,
            'phone':phoneVal,
            'travels':[]
        }
    }
        userdata.travels.push({
        destination: destinationVal,
        date: dateVal});

        localStorage.setItem(userkey,JSON.stringify(userdata))
        
         alert_box.innerHTML=`<div class="alert alert-success" role="alert">
Travel booked successfully!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
       

        
        })

view_btn.addEventListener('click',()=>{
    if(userkey){
        userkey = "user_" + email.value;
        localStorage.setItem("currentUser", userkey);
        window.location.href = "showpage.html";
        return;
    }
        let emailInput = prompt("Enter your email:");
        userkey = "user_" + emailInput.trim();
        let checkUser = localStorage.getItem(userkey)
        if(!checkUser){
            alert('No Traveler found with this email')
        }else{
            localStorage.setItem("currentUser", userkey);
            window.location.href = "showpage.html";
        }
    
})