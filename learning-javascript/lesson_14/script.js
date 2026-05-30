const message = document.getElementById("message");
const button = document.querySelector("button");
const buttonContainer = document.getElementById("buttons");

function showMessage(){
    console.log(message.value);
    message.value = "";
}
function showMessage2(){
    console.log("message2");
}

button.addEventListener("click", showMessage);
button.addEventListener("click", showMessage2);

for(let i = 1; i <= 5; i++) {
    let button =  document.createElement("button");

    button.id = "btn" + i;
    button.innerText = "button " + i;
    button.addEventListener("click", showMessage);

    buttonContainer.appendChild(button);
}

document.getElementById("btn1").removeEventListener("click", showMessage);