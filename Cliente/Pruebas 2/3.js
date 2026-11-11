let productosRegistrados = 0;

window.onload = function () {
    if (localStorage.getItem("total_productos")) {
        productosRegistrados = Number(localStorage.getItem("total_productos"));
    }
    actualizarDatos();
}

function agregarProducto() {
    let errores = document.getElementById("mensajeError");
    let nombre = document.getElementById("nombreProd").value;
    let precio = document.getElementById("precioProd").value;
    let stock = document.getElementById("stockProd").value;

    //Validación nombre

    if (nombre.length < 4) {
        errores.innerHTML = "El nombre debe tener una longitud minima de 4 carácteres";
        return;
    }
    let nombreFinal = nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase();

    //Validación stock precio y generación ID

    if (precio == "" || stock == "") {
        errores.innerHTML = "Hay campos vacíos";
        return;
    }
    stock = parseInt(stock);
    if (precio <= 0 || stock <= 0) {
        errores.innerHTML = "No puede haber valores en 0";
        return;
    }
    let id = Math.floor((Math.random() * 900000) + 100000);
    let precioFormato = (parseFloat(precio) * 1.21).toFixed(2);

    //Generación tabla

    let tabla = document.getElementById("cuerpoTablaInventario");
    let fila = tabla.insertRow(-1);
    let celdaId = fila.insertCell(0);
    let celdaNombre = fila.insertCell(1);
    let celdaStock = fila.insertCell(2);
    let celdaPrecio = fila.insertCell(3);
    celdaId.innerHTML = id;
    celdaNombre.innerHTML = nombreFinal;
    celdaStock.innerHTML = stock;
    celdaPrecio.innerHTML = precioFormato;
    productosRegistrados++;
    localStorage.setItem("total_productos", productosRegistrados);
    actualizarDatos();
    document.getElementById("formInventario").reset();
}

function vaciarInventario() {
    productosRegistrados = 0;
    localStorage.removeItem("total_productos");
    document.getElementById("formInventario").reset();
    document.getElementById("cuerpoTablaInventario").innerHTML = "";
    actualizarDatos();
}

function actualizarDatos() {
    document.getElementById("infoEstadisticas").innerHTML =
        "Total de productos registrados: " + productosRegistrados;
}

