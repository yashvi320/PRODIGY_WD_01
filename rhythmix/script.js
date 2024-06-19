// document.addEventListener('DOMContentLoaded', () => {
//     const content = document.querySelector('.content');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     content.addEventListener('click', () => {
//         // Toggle Nav
//         nav.classList.toggle('nav-active');

//         // Animate Links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//             }
//         });

//         // content Animation
//         content.classList.toggle('toggle');
//     });
// });


// window.onload = function () { 
//     let slides =  
//         document.getElementsByClassName('carousel-slide'); 
  
//     function addActive(slide) { 
//         slide.classList.add('active'); 
//     } 
  
//     function removeActive(slide) { 
//         slide.classList.remove('active'); 
//     } 
  
//     addActive(slides[0]); 
//     setInterval(function () { 
//         for (let i = 0; i < slides.length; i++) { 
//             if (i + 1 == slides.length) { 
//                 addActive(slides[0]); 
//                 setTimeout(removeActive, 350, slides[i]); 
//                 break; 
//             } 
//             if (slides[i].classList.contains('active')) { 
//                 setTimeout(removeActive, 350, slides[i]); 
//                 addActive(slides[i + 1]); 
//                 break; 
//             } 
//         } 
//     }, 1500); 
// };

let slides = document.getElementsByClassName("carousel-slide");
let index = 0;
let buttons = document.getElementsByClassName("icon")
for(i=0;i<slides.length;i++){
    slides[i].classList.remove("active");
    buttons[i].classList.remove("active")
}
slides[index].classList.add("active")
buttons[index].classList.add("active")

function play(pos){
    slides[pos].classList.add("active");
    buttons[pos].classList.add("active")
    for(i=0;i<slides.length;i++){
        if(i==pos) continue
        else{
            slides[i].classList.remove("active")
            buttons[i].classList.remove("active")
        }
    }
}

function nextSlide(curIndex){
    if(curIndex == slides.length-1){
        index = 0
    }else{
        index++
    }
    play(index);
}

window.onload = ()=>{
    setInterval(()=>{
        nextSlide(index)
    },1500)
}

let nav = document.getElementsByTagName("nav")[0];
nav.onmouseover = ()=>{
    nav.classList.remove("inactive");
}

nav.onmouseout = ()=>{
    nav.classList.add("inactive")
}