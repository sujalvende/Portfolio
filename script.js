let cursor = document.querySelector("#cursor");
let point = document.querySelector("#point");

let inbody = false;

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX+4;
    mouseY = e.clientY+4;
    if (inbody) return;
    gsap.to(cursor,{
        x: e.clientX+4,
        y: e.clientY+4,
        duration: 0.6,
        ease: "Power3.easeOut",
    })
});

window.addEventListener("mousemove", (m) => {
    gsap.to(point,{
        x: m.clientX,
        y: m.clientY,
        duration: 0.1,
        ease: "Power3.easeOut",
    })
});

function borderCursor(ele){
    let position = ele.getBoundingClientRect();
    
    ele.addEventListener("mouseenter", (enter)=>{
        console.log("Enter");
        inbody = true;
        gsap.to(cursor,{
            // scale: 1.5,
            borderRadius: 0,
            x: position.left,
            y: position.top,
            height: position.height,
            width: position.width,
            transform: "translate(0%, 0%)",
            duration: 0.5,
            ease: "Power3.easeOut",
        });
    });

    ele.addEventListener("mouseleave", (leave)=>{
        console.log("Leave");
        inbody = false;
        gsap.to(cursor,{
            // scale: 1,
            borderRadius: "50%",
            x: mouseX,
            y: mouseY,
            height: "3rem",
            width: "3rem",
            duration: 0.5,
            ease: "Power3.easeOut",
            transform: "translate(-50%, -50%)",
        });
    });
}

let navLinks = document.querySelector("#overflow-links");
borderCursor(navLinks);


// Animation for nav section

let t1 = gsap.timeline();

t1.from("#logo",{
    position: "relative",
    top: "-10rem",
    duration: 1,
    ease: "Power3.easeOut",
})

t1.from("#nav-links a",{
    position: "relative",
    top: "-10rem",
    duration: 1.2,
    ease: "Power3.easeOut",
    stagger: 0.4,
});

t1.from("#hero-name p",{
    position: "relative",
    left: "-20rem",
    duration: 0.8,
    ease: "Power3.easeOut",
})

t1.from("#hero-name h1",{
    scale: 0,
    duration: 0.8,
    ease: "Elastic.easeOut.config(1, 0.5)",
});

t1.from("#hero-frontend h1",{
    position: "relative",
    left: "-95rem",
    duration: 0.8,
    ease: "linner",
});

t1.from("#hero-backend p",{
    position: "relative",
    right: "-100rem",
    duration: 0.8,
});

t1.from("#hero-backend h1",{
    position: "relative",
    // left: "1rem",
    right: "-100rem",
    duration: 0.8,
    visibility: "hidden",
});

t1.from("#rotating-element",{
    scale: 0,
    duration: 2,
    ease: "Power3.easeOut",
});

gsap.to("#rotating-element",{
    rotation: 360,
    repeat: -1,
    duration: 1.5,
    ease: "none",
});
