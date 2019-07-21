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

