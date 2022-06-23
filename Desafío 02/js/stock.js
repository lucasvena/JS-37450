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

let catalogo = [
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


