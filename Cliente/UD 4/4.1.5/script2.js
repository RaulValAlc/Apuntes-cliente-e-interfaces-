let usuarios = { 1234: 10000, 4321: 10000 };
let boton = document.getElementById("login");
let botonRetirar = document.getElementById("retirar");
let divRetiro = document.getElementById("pasarela-retiro");
divRetiro.style.display = "none";
let saldo = 0;
let texto = document.getElementById("texto-verificacion");

boton.addEventListener('click', () => {
    let pinIngresado = document.getElementById("pin").value;

    if (usuarios[pinIngresado] !== undefined) {
        saldo = usuarios[pinIngresado];
        texto.innerHTML = "Acceso exitoso! Su saldo actual es de: " + saldo + "$";
        divRetiro.style.display = "block";
    } else {
        texto.innerHTML = "Pin erroneo o no encontrado en la base de datos";
    }
});

botonRetirar.addEventListener('click', () => {
    let dinero = Number(document.getElementById("dineroRet").value);
    let conf = document.getElementById("texto-confirmacion");
    if (dinero >= 0) {
        if (saldo >= dinero) {
            saldo -= dinero;
            texto.innerHTML = "Su saldo actual es de: " + saldo + "$";
            conf.innerHTML = "";
        }else{
            conf.innerHTML = "No puedes retirar una cantidad superior a tu saldo actual";
        }
    }else{
        conf.innerHTML = "No puedes retirar una cantidad de dinero negativa";
    }
});