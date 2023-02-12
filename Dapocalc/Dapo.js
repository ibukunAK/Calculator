let result = document.getElementById("result");
let second_value = document.getElementById("second-value");
let first_value = document.getElementById("first-value");
let subtraction = document.getElementById("minus");
let plus = document.getElementById("addition");
let multiply = document.getElementById("multiplication");
let division = document.getElementById("division");
let clear = document.getElementById("clear");

// {function}

plus.addEventListener("click", (e)=> {
    
    if (first_value.value.length < 1 && second_value.value.length < 1) {
        result.innerText = "please, enter values";
    }else{
        let total = parseFloat(first_value.value) + parseFloat(second_value.value);
        result.innerHTML= total
    }

});
multiply.addEventListener ("click", (e)=> {
    if (first_value.value.length < 1 && second_value.value.length < 1) {
        result.innerText = "Please, enter  real values";
    } else {
        let total = parseFloat(first_value.value) * parseFloat(second_value.value);
        result.innerText = total;
    }

});