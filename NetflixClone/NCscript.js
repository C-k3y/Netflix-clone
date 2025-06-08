//Navbar CSS property in scroll
window.addEventListener("scroll",()=>{
    const navbar= document.querySelector(".navbar");
    if(window.scroll> 100){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});
//profile section redirecting
const profileicon= document.querySelector(".profile-icon");
profileicon.addEventListener("click",()=>{
    window.location.href="profile.html";
});
//Movie card
const moviecard=document.querySelectorAll(".content-card");
moviecard.forEach((card)=>{
    card.addEventListener("mouseEnter",()=>{
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave",()=>{
        card.style.transform="scale(1)";
    });
});

document.querySelector('.service-code').addEventListener('click', function() {
    
    alert('Service Code: 1234');
    
  });