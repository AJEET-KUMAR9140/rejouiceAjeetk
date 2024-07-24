let main=document.querySelector("#main");
let scrolle=()=>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
scrolle();

let page1=document.querySelector(".page1");
let cursor=document.querySelector(".cursor");
let cursorFun=()=>{
    page1.addEventListener("mousemove",(cvt)=>{
        gsap.to(cursor,{
         top: cvt.clientY,
         left: cvt.clientX,
        })
})

page1.addEventListener("mouseenter",function(){
     gsap.to(cursor,{
         scale:1,
         opacity:1
     })
})
page1.addEventListener("mouseleave",function(){
 gsap.to(cursor,{
     scale:0,
     opacity:0
 })
})
}
cursorFun();
let page2=document.querySelector(".page2");
let page2Upperh2=document.querySelectorAll(".page2Upper h2");
let pageBottomh4=document.querySelectorAll(".page2Bottom h4");
let body=document.querySelector("body");

let page2Fun=()=>{
    gsap.from(page2Upperh2,{
        y:100,
        stagger:0.1,
      scrollTrigger:{
          trigger:".page2",
          scroller:"#main",
          start:"top 50%",
          end:"top 40%",
          scrub:4,
      }
})
gsap.from(pageBottomh4,{
  y:100,
  stagger:0.1,
scrollTrigger:{
    trigger:".page2",
    scroller:"#main",
    start:"top 50%",
    end:"top 40%",
    scrub:4,
}
})
}
page2Fun();

let page3=document.querySelector(".page3");
let page3second=document.querySelectorAll(".page3second h1");

let page3Fun=()=>{   
gsap.from(page3second,{
    y:100,
    stagger:0.1,
    scrollTrigger:{
        trigger:".page3",
        scroller:"#main",
        start:"top 50%",
        end:"top 40%",
        scrub:3,
    }
})

}
page3Fun();

let page5 = document.querySelector(".page5");
let page5first=document.querySelectorAll(".page5first h4");
let page5second=document.querySelectorAll(".page5second h1");

let page5animation=()=>{
    gsap.from(page5second ,{
        y:100,
        stagger:0.1,
        scrollTrigger:{
            trigger:".page5",
            scroller:"#main",
            start:"top 50%",
            end : "top 40%",
            scrub:3,
        }
        
    })
    gsap.from(page5first,{
        y:100,
        stagger:0.1,
        scrollTrigger:{
            trigger:".page5",
            scroller:"#main",
            start:"top 50%",
            end : "top 40%",
            scrub:3,
        }
    })
}
page5animation();

let page9=document.querySelector(".page9");
let cursor2=document.querySelector(".cursor2");
let cursor2Fun=()=>{
    page9.addEventListener("mousemove",(cvt)=>{
        gsap.to(cursor2,{
         top: cvt.clientY,
         left: cvt.clientX,
        })
})

page9.addEventListener("mouseenter",function(){
     gsap.to(cursor2,{
         scale:1,
         opacity:1
     })
})
page9.addEventListener("mouseleave",function(){
 gsap.to(cursor2,{
     scale:0,
     opacity:0
 })
})
}
cursor2Fun();

let page7=document.querySelector(".page7");
let page7nav=document.querySelectorAll(".page7nav h3");
let page7second=document.querySelectorAll(".page7second h1");

gsap.from(page7second,{
    y:100,
    stagger:0.1,
    scrollTrigger:{
        trigger:".page7",
        scroller:"#main",
        start:"top 50%",
        end : "top 40%",
        scrub:3,
    }
})
gsap.from(page7nav,{
    y:100,
    stagger:0.1,
    scrollTrigger:{
        trigger:".page7",
        scroller:"#main",
        start:"top 50%",
        end : "top 40%",
        scrub:3,
    }
})

let swiper =()=>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop:true,
        autoplay:{
            delay:2000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiper();

let page9Fun=()=>{
    let page9=document.querySelector(".page9");
let page9second=document.querySelector(".page9second h1");
gsap.from(page9second,{
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:".page9",
        scroller:"#main",
        start:"top 50%",
        end:"top 40%",
        scrub:4
    }
})
}
page9Fun();


let page10h2=document.querySelectorAll(".page10 h2");

gsap.from(".pageBottom h1 span",{
    y:100,
    duration:1,
    stagger:0.2
})

let page10=document.querySelector(".page10");
let page10secondh1=document.querySelector(".page10secondry h1 ");
gsap.from(page10secondh1,{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".page10",
        scroller:"#main",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
    }
})