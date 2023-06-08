function myclick(){
    let a = document.getElementById("demo");
    a.style.backgroundColor = "#ff00ff";
}
// ..............................................//

let q = "fun";
alert(typeof q);
// ..................................................//

function warning(){
    let w = document.getElementById("demo1");
    w.innerHTML = "Don't click me again";
}
alert(w)
// .....................................................//

function myfriend(){
    let e = "John";
    document.getElementById("demo2").innerHTML = "my friend is:" + e;
}
// .....................................................................//

function myplay(j){
    j.document.getElementById("play").innerHTML = "autoplay";
}
// ..........................................................................//

function font(){
    let t = document.getElementById("size");
    t.style.fontSize = "30px";
}
// ...........................................................................//

function guess(){
    document.getElementById("demo4").innerHTML = Math.floor(Math.random()*10);
}
// ..................................................................................//

function remove(){
    let h = document.getElementById("disappear");
    h.style.display = "none";
}
// .........................................................................................//

function bring(){
    let z = "Mango";
    let c = "Sugar";
    let b = "Salt";
    document.getElementById("appear").innerHTML = z + "<br>" + c + "<br>" + b;
}
// ........................................................................................//

 let length = prompt ("enter a digit");
 let width = prompt ("enter a digit");
 let solution = length * width;
 let answer = `the lenght is ${length}, the width is ${width} the solution is${solution}`;
 alert(answer)

// function jump(){
//     let length = prompt ("enter a length");
//     let width = prompt ("enter a width");
//     let solution = length * width;
//     let answer = `the lenght is ${length}, the width is ${width} the solution is ${solution}`;
// }
// alert(jump())
// .....................................................//

function validform() {
    let cat = document.forms["Fname"] ["fname"].value;
    if (cat == "") {
        alert("Name must be filled out");
    }

    let bat = document.forms["Fname"] ["ffname"].value;
    if (bat == "") {
        alert("Email must be filled out");
    }

    let pat = document.forms["Fname"] ["FFname"].value;
    if (pat == "") {
        alert("Password must be filled out");
    }
}
// ......................................................//

 