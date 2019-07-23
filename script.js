
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

let count = 0;
let randomIndex = parseInt((Math.random() * 50));

function checkEasy() {
    let userNumber = document.querySelector("#easy-inp").value;
    if (userNumber == randomIndex) {
        alert("Congratulations!! You guess right number....YOu tried " + count + " times");
    } else {
        if (userNumber < randomIndex) {
            alert("Try a bigger number");
            count++;            
        } else  {
            alert("Try a smaller number");
            count++;
        }
    }
}
let randomIndex2 = parseInt((Math.random() * 100));


function checkMedium() {
    let userNumber = document.querySelector("#med-inp").value;
    if (userNumber == randomIndex2) {
        alert("Congratulations!! You guess right number....YOu tried " + count + " times");
    } else {
        if (userNumber < randomIndex2) {
            alert("Try a bigger number");
            count++;
        } else {
            alert("Try a smaller number");
            count++;
        }
    }
}
let randomIndex3 = parseInt((Math.random() * 1000));


function checkHard() {
    let userNumber = document.querySelector("#hard-inp").value;
    if (userNumber == randomIndex3) {
        alert("Congratulations!! You guess right number....YOu tried " + count + " times");
    } else {
        if (userNumber < randomIndex3) {
            alert("Try a bigger number");
            count++;
        } else {
            alert("Try a smaller number");
            count++;
        }
    }
}