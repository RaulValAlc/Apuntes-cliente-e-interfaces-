let numcorredores = 0;

window.onload = function () {
    if (localStorage.getItem("corredores")) {
        numcorredores = Number(localStorage.getItem("corredores"));
        actualizardatos();
    }
}



function inscribirCorredor() {
    let nombre = document.getElementById("nombreCorredor").value;
    let edad = parseInt(Number(document.getElementById("edadCorredor").value));
    let error = document.getElementById("mensajeError");
    error.innerHTML = "";
    //Validación nombre
    if (nombre.length < 5) {
        error.innerHTML = "El nombre debe tener minimo 5 carácteres";
        return;
    }
    nombre = nombre.charAt(0).toUpperCase().concat(nombre.substring(1).toLowerCase());

    //Validación edad

    if (edad == 0) {
        error.innerHTML = "Debe introducir su edad para completar el registro";
        return;
    }
    if (edad < 18) {
        error.innerHTML = "El corredor debe ser mayor de edad para participar";
        return;
    }

    let dorsal = Math.floor((Math.random() * 9999) + 1000);

    let categoria;
    switch (true) {
        case (edad < 35):
            categoria = "Senior";
            break;
        case (edad >= 35 && edad <= 50):
            categoria = "Veterano A";
            break;
        case (edad > 50):
            categoria = "Veterano B";
            break;
        default:
            categoria = null;
    }
    let tabla = document.getElementById("cuerpoTablaInscritos");
    let filaNueva = tabla.insertRow(-1);
    let celdaDorsal = filaNueva.insertCell(0);
    let celdaNombre = filaNueva.insertCell(1);
    let celdaEdad = filaNueva.insertCell(2);
    let celdaCategoria = filaNueva.insertCell(3);
    celdaDorsal.innerHTML = dorsal;
    celdaNombre.innerHTML = nombre;
    celdaEdad.innerHTML = edad;
    celdaCategoria.innerHTML = categoria;

    document.getElementById("formInscripcion").reset();
    numcorredores++;
    localStorage.setItem("corredores", numcorredores);
    actualizardatos();
}

function resetearInscripciones() {
    document.getElementById("formInscripcion").reset();
    numcorredores = 0;
    localStorage.removeItem("corredores");
    actualizardatos();
    document.getElementById("mensajeError").innerHTML = "";
    document.getElementById("cuerpoTablaInscritos").innerHTML = "";
}

function actualizardatos() {
    document.getElementById("infoEstadisticas").innerHTML = "Total de corredores inscritos: " + numcorredores;
}

