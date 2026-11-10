function validar() {
    let nombre = document.getElementById("nombre").value.trim();
    let codigo = document.getElementById("codigo").value.trim();
    let secreto = document.getElementById("secreto").value.trim();
    let radioAcceso = document.getElementsByName("nvacceso");
    let texto = document.getElementById("info");
    if (nombre === "" || codigo === "" || secreto === "") {
        alert("Alguno de los campos está vacío");
        return;
    }
    let nvacceso = "";
    for (let radio of radioAcceso) {
        if (radio.checked) {
            nvacceso = radio.value;
            break;
        }
    }

    if (codigo.length !== 6) {
        alert("El codigo no tiene 6 exactamente caracteres");
        return;
    }
    let letras = codigo.split("");
    for (let i = 0; i < codigo.length; i++) {
        if (i < 2 && !isNaN(letras[i])) {
            alert("Codigo incorrecto los dos primeros digitos deben ser letras");
            return;
        }
        if (i >= 2 && isNaN(letras[i])) {
            alert("Codigo incorrecto los cuatro últimos digitos deben ser números");
            return;
        }
    }
    let cdsecreto = BigInt(secreto);
    cdsecreto = (cdsecreto ** 3n).toString();
    let empleado = {
        "nombre": nombre,
        "codigo": codigo,
        "cdsecreto": cdsecreto,
        "nvacceso": nvacceso
    };
    let listaEmpleados = [];

    if (typeof (Storage) !== "undefined") {
        if (localStorage.empleados !== undefined) {
            listaEmpleados = JSON.parse(localStorage.empleados);
        }
        listaEmpleados.push(empleado);
        localStorage.empleados = JSON.stringify(listaEmpleados);
    }

    texto.innerHTML = "Empleados:<br />";
    for (let empleadoIndividual of listaEmpleados) {
        texto.innerHTML += "Empleado: <br />";
        for (const [clave, valor] of Object.entries(empleadoIndividual)) {
            texto.innerHTML += (clave + " -> " + valor + "<br />");
        }
    }

}