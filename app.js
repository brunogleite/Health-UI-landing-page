//Get nav-links
var navLinks = document.querySelectorAll(".nav-links li");

//Menu burguer
var burguerMenu = document.querySelector(".hamburguer");
let menuOpen = false; 

//function for burguer animation
burguerMenu.addEventListener("click", ()=>{
   if(!menuOpen){
      burguerMenu.classList.add("open");
      menuOpen = true; 
      nav.style.display = "flex";
      nav.style.top = 0;
   } else{

      burguerMenu.classList.remove("open")
      menuOpen = false; 
      nav.style.top = '-100%'; 
   }
});





//get the modal
var nav = document.querySelector(".nav-links")

navLinks.forEach(link => {
   link.addEventListener("click", ()=>{
        navLinks.forEach(list => list.classList.remove("active"))
        link.classList.add("active"); 
        menuOpen = false; 
         nav.style.top = '-100%'; 
   })
});




