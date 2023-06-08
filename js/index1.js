
//  let length = prompt ("enter a length");
//  let width = prompt ("enter a width");
//  let solution = length * width;
//  let answer = `the lenght is ${length}, the width is ${width} the solution is ${solution}`;
//  alert(answer)

// function jump(){
//     let length = prompt ("enter a length");
//     let width = prompt ("enter a width");
//     let solution = length * width;
//     let answer = `the lenght is ${length}, the width is ${width} the solution is ${solution}`;
// }
// alert(answer)
// .............................................................//

"use strict";
let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value"); 

let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){

        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }
        else{
            if(this.innerHTML=="Clear"){
                value.innerHTML = "";
                // ...the 123 value disappeared at this moment...//
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}

toggleBtn.onclick = function(){
    body.classList.toggle("dark");
}