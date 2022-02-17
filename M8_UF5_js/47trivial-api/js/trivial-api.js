//*edad 18
function trivial() {
var nombre = document.getElementById('nom').value;
var apellido = document.getElementById('cognom').value;
var edad = document.getElementById('edad').value;

if (document.getElementById('edad').value >= 18) {
    window.location.href = "./web/trivial.htm";
}
else {
    alert("No hi pots accedir!")
    }
}

var contingut = document.querySelector('#contingut')

    function agafar() {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
        console.log(data.results['0'])
        contingut.innerHTML = `
        <img src="${data.results['0'].picture.large}"
        width="100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.last}</p>
        `
        })
}

//*respuestas

function respuestas(){
var respuesta1 = "One piece";
var respuesta2 = "Lamborghini";
var respuesta3 = "Minecraft";
var respuesta4 = "Tom Holland";
var respuesta5 = "Doctor Strange";

//*iiifffff ellllseeeee

if (document.getElementById('res1').value == respuesta1) {
    document.getElementById('resp1').innerHTML = respuesta1
}

    else {
        document.getElementById('resp1').innerHTML = respuesta1
    }

if (document.getElementById('res2').value == respuesta2) {
    document.getElementById('resp2').innerHTML = respuesta2
}

    else {
        document.getElementById('resp2').innerHTML = respuesta2
    }

if (document.getElementById('res3').value == respuesta3) {
    document.getElementById('resp3').innerHTML = respuesta3
}

    else {
        document.getElementById('resp3').innerHTML = respuesta3
    }

if (document.getElementById('res4').value == respuesta4) {
    document.getElementById('resp4').innerHTML = respuesta4
}
    else {
        document.getElementById('resp4').innerHTML = respuesta4
    }

if (document.getElementById('res5').value == respuesta5) {
    document.getElementById('resp5').innerHTML = respuesta5
}

    else {        
        document.getElementById('resp5').innerHTML = respuesta5
    }
}
