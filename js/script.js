

//------------- navBar for mobile -------------------------------------

const navBtn= document.querySelector(".mobile-nav-btn")
const mainHeader = document.querySelector(".main-header");


navBtn.addEventListener("click" , function() {
    mainHeader.classList.toggle("openNav");
});

//------------------------------------------------------------------------ 
//------------------------------------------------------------------------- 





// --------------- for smooth scroll -----------------------------------

const allLinks = document.querySelectorAll("a");
console.log(allLinks)

allLinks.forEach(function(link){

    link.addEventListener('click' , function(e) {
        e.preventDefault();
    
        // console.log(e.target)
        
        const href  = link.getAttribute("href");
        console.log(href)
        
        

        if(href === '#') {
            window.scrollTo({
                top:0,
                behavior:'smooth',

            });
        }


        if(href !== '#' && href.startsWith("#")) {
        
            const section = document.querySelector(href);
            section.scrollIntoView({behavior : 'smooth'})
        }
    })
})


//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------