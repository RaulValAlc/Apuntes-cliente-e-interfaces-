let texto = prompt("Introduzca una frase o texto:");
let visitas = 
if(texto === null || texto.trim() == ""){
    alert("Texto introducido no valido");
}else{
    let frase = "";
    for(let i = 0 ;i < texto.length;i++){
        let n = texto.charCodeAt(i) + 3;
        if(n > charCode("z") && n < charCode("A")){
            n = charCode("a") + (n - charCode("z") - 1);
        }
        if(n > charCode("Z")){
            n = charCode("A") + (n - charCode("Z") - 1);
        }
        frase += String.fromCharCode(n);
    }
    if(typeof (Storage) !== undefined){
        
    }
    let texto2 = document.getElementById("texto2");
    texto2.innerHTML = "Longitud del texto: " + texto.length + "<br />\n" +
    "Primera posicion de la a " + (texto.indexOf("a") + 1) + " ultima posición de la a: " + (texto.lastIndexOf("a") + 1)+"<br />\n" +
    "Texto reemplazando espacios por - :" + texto.replaceAll(" ","-") + "<br />\n" +
    "frase con desplzamiento : " + frase + "<br />\n"+
    "veces que se ha analizado una frase en esta sesión: " + visitas;
}