// VANTA.BIRDS({
//     el: "body",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color2: 0xffff,
//     backgroundColor: 0x4778c3    
// })

gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'100%', height:'100%', top:0, left:'0', x:'0'})
gsap.set('.scrollDist', {width:'100%', height:'200%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)



var body = document.body;
var element = document.getElementById("el");
//Update DOM on scroll
document.addEventListener("scroll", function() { 
    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop
	if(window.innerHeight/2 >= scrollAmt)
	 	element.style.display = "none"; 
  else	
		element.style.display = "block";
});