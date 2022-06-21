/* FUNCIONES */

// function saludar(){
//     alert("Bienvenido " + usuario + ", a continuacion verás las opciones del perfil :)");
// }

// function numeroCuotas(precio,iva){

//     let cuotas = Number(prompt("Cuantos pagos desea realizar 3, 6 o 12? Ingrese el dígito"));

//     if (cuotas === 3) {
//         precio = ((precio * iva) /cuotas);
//         alert(`El valor en 3 cuotas es de $${precio}`);
//         console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
//     } else if (cuotas === 6){
//         precio = ((precio * iva) /cuotas); 
//         alert(`El valor en 6 cuotas es de $${precio}`);
//         console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
//     } else if (cuotas === 12){
//         precio = ((precio * iva) /cuotas);
//         alert(`El valor en 12 cuotas es de $${precio}`);
//         console.log(`El precio a abonar en ${cuotas} cuotas es de ${precio}`);
//     } else {
//         alert("Dígito no valido como cuota, ingresar nuevamente");
//     }
// }


// TÍTULO
const titulo = document.querySelector ("#titulo")
console.log ( titulo.innerText )
titulo.innerText = "Desafío Complementario 03 \n Interactuar con HTML"


// SALUDO 

let usuario = prompt("Ingrese su nombre:").toUpperCase();

const saludar = document.querySelector ("#saludo")
        console.log ( saludar.innerText )
        saludar.innerText = "Bienvenido/a " + usuario + "!, a continuación vamos a registrar sus datos"


let entradaEdad = prompt("Ingrese su edad:")

const anios = document.querySelector ("#edad")
        console.log ( anios.innerText )
        anios.innerText = "Se registró que su edad es: "+ entradaEdad + " años."

let entradaMail = prompt("Ingrese su correo electrónico:")

const mail = document.querySelector ("#mail")
        console.log ( mail.innerText )
        mail.innerText = "Se registró la casilla de mail: "+ entradaMail

const container = document.querySelector ("#contenedor")
container.innerHTML = " <h3> Registro exitoso!</h3><p>Que tenga un <strong>excelente día</strong></p>"
console.log (container)

// const precioPantalon = 5000;
// const precioCamisa = 4500;
// const precioRemera = 3000;
// const precioZapatos = 8000;
// const iva = 1.21;

// while (true) {
//     if (usuario === "LUCAS"){
        
//         console.log("Nombre de Perfil: " + usuario);
        
//         // INSTANCIA DE COMPRA

//         let opciones = prompt ("Ingresa el número correspondiente de lo que quieres comprar: \n 1-Pantalón \n 2-Camisa \n 3-Remera \n 4-Zapatos \n ESC-Salir").toUpperCase();

//         function setCases(item,precio,cuota){
//             console.log('Ingresaste ' + item)
//             alert('Precio de ' + item + ': $' + precio);
//             let decision1 = prompt ("Desea seguir con la compra? SI / NO").toUpperCase();
//             if (decision1 == "SI") {
//                 alert ("El precio del " + item + " + iva es de $" + (precio * iva));
//                 console.log("Precio " + item + " $" + precio);
//                 console.log("Precio " + item +  " + iva $" + (precio * iva));
//                 numeroCuotas(cuota,1.21);
//             } else { 
//                 // no hago nada
//             }
//         }

//         while (opciones !== "ESC"){
//             switch (opciones){
//                 case "1":
//                     setCases('Pantalón',precioPantalon,5000);
//                     break;
//                 case "2":
//                     setCases('Camisa',precioCamisa,4500);
//                     break;
//                 case "3":
//                     setCases('Remera',precioRemera,3000);
//                     break;
//                 case "4":
//                     setCases('Zapatos',precioZapatos,8000);
//                     break;
//                 default:
//                     alert("Opción no encontrada");
//                     break;
//             }
//             opciones = prompt ("Ingresa el número correspondiente de lo que quieres comprar: \n 1-Pantalón \n 2-Camisa \n 3-Remera \n 4-Zapatos \n ESC-Salir").toUpperCase();
//         }

