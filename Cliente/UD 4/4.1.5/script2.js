let boton = document.getElementsById("login");
let pins = [1234,4321];

boton.addEventListener('click',() => {
    let pinIngresado = document.getElementById("pin").value;
    if(pins.includes(Number(pinIngresado))){

    }else{
        
    }
});