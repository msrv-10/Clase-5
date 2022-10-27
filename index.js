const productos = [
    {id:1, nombre:"Escuadra", precio:323.45},
    {id:2, nombre:'Calculadora', precio: 234.56},
    {id:3, nombre:'Globo Terraqueo', precio: 45.67},
    {id:4, nombre:'Termo', precio: 456.78},
    {id:5, nombre:'Planta', precio: 67.89},
    {id:6, nombre:'Agenda', precio: 78.9}
]

let total = productos.reduce((acum, elem)=> acum+elem.precio, 0);
console.log(total);
let promedio = productos.reduce((acum, elem)=> acum+elem.precio/productos.length, 0);
console.log(promedio);

let productoMasCaro = productos.reduce((mayor, item) => mayor = mayor?.precio > item.precio ? mayor : item, {})
console.log(productoMasCaro);

let productoMasBarato = productos.reduce((menor, item) => menor = menor?.precio < item.precio ? menor : item, {})
console.log(productoMasBarato);


const fs = require('fs');
fs.promises.writeFile('./data.txt', 'inicio!\n').then(() => {console.log('salio bien!!!');})