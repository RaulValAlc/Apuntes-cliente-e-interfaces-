      // Importación de funciones
      import { Enemigo, Orco, Troll } from "./enemigo.js";

      // Crear un enemigo
      let enemigo1 = Object.create(Enemigo);
      console.log(enemigo1.energia); // 10
      console.log(enemigo1.mover()); // Me muevo

      // Crear un orco
      let orco1 = Object.create(Orco);
      console.log(orco1.energia); // 10
      console.log(orco1.fuerza); // 15
      console.log(orco1.mover()); // Me muevo
      console.log(orco1.disparar()); // Disparo

      // Crear un troll
      let troll1 = Object.create(Troll);
      console.log(troll1.energia); // 10
      console.log(troll1.fuerza); // 20
      console.log(troll1.mover()); // Me muevo
      console.log(troll1.golpear()); // Golpeo