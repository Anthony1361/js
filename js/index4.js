"use strict";
const cars = ["vnv","hgh","jfj","ksk","obo"];
let motor = "";

for( let s = 0; s < cars.length; s++){
    motor += cars[s] + "<br>";
}

document.getElementById("demo").innerHTML = motor;

// ......................................//

"use strict";
let moto = "";

for( let h = 0; h < 5; h++){
    moto += "The number is" + " " + h + "<br>";
}

document.getElementById("demo1").innerHTML = moto;

// ...............................................//

const don = {fna : "John", fas : "Joe", fon : "25"};
let v = "";

for(let p in don){
    v += don[p] + " " ;
}

document.getElementById("dex").innerHTML = v;

const z = [20, 40, 50, 35];
let awe = "";

for(let q in z){
    awe += z[q] + "<br>";
}

document.getElementById("dox").innerHTML = awe;
// ..................................................//

const rra = ["come", "play", "now"];
let hen = "";

for(let pop of rra){
    hen += pop + " ";
}

document.getElementById("arr").innerHTML = hen;

let dass = "language";
let beans = "";

for(let van of dass){
    beans += van + "<br>"
}

document.getElementById("lan").innerHTML = beans;

// ...................................................//

const vass = ["This", "Is", "My", "Car"];
let y = 0;
let cx = "";

while (vass[y]) {
    cx += vass[y] + "<br>"; y++;
}

document.getElementById("jass").innerHTML = cx;

let sx = "";
let pn = 0;

while(pn < 6){
    sx += "The number is" + " " + pn + "<br>"; pn++;
}

document.getElementById("con").innerHTML = sx;

// ..................................................//

let fun = "";
let hj = 0;

do {
    fun += "The no. is" + " " + hj + "<br>"; hj++;
} while (hj < 5);

document.getElementById("do").innerHTML = fun;

// ...................................................//


let mot = "";

for( let h = 0; h < 5; h++){
    if(h ===3){break;}
    mot += "The number is" + " " + h + "<br>";
}

document.getElementById("break").innerHTML = mot;

// ......................................................//

const vz = {Gas: "Hun", Pus: "hun", Ki: "Hsa"};
document.getElementById("obj").innerHTML = ("Gas" in vz);

const fd = {Dan: "Nuh", Pus: "nuh", ik: "ahe"};
document.getElementById("obj1").innerHTML = ("Pus" in vz, fd);

// ................................................................//

const nc = ["gi", "ld"];
document.getElementById("tu").innerHTML = (nc instanceof Array);

let df = "funny";
document.getElementById("fu").innerHTML = (df instanceof String);

// .......................................................................//

let exe = "am";
 exe = exe.padStart(4, "Li");
document.getElementById("pa").innerHTML = exe;

// .............................................................//

document.getElementById("dead").innerHTML = navigator.userAgent;

// ...................................................................//

function temperature(h){
    h = parseFloat(h);
    document.getElementById("outputcelcius").innerHTML = (h-32)/1.8;
}