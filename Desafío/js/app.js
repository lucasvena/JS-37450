
/* FUNCIONES */

function saludar(){
    alert("Bienvenido " + usuario + ", a continuacion verás las opciones de compra :)");
}

function numeroCuotas(precio,iva){

    let cuotas = Number(prompt("Cuantos pagos desea realizar 3, 6 o 12? Ingrese el dígito"));

    if (cuotas === 3) {
        precio = ((precio * iva) /cuotas);
        alert(`El valor en 3 cuotas es de $${precio}`);
        console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
    } else if (cuotas === 6){
        precio = ((precio * iva) /cuotas);
        alert(`El valor en 6 cuotas es de $${precio}`);
        console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
    } else if (cuotas === 12){
        precio = ((precio * iva) /cuotas);
        alert(`El valor en 12 cuotas es de $${precio}`);
        console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
    } else {
        alert("Dígito no valido como cuota, ingresar nuevamente");
    }
}

/* LOGGING */
let usuario = prompt("Ingrese su nombre:").toUpperCase();

while (usuario !== "LUCAS") {

    alert ("Error: Debes ingresar tu nombre!");
       
    usuario = prompt ("Ingrese tu nombre").toUpperCase();
}

saludar();
console.log("Nombre de Usuario: " + usuario);

const precioPantalon = 5000;
const precioCamisa = 4500;
const precioRemera = 3000;
const precioZapatos = 8000;
const iva = 1.21;


/* INSTANCIA DE COMPRA */

let opciones = prompt ("Ingresa el número correspondiente: \n 1-Pantalón \n 2-Camisa \n 3-Remera \n 4-Zapatos \n ESC-Salir").toUpperCase();

while (opciones !== "ESC"){
    switch (opciones){
        case "1":
            console.log ("Ingresaste Pantalón");
            alert("Precio de Pantalón: $" + precioPantalon);
            let decision1 = prompt ("Desea seguir con la compra? SI / NO").toUpperCase();
            if (decision1 == "SI") {
                alert ("El precio del Pantalón + iva es de $" + (precioPantalon * iva));
                console.log("Precio Pantalón $"+ precioPantalon);
                console.log("Precio Pantalón + iva $" + (precioPantalon * iva));
                numeroCuotas(5000,1.21);
                break;
            }else {
                break;
            }
        case "2":
            console.log ("Ingresaste Camisa");
            alert("Precio de Camisa: $" + precioCamisa);
            let decision2 = prompt ("Desea seguir con la compra? SI / NO").toUpperCase();
            if (decision2 == "SI") {
                alert ("El precio del Camisa + iva es de $" + (precioCamisa * iva));
                console.log("Precio Camisa $"+ precioCamisa);
                console.log("Precio Camisa + iva $" + (precioCamisa * iva));
                numeroCuotas(4500,1.21);
                break;
            }else {
                break;
            }
        case "3":
            console.log ("Ingresaste Remera"); 
            alert("Precio de Remera: $" + precioRemera);
            let decision3 = prompt ("Desea seguir con la compra? SI / NO").toUpperCase();
            if (decision3 == "SI") {
                alert ("El precio del Remera + iva es de $" + (precioRemera * iva));
                console.log("Precio Remera $"+ precioRemera);
                console.log("Precio Remera + iva $" + (precioRemera * iva));
                numeroCuotas(3000,1.21);
                break;
            }else {
                break;
            }
        case "4":
            console.log ("Ingresaste Zapatos"); 
            alert("Precio de Zapatos: $" + precioZapatos);
            let decision4 = prompt ("Desea seguir con la compra? SI / NO").toUpperCase();
            if (decision4 == "SI") {
                alert ("El precio del Zapatos + iva es de $" + (precioZapatos * iva));
                console.log("Precio Zapatos $"+ precioZapatos);
                console.log("Precio Zapatos + iva $" + (precioZapatos * iva));
                numeroCuotas(8000,1.21);
                break;
            }else {
                break;
            }
        default:
            alert("Opción no encontrada");
            break;
    }
    opciones = prompt ("Ingresa el número correspondiente: \n 1-Pantalón \n 2-Camisa \n 3-Remera \n 4-Zapatos \n ESC-Salir").toUpperCase();
}

alert ("Esperamos vuelvas pronto!");
console.log ("<--------- Fin de Compra --------->");