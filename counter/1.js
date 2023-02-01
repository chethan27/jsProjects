let count =0 ;

const decrease = document.getElementsByClassName('decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');

const span = document.getElementById("value")


//returns a html collection list 
decrease[0].addEventListener("click", function(e) {
    count--;
    span.textContent = count;
})

increase.addEventListener("click", function() {
    count++;
    span.textContent = count;
})

reset.addEventListener("click", function() {
    count = 0;
    span.textContent = count;
})