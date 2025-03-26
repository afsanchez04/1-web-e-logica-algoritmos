
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Usa filter() para obtener los productos que cuesten menos de $100.
//console.log(productos.filter( pro => pro.precio<100) )

/* const productosMenor100 = array => array.filter(producto => producto.precio < 100);
console.log(productosMenor100(productos)); */

/* const productosMenosCien = productos.filter(a => a.precio < 100);
console.log(productosMenosCien) */

//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
//console.log( productos.sort((a, b) => a.nombre.localeCompare(b.nombre)) )  

// a - b  - 0 +


//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.

/* productos.nombre.forEach(a => a.sort()) */

/* const nombresProductos = array => array.map(producto => producto.nombre);
console.log(nombresProductos(productos)); */

const nuevoArreglo = productos.map(productos => productos.nombre)
console.log(nuevoArreglo)

//1. variables
const container = document.querySelector(".container")
console.log(container)

//2. función

function mostrarNombres (){

    for (let i = 0; i < nuevoArreglo.length; i++) {
        
       container.innerHTML += `<p style="color: blue">${nuevoArreglo[i]}</p>` 
        
    }


}

function mostrarPrecio () {
    for (let i = 0; i < productos.length; i++) {
        
        container.innerHTML += `<p>${productos[i].precio}</p>` 
         
     }
}

//3. llamado de función
mostrarNombres ()
mostrarPrecio ()