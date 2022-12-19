

//------------- navBar for mobile -------------------------------------

const navBtn= document.querySelector(".mobile-nav-btn")
const mainHeader = document.querySelector(".main-header");


navBtn.addEventListener("click" , function() {
    mainHeader.classList.toggle("openNav");
});

//------------------------------------------------------------------------ 
//------------------------------------------------------------------------- 





// --------------- for smooth scroll -----------------------------------
let scrollTopIcon = document.querySelector(".scroll-to-top");
console.log(scrollTopIcon)

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
            section.scrollIntoView({behavior : 'smooth'});


            // ----------------
            mainHeader.classList.remove("openNav");
            
        }
    })
})


//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------









// -------------------------------sticky navBar--------------------------------------
// -----------------------------------------------------------------------------------


let homeSection = document.querySelector(".main-hero");
console.log(homeSection);



let sectionObserve = new IntersectionObserver(function(entries) {
    console.log(entries[0])
        if(entries[0].isIntersecting === false) {
            document.body.classList.add("sticky");
            scrollTopIcon.style = "opacity:1";
        }
        
        if(entries[0].isIntersecting ) {
            document.body.classList.remove("sticky");
            scrollTopIcon.style = "opacity:0";
            
        }
       
        console.log(entries[0].boundingClientRect.width)




} , {
    root:null,
    threshold:0,
    // rootMargin:'-96px',

})



sectionObserve.observe(homeSection);


// --------------------------------------------------
// --------------- scroll to top icon ---------------





