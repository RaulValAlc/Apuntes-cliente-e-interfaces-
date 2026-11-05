const fun = (...arg) => {
    console.log("Numero total de parámetros: " + arg.length);
    if(arg.length > 2){
        console.log("Antes del cambio: 1º: " + arg[0] + " 3º: " + arg[2]);
        let temporal = arg[0];
        arg[0] = arg[2];
        arg[2] = temporal;
        console.log("Después del cambio: 1º: " + arg[0] + " 3º: " + arg[2]);
    }
    return arg;
}

alert(fun(10,20,'a','casa'));
