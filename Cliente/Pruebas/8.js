function validarAbonado() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let cp = document.getElementById("cp").value;
    let condiciones = document.getElementById("condiciones");
    let errores = document.getElementById("errores");
    let resultado = document.getElementById("resultado");
    //Validación de campos vacíos
    errores.innerHTML = "";
    if (nombre == "" || telefono == "" || cp == "") {
        alert("Debe rellenar todos los campos");
        return;
    }
    //Validación condiciones
    if (!condiciones.checked) {
        errores.innerHTML = "Debe aceptar nuestras condiciones si desea continuar con el registro";
        return;
    }
    //Validación del teléfono
    if (telefono.length != 9) {
        errores.innerHTML = "La longitud del teléfono debe ser de 9 números todos seguidos";
        return;
    }
    if (telefono.substring(0, 3) != '976') {
        errores.innerHTML = "El teléfono debe empezar por '976' ";
        return;
    }
    //Validación del código postal
    if (!cp.startsWith("50")) {
        errores.innerHTML = "El código postal debe empezar por 50";
        return;
    }
    let Usuario = {
        "nombre": nombre,
        "telefono": telefono,
        "Código postal": cp
    }
    Object.freeze(Usuario);
    resultado.innerHTML = "Usuario: <br />";
    for (let [clave, valor] of Object.entries(Usuario)) {
        resultado.innerHTML += clave + " - > " + valor + "<br />";
    }
    resultado.innerHTML += "Usuario registrado exitosamente! <br />";
    if (typeof (Storage) !== "undefined") {
        let listaUsuarios = [];
        if (localStorage.usuarios !== undefined) {
            listaUsuarios = JSON.parse(localStorage.usuarios);
        }
        listaUsuarios.push(Usuario);
        localStorage.usuarios = JSON.stringify(listaUsuarios);
    }

}