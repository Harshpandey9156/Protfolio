//toggle nav bar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// scroll section 
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .navbar a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        // let height=sec.offsetHeight;
        let offset=sec.offsetTop - 100;
        let id=sec.getAttribute('id');
        let height=sec.offsetHeight;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
            // active sections for animaton for scroll 
            sec.classList.add('show-animate');
        }
        // if we wants to use animation that repeats on scroll use this 
        else{
            sec.classList.remove('show-animate');
        }

    
    });

    //sticky header
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //removing the toglr items ARd nav bar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer
    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight+this.scrollY >= document.scrollingElement.scrollHeight);
}