
alert ("BIENVENIDO/A AL GENERADOR DE LISTAS DE SUPERMERCADO");

let usuario = prompt("Ingrese tu nombre:").toUpperCase();

while (true) {

    if (usuario !== "LUCAS") {
        alert ("Error: Debes ingresar tu nombre!");
    } else {
        console.log ("Usuario ingresado: " + usuario);
        break;   
    }
    
    usuario = prompt ("Ingrese tu nombre").toUpperCase();
}
alert("Bienvenido " + usuario + ", a continuacion te solicitaremos los productos a cargar en tu lista :)");
alert("IMPORTANTE!: Escribe ESC cuando hayas finalizado");

for (let i=0; ;i++) {

    let entrada = prompt ("Ingrese el producto:").toUpperCase();
    
    if (entrada !== "ESC") {
        alert (entrada + " en la lista ;)");
        console.log (entrada);
    } else {
        break;
    }
}

alert ("Lista finalizada, que tengas lindo día!");
console.log ("<--------- Fin de Lista --------->");