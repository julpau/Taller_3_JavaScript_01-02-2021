let numero1 = prompt('Por favor digite el primer número')
let numero2 = prompt('Por favor digite el segundo número')

console.log(`Digitaste ${numero1} y ${numero2}.`)
if(numero1==numero2){
    console.warn('Los datos son iguales');
}else if(numero1<numero2){
    console.log(`El número ${numero1} es menor que el número ${numero2}.`);
}else if(numero1>numero2){
    console.log(`El número ${numero1} es mayor que el número ${numero2}.`);
}else{
    console.warn(`Los datos digitados no son válidos.`);
}