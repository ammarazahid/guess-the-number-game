let click;

function one() {
    // document.querySelector("#first").style.display = "none";
    document.querySelector("#choose").style.display = "block";
    document.querySelector("#Easy").style.display = "none";
    document.querySelector("#Medium").style.display = "none";
    document.querySelector("#hard").style.display = "none";
}

function easy() {
    // document.querySelector("#first").style.display = "none";
    document.querySelector("#choose").style.display = "none";
    document.querySelector("#Easy").style.display = "block";
    document.querySelector("#Medium").style.display = "none";
    document.querySelector("#hard").style.display = "none";
}

function medium() {
    document.querySelector("#choose").style.display = "none";
    document.querySelector("#Easy").style.display = "none";
    document.querySelector("#Medium").style.display = "block";
    document.querySelector("#hard").style.display = "none";
}


function hard() {
    document.querySelector("#choose").style.display = "none";
    document.querySelector("#Easy").style.display = "none";
    document.querySelector("#Medium").style.display = "none";
    document.querySelector("#hard").style.display = "block";
}


function checkEasy() {
    let userNumber = document.querySelector("#easy-inp").value;
    click++;
    let randomIndex = parseInt((Math.random() * 50));
    //    if (userNumber < 0){
    //        alert("Please Enter a number");
    //      } else {
        if (click > 6){
            alert("Game Over!!Try again");
        } else{
    if (userNumber == randomIndex) {
        alert("Congratulations!! You guess right number....");
    } else 
        if (userNumber < randomIndex) {
            alert("Try a bigger number");            
        } else if (userNumber > randomIndex) {
            alert("Try a smaller number");
        }
    }
}


function checkMedium() {
    let userNumber = document.querySelector("#med-inp").value;
    let randomIndex = parseInt((Math.random() * 100));
    if (userNumber == randomIndex) {
        alert("Congratulations!! You guess right number....");
    } else {
        if (userNumber > randomIndex) {
            alert("Try a bigger number");
        } else if (userNumber < randomIndex) {
            alert("Try a smaller number");
        }
    }
}


function checkHard() {
    let userNumber = document.querySelector("#hard-inp").value;
    let randomIndex = parseInt((Math.random() * 1000));
    if (userNumber == randomIndex) {
        alert("Congratulations!! You guess right number....");
    } else {
        if (userNumber > randomIndex) {
            alert("Try a bigger number");
        } else if (userNumber < randomIndex) {
            alert("Try a smaller number");
        }
    }
}