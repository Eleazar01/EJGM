console.log("Introduce el primer número");

var x = parseInt(prompt("Introduce el primer número"));// parseInt solo coge numeros y anula el texto q entre, no admite decimales

console.log("Introduce el segundo número");

var y = Number(prompt("Introduce el segundo número"));// number, solo admite numeros, si le ponemos texto nos respondera que el dato no es valido

var resultado = 0;

resultado = x + y;
console.log(resultado);

resultado = x - y;
console.log(resultado);

resultado = x * y;
console.log(resultado);

resultado = x / y;
console.log(resultado); 