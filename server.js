/* const productos = [
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
 */
// this example takes 2 seconds to run
/* const start = Date.now();
const date2 = new Date();


let horas = date2.getHours()
let minutos = (date2.getMinutes()<10?'0':'')+date2.getMinutes();
const zonaHoraria = date2.getTimezoneOffset()
console.log(`Es la hora${horas}`);
console.log(`Es la hora${minutos}`);

let tiempoCompleto = horas + ':' + minutos;

console.log(tiempoCompleto);

if (zonaHoraria >=  |  zonaHoraria <= 12 ) {
    console.log('Buenos dias!');
}else if (zonaHoraria >= 13 | zonaHoraria <= 19 ){
    console.log('Buenas tardes!');
}else{
    console.log('Buenas noches');
} */

// ENVIAR EN TEXTO
/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.JSON ([{ id: 102, product: 'pelota', category: 'deportes', price: 100},
             { id: 103, product: 'guantes', category: 'deportes', price: 100},
             { id: 104, product: '', category: 'pelotas', price: 100}
]);
})
app.get('/persona/matias', (req, res) => {
  res.json([{nombre:'matias', edad: 27, email:'matiassreus@gmail.com'}])
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})