//Get nav-links
var navLinks = document.querySelectorAll(".nav-links li");


navLinks.forEach(link => {
   link.addEventListener("click", ()=>{
        navLinks.forEach(list => list.classList.remove("active"))
        link.classList.add("active");  
   })
})
