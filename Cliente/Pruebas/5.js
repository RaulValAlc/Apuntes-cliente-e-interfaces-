let ej1 = document.getElementById("ej1");
ej1.innerHTML = "Ancho de la pantalla: " + screen.width + " Alto de la pantalla: " + screen.height + "<br \> \n"
    + " cookies habilitadas: " + navigator.cookieEnabled;
let n = Number(prompt("Numero?"));
let tabla = document.getElementById("tabla");
let tot = document.getElementById("totalVen");
if (n >= 0) {
    for (let i = 0; i < n; i++) {
        let fila = tabla.insertRow();
        for (let j = 0; j < n; j++) {
            let celda = fila.insertCell();
            celda.style.color = "red";
            celda.innerHTML = "X";
        }
    }
}
let ej2 = document.getElementById("ej2");
let x = 0;
ej2.innerHTML = "Contemos hasta el 3: <br />\n"
do {
    ej2.innerHTML += x + " ";
    x++;
} while (x <= 3);
let ej3 = document.getElementById("ej3");
let p = 0;
while (p != 2) {
    ej3.innerHTML += n + " >> 3 = " + (n >> 3) + "<br />";
    p++;
}
function total() {
    tot.innerHTML = "Ventanas visitadas = " + history.length;
}
