const socket = io("http://localhost:3000");

const msgDisplay = document.querySelector(".response");
const inputText = document.querySelector("#text_input");
const textBtn = document.querySelector("#btn_send");
const msgForm = document.querySelector("form");

function displayMessage(msg) {
  const newMsg = document.createElement("p");
  newMsg.classList.add("user-msg");
  newMsg.innerText = msg;
  msgDisplay.appendChild(newMsg);
}

function displayRes(msg) {
  const newMsg = document.createElement("p");
  newMsg.classList.remove("user-msg");
  newMsg.classList.add("res-msg");
  newMsg.innerText = msg;
  msgDisplay.appendChild(newMsg);
}

msgForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputText) {
    displayMessage(inputText.value);
    socket.emit("sendMsg", inputText.value);
    inputText.value = "";
  }
});

socket.on("welcome", (msg) => {
  console.log(msg);
  displayRes(msg);
});

socket.on("receiveMsg", (msg) => {
  displayRes(msg);
});
