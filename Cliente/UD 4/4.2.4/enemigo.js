let Enemigo = {
    energia: 10,
    mover: function() {
	console.log("Me muevo.");
    }
}

// Orco
let Orco = Object.create(Enemigo); // Prototipo
Orco.fuerza = 15;
Orco.disparar = function() {
    console.log("Disparo con mi poderoso arco.");
}

// Troll
let Troll = Object.create(Enemigo); // Prototipo
Troll.fuerza = 20;
Troll.golpear= function() {
    console.log("Golpeo con mi martillo de guerra.");
}

// Exportación
export {
    Enemigo,
    Orco,
    Troll
};
