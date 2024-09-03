// Definición de precios de productos (en CLP)
const precios = {
    'Cerveza': 7990,
    'Vino': 10990,
    'Whisky': 18990,
    'Ron': 25890,
    'Tequila': 8700,
    'Gin': 6500,
    'Pisco': 7350
};

// Variable de estado del carrito
let carritoTotal = 0;
let productosEnCarrito = {};

// Función para agregar producto al carrito
function agregarProducto() {
    let producto = prompt("Introduce el nombre del producto (Cerveza, Vino, Whisky, Ron, Tequila, Gin, Pisco):");
    let cantidad = parseInt(prompt("Introduce la cantidad:"));

    // Validar el producto y la cantidad
    if (precios[producto] !== undefined && !isNaN(cantidad) && cantidad > 0) {
        if (productosEnCarrito[producto]) {
            productosEnCarrito[producto] += cantidad;
        } else {
            productosEnCarrito[producto] = cantidad;
        }
        carritoTotal += precios[producto] * cantidad;
        alert("Producto añadido: " + producto + " x " + cantidad + "\nTotal actual: " + carritoTotal + " CLP");
        console.log("Producto añadido: " + producto + " x " + cantidad + "\nTotal actual: " + carritoTotal + " CLP");
    } else {
        alert("Producto no válido o cantidad incorrecta.");
        console.log("Producto no válido o cantidad incorrecta.");
    }
}

// Función para borrar un producto del carrito
function borrarProducto() {
    let producto = prompt("Introduce el nombre del producto a borrar (Cerveza, Vino, Whisky, Ron, Tequila, Gin, Pisco):");

    if (productosEnCarrito[producto]) {
        let cantidad = parseInt(prompt("Introduce la cantidad a borrar:"));

        if (!isNaN(cantidad) && cantidad > 0 && cantidad <= productosEnCarrito[producto]) {
            carritoTotal -= precios[producto] * cantidad;
            productosEnCarrito[producto] -= cantidad;

            if (productosEnCarrito[producto] <= 0) {
                delete productosEnCarrito[producto];
            }
            alert("Producto borrado: " + producto + " x " + cantidad + "\nTotal actual: " + carritoTotal + " CLP");
            console.log("Producto borrado: " + producto + " x " + cantidad + "\nTotal actual: " + carritoTotal + " CLP");
        } else {
            alert("Cantidad incorrecta o mayor a la cantidad en el carrito.");
            console.log("Cantidad incorrecta o mayor a la cantidad en el carrito.");
        }
    } else {
        alert("El producto no está en el carrito.");
        console.log("El producto no está en el carrito.");
    }
}

// Función para reiniciar el carrito
function reiniciarCarrito() {
    carritoTotal = 0;
    productosEnCarrito = {};
    alert("Productos eliminados. Total del carrito es ahora 0 CLP.");
    console.log("Productos eliminados. Total del carrito es ahora 0 CLP.");
}

// Función para mostrar el total del carrito
function mostrarTotal() {
    alert('Total del carrito: ' + carritoTotal + ' CLP');
    console.log('Total del carrito: ' + carritoTotal + ' CLP');
}

// Función principal para manejar la compra
function manejarCompra() {
    let continuar = true;
    while (continuar) {
        let accion = prompt("¿Qué deseas hacer? \n1. Agregar producto \n2. Borrar producto \n3. Ver total \n4. Reiniciar carrito \n5. Salir");

        if (accion === '1') {
            agregarProducto();
        } else if (accion === '2') {
            borrarProducto();
        } else if (accion === '3') {
            mostrarTotal();
        } else if (accion === '4') {
            reiniciarCarrito();
        } else if (accion === '5') {
            alert("Gracias por usar el sistema de carrito.");
            console.log("Gracias por usar el sistema de carrito.");
            continuar = false;
        } else {
            alert("Opción no válida. Por favor elige una opción correcta.");
            console.log("Opción no válida. Por favor elige una opción correcta.");
        }
    }
}