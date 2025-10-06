
function reavealToSpan(){
document.querySelectorAll(".reveal")
    .forEach(function (elem) {
        //craete two spans
        let parent = document.createElement("span");
        let child = document.createElement("span");

        //parent and child both sets their respective classes
        parent.classList.add("parent");
        child.classList.add("child");

        // span parent get child and child gets elem details
        child.innerHTML=elem.innerHTML;
        parent.appendChild(child);

        //elem replaces its value with parent span
        elem.innerHTML="";
        elem.appendChild(parent);
    })
}
reavealToSpan();

let tl= gsap.timeline();
tl
.from('.child span' ,{
   x:100,
   duration:1,
   stagger:0.2,
   delay:1,
   ease: Expo.easeInOut

})
.to('.parent .child',{
  y:"-100%" ,
  duration:1,
//   delay:2,
  ease: Expo.easeInOut
})
