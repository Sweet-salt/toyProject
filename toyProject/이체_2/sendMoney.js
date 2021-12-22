
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
        number.textContent = "1";
    }
}

function printNumber00(){
    const print = document.querySelector(".number00")
    const number = document.querySelector(".selectedNumber")
    if(print !== undefined){
        number.textContent = "00";
    }
}
