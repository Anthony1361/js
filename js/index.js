//alert("welcome home")

// let x, y;


// x = 1 ;

// alert(x)

// y=4;

// alert(y)


// let _firstName = 3;

//alert(_firstName)


// let second = prompt ("Enter Your Name")
 
// alert (second)

//let name = "John";
//let surname = "Paul";
//let myname = name + " "+ surname; // the empty quotes between the + is for spacing

//alert(myname)
// console.log(myname)


// .....Javascript Datatypes ......//

// let house = "building";
// alert(house)

// let children = 5;
// alert(children)

// let tennis = 5 + 7 + "play";
// alert(tennis)

// let football = "golf" + 6 + 3;
// alert(football)

// let school;
// alert(school)

// let church = BigInt("12345678910123");
// alert(church)

// let x = 6;
// let y = 6;
// let z = 4;
// let ans = (x == y) 
// alert(ans)


// let cross = 2;
// let pad = "dance";
// let yes = typeof(cross);
// alert(yes)

// const car = ["volvo", "benz", "toyota"];
// car[0]= ["fox"];
// car =["cargo"]
// alert(car)

// const cars = {type:"fox", color:"red"};

// const date = new date ("2023-03-21");

// .....const car,const cars and const date will be treated later.....//


// ..... javascript operators...//

// let x = 5 + 4;
// alert(x)

// let y = 4 - 3;
// alert(y)

// let z = 5 % 2;
// alert(z)

// let a = 5 ** 2;
// alert(a)

// let b = 5 ;
// b--;
// let c = b;
// alert(c)

// let d = 8;
// d += 5;
// alert(d)

// .....comparison operator starts here..//

// let e = 9;
// alert(e == 9)

// let f = 9;
// alert(f == 4)

// let x = 5;
// alert(x === 5)

// let y = 5;
// alert(y === "5")

// let g = 6;
// alert(g !=7)

// let g = 6;
// alert(g !=6)

// let h = 2;
// alert(h !==2)

// ...... logical operator...//

// let x = 6;
// let y = 5;
// alert(x < 10 && y > 1 )

// let x = 6;
// let y = 5;
// alert(x < 10 && y > 10 )

// let v = 7;
// let n = 4;
// alert(v > 4 || n < 1)

// let v = 7;
// let n = 4;
// alert(v > 4 || n < 5)

//.....not logical operator not working..//
// let w = 4;
// let m = 6;
// alert (w != m)

// let s = 4;
// let z = 6;
// alert(s >! z)

// ....conditional (ternary) operator....//


// .....comparing different types....//

// let x = 2;
// let y = "john";
// alert(2 > "john")

// let j = 2;
// let h = "john";
// alert(2 < "john")

// let x = 2;
// let y = "john";
// alert(2 == "john")

// let c = "2";
// let m = "12";
// alert(c < m)

// .............................................. //

// document.getElementById("demo").innerHTML=typeof "John";

// let x = "Johnson";
// alert(typeof x)

// let car;
// alert(typeof car)

// let text = "mango";
// let result = text.toUpperCase();
// alert(result)

// let man = "man loves to eat";
// let men = man.match(/loves/i);
// or using a string "loves" instead of using a modifier like the above//
// alert(men)

// fun(1)
// fun(2)
// function fun(y) {
//     if(y % 2 === 0) {
//         alert("the number is even");
//     }

//     else {
//         alert("the number is odd")
//     }
// }

// const d = Date()
// alert(d)

// function uba(){
//     let num = 45;
//     let per = (10/100) * (45/1);
//     alert(per)
// }


// let process = sum(b=20,a=89)
// alert(process)

// function sum(a = 0 , b=0 ) {
//   let num1 = a;
//   let num2= b;
//   let sum = num1 + num2;
  
//   return sum
   
// }
// let process = sum(b=20,a=89)
// alert(process)

// let cake = function () {
//     let fun = 2;
//     let horn = 3;
//     let nose = fun + horn;
 
//     alert(c)

// }

// c=cake()

// let solve = () =>{

// }

// .....................................................
// const cars = {Name: "futo", Color: "green", Model: 9};

// const x = cars.Model;
// alert(x)

// function fun(sum) {
//     sum.Model = 6;
// }

// fun(cars)
// const y = cars.Model;
// alert(y)
// ......................................................

// ...........................
// const color = ["red","yellow", "pink"];
// const rush = color[1];
// alert(rush)

// function cape(cut){
//     cut.color[0] = "skyblue";
// }
   
// cape(color)
// const m = color(0);
// alert(m)
// .........................

// ................................
// const a = 2;
// const b = 2;
// const c = "letter";

// function multiply(){
//     return a * b;
// }
//   alert(multiply());

// // here comes nested function, cont from the above //

// function getscore(){
//     const a = 10;
//     const b = 5;

//     function add(){
//         return `${c} scored ${a + b}`;
//     }
    
//     return add();
// }

// alert(getscore());
// ..............................................//


document.getElementById("demo1").innerHTML = "Hello ID";

document.getElementById("demo").style.backgroundColor = "#0000ff";
document.getElementById("demo").style.color = "#ffffff";
// ..................................................................

let f = document.getElementsByClassName("demo2");
f [0].innerHTML = "Hello Class";

let q = document.getElementsByClassName("para");
q [1].style.backgroundColor = "#ff0000";
// .......................................................

let a = document.getElementsByTagName("ul")[0];
a.getElementsByTagName("li")[1].innerHTML = "popcorn";

let v = document.getElementById("div");
let m = v.getElementsByTagName("p");
// document.getElementById("omo").innerHTML = m.length;
// ..the commented ID("omo") format is valid, just if u want to use an Id instead of class...//
let z = document.getElementsByClassName("omo");
z [0].innerHTML = m.length;

let h = document.getElementById("div1");
h.getElementsByTagName("p")[2].style.fontSize = "24px";                                     
// .............................................................

// document.querySelector("p").style.backgroundColor = "#00ff00";
//...Note the querySelector "p" above, selects the first p in whole file or section..//
document.querySelector(".query").style.backgroundColor = "#00ff00";
// .....This selects the first p despite having the same class name...//
document.querySelector(".query1").innerHTML = "Hello Query";

document.querySelector("p#change").innerHTML = "i was changed";
document.querySelector("p#change").style.color = "blue";

document.querySelector("p.cool").style.backgroundColor = "#ffff00";
// ..remember there shouldn't be any space between the p.cool. eg- p. cool, that space isn't good..//
