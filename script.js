function one(){
    // document.querySelector("#first").style.display = "none";
    document.querySelector("#choose").style.display = "block";
    document.querySelector("#Easy").style.display = "none";
    document.querySelector("#Medium").style.display = "none";
    document.querySelector("#hard").style.display = "none";
}

function easy(){
    // document.querySelector("#first").style.display = "none";
    document.querySelector("#choose").style.display = "none";
    document.querySelector("#Easy").style.display = "block";
    document.querySelector("#Medium").style.display = "none";
    document.querySelector("#hard").style.display = "none";
}

function medium(){
    document.querySelector("#choose").style.display = "none";
    document.querySelector("#Easy").style.display = "none";
    document.querySelector("#Medium").style.display = "block";
    document.querySelector("#hard").style.display = "none";
}


function hard(){
    document.querySelector("#choose").style.display = "none";
    document.querySelector("#Easy").style.display = "none";
    document.querySelector("#Medium").style.display = "none";
    document.querySelector("#hard").style.display = "block";
}


function checkEasy(){
   let userNumber = document.querySelector("#easy-inp").value;
   let randomIndex = (Math.random() * 50);
   if (userNumber == randomIndex){
       alert("Congratulations!! You guess right number....");
   } else { 
   if (userNumber > randomIndex){
       alert("Too big");
   } else if (userNumber < randomIndex){
       alert("Too small");
   }
   }
}


function checkMedium(){
    let userNumber = document.querySelector("#med-inp").value;
    let randomIndex = (Math.random() * 100);
    if (userNumber == randomIndex){
        alert("Congratulations!! You guess right number....");
    } else { 
    if (userNumber > randomIndex){
        alert("Too big");
    } else if (userNumber < randomIndex){
        alert("Too small");
    }
    }
 }

 
function checkHard(){
    let userNumber = document.querySelector("#hard-inp").value;
    let randomIndex = (Math.random() * 1000);
    if (userNumber == randomIndex){
        alert("Congratulations!! You guess right number....");
    } else { 
    if (userNumber > randomIndex){
        alert("Too big");
    } else if (userNumber < randomIndex){
        alert("Too small");
    }
    }
 }
 
 
