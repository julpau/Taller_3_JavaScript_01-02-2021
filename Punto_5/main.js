let lista = [];
let numero = 1;
while (numero<=100){
    lista.push(numero*2);
    numero++;
}
console.log(`Se han calculado ${lista.length} números pares, a saber: ${lista}`);
console.log(`El primer numero es ${lista[0]}`);
console.log(`El último numero es ${lista[lista.length - 1]}`);