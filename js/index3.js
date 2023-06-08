// function click(){
//     let text;
//     if (document.getElementById("name").validity.patternMismatch){
//         tax = "Must be three Capital letters";
//     }

//     else {
//         tax = "Okay";
//     }
    
//     document.getElementById("dance").innerHTML = tax;
// }

// function click(){
//     let ban = "";
//     if (document.getElementById("pass").validity.rangeOverflow){
//         ban = "value too large";
//     }

//     else{
//         ban = "ok";
//     }

//     document.getElementById("dance").innerHTML = ban;
// }

// function checklength(){
//    let a = document.getElementById("name").value.length;
//     if (a <= 1){
//         alert("invalid username")
//     }
// }
// let x = 82

// switch (x) {
//     case x >= 80 && x <= 90:
//         text = "Your Grade is A"
//         break;

//     default:
//         break;
// }


function score(){
    let x = prompt ("Enter Your Score");
    let text = "";

      if (x >= 80 && x <= 90){
         text = "Your Grade is A";
      }
      else if(x >= 70 && x <= 80 ){
        text = "Your Grade is B";
      }
      else if(x >= 60 && x <= 70 ){
        text = "Your Grade is C";
      }
      else if(x >= 50 && x <= 60 ){
        text = "Your Grade is D";
      }
      else if(x >= 40 && x <= 50 ){
        text = "Your Grade is E";
      }
      else if(x >= 0 && x <= 40 ){
        text = "Your Grade is F";
      }


    // switch (true) {
    //     case (x >= 80 && x <= 90):
    //         text = "Your Grade is A";
    //         break;
        
    //     case (x >= 70 && x <= 79):
    //         text = "Your Grade is B";
    //         break; 
        
    //     case (x >= 60 && x <= 69):
    //         text = "Your Grade is C";
    //         break;    
         
    //     case (x >= 50 && x <= 59):
    //         text = "Your Grade is D";
    //         break;  
            
    //     case (x >= 40 && x <= 49):
    //         text = "Your Grade is E";
    //         break; 
            
    //     case (x >= 0 && x <= 39):
    //         text = "Your Grade is F";
    //         break;
    //     default:
    //         text = "Not Found";
    //         break;
    // }
    
      
    document.getElementById("grade").innerHTML = text;;


}

// function voters(){
//     let eli = document.getElementById("age").value;
//     let passed = (eli < 18) ? "Too Young": "Too Old";

//     document.getElementById("demos").innerHTML = passed + " " + "to vote";
// }

function voters(){
    let eli = document.getElementById("age").value;
    let passed = "";
    
    if (eli <= 17){
        passed = "Not Eligible";
    }
    else if (eli >= 18){
        passed = "Eligible";
    }

    document.getElementById("demos").innerHTML = passed + " " + "to vote";
}

// ...........................................//

