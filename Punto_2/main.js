let lista = [];
let stop = 'N';

while (stop=='N'){
    numero = prompt(`Digite un número. \n Si desea detenerse, digite "S".`);
    if(numero=='S'){
        stop = numero
    }else{
        lista.push(numero);
    }  
}
console.log(`Has digitado ${lista.length} datos, a saber: ${lista}`);
console.log(`Los datos ordenados se ven así: ${lista.sort()}`);
//lista.sort();
let menor = lista[0]
console.log(`El menor numero es ${lista[0]}`)
console.log(`El mayor numero es ${lista[lista.length - 1]}`)