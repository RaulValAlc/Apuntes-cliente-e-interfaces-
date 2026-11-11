document.addEventListener("DOMContentLoaded", () => {
    
    let btnValidar = document.getElementById("btnValidar");

    btnValidar.addEventListener("click", () => {
        let inputClave = document.getElementById("respuestaClave").value.trim().toLowerCase();
        let mensajeError = document.getElementById("errorAcceso");
        
        // Definimos cuál es la respuesta correcta (por ejemplo, "object")
        let respuestaCorrecta = "object";

        if (inputClave === "") {
            mensajeError.innerHTML = "El campo no puede estar vacío.";
            return;
        }

        if (inputClave === respuestaCorrecta) {
            // 1. Ocultamos la sección de acceso
            document.getElementById("seccionAcceso").style.display = "none";

            // 2. Mostramos el cuestionario principal cambiando su estilo a 'block'
            document.getElementById("cuestionarioPrincipal").style.display = "block";
            
            console.log("¡Primera parte correcta! Cuestionario habilitado.");
        } else {
            // Si falla, mostramos error y vaciamos el input
            mensajeError.innerHTML = "Respuesta incorrecta. Prueba otra vez.";
            document.getElementById("respuestaClave").value = "";
        }
    });

});