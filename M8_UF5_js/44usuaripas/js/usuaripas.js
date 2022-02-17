function comp() {
    var x = document.form.x.value;
    var y = document.form.y.value;
    var pass = "1234";
    var z = document.form.login.value;
    var name = "Ibai";
    if (x == y) {
        if (x == pass) {
            if ( z == name) {
                alert ("Usuari i contrasenya correctes");
                }else {
                alert ("Usuari incorrect");
                }
        }else {
            alert ("Contrasenya incorrecta");
        }
    }else {
        alert ("Les contrasenyes no coincideixen");
        alert (x);
        alert (y);
        }
}
