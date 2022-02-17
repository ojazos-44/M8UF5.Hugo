function comp() {
    if ( document.querySelector("#user").value == localStorage.getItem ("login")) {
        if (document.querySelector("#pass1").value == document.querySelector("#pass2").value) {
            if (document.querySelector("#pass1").value == localStorage.getItem ("pass")) {
                alert ("Usuari i contrasenya correctes");
            }else {
                    alert ("Contrasenya incorrecta");
                }
        }else {
            alert ("Les contrasenyes  no coincideixen");
            }
    }else {
        alert ("Usuari incorrect");
        }
}