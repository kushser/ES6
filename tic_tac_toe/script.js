const bloks = document.querySelectorAll(".rectangle");
const field = document.querySelector("#rectangleWrapper");
const popWinX =document.querySelector(".winnerX");
const popWinO =document.querySelector(".winnerO");
const popPlay =document.querySelector(".play");
const btnX = popWinX.querySelector(".winner-btn");
const btnO = popWinO.querySelector(".winner-btn");
const btnPlay = popPlay.querySelector(".winner-btn")
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
let end = false;

let k = 0;


function onClickElement(e) {
console.log(e);


if(e.type ==="click"){
    k += 1;
}
    //const newX = newElement;
    //newX.innerText = "X";
    //newX.classList.add("red");
    if (k === 9){
        e.target.innerText = ("X");
        e.target.classList.add("red");
        onPopPlay();
    }else
    if(k > 9){
        //field.removeEventListener("click",onClickElement);
        for(let prop of bloks) {
            prop.innerText = "";
        }
        k = 0;
        console.log(k);
    }else
    if(k ===1 || k % 2 === 1 ){
        e.target.innerText = ("X");
        e.target.classList.add("red");
        console.log(k);
    } else  {
        e.target.innerText = ("O");
        e.target.classList.remove("red");
    }
    if(one.innerText === "X" && two.innerText === "X" && three.innerText === "X" ){
        onPopX();
        end = true;
    }else if(four.innerText === "X" && five.innerText === "X" && six.innerText === "X"){
        onPopX();
        end = true;
    }else if(seven.innerText === "X" && eight.innerText === "X" && nine.innerText === "X"){
        onPopX();
        end = true;
    }else if(one.innerText === "X" && four.innerText === "X" && seven.innerText === "X"){
        onPopX();
        end = true;
    }else if(two.innerText === "X" && eight.innerText === "X" && five.innerText === "X"){
        onPopX();
        end = true;
    }else if(three.innerText === "X" && six.innerText === "X" && nine.innerText === "X"){
        onPopX();
        end = true;
    }else if(three.innerText === "X" && five.innerText === "X" && seven.innerText === "X"){
        onPopX();
        end = true;
    }else if(one.innerText === "X" && five.innerText === "X" && nine.innerText === "X"){
        onPopX();
        end = true;
    }if(one.innerText === "O" && two.innerText === "O" && three.innerText === "O" ){
        onPopO();
        end = true;
    }else if(four.innerText === "O" && five.innerText === "O" && six.innerText === "O"){
        onPopO();
        end = true;
    }else if(seven.innerText === "O" && eight.innerText === "O" && nine.innerText === "O"){
        onPopO();
        end = true;
    }else if(one.innerText === "O" && four.innerText === "O" && seven.innerText === "O"){
        onPopO();
        end = true;
    }else if(two.innerText === "O" && eight.innerText === "O" && five.innerText === "O"){
        onPopO();
        end = true;
    }else if(three.innerText === "O" && six.innerText === "O" && nine.innerText === "O"){
        onPopO();
        end = true;
    }else if(three.innerText === "O" && five.innerText === "O" && seven.innerText === "O"){
        onPopO();
        end = true;
    }else if(one.innerText === "O" && five.innerText === "O" && nine.innerText === "O"){
        onPopO();
        end = true;
    }
}
field.addEventListener("click", onClickElement);
function onPopX () {
popWinX.classList.remove("hidden");
}
function closePopX() {
  popWinX.classList.add("hidden");
    for(let prop of bloks) {
        prop.innerText = "";
    }
    k = 0;
}
function onPopPlay () {
        if( end === false ) {
        popPlay.classList.remove("hidden");
    }
}

function closePopPlay() {
    popPlay.classList.add("hidden");
    for(let prop of bloks) {
        prop.innerText = "";
    }
    k = 0;
}
function onPopO () {
    popWinO.classList.remove("hidden");
}
function closePopO() {
    popWinO.classList.add("hidden");
    for(let prop of bloks) {
        prop.innerText = "";
    }
    k = 0;
}
btnPlay.addEventListener("click", closePopPlay);
btnO.addEventListener("click", closePopO);
btnX.addEventListener("click", closePopX);
for(let prop of bloks){
    console.log(prop.innerText);
}