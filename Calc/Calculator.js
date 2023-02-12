let result = document.getElementById ("result");

let equal = document.querySelector("#equal").addEventListener("click", calculate)
let names = document.querySelector(".names");

names.onclick = () => {
    over();
}

// equal.onclick = () =>{
//     calculate();
// }
// equal.addEventListener("click", calculate);

function display (num){
    result.value += num
}



function calculate(){
    try{
        result.value = eval(result.value);
    }catch (err){
        result.innerHTML = "invalid";
    }   


}

function over(){
    style.background.color = "blue";
}
// function clear(){
//     result.value = null;
// }

function del(){
    result.value = null;
}
function dl(){
    result.value = result.value.slice(0, -1)
}