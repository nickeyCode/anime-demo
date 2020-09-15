import animejs from "animejs/lib/anime";
function a() {
    animejs({
        targets: "h1",
        translateX: 250,
        rotate: "1turn",
        backgroundColor: "#FFF",
        duration: 800,
    });
}

a();
