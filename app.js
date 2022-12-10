const close=document.querySelector(".close");
const sub=document.getElementById("sub");
const show=document.getElementById("show");

close.addEventListener("click",()=>
{
    // gsap.to(".email-sub",{
    //     opacity:0,
    //     duration:1,
    //     scale:0,
    //     display:"none",
    //     // autoAlpha:0
    // })
    sub.style.display="none"
})

show.addEventListener("click",()=>
{
   
    sub.style.display="block"
}) // gsap.to(".email-sub",{
        
    //     display:"block",
    //     duration:1,
    //     scale:1,
    //     // autoAlpha:0
    // })