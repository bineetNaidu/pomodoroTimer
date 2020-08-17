const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
let duration = document.querySelector("#duration");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

const timer = new Timer(duration, start, pause, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            "stroke-dashoffset",
            (perimeter * timeRemaining) / duration - perimeter
        );
    },
    onComplete() {
        alert("completed");
    },
});
