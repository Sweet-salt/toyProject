
function openBox() {
    const showNext = document.querySelector(".number__line")
    if(showNext !== undefined){
        const next = document.querySelector('.next');
        next.style.width = "377px";
        next.style.height = "48px";
        next.style.background = "#ff5f00";
        next.textContent = "다음";
    }
}

function printNumber(){
    const print = document.querySelector(".number1")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "1";
    }
}

function printNumber00(){
    const print = document.querySelector(".number00")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "00";
    }
}

function printNumber2(){
    const print = document.querySelector(".number2")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "2";
    }
}
function printNumber3(){
    const print = document.querySelector(".number3")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "3";
    }
}
function printNumber4(){
    const print = document.querySelector(".number4")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "4";
    }
}
function printNumber5(){
    const print = document.querySelector(".number5")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "5";
    }
}
function printNumber6(){
    const print = document.querySelector(".number6")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "6";
    }
}
function printNumber7(){
    const print = document.querySelector(".number7")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "7";
    }
}
function printNumber8(){
    const print = document.querySelector(".number8")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "8";
    }
}
function printNumber9(){
    const print = document.querySelector(".number9")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "9";
    }
}
function printNumber0(){
    const print = document.querySelector(".number0")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.innerHTML = "0";
    }
}

function link(){
    location.href = 'sendEnd.html'
}