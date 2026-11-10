function matriz() {

    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);
    let tabla = document.getElementById("matrizDinamica");
    tabla.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        let fila = tabla.insertRow();
        for (let j = 0; j < columnas; j++) {
            let celda = fila.insertCell();
            celda.innerHTML = i + "," + j;
            celda.style.border = "1px solid black";
            celda.style.padding = "4px";
        }
    }

    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.matrices) {
            sessionStorage.matrices = Number(sessionStorage.matrices) + 1;
        } else {
            sessionStorage.matrices = 1;
        }
    }

    document.getElementById("filas").value = "";
    document.getElementById("columnas").value = "";

    let texto = document.getElementById("info");
    texto.innerHTML = "Ancho disponible: " + screen.availWidth + "px<br />" +
        "Cookies habilitadas: " + navigator.cookieEnabled + "<br />" +
        "Páginas visitadas en esta sesión: " + history.length + "<br />" +
        "Matrices generadas en esta sesión: " + sessionStorage.matrices;
}