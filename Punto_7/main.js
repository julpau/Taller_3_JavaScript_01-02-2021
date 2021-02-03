let numero = parseInt(prompt(`Por favor digite un numero entero positivo`));
let divisores = [];
let suma = 0;

for (var i = 0; i < numero; i++) {
    if(numero%i==0){
        divisores.push(i);
        suma+=i;
    };
 }
console.log(`Suma = ${suma}`)
 if(suma==numero){
     console.log(`Divisores ${divisores}, numero = ${numero} es un numero perfecto`);
}else{
    console.log(`Divisores ${divisores}, numero = ${numero} NO es un numero perfecto`);
}