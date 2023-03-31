let mouseCursor = document.querySelector(".cursor");
let btn = document.querySelectorAll("button");

window.addEventListener("mousemove", cursor);

function cursor(cursorPointer){
  gsap.to(mouseCursor, 0.4, {
    x: cursorPointer.clientX,
    y: cursorPointer.clientY,
  });
}

btn.forEach(function(link) {
  link.addEventListener("mouseover", function(){
    mouseCursor.classList.add("scale-cursor");
    gsap.to(mouseCursor, 0.4, {
      scale: 3
    });
  });

  link.addEventListener("mouseleave", function(){
    mouseCursor.classList.remove("scale-cursor");
    gsap.to(mouseCursor, 0.4, {
      scale: 1
    });
  });
});