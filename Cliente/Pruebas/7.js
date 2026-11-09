let g1 = BigInt(prompt("Ingrese un gran numero"));
let g2 = g1 ** 25n;
let persona = null;
if (localStorage.pers !== undefined) {
    persona = JSON.parse(localStorage.pers);
} else {
    persona = {
        altura: 1.80,
        edad: 24,
        nombre: "paco",
        hombre: true
    }
}
for (let valor of Object.keys(persona)) {
    console.log(valor + " ");
}
if (typeof (Storage) !== "undefined") {
    localStorage.pers = JSON.stringify(persona);
}