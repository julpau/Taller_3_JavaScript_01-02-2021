//6.	Realizar un programa que lea N números, calcule y escriba
//      la suma de los pares y el producto de los impares

let lista = [];
let pares = [];
let SumaPares = 0;
let impares = [];
let stop = 'N';
let ProductoImpares = 1;

while (stop=='N'){
    let numero = prompt(`Digite un número. \n Si desea detenerse, digite "S".`);
    if(numero=='S'){
        stop = numero
    }else{
        lista.push(numero);
        if(numero%2==0){
            pares.push(numero);
            SumaPares = SumaPares+parseInt(numero);
        }else{
            impares.push(numero);
            ProductoImpares = ProductoImpares*parseInt(numero);
        }
    }  
}

console.log(`Has digitado ${lista.length} datos, a saber: ${lista}`);
console.log(`Los datos ordenados se ven así: ${lista.sort()}`);
console.log(`Los numeros pares son: ${pares}`);
console.log(`La suma de los numeros pares es: ${SumaPares}`);
console.log(`Los numeros impares son: ${impares}`);
console.log(`El producto de los numeros impares es: ${ProductoImpares}`);

//lista.sort();
let menor = lista[0]
console.log(`El menor numero es ${lista[0]}`)
console.log(`El mayor numero es ${lista[lista.length - 1]}`)