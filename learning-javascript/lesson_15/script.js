const div = document.querySelector("div");
const img = document.querySelector("img");

function onClick() {
    console.log("onClick");
}
function onDblClick() {
    console.log("onDblClick");
}
function oncontextmenu() {
    console.log("oncontextmenu");
}
function onmousedown() {
    console.log("onmousedown");
}
function onmouseenter() {
    console.log("onmouseenter");
}
function onmousemove() {
    console.log("onmousemove");
}
function ondrag() {
    console.log("ondrag")
}
function ondragstart() {
    console.log("ondragstart")
}
function ondragend() {
    console.log("ondragend")
}
div.addEventListener("click", onClick);
div.addEventListener("dblclick", onDblClick);
div.addEventListener("contextmenu", oncontextmenu);
div.addEventListener("mousedown", onmousedown);
div.addEventListener("mouseenter", onmouseenter);
div.addEventListener("mousemove", onmousemove);
img.addEventListener("drag", ondrag);
img.addEventListener("dragstart", ondragstart);
img.addEventListener("dragend", ondragend);