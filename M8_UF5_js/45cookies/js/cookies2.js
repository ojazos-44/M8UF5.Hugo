function GuardarDades() {
    localStorage.setItem ("nom", document.querySelector("#nom").value);

    localStorage.setItem ("cognom", document.querySelector("#cognom").value);

    localStorage.setItem ("login", document.querySelector("#user").value);

    localStorage.setItem ("pass", document.querySelector("#pass1").value);
}
    
function RecuperarDades() {
    document.querySelector("#nom").value = localStorage.getItem("nom");
    
    document.querySelector("#cognom").value = localStorage.getItem("cognom");

    document.querySelector("#user").value = localStorage.getItem("login");

    document.querySelector("#pass1").value = localStorage.getItem("pass");
}
    
function EsborrarDades() {
    document.querySelector("#nom").value = null;
    localStorage.setItem ("nom", "");

    document.querySelector("#cognom").value = null;
    localStorage.setItem ("cognom", "");

    document.querySelector("#user").value = null;
    localStorage.setItem ("login", "");

    document.querySelector("#pass1").value = null;
    localStorage.setItem ("pass", "");

}