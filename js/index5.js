"use strict";

function myfunction(){
    let x = document.getElementById("mylinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

function myfunct(){
    let a = document.getElementById("mylinks1");
    if (a.style.display === "block") {
       a.style.display = "none";
    }else{
        a.style.display = "block";
    }
}

// ............................................//
let rex =
document.getElementById("mymodel");

let vam = document.getElementById("mybtn");

let spa = document.getElementsByClassName("close")[0];

vam.onclick = function(){
    rex.style.display = "block";
}

spa.onclick = function(){
    rex.style.display = "none";
}

// ..Below is to close the modal on anywhere the user clicks...//
window.onclick = function(tr){
    if(tr.target == rex){
        rex.style.display = "none";
    }
}

// ..................................................//

function opencity(Event, cityame){
     let i = "";
     let tablinks = "";
     let tabcontent = "";
    // ..the Event is very very important...//

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++){
    //     tablinks[i].className =
    //     tablinks[i].className.replace("active");
    // }

    document.getElementById(cityame).style.display = "block";
    //  Event.currenarget.className += "active";

    // document.getElementById("default").click();

    // let p = document.getElementsByClassName("tabs");
    // let c = p.getElementById("tablinks");

    // for(i = 0; i < c.length; i++){
    //     c[i].addEventlistener("click", function(){
    //         let current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace("active", "");
    //         this.className += "active";
    //     })
    // }
}

document.getElementById("default").click();
// ..Note= the select by default works outside and not inside..//v


// let p = document.getElementsByClassName("tabs");
//     let c = p.getElementById("tablinks");

//     for(i = 0; i < c.length; i++){
//         c[i].addEventlistener("click", function(){
//             let current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace("active", "");
//             this.className += "active";
//         })
//     }

// Get the container element
var btnContainer = document.getElementById("tabs");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tablinks");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 