const submission = document.querySelector(".submit");
const thanksClass = document.querySelector(".thanks");
const firstPage = document.querySelector(".main-box");
const counter = document.querySelector("#counter")


submission.addEventListener('click', () => {
    firstPage.style.display = "none";
    thanksClass.classList.remove("hidden");
});

function btn(num){
    document.getElementById("counter").innerHTML=num
}