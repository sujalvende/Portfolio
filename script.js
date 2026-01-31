let cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
    gsap.to(cursor,{
        x: e.clientX-18,
        y: e.clientY-15,
        duration: 0.5,
        ease: "Power3.easeOut",
    })
});

function borderCursor(ele){
    let position = ele.getBoundingClientRect();
    let inbody = false;
    ele.addEventListener("mouseenter", (enter)=>{
        if (inbody) return;
        inbody = true;
        gsap.to(cursor,{
            borderRadius: "0%",
            left: position.left,
            top: position.top,
            width: position.width,
            height: position.height,
            duration: 0.3,
            ease: "Power3.easeOut",
        });
    });

    ele.addEventListener("mouseleave", (leave)=>{
        inbody = false;
        gsap.to(cursor,{
            borderRadius: "50%",
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            height: "3rem",
            width: "3rem",
            ease: "Power3.easeOut",
        });
    });
}

let heroName = document.querySelector("#hero-name h1");
borderCursor(heroName);