function numero(num) {
    let inputDP = document.getElementById("display");
    inputDP.value = inputDP.value + num;
}
function calc() {
    let inputDP = document.getElementById("display");
    inputDP.value = eval (inputDP.value);
}
function borrar() {
    let inputDP = document.getElementById("display");
    inputDP.value = null;
}
function borrar1() {
    let inputBF = document.getElementById("display");
    let inputAF = inputBF.value.slice(0,-1);
    inputBF.value = inputAF;
}