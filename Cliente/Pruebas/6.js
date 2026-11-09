let texto = prompt("Introduzca una frase o texto:");

if (texto === null || texto.trim() == "") {
    alert("Texto introducido no valido");
} else {
    let frase = "";
    for (let i = 0; i < texto.length; i++) {
        let n = texto.charCodeAt(i) + 3;
        
        if (n > 'z'.charCodeAt(0) && n < 'A'.charCodeAt(0)) {
            n = 'a'.charCodeAt(0) + (n - 'z'.charCodeAt(0) - 1);
        }
        if (n > 'Z'.charCodeAt(0)) {
            n = 'A'.charCodeAt(0) + (n - 'Z'.charCodeAt(0) - 1);
        }
        
        frase += String.fromCharCode(n);
    }

    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.analisis) {
            sessionStorage.analisis = Number(sessionStorage.analisis) + 1;
        } else {
            sessionStorage.analisis = 1;
        }
    }

    let texto2 = document.getElementById("texto2");
    
    let posPrimeraA = texto.indexOf("a") !== -1 ? (texto.indexOf("a") + 1) : "No encontrada";
    let posUltimaA = texto.lastIndexOf("a") !== -1 ? (texto.lastIndexOf("a") + 1) : "No encontrada";

    texto2.innerHTML = "Longitud del texto: " + texto.length + "<br />\n" +
        "Primera posición de la 'a': " + posPrimeraA + " | Última posición de la 'a': " + posUltimaA + "<br />\n" +
        "Texto reemplazando espacios por - : " + texto.replaceAll(" ", "-") + "<br />\n" +
        "Frase con desplazamiento: " + frase + "<br />\n" +
        "Veces que se ha analizado una frase en esta sesión: " + sessionStorage.analisis;
}