//         alert ("Esperamos vuelvas pronto!");
//         console.log ("<--------- Fin de Compra --------->");
//         break;


//     } else if (usuario === "ADMIN") {
//         // AREA ADMIN.
//         saludar();
//         console.log("Nombre de Perfil: " + usuario);
//         alert ("IMPORTANTE: Para el ingreso de productos será necesario completar todos los datos solicitados")
//         console.log("Catálogo existente:")
        

//CATÁLOGO

class Producto {
    constructor(id, tipo, color, precio, stock, img ) {
        this.id = id
        this.tipo = tipo
        this.color = color
        this.precio = precio
        this.stock = stock
        this.img = img

    }
}

const catalogo = [
    new Producto(1, 'Jean', 'Azul', 5000, 10,"https://via.placeholder.com/250"),
    new Producto(1, 'Jean', 'Celeste', 5000, 10,"https://via.placeholder.com/250"),
    new Producto(1, 'Jean', 'Negro', 5200, 5, "https://via.placeholder.com/250"),
    new Producto(1, 'Jean', 'Gris', 5200, 5, "https://via.placeholder.com/250"),
    new Producto(2, 'Camisa', 'Rayada', 4500, 10,"https://via.placeholder.com/250"),
    new Producto(2, 'Camisa', 'Lisa', 4500, 10,"https://via.placeholder.com/250"),
    new Producto(3, 'Remera', 'Roja', 3000, 35, "https://via.placeholder.com/250"),
    new Producto(3, 'Remera', 'Negra', 3200, 50, "https://via.placeholder.com/250"),
    new Producto(3, 'Remera', 'Azul', 3000, 35, "https://via.placeholder.com/250"),
    new Producto(3, 'Remera', 'Estampada', 3500, 20, "https://via.placeholder.com/250"),
    new Producto(3, 'Remera', 'Blanca', 3200, 50, "https://via.placeholder.com/250"),
    new Producto(3, 'Remera', 'Estampada', 3800, 10,"https://via.placeholder.com/250"),
]

const productosContenedor = document.querySelector ("#productos-contenedor")

catalogo.forEach ( (Producto) => {
    const div = document.createElement("div")

    div.innerHTML = `<img src=${Producto.img}/>
                    <h4>${Producto.tipo}</h4>
                    <p>Color: ${Producto.color}</p>
                    <p>Precio: $ ${Producto.precio}</p>
                    <p>Disponible: ${Producto.stock} en stock</p>
                    <hr>
                    `

    productosContenedor.append(div)
});


//         // FILTRADO POR TIPO Y PRECIO

//         const filtroProd = catalogo.filter ( (prod) => prod.tipo === "Remera" && prod.precio <= 3200)
//         console.log (filtroProd);

//         // BUSQUEDA EN STOCK

//         const existe = catalogo.some ( (prod) => prod.tipo === "Jean" && prod.color === "Azul")
//         console.log (existe);

//         while (true){
//             function agregarProducto() {
//                 let id = Number( prompt ('Ingrese ID del producto') )
//                 let tipo = prompt ('Ingrese el tipo de producto')
//                 let color = prompt ('Ingrese el color del producto')
//                 let precio = Number( prompt ('Ingrese precio del producto') )
//                 let stock = Number(prompt ('Ingrese el stock del producto') )
    
//                 catalogo.push( new Producto(id, tipo, color, precio, stock) )
//                 catalogo.forEach ( (prod) => {
//                     console.log (prod);
//                 });
//                 alert ("Se agregó exitosamente!");
//             }

//             let carga = prompt ("Cargar producto ahora? SI / NO").toUpperCase();

//             if (carga === "SI") {
                
//                 agregarProducto();
                            
//             } else {
//                 alert ("Carga de productos finalizada");
//                 break;
//             }

//         }
            
        
//     } else {
//         alert ("Error: Debes ingresar tu nombre!");
//     }  
           
//     usuario = prompt ("Ingrese tu nombre").toUpperCase();
// }